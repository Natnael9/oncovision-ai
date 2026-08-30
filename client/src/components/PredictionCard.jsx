import React from 'react';
import { AlertTriangle, CheckCircle2, ShieldAlert, BarChart3, ArrowUpRight, Activity } from 'lucide-react';

const PredictionCard = ({ result }) => {
  if (!result) return null;

  const isMalignant = result.prediction === 'Malignant';
  const benignConf = Math.round((result.confidence?.Benign || 0) * 1000) / 10;
  const malignantConf = Math.round((result.confidence?.Malignant || 0) * 1000) / 10;

  return (
    <div className={`rounded-2xl p-6 sm:p-8 transition-all duration-300 bg-bio-card border ${
      isMalignant
        ? 'border-rose-500/60 bg-gradient-to-b from-[var(--bg-card-solid)] to-rose-950/30'
        : 'border-[var(--border-teal-strong)] bg-gradient-to-b from-[var(--bg-card-solid)] to-[var(--accent-teal-dark)]/30'
    }`}>
      
      {/* 1. Alert Banner */}
      <div className={`rounded-xl p-5 mb-6 flex items-start sm:items-center space-x-4 border ${
        isMalignant
          ? 'bg-rose-500/15 border-rose-500/40 text-rose-100'
          : 'bg-[var(--accent-teal)]/15 border-[var(--border-teal-strong)] text-[var(--accent-teal)]'
      }`}>
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
          isMalignant ? 'bg-rose-500/25 text-rose-300' : 'bg-[var(--accent-teal)]/25 text-[var(--accent-teal)]'
        }`}>
          {isMalignant ? <AlertTriangle className="w-7 h-7" /> : <CheckCircle2 className="w-7 h-7" />}
        </div>
        <div>
          <span className={`text-xs font-display font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full ${
            isMalignant ? 'bg-rose-500/25 text-rose-200 border border-rose-500/40' : 'bg-[var(--accent-teal)]/25 text-[var(--accent-teal)] border border-[var(--border-teal-strong)]'
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
      <div className="bg-[var(--bg-subcard)] rounded-xl p-5 border border-slate-700/80 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-[var(--accent-teal)]" />
            <h4 className="font-display font-bold text-slate-200 text-sm">Model Ensemble Confidence Distribution</h4>
          </div>
          <span className="text-xs text-slate-300 font-mono">100 Trees Random Forest</span>
        </div>

        <div className="w-full h-5 bg-[var(--bg-main)] rounded-full overflow-hidden flex p-0.5 border border-slate-700">
          <div
            style={{ width: `${benignConf}%` }}
            className="h-full bg-[#00e5ce] rounded-l-full transition-all duration-500 flex items-center justify-end pr-2 text-slate-950"
          >
            {benignConf > 15 && <span className="text-[10px] font-bold">{benignConf}%</span>}
          </div>
          <div
            style={{ width: `${malignantConf}%` }}
            className="h-full bg-rose-500 rounded-r-full transition-all duration-500 flex items-center justify-start pl-2 text-white"
          >
            {malignantConf > 15 && <span className="text-[10px] font-bold">{malignantConf}%</span>}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-[var(--accent-teal-dark)]/50 border border-[var(--border-teal)] rounded-lg p-3 flex items-center justify-between">
            <div>
              <span className="text-xs text-[var(--accent-teal)] font-semibold uppercase">Benign Probability</span>
              <p className="text-2xl font-display font-extrabold text-white">{benignConf}%</p>
            </div>
            <div className="w-3 h-3 rounded-full bg-[var(--accent-teal)]"></div>
          </div>
          
          <div className="bg-rose-950/40 border border-rose-500/30 rounded-lg p-3 flex items-center justify-between">
            <div>
              <span className="text-xs text-rose-300 font-semibold uppercase">Malignant Probability</span>
              <p className="text-2xl font-display font-extrabold text-rose-200">{malignantConf}%</p>
            </div>
            <div className="w-3 h-3 rounded-full bg-rose-500"></div>
          </div>
        </div>
      </div>

      {/* 3. Risk Factor Analysis Callouts */}
      {result.riskFactors && result.riskFactors.length > 0 ? (
        <div className="bg-[var(--bg-subcard)] rounded-xl p-5 border border-slate-700/80">
          <div className="flex items-center space-x-2 mb-3">
            <ShieldAlert className="w-5 h-5 text-rose-400" />
            <h4 className="font-display font-bold text-slate-200 text-sm">Key Contributing Risk Factors (Extreme Morphometrics)</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {result.riskFactors.map((rf, idx) => (
              <div key={idx} className="bg-[var(--bg-main)] border border-rose-500/30 rounded-lg p-3">
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
        <div className="bg-[var(--bg-subcard)] rounded-xl p-4 border border-slate-700/80 text-center">
          <p className="text-xs text-[var(--accent-teal)] font-medium flex items-center justify-center gap-1.5">
            <Activity className="w-4 h-4 text-[var(--accent-teal)]" />
            All 30 morphometric attributes remain within safe benign baseline thresholds.
          </p>
        </div>
      )}

    </div>
  );
};

export default PredictionCard;
