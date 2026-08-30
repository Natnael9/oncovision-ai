import React, { useState, useEffect } from 'react';
import { Cpu, RefreshCw, AlertCircle, CheckCircle2, Sparkles, Loader2, Play } from 'lucide-react';
import FeatureGroup from '../components/FeatureGroup';
import PredictionCard from '../components/PredictionCard';

const MALIGNANT_PRESET = [
  17.99, 10.38, 122.8, 1001.0, 0.1184, 0.2776, 0.3001, 0.1471, 0.2419, 0.07871,
  1.095, 0.9053, 8.589, 153.4, 0.006399, 0.04904, 0.05373, 0.01587, 0.03003, 0.006193,
  25.38, 17.33, 184.6, 2019.0, 0.1622, 0.6656, 0.7119, 0.2654, 0.4601, 0.1189
];

const BENIGN_PRESET = [
  12.32, 12.39, 78.83, 464.1, 0.1028, 0.06981, 0.03987, 0.037, 0.1959, 0.05955,
  0.236, 0.6656, 1.67, 17.43, 0.008045, 0.0118, 0.01683, 0.01241, 0.01924, 0.002248,
  13.5, 15.64, 86.97, 549.1, 0.1385, 0.1266, 0.1242, 0.09391, 0.2827, 0.06771
];

const PredictPage = () => {
  const [features, setFeatures] = useState(Array(30).fill(''));
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // Default auto-load benign preset on initial render for smooth UX
  useEffect(() => {
    handleLoadBenign();
  }, []);

  const handleInputChange = (index, value) => {
    const updated = [...features];
    updated[index] = value;
    setFeatures(updated);
  };

  const handleLoadMalignant = () => {
    setFeatures(MALIGNANT_PRESET);
    setError(null);
  };

  const handleLoadBenign = () => {
    setFeatures(BENIGN_PRESET);
    setError(null);
  };

  const handleReset = () => {
    setFeatures(Array(30).fill(''));
    setResult(null);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Validate inputs
    const numericFeatures = features.map((f) => parseFloat(f));
    const hasNaN = numericFeatures.some((val) => isNaN(val));

    if (hasNaN) {
      setError('Please provide valid numerical values for all 30 nuclear morphometric parameters.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ features: numericFeatures }),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || 'Failed to compute diagnostic inference');
      }

      setResult(data);
    } catch (err) {
      console.error('Prediction API Error:', err);
      setError(err.message || 'Error connecting to Express Python inference bridge');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header & Presets Bar */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Interactive Pathology Laboratory</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              Diagnostic Classifier Predictor
            </h1>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              Input the 30 FNA nuclear morphometric metrics below or use quick-load sample presets to evaluate Malignant vs. Benign probabilities in real time.
            </p>
          </div>

          {/* Quick-Load Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleLoadMalignant}
              className="px-4 py-2.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 hover:bg-rose-500/30 text-xs font-bold transition-all flex items-center space-x-2 shadow-sm"
            >
              <AlertCircle className="w-4 h-4 text-rose-400" />
              <span>Load Malignant Sample</span>
            </button>

            <button
              type="button"
              onClick={handleLoadBenign}
              className="px-4 py-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/30 text-xs font-bold transition-all flex items-center space-x-2 shadow-sm"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Load Benign Sample</span>
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-700 text-xs font-semibold transition-all flex items-center space-x-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Form</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Diagnostic Form */}
      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* 30-Feature Input Matrix */}
        <FeatureGroup features={features} onChange={handleInputChange} />

        {/* Error Alert Message */}
        {error && (
          <div className="rounded-xl p-4 bg-rose-950/60 border border-rose-500/50 text-rose-200 text-sm flex items-center space-x-3">
            <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Action Trigger Button */}
        <div className="flex justify-center pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto px-12 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-extrabold text-base hover:from-cyan-400 hover:to-indigo-500 transition-all shadow-xl shadow-cyan-500/20 disabled:opacity-50 flex items-center justify-center space-x-3 cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="w-6 h-6 animate-spin text-white" />
                <span>Executing Python Inference Bridge...</span>
              </>
            ) : (
              <>
                <Play className="w-5 h-5 fill-current" />
                <span>Run Diagnostic Analysis</span>
              </>
            )}
          </button>
        </div>

      </form>

      {/* Results Display Card */}
      {result && (
        <div className="pt-6">
          <PredictionCard result={result} />
        </div>
      )}

    </div>
  );
};

export default PredictPage;
