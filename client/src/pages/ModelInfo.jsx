import React, { useState, useEffect } from 'react';
import { FileText, Award, BarChart2, ShieldAlert, CheckCircle2, Database, Info } from 'lucide-react';
import confusionMatrixImg from '../assets/confusion-matrix.svg';
import rocCurveImg from '../assets/roc-curve.svg';

const ModelInfo = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch('/api/model-stats')
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error('Failed to load model stats:', err));
  }, []);

  const featureImportanceList = stats?.featureImportance || [
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
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Header Banner */}
      <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
          <FileText className="w-4 h-4 text-cyan-400" />
          <span>Machine Learning Specifications</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          Dataset Architecture &amp; Benchmark Performance
        </h1>
        <p className="text-slate-300 max-w-3xl text-base leading-relaxed">
          Comprehensive breakdown of the Wisconsin Diagnostic Breast Cancer (WDBC) dataset, machine learning classifier comparisons, Gini feature importances, and evaluation metrics.
        </p>
      </div>

      {/* Dataset Summary Card */}
      <div className="glass-card rounded-3xl p-8 border border-slate-800 space-y-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-white">Dataset Summary Specs</h2>
            <p className="text-xs text-slate-400">University of Wisconsin Clinical Sciences Center (Dr. William H. Wolberg, W. Nick Street, Olvi L. Mangasarian)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-950/80 rounded-2xl p-5 border border-slate-800 space-y-1">
            <span className="text-xs text-slate-400 font-semibold">Total Sample Count</span>
            <p className="text-3xl font-extrabold text-white">569</p>
            <p className="text-[11px] text-cyan-400">Digitized FNA instances</p>
          </div>

          <div className="bg-slate-950/80 rounded-2xl p-5 border border-slate-800 space-y-1">
            <span className="text-xs text-slate-400 font-semibold">Class Balance</span>
            <p className="text-3xl font-extrabold text-emerald-400">357 B / 212 M</p>
            <p className="text-[11px] text-slate-400">62.7% Benign vs. 37.3% Malignant</p>
          </div>

          <div className="bg-slate-950/80 rounded-2xl p-5 border border-slate-800 space-y-1">
            <span className="text-xs text-slate-400 font-semibold">Input Attributes</span>
            <p className="text-3xl font-extrabold text-cyan-400">30</p>
            <p className="text-[11px] text-slate-400">Real-valued continuous features</p>
          </div>

          <div className="bg-slate-950/80 rounded-2xl p-5 border border-slate-800 space-y-1">
            <span className="text-xs text-slate-400 font-semibold">Selected Classifier</span>
            <p className="text-xl font-extrabold text-cyan-300">Random Forest</p>
            <p className="text-[11px] text-slate-400">100 Estimators Ensemble</p>
          </div>
        </div>
      </div>

      {/* Model Comparison Benchmark Table */}
      <div className="glass-card rounded-3xl p-8 border border-slate-800 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Award className="w-6 h-6 text-cyan-400" />
            <h2 className="text-2xl font-extrabold text-white">Model Comparison &amp; Benchmark Metrics</h2>
          </div>
          <span className="text-xs text-slate-400 font-mono hidden sm:block">Test Set N=114 (20% Split)</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-950/90 text-xs text-slate-400 uppercase font-semibold border-b border-slate-800">
              <tr>
                <th className="py-4 px-6">Algorithm Model</th>
                <th className="py-4 px-6">Test Accuracy</th>
                <th className="py-4 px-6">5-Fold CV Accuracy</th>
                <th className="py-4 px-6">ROC-AUC Score</th>
                <th className="py-4 px-6">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 bg-slate-900/40">
              
              <tr className="bg-cyan-500/10 border-l-4 border-l-cyan-400">
                <td className="py-4 px-6 font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  Random Forest Classifier (Selected)
                </td>
                <td className="py-4 px-6 font-mono font-extrabold text-cyan-400 text-base">97.37%</td>
                <td className="py-4 px-6 font-mono text-slate-200">95.61% (±2.28%)</td>
                <td className="py-4 px-6 font-mono font-bold text-emerald-400">0.99</td>
                <td className="py-4 px-6">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-bold text-xs">Production Model</span>
                </td>
              </tr>

              <tr>
                <td className="py-4 px-6 font-semibold text-slate-200">Support Vector Classifier (RBF Kernel)</td>
                <td className="py-4 px-6 font-mono text-slate-300">97.37%</td>
                <td className="py-4 px-6 font-mono text-slate-400">96.49% (±1.85%)</td>
                <td className="py-4 px-6 font-mono text-slate-300">0.98</td>
                <td className="py-4 px-6">
                  <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-400 text-xs font-medium">Benchmarked</span>
                </td>
              </tr>

              <tr>
                <td className="py-4 px-6 font-semibold text-slate-200">Logistic Regression (L2 Regularization)</td>
                <td className="py-4 px-6 font-mono text-slate-300">96.49%</td>
                <td className="py-4 px-6 font-mono text-slate-400">95.09% (±2.41%)</td>
                <td className="py-4 px-6 font-mono text-slate-300">0.97</td>
                <td className="py-4 px-6">
                  <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-400 text-xs font-medium">Benchmarked</span>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

      {/* Top 10 Feature Importance Visualization */}
      <div className="glass-card rounded-3xl p-8 border border-slate-800 space-y-6">
        <div className="flex items-center space-x-3">
          <BarChart2 className="w-6 h-6 text-cyan-400" />
          <div>
            <h2 className="text-2xl font-extrabold text-white">Top 10 Feature Importance (Gini Score)</h2>
            <p className="text-xs text-slate-400">Relative contribution of nuclear morphometrics to Random Forest decision splits</p>
          </div>
        </div>

        <div className="space-y-4">
          {featureImportanceList.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                <span className="text-slate-200 capitalize flex items-center gap-2">
                  <span className="w-5 h-5 rounded bg-slate-800 text-cyan-400 flex items-center justify-center text-[10px] font-bold">#{idx + 1}</span>
                  {item.feature}
                </span>
                <span className="font-mono text-cyan-400 font-extrabold">{item.importance}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
                <div
                  style={{ width: `${(item.importance / 16) * 100}%` }}
                  className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full transition-all duration-700"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Model Evaluation Graphics Side-by-Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Confusion Matrix */}
        <div className="glass-card rounded-3xl p-6 border border-slate-800 space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            Confusion Matrix (Test Set N=114)
          </h3>
          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 p-2">
            <img src={confusionMatrixImg} alt="Confusion Matrix Graphic" className="w-full h-auto rounded-xl" />
          </div>
        </div>

        {/* ROC Curve */}
        <div className="glass-card rounded-3xl p-6 border border-slate-800 space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            ROC Curve (AUC = 0.99)
          </h3>
          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 p-2">
            <img src={rocCurveImg} alt="ROC Curve Graphic" className="w-full h-auto rounded-xl" />
          </div>
        </div>

      </div>

      {/* Mandatory Clinical Research Disclaimer */}
      <div className="rounded-2xl p-6 bg-slate-900 border border-amber-500/30 flex items-start space-x-4">
        <ShieldAlert className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="font-bold text-amber-300 text-sm uppercase tracking-wider">Mandatory Clinical Research Disclaimer</h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            This software, trained machine learning model, and diagnostic prediction engine are strictly intended for academic research, bench-testing demonstration, and scientific exploratory analysis. They are not cleared, certified, or intended for direct standalone clinical diagnosis or prescribing medical treatments.
          </p>
        </div>
      </div>

    </div>
  );
};

export default ModelInfo;
