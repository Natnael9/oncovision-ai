import React, { useState, useEffect } from 'react';
import { FileText, Award, BarChart2, ShieldAlert, CheckCircle2, Database } from 'lucide-react';
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 font-sans">
      
      {/* Header Banner */}
      <div className="bg-bio-card rounded-3xl p-8 sm:p-12 border border-[#00e5ce]/20 space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#00e5ce]/10 border border-[#00e5ce]/30 text-[#00e5ce] text-xs font-display font-semibold uppercase tracking-wider">
          <FileText className="w-4 h-4 text-[#00e5ce]" />
          <span>Machine Learning Specifications</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white">
          Dataset Architecture &amp; Benchmark Performance
        </h1>
        <p className="text-slate-300 max-w-3xl text-base leading-relaxed">
          Comprehensive breakdown of the Wisconsin Diagnostic Breast Cancer (WDBC) dataset, machine learning classifier comparisons, Gini feature importances, and evaluation metrics.
        </p>
      </div>

      {/* Dataset Summary Specs */}
      <div className="bg-bio-card rounded-3xl p-8 border border-[#00e5ce]/15 space-y-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-[#042a2d] text-[#00e5ce] flex items-center justify-center font-bold border border-[#00e5ce]/30">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-display text-2xl font-extrabold text-white">Dataset Summary Specs</h2>
            <p className="text-xs text-slate-400">University of Wisconsin Clinical Sciences Center (Dr. William H. Wolberg, W. Nick Street, Olvi L. Mangasarian)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#050b0c] rounded-2xl p-5 border border-slate-800 space-y-1">
            <span className="text-xs text-slate-400 font-semibold">Total Sample Count</span>
            <p className="font-display text-3xl font-extrabold text-white">569</p>
            <p className="text-[11px] text-[#00e5ce]">Digitized FNA instances</p>
          </div>

          <div className="bg-[#050b0c] rounded-2xl p-5 border border-slate-800 space-y-1">
            <span className="text-xs text-slate-400 font-semibold">Class Balance</span>
            <p className="font-display text-3xl font-extrabold text-emerald-400">357 B / 212 M</p>
            <p className="text-[11px] text-slate-400">62.7% Benign vs. 37.3% Malignant</p>
          </div>

          <div className="bg-[#050b0c] rounded-2xl p-5 border border-slate-800 space-y-1">
            <span className="text-xs text-slate-400 font-semibold">Input Attributes</span>
            <p className="font-display text-3xl font-extrabold text-[#00e5ce]">30</p>
            <p className="text-[11px] text-slate-400">Real-valued continuous features</p>
          </div>

          <div className="bg-[#050b0c] rounded-2xl p-5 border border-slate-800 space-y-1">
            <span className="text-xs text-slate-400 font-semibold">Selected Classifier</span>
            <p className="font-display text-xl font-extrabold text-[#00e5ce]">Random Forest</p>
            <p className="text-[11px] text-slate-400">100 Estimators Ensemble</p>
          </div>
        </div>
      </div>

      {/* Model Comparison Table */}
      <div className="bg-bio-card rounded-3xl p-8 border border-[#00e5ce]/15 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Award className="w-6 h-6 text-[#00e5ce]" />
            <h2 className="font-display text-2xl font-extrabold text-white">Model Comparison &amp; Benchmark Metrics</h2>
          </div>
          <span className="text-xs text-slate-400 font-mono hidden sm:block">Test Set N=114 (20% Split)</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-[#050b0c] text-xs text-slate-400 uppercase font-display font-semibold border-b border-slate-800">
              <tr>
                <th className="py-4 px-6">Algorithm Model</th>
                <th className="py-4 px-6">Test Accuracy</th>
                <th className="py-4 px-6">5-Fold CV Accuracy</th>
                <th className="py-4 px-6">ROC-AUC Score</th>
                <th className="py-4 px-6">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 bg-[#091214]/60">
              
              <tr className="bg-[#042a2d]/40 border-l-4 border-l-[#00e5ce]">
                <td className="py-4 px-6 font-display font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00e5ce]" />
                  Random Forest Classifier (Selected)
                </td>
                <td className="py-4 px-6 font-mono font-extrabold text-[#00e5ce] text-base">97.37%</td>
                <td className="py-4 px-6 font-mono text-slate-200">95.61% (±2.28%)</td>
                <td className="py-4 px-6 font-mono font-bold text-emerald-400">0.99</td>
                <td className="py-4 px-6">
                  <span className="px-3 py-1 rounded-full bg-[#00e5ce]/20 text-[#00e5ce] font-display font-bold text-xs">Production Model</span>
                </td>
              </tr>

              <tr>
                <td className="py-4 px-6 font-semibold text-slate-200">Support Vector Classifier (RBF Kernel)</td>
                <td className="py-4 px-6 font-mono text-slate-300">97.37%</td>
                <td className="py-4 px-6 font-mono text-slate-400">96.49% (±1.85%)</td>
                <td className="py-4 px-6 font-mono text-slate-300">0.98</td>
                <td className="py-4 px-6">
                  <span className="px-2.5 py-1 rounded bg-[#050b0c] text-slate-400 text-xs font-medium">Benchmarked</span>
                </td>
              </tr>

              <tr>
                <td className="py-4 px-6 font-semibold text-slate-200">Logistic Regression (L2 Regularization)</td>
                <td className="py-4 px-6 font-mono text-slate-300">96.49%</td>
                <td className="py-4 px-6 font-mono text-slate-400">95.09% (±2.41%)</td>
                <td className="py-4 px-6 font-mono text-slate-300">0.97</td>
                <td className="py-4 px-6">
                  <span className="px-2.5 py-1 rounded bg-[#050b0c] text-slate-400 text-xs font-medium">Benchmarked</span>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

      {/* Feature Importance Chart */}
      <div className="bg-bio-card rounded-3xl p-8 border border-[#00e5ce]/15 space-y-6">
        <div className="flex items-center space-x-3">
          <BarChart2 className="w-6 h-6 text-[#00e5ce]" />
          <div>
            <h2 className="font-display text-2xl font-extrabold text-white">Top 10 Feature Importance (Gini Score)</h2>
            <p className="text-xs text-slate-400">Relative contribution of nuclear morphometrics to Random Forest decision splits</p>
          </div>
        </div>

        <div className="space-y-4">
          {featureImportanceList.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                <span className="text-slate-200 capitalize flex items-center gap-2">
                  <span className="w-5 h-5 rounded bg-[#050b0c] text-[#00e5ce] flex items-center justify-center text-[10px] font-bold">#{idx + 1}</span>
                  {item.feature}
                </span>
                <span className="font-mono text-[#00e5ce] font-extrabold">{item.importance}%</span>
              </div>

              <div className="w-full h-3 bg-[#050b0c] rounded-full overflow-hidden p-0.5 border border-slate-800">
                <div
                  style={{ width: `${(item.importance / 16) * 100}%` }}
                  className="h-full bg-gradient-to-r from-[#00bfa5] to-[#00e5ce] rounded-full transition-all duration-700"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Model Evaluation Graphics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-bio-card rounded-3xl p-6 border border-[#00e5ce]/15 space-y-4">
          <h3 className="font-display text-xl font-bold text-white">Confusion Matrix (Test Set N=114)</h3>
          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-[#050b0c] p-2">
            <img src={confusionMatrixImg} alt="Confusion Matrix Graphic" className="w-full h-auto rounded-xl" />
          </div>
        </div>

        <div className="bg-bio-card rounded-3xl p-6 border border-[#00e5ce]/15 space-y-4">
          <h3 className="font-display text-xl font-bold text-white">ROC Curve (AUC = 0.99)</h3>
          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-[#050b0c] p-2">
            <img src={rocCurveImg} alt="ROC Curve Graphic" className="w-full h-auto rounded-xl" />
          </div>
        </div>
      </div>

      {/* Mandatory Clinical Research Disclaimer */}
      <div className="rounded-2xl p-6 bg-[#050b0c] border border-[#00e5ce]/30 flex items-start space-x-4">
        <ShieldAlert className="w-6 h-6 text-[#00e5ce] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="font-display font-bold text-[#00e5ce] text-sm uppercase tracking-wider">Mandatory Research Disclaimer</h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            This software, trained machine learning model, and diagnostic prediction engine are strictly intended for academic research, bench-testing demonstration, and scientific exploratory analysis. They are not cleared, certified, or intended for direct standalone clinical diagnosis or prescribing medical treatments.
          </p>
        </div>
      </div>

    </div>
  );
};

export default ModelInfo;
