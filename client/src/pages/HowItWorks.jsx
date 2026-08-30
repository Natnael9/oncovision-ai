import React from 'react';
import { GitMerge, Syringe, Microscope, Target, Layers, ArrowRight, CheckCircle } from 'lucide-react';
import fnaProcedure from '../assets/fna-procedure.svg';
import microscopySlide from '../assets/microscopy-slide.svg';

const BASE_FEATURES = [
  { name: "Radius", formula: "r = ||p - c||", desc: "Mean distance from nuclear center to perimeter points." },
  { name: "Texture", formula: "σ(I)", desc: "Standard deviation of gray-scale image intensities across nuclear region." },
  { name: "Perimeter", formula: "P = ∫ ds", desc: "Total boundary contour distance surrounding the nucleus." },
  { name: "Area", formula: "A = ∬ dA", desc: "Enclosed surface area within the detected active contour boundary." },
  { name: "Smoothness", formula: "S = Δr / r_avg", desc: "Local variation in radial length from center to adjacent boundary points." },
  { name: "Compactness", formula: "P² / A - 1.0", desc: "Measures boundary elongation and irregularity (circle = 0)." },
  { name: "Concavity", formula: "C_sev", desc: "Severity of concave indentations along the nuclear contour." },
  { name: "Concave Points", formula: "N_concave", desc: "Count of distinct inward-curving portions along the perimeter." },
  { name: "Symmetry", formula: "Sym_axis", desc: "Relative symmetry of nuclear boundary relative to major/minor axes." },
  { name: "Fractal Dimension", formula: "D_H - 1", desc: "Boundary 'coastline' complexity approximation (Hausdorff dimension - 1)." }
];

const HowItWorks = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      
      {/* Header Banner */}
      <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 text-center space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
          <GitMerge className="w-4 h-4 text-cyan-400" />
          <span>Biopsy to Feature Matrix Pipeline</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          From Fine Needle Biopsy to 30 Numerical Features
        </h1>
        <p className="text-slate-300 max-w-3xl mx-auto text-base leading-relaxed">
          Discover how physical cytological biopsies are processed through computer vision image analysis to yield high-dimensional mathematical inputs for machine learning classification.
        </p>
      </div>

      {/* 4-Stage Deep Dive Process */}
      <div className="space-y-12">
        
        {/* Stage 1 */}
        <div className="glass-card rounded-3xl p-8 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center space-x-3">
              <span className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 font-extrabold flex items-center justify-center text-lg border border-cyan-500/30">01</span>
              <h2 className="text-2xl font-extrabold text-white">Stage 1: Clinical FNA Biopsy</h2>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Fine Needle Aspiration (FNA) is a quick, minimally invasive clinical procedure using a thin 21–25 gauge needle attached to a syringe. Cytopathologists extract fluid and cell clusters directly from the palpable breast mass without open surgical incision.
            </p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>Smearing cellular fluid evenly onto glass slides.</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>Staining with Wright-Giemsa or Papanicolaou dyes to highlight nuclear membranes.</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 p-2 shadow-xl">
            <img src={fnaProcedure} alt="FNA Procedure Diagram" className="w-full h-auto rounded-xl" />
          </div>
        </div>

        {/* Stage 2 */}
        <div className="glass-card rounded-3xl p-8 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 p-2 shadow-xl">
            <img src={microscopySlide} alt="Digital Microscopy Slide Diagram" className="w-full h-auto rounded-xl" />
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
            <div className="flex items-center space-x-3">
              <span className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 font-extrabold flex items-center justify-center text-lg border border-blue-500/30">02</span>
              <h2 className="text-2xl font-extrabold text-white">Stage 2: Digital Microscopic Slide Imaging</h2>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Stained slides are mounted onto optical microscopes calibrated at 40x magnification. High-resolution digital CCD cameras capture digital micrographs of representative cell clusters for algorithmic analysis.
            </p>
            <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 text-xs text-slate-400">
              <strong className="text-slate-200">Resolution &amp; Contrast:</strong> High-definition color depth ensures distinct separation between purple-stained cell nuclei and light pink background cytoplasm.
            </div>
          </div>
        </div>

        {/* Stage 3 */}
        <div className="glass-card rounded-3xl p-8 border border-slate-800 space-y-6">
          <div className="flex items-center space-x-3">
            <span className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 font-extrabold flex items-center justify-center text-lg border border-purple-500/30">03</span>
            <div>
              <h2 className="text-2xl font-extrabold text-white">Stage 3: Computerized Nuclear Segmentation (10 Base Features)</h2>
              <p className="text-xs text-slate-400">Active contour models ("snakes") outline the exact boundary of each cell nucleus</p>
            </div>
          </div>

          {/* Grid of 10 Base Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {BASE_FEATURES.map((feat, idx) => (
              <div key={idx} className="bg-slate-950/80 rounded-xl p-4 border border-slate-800 space-y-2 hover:border-purple-500/40 transition-colors">
                <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">Trait #{idx + 1}</span>
                <h4 className="font-bold text-white text-sm">{feat.name}</h4>
                <code className="text-[11px] font-mono text-cyan-400 bg-slate-900 px-2 py-0.5 rounded block">{feat.formula}</code>
                <p className="text-xs text-slate-400 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stage 4 */}
        <div className="glass-card rounded-3xl p-8 border border-slate-800 space-y-6">
          <div className="flex items-center space-x-3">
            <span className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 font-extrabold flex items-center justify-center text-lg border border-emerald-500/30">04</span>
            <div>
              <h2 className="text-2xl font-extrabold text-white">Stage 4: Statistical Aggregation ($10 \times 3 = 30$ Features)</h2>
              <p className="text-xs text-slate-400">Why single slide measurements are aggregated into 3 distinct statistical metrics</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-950/80 rounded-2xl p-6 border border-slate-800 space-y-3">
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-bold text-xs">Features 1–10</span>
              <h3 className="font-bold text-white text-lg">Mean (Average)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Represents the central tendency across all detected cell nuclei on the slide, summarizing baseline cellular structure.
              </p>
            </div>

            <div className="bg-slate-950/80 rounded-2xl p-6 border border-slate-800 space-y-3">
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-bold text-xs">Features 11–20</span>
              <h3 className="font-bold text-white text-lg">Standard Error (Spread)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Quantifies variability in nuclear size and shape across the slide. Malignant tissues typically show high pleomorphism (variegated cellular shapes).
              </p>
            </div>

            <div className="bg-slate-950/80 rounded-2xl p-6 border border-slate-800 space-y-3">
              <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 font-bold text-xs">Features 21–30</span>
              <h3 className="font-bold text-white text-lg">Worst (3 Largest Nuclei)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Calculated as the mean of the 3 largest/most extreme nuclei values found on the slide. Highly correlated with malignant progression.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default HowItWorks;
