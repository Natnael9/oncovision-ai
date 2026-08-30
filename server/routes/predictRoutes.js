const express = require('express');
const { spawn } = require('child_process');
const path = require('path');

const router = express.Router();

// Sample Data Pre-sets
const SAMPLES = {
  malignant: {
    label: 'Malignant Tissue Sample (ID: 842302)',
    features: [
      17.99, 10.38, 122.8, 1001.0, 0.1184, 0.2776, 0.3001, 0.1471, 0.2419, 0.07871,
      1.095, 0.9053, 8.589, 153.4, 0.006399, 0.04904, 0.05373, 0.01587, 0.03003, 0.006193,
      25.38, 17.33, 184.6, 2019.0, 0.1622, 0.6656, 0.7119, 0.2654, 0.4601, 0.1189
    ]
  },
  benign: {
    label: 'Benign Tissue Sample (ID: 8510426)',
    features: [
      12.32, 12.39, 78.83, 464.1, 0.1028, 0.06981, 0.03987, 0.037, 0.1959, 0.05955,
      0.236, 0.6656, 1.67, 17.43, 0.008045, 0.0118, 0.01683, 0.01241, 0.01924, 0.002248,
      13.5, 15.64, 86.97, 549.1, 0.1385, 0.1266, 0.1242, 0.09391, 0.2827, 0.06771
    ]
  }
};

const FEATURE_NAMES = [
  "mean radius", "mean texture", "mean perimeter", "mean area", "mean smoothness",
  "mean compactness", "mean concavity", "mean concave points", "mean symmetry", "mean fractal dimension",
  "radius error", "texture error", "perimeter error", "area error", "smoothness error",
  "compactness error", "concavity error", "concave points error", "symmetry error", "fractal dimension error",
  "worst radius", "worst texture", "worst perimeter", "worst area", "worst smoothness",
  "worst compactness", "worst concavity", "worst concave points", "worst symmetry", "worst fractal dimension"
];

// Helper to determine risk factors based on threshold deviations
function analyzeRiskFactors(features) {
  const riskFactors = [];
  
  // Worst area (index 23) > 880
  if (features[23] > 880) {
    riskFactors.push({
      feature: "worst area",
      value: features[23],
      threshold: 880,
      description: `Elevated nuclear area (${features[23]} µm²) indicates cellular hypertrophy and unchecked proliferation.`
    });
  }
  
  // Worst concave points (index 27) > 0.14
  if (features[27] > 0.14) {
    riskFactors.push({
      feature: "worst concave points",
      value: features[27],
      threshold: 0.14,
      description: `High density of concave indentations (${features[27]}) signals severe nuclear membrane irregularity.`
    });
  }

  // Worst radius (index 20) > 17.5
  if (features[20] > 17.5) {
    riskFactors.push({
      feature: "worst radius",
      value: features[20],
      threshold: 17.5,
      description: `Enlarged nuclear radius (${features[20]} µm) exceeds typical benign dimensions.`
    });
  }

  // Mean concave points (index 7) > 0.08
  if (features[7] > 0.08) {
    riskFactors.push({
      feature: "mean concave points",
      value: features[7],
      threshold: 0.08,
      description: `Widespread contour concavity across cellular clusters.`
    });
  }

  return riskFactors;
}

// POST /api/predict
router.post('/predict', (req, res) => {
  let { features } = req.body;

  if (!features) {
    return res.status(400).json({ error: "Missing 'features' in request body" });
  }

  if (typeof features === 'object' && !Array.isArray(features)) {
    features = FEATURE_NAMES.map(name => parseFloat(features[name] || 0));
  }

  if (!Array.isArray(features) || features.length !== 30) {
    return res.status(400).json({ error: `Expected 30 features array, received ${Array.isArray(features) ? features.length : typeof features}` });
  }

  const projectRoot = path.resolve(__dirname, '../../');
  const venvPython = path.join(projectRoot, 'models', 'venv', 'bin', 'python');
  const scriptPath = path.join(projectRoot, 'models', 'predict.py');

  const pythonExecutable = require('fs').existsSync(venvPython) ? venvPython : 'python3';

  const pyProcess = spawn(pythonExecutable, [scriptPath, JSON.stringify(features)]);

  let stdoutData = '';
  let stderrData = '';

  pyProcess.stdout.on('data', (data) => {
    stdoutData += data.toString();
  });

  pyProcess.stderr.on('data', (data) => {
    stderrData += data.toString();
  });

  pyProcess.on('close', (code) => {
    if (code !== 0) {
      console.error("Python inference error:", stderrData);
      return res.status(500).json({ error: "Inference bridge execution failed", details: stderrData });
    }

    try {
      const result = JSON.parse(stdoutData.trim());
      
      if (result.error) {
        return res.status(400).json({ error: result.error });
      }

      const riskFactors = analyzeRiskFactors(features);

      return res.json({
        ...result,
        riskFactors,
        timestamp: new Date().toISOString()
      });
    } catch (parseError) {
      console.error("JSON parse error from Python output:", stdoutData);
      return res.status(500).json({ error: "Invalid JSON response from inference script", raw: stdoutData });
    }
  });
});

// GET /api/samples
router.get('/samples', (req, res) => {
  res.json({
    featureNames: FEATURE_NAMES,
    samples: SAMPLES
  });
});

// GET /api/model-stats
router.get('/model-stats', (req, res) => {
  res.json({
    modelName: "Random Forest Classifier",
    dataset: "Wisconsin Diagnostic Breast Cancer (WDBC)",
    instances: 569,
    featuresCount: 30,
    classDistribution: {
      benign: { count: 357, percentage: 62.7 },
      malignant: { count: 212, percentage: 37.3 }
    },
    benchmarks: [
      { model: "Random Forest (Selected)", testAccuracy: 97.37, cvAccuracy: "95.61% (±2.28%)", rocAuc: 0.99, selected: true },
      { model: "Support Vector Machine (RBF)", testAccuracy: 97.37, cvAccuracy: "96.49% (±1.85%)", rocAuc: 0.98, selected: false },
      { model: "Logistic Regression (L2)", testAccuracy: 96.49, cvAccuracy: "95.09% (±2.41%)", rocAuc: 0.97, selected: false }
    ],
    featureImportance: [
      { feature: "worst area", importance: 15.14 },
      { feature: "worst concave points", importance: 12.65 },
      { feature: "worst radius", importance: 9.35 },
      { feature: "worst perimeter", importance: 8.36 },
      { feature: "mean concave points", importance: 8.11 },
      { feature: "mean perimeter", importance: 7.71 },
      { feature: "mean radius", importance: 6.20 },
      { feature: "mean concavity", importance: 5.08 },
      { feature: "mean area", importance: 4.59 },
      { feature: "worst concavity", importance: 3.00 }
    ]
  });
});

module.exports = router;
