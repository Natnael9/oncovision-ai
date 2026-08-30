import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Cpu, GitMerge, ShieldCheck, Microscope, LineChart, ArrowRight, Zap, Award, CheckCircle2 } from 'lucide-react';
import heroBanner from '../assets/hero-banner.svg';

const LandingPage = () => {
  return (
    <div className="space-y-20 pb-16">
      
      {/* Hero Section */}
      <section className="relative pt-8 lg:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Badge Tag */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider shadow-sm">
              <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>AI-Powered Pathology Assistant</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Precision Breast Cancer Diagnostics with <span className="gradient-text-cyan">Machine Learning</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Transforming raw Fine Needle Aspiration (FNA) nuclear morphometric measurements into instant, reproducible malignant vs. benign diagnostic predictions using Random Forest ensembles trained on the Wisconsin Clinical dataset.
            </p>

            {/* Two Primary CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/predict"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-base hover:from-cyan-400 hover:to-indigo-500 transition-all duration-200 shadow-xl shadow-cyan-500/25 flex items-center justify-center space-x-3 group"
              >
                <Cpu className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Launch Diagnostic Predictor</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/how-it-works"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 font-semibold text-base hover:bg-slate-800 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <GitMerge className="w-5 h-5 text-cyan-400" />
                <span>Learn Data Pipeline</span>
              </Link>
            </div>

            {/* Trust Metrics Row */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80">
              <div>
                <p className="text-2xl font-extrabold text-white">97.37%</p>
                <p className="text-xs text-slate-400 font-medium">Test Set Accuracy</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-cyan-400">30</p>
                <p className="text-xs text-slate-400 font-medium">Nuclear Morphometrics</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-emerald-400">0.99</p>
                <p className="text-xs text-slate-400 font-medium">ROC-AUC Score</p>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Banner */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden glass-panel border border-slate-800 p-2 shadow-2xl glow-cyan">
              <img
                src={heroBanner}
                alt="OncoVision AI Pathology Engine Graphic"
                className="w-full h-auto rounded-xl object-cover transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Disease & Clinical Context Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Clinical Significance &amp; Quantitative Pathology
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Breast carcinoma remains one of the leading global malignancies in women. Rapid, reliable differentiation between benign lesions (e.g., fibroadenomas or simple cysts) and invasive malignant carcinomas is essential for immediate oncological intervention.
          </p>
        </div>

        {/* 3 Distinct Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: FNA */}
          <div className="glass-card rounded-2xl p-8 space-y-4 border border-slate-800 relative group">
            <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
              <Microscope className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white">Fine Needle Aspiration (FNA)</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Minimally invasive diagnostic procedure extracting cellular clusters from palpable breast masses using a fine 21–25 gauge needle, avoiding aggressive surgical open biopsies.
            </p>
          </div>

          {/* Card 2: Algorithmic Morphometry */}
          <div className="glass-card rounded-2xl p-8 space-y-4 border border-slate-800 relative group">
            <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-slate-950 transition-all duration-300">
              <LineChart className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white">Algorithmic Morphometry</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Replaces subjective visual interpretation with computer vision active contour algorithms ("snakes") to extract 10 key geometric nuclear attributes with high mathematical reproducibility.
            </p>
          </div>

          {/* Card 3: Early Intervention */}
          <div className="glass-card rounded-2xl p-8 space-y-4 border border-slate-800 relative group">
            <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white">Early Diagnostic Intervention</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Achieving over 97% sensitivity minimizes false negative delays, ensuring patients with malignant cytometric profiles are immediately prioritized for comprehensive oncology care.
            </p>
          </div>

        </div>
      </section>

      {/* Workflow Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">End-to-End Pipeline</span>
            <h2 className="text-3xl font-extrabold text-white mt-1">3-Step Diagnostic Workflow</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Step 1 */}
            <div className="bg-slate-950/80 rounded-xl p-6 border border-slate-800 space-y-3">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center text-sm">01</span>
              <h4 className="font-bold text-white text-lg">Biopsy &amp; Slide Digitization</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Cellular material extracted via FNA is smeared on microscopic slides, stained with Wright-Giemsa, and captured at 40x magnification into high-resolution digital micrographs.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-950/80 rounded-xl p-6 border border-slate-800 space-y-3">
              <span className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 font-bold flex items-center justify-center text-sm">02</span>
              <h4 className="font-bold text-white text-lg">Computer Vision Segmentation</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Active contour snakes isolate individual cell nuclei boundaries, deriving 10 geometric baseline traits aggregated into Mean, Standard Error, and Worst (3 largest) metrics = 30 total features.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-950/80 rounded-xl p-6 border border-slate-800 space-y-3">
              <span className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-sm">03</span>
              <h4 className="font-bold text-white text-lg">Machine Learning Inference</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                The 30 feature vector is passed to our Python Random Forest subprocess bridge, generating instant probability scores and highlighting contributing cytometrics.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Call-to-Action Footer Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-cyan-900/60 via-blue-900/60 to-slate-900 p-8 sm:p-12 border border-cyan-500/30 text-center space-y-6 shadow-2xl relative">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Test Live Cytometric Inference?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Input custom 30-feature values or load pre-set malignant/benign clinical samples to observe real-time pathology predictions.
          </p>
          <div className="pt-2">
            <Link
              to="/predict"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-cyan-400 text-slate-950 font-extrabold text-base hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-400/20"
            >
              <Cpu className="w-5 h-5" />
              <span>Launch Diagnostic Predictor</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
