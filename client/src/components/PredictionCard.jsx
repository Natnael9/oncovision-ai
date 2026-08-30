import React from 'react';
import { AlertTriangle, CheckCircle2, ShieldAlert, BarChart3, ArrowUpRight, Activity } from 'lucide-react';

const PredictionCard = ({ result }) => {
  if (!result) return null;

  const isMalignant = result.prediction === 'Malignant';
  const benignConf = Math.round((result.confidence?.Benign || 0) * 1000) / 10;
  const malignantConf = Math.round((result.confidence?.Malignant || 0) * 1000) / 10;

  return (
    <div className={`rounded-2xl p-6 sm:p-8 transition-all duration-500 bg-bio-card border ${
      isMalignant
        ? 'border-rose-500/50 shadow-2xl shadow-rose-950/40 bg-gradient-to-b from-[#1c3137] to-rose-950/30'
        : 'border-[#00e5ce]/50 glow-teal bg-gradient-to-b from-[#1c3137] to-[#0d4044]/30'
    }`}>
      
      {/* 1. Alert Banner */}
      <div className={`rounded-xl p-5 mb-6 flex items-start sm:items-center space-x-4 border ${
        isMalignant
          ? 'bg-rose-500/15 border-rose-500/40 text-rose-100'
          : 'bg-[#00e5ce]/15 border-[#00e5ce]/40 text-[#00e5ce]'
      }`}>
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
          isMalignant ? 'bg-rose-500/25 text-rose-300' : 'bg-[#00e5ce]/25 text-[#00e5ce]'
        }`}>
          {isMalignant ? <AlertTriangle className="w-7 h-7" /> : <CheckCircle2 className="w-7 h-7" />}
        </div>
        <div>
          <span className={`text-xs font-display font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full ${
            isMalignant ? 'bg-rose-500/25 text-rose-200 border border-rose-500/40' : 'bg-[#00e5ce]/25 text-[#00e5ce] border border-[#00e5ce]/40'
          }`}>
            Diagnostic Prediction Output
          </span>
          <h3 className="font-display text-xl sm:text-2xl font-extrabold mt-1 text-white">
            {isMalignant ? 'High Probability of Malignancy Detected' : 'Morphological Patterns Indicate Benign Tissue'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 mt-1">
            {isMalignant
              ? 'Nuclear morphometrics exhibit key hallmarks of invasive carcinoma (elevated perimeter, concave irregularities, and large nuclear volume).'
              : 'Cellular contours demonstrate uniform nuclear size, smooth boundaries, and non-proliferative features consistent with benign tissue.'}
          </p>
        </div>
      </div>

      {/* 2. Confidence Distribution Bar */}
      <div className="bg-[#0f1d21] rounded-xl p-5 border border-slate-700/80 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-[#00e5ce]" />
            <h4 className="font-display font-bold text-slate-200 text-sm">Model Ensemble Confidence Distribution</h4>
          </div>
          <span className="text-xs text-slate-300 font-mono">100 Trees Random Forest</span>
        </div>

        <div className="w-full h-5 bg-[#14252a] rounded-full overflow-hidden flex p-0.5 border border-slate-700">
          <div
            style={{ width: `${benignConf}%` }}
            className="h-full bg-gradient-to-r from-[#00bfa5] to-[#00e5ce] rounded-l-full transition-all duration-700 flex items-center justify-end pr-2"
          >
            {benignConf > 15 && <span className="text-[10px] font-bold text-slate-950">{benignConf}%</span>}
          </div>
          <div
            style={{ width: `${malignantConf}%` }}
            className="h-full bg-gradient-to-r from-rose-500 to-rose-700 rounded-r-full transition-all duration-700 flex items-center justify-start pl-2"
          >
            {malignantConf > 15 && <span className="text-[10px] font-bold text-white">{malignantConf}%</span>}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-[#0d4044]/50 border border-[#00e5ce]/30 rounded-lg p-3 flex items-center justify-between">
            <div>
              <span className="text-xs text-[#00e5ce] font-semibold uppercase">Benign Probability</span>
              <p className="text-2xl font-display font-extrabold text-white">{benignConf}%</p>
            </div>
            <div className="w-3 h-3 rounded-full bg-[#00e5ce] animate-pulse"></div>
          </div>
          
          <div className="bg-rose-950/40 border border-rose-500/30 rounded-lg p-3 flex items-center justify-between">
            <div>
              <span className="text-xs text-rose-300 font-semibold uppercase">Malignant Probability</span>
              <p className="text-2xl font-display font-extrabold text-rose-200">{malignantConf}%</p>
            </div>
            <div className="w-3 h-3 rounded-full bg-rose-500 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* 3. Risk Factor Analysis Callouts */}
      {result.riskFactors && result.riskFactors.length > 0 ? (
        <div className="bg-[#0f1d21] rounded-xl p-5 border border-slate-700/80">
          <div className="flex items-center space-x-2 mb-3">
            <ShieldAlert className="w-5 h-5 text-rose-400" />
            <h4 className="font-display font-bold text-slate-200 text-sm">Key Contributing Risk Factors (Extreme Morphometrics)</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {result.riskFactors.map((rf, idx) => (
              <div key={idx} className="bg-[#14252a] border border-rose-500/30 rounded-lg p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-rose-300 capitalize flex items-center gap-1">
                    <ArrowUpRight className="w-3.5 h-3.5 text-rose-400" />
                    {rf.feature}
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-rose-500/25 text-rose-200 font-bold">
                    {rf.value}
                  </span>
                </div>
                <p className="text-xs text-slate-300">{rf.description}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-[#0f1d21] rounded-xl p-4 border border-slate-700/80 text-center">
          <p className="text-xs text-[#00e5ce] font-medium flex items-center justify-center gap-1.5">
            <Activity className="w-4 h-4 text-[#00e5ce]" />
            All 30 morphometric attributes remain within safe benign baseline thresholds.
          </p>
        </div>
      )}

    </div>
  );
};

export default PredictionCard;
