import React, { useState } from 'react';
import { HelpCircle, Layers } from 'lucide-react';

const FEATURE_DESCRIPTIONS = {
  "mean radius": "Mean of distances from nuclear center to perimeter points (µm).",
  "mean texture": "Standard deviation of gray-scale image intensities across nuclear region.",
  "mean perimeter": "Mean nuclear boundary perimeter distance (µm).",
  "mean area": "Mean surface area encompassed by the nuclear contour (µm²).",
  "mean smoothness": "Local variation in radius lengths from nuclear center.",
  "mean compactness": "Perimeter² / area - 1.0; measures nuclear elongation/irregularity.",
  "mean concavity": "Severity of concave indentations along the nuclear boundary.",
  "mean concave points": "Number of distinct concave portions of the nuclear contour.",
  "mean symmetry": "Relative symmetry of nuclear contour along major and minor axes.",
  "mean fractal dimension": "'Coastline approximation' (Hausdorff dimension - 1).",

  "radius error": "Standard error of distances from center to perimeter.",
  "texture error": "Standard error of gray-scale intensity variation.",
  "perimeter error": "Standard error of nuclear boundary perimeter.",
  "area error": "Standard error of surface area encompassed by nuclei.",
  "smoothness error": "Standard error of local variation in radius lengths.",
  "compactness error": "Standard error of nuclear compactness metric.",
  "concavity error": "Standard error of concave boundary indentations.",
  "concave points error": "Standard error of concave point count.",
  "symmetry error": "Standard error of contour symmetry balance.",
  "fractal dimension error": "Standard error of boundary fractal dimension.",

  "worst radius": "Mean of the 3 largest nuclear radii found on the slide (µm).",
  "worst texture": "Mean of the 3 largest gray-scale intensity std deviations.",
  "worst perimeter": "Mean of the 3 largest nuclear perimeters (µm).",
  "worst area": "Mean of the 3 largest nuclear surface areas (µm²).",
  "worst smoothness": "Mean of the 3 largest smoothness variation values.",
  "worst compactness": "Mean of the 3 largest compactness metrics.",
  "worst concavity": "Mean of the 3 largest concavity severity scores.",
  "worst concave points": "Mean of the 3 largest concave point counts.",
  "worst symmetry": "Mean of the 3 largest asymmetry scores.",
  "worst fractal dimension": "Mean of the 3 largest boundary fractal dimensions."
};

const CATEGORIES = [
  {
    id: 'mean',
    title: '1. Mean Measurements (1–10)',
    subtitle: 'Average values calculated across all detected cell nuclei on the slide.',
    indices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  {
    id: 'se',
    title: '2. Standard Error Measurements (11–20)',
    subtitle: 'Variability and spread of nuclear morphometrics across the biopsy sample.',
    indices: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
  },
  {
    id: 'worst',
    title: '3. Worst / Extreme Measurements (21–30)',
    subtitle: 'Mean of the 3 largest / most severe nuclei values detected (High Diagnostic Significance).',
    indices: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
  }
];

const FEATURE_NAMES = [
  "mean radius", "mean texture", "mean perimeter", "mean area", "mean smoothness",
  "mean compactness", "mean concavity", "mean concave points", "mean symmetry", "mean fractal dimension",
  "radius error", "texture error", "perimeter error", "area error", "smoothness error",
  "compactness error", "concavity error", "concave points error", "symmetry error", "fractal dimension error",
  "worst radius", "worst texture", "worst perimeter", "worst area", "worst smoothness",
  "worst compactness", "worst concavity", "worst concave points", "worst symmetry", "worst fractal dimension"
];

const FeatureGroup = ({ features, onChange }) => {
  const [activeTab, setActiveTab] = useState('mean');
  const [activeTooltip, setActiveTooltip] = useState(null);

  const currentCategory = CATEGORIES.find(c => c.id === activeTab);

  return (
    <div className="bg-bio-card rounded-2xl p-6 border border-[#00e5ce]/20">
      
      {/* Category Tabs Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-700/60">
        <div>
          <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#00e5ce]" />
            30 Nuclear Morphometric Input Matrix
          </h3>
          <p className="text-xs text-slate-300">Derived from digitized Fine Needle Aspiration (FNA) cell nuclei images</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center space-x-1 bg-[#0f1d21] p-1 rounded-xl border border-slate-700/80 w-full sm:w-auto overflow-x-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`px-3.5 py-2 rounded-lg font-display text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                activeTab === cat.id
                  ? 'bg-[#00e5ce] text-slate-950 shadow-md font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-[#14252a]'
              }`}
            >
              {cat.id === 'mean' ? 'Mean (1-10)' : cat.id === 'se' ? 'Std Error (11-20)' : 'Worst (21-30)'}
            </button>
          ))}
        </div>
      </div>

      {/* Category Description Banner */}
      <div className="bg-[#0f1d21] border border-[#00e5ce]/20 rounded-xl p-4 mb-6">
        <h4 className="font-display font-bold text-sm text-[#00e5ce] mb-0.5">{currentCategory.title}</h4>
        <p className="text-xs text-slate-300">{currentCategory.subtitle}</p>
      </div>

      {/* 10 Inputs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {currentCategory.indices.map((idx) => {
          const name = FEATURE_NAMES[idx];
          const val = features[idx] !== undefined ? features[idx] : '';
          const isWorst = idx >= 20;

          return (
            <div
              key={idx}
              className={`relative bg-[#0f1d21] rounded-xl p-3.5 border transition-all duration-200 ${
                isWorst ? 'border-slate-700/80 hover:border-rose-500/50' : 'border-slate-700/80 hover:border-[#00e5ce]/50'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-slate-200 capitalize truncate pr-1">
                  #{idx + 1} {name}
                </label>
                
                {/* Tooltip */}
                <div className="relative">
                  <button
                    type="button"
                    onMouseEnter={() => setActiveTooltip(idx)}
                    onMouseLeave={() => setActiveTooltip(null)}
                    onClick={() => setActiveTooltip(activeTooltip === idx ? null : idx)}
                    className="text-slate-400 hover:text-[#00e5ce] p-0.5"
                    aria-label={`Info for ${name}`}
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                  </button>

                  {activeTooltip === idx && (
                    <div className="absolute right-0 bottom-full mb-2 w-56 p-3 bg-[#14252a] border border-[#00e5ce]/50 text-slate-200 text-xs rounded-xl shadow-2xl z-50 pointer-events-none">
                      <p className="font-display font-bold text-[#00e5ce] mb-1 capitalize">{name}</p>
                      <p className="text-[11px] leading-relaxed text-slate-300">{FEATURE_DESCRIPTIONS[name]}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Number Input Field */}
              <input
                type="number"
                step="any"
                value={val}
                onChange={(e) => onChange(idx, e.target.value)}
                placeholder="0.0"
                className="w-full bg-[#14252a] border border-slate-600/80 rounded-lg px-3 py-2 text-sm text-white font-mono placeholder-slate-500 focus:outline-none focus:border-[#00e5ce] focus:ring-1 focus:ring-[#00e5ce] transition-colors"
              />
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default FeatureGroup;
