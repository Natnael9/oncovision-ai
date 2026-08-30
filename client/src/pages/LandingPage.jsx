import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, GitMerge, ShieldCheck, Microscope, LineChart, ArrowUpRight } from 'lucide-react';
import heroBanner from '../assets/hero-banner.svg';

const LandingPage = () => {
  return (
    <div className="space-y-20 pb-16 font-sans">
      
      {/* Hero Section */}
      <section className="relative pt-8 lg:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
              Precision Breast Cancer <span className="gradient-text-teal">Diagnostics</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Transforming raw Fine Needle Aspiration (FNA) nuclear morphometrics into instant malignant vs. benign diagnostic predictions using Random Forest ensembles trained on the Wisconsin Clinical dataset.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              
              <Link to="/predict" className="btn-split-primary group">
                <span className="btn-split-primary-text">
                  <Cpu className="w-5 h-5 text-[var(--accent-teal)]" />
                  <span>Launch Diagnostic Predictor</span>
                </span>
                <span className="btn-split-primary-icon">
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>

              <Link to="/how-it-works" className="btn-wireframe flex items-center space-x-2">
                <GitMerge className="w-5 h-5 text-[var(--accent-teal)]" />
                <span>Our Science &amp; Pipeline</span>
              </Link>

            </div>

            {/* Trust Metrics Row */}
            <div className="pt-8 grid grid-cols-3 gap-4 border-t border-[var(--border-teal)]">
              <div>
                <p className="font-display text-3xl font-extrabold text-white">97.37%</p>
                <p className="text-xs text-slate-300 font-medium">Test Set Accuracy</p>
              </div>
              <div>
                <p className="font-display text-3xl font-extrabold text-[var(--accent-teal)]">30</p>
                <p className="text-xs text-slate-300 font-medium">Nuclear Attributes</p>
              </div>
              <div>
                <p className="font-display text-3xl font-extrabold text-emerald-400">0.99</p>
                <p className="text-xs text-slate-300 font-medium">ROC-AUC Score</p>
              </div>
            </div>

          </div>

          {/* Right Hero Graphics */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-bio-card border border-[var(--border-teal-strong)] p-2">
              <img
                src={heroBanner}
                alt="OncoVision AI Pathology Engine Graphic"
                className="w-full h-auto rounded-xl object-cover transform hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Disease & Clinical Context Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
            Quantitative AI Pathology Platform
          </h2>
          <p className="text-slate-200 text-base leading-relaxed">
            Differentiating benign breast lesions from invasive malignant carcinomas with high mathematical precision.
          </p>
        </div>

        {/* 3 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-bio-card bg-bio-card-hover rounded-2xl p-8 space-y-4 relative group">
            <div className="w-12 h-12 rounded-xl bg-[var(--accent-teal-dark)] border border-[var(--border-teal-strong)] flex items-center justify-center text-[var(--accent-teal)]">
              <Microscope className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-white">Fine Needle Aspiration (FNA)</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Minimally invasive diagnostic extraction of cell clusters from palpable breast masses, eliminating unnecessary surgical biopsies.
            </p>
          </div>

          <div className="bg-bio-card bg-bio-card-hover rounded-2xl p-8 space-y-4 relative group">
            <div className="w-12 h-12 rounded-xl bg-[var(--accent-teal-dark)] border border-[var(--border-teal-strong)] flex items-center justify-center text-[var(--accent-teal)]">
              <LineChart className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-white">Algorithmic Morphometry</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Active contour computer vision replaces subjective visual grading with 10 reproducible geometric cell traits.
            </p>
          </div>

          <div className="bg-bio-card bg-bio-card-hover rounded-2xl p-8 space-y-4 relative group">
            <div className="w-12 h-12 rounded-xl bg-[var(--accent-teal-dark)] border border-[var(--border-teal-strong)] flex items-center justify-center text-[var(--accent-teal)]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-white">Early Intervention</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              97.37% diagnostic sensitivity minimizes false negative delays, accelerating oncology referral timelines.
            </p>
          </div>

        </div>
      </section>

      {/* 3-Step Workflow Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-bio-card rounded-3xl p-8 sm:p-12 border border-[var(--border-teal)] relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-display text-xs font-bold text-[var(--accent-teal)] uppercase tracking-widest">End-to-End Architecture</span>
            <h2 className="font-display text-3xl font-extrabold text-white mt-1">3-Step Diagnostic Pipeline</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-[var(--bg-subcard)] rounded-xl p-6 border border-slate-700/80 space-y-3">
              <span className="w-8 h-8 rounded-lg bg-[var(--accent-teal)]/20 text-[var(--accent-teal)] font-bold flex items-center justify-center text-sm">01</span>
              <h4 className="font-display font-bold text-white text-lg">Biopsy &amp; Slide Digitization</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Cellular material extracted via FNA is stained and captured at 40x magnification into digital micrographs.
              </p>
            </div>

            <div className="bg-[var(--bg-subcard)] rounded-xl p-6 border border-slate-700/80 space-y-3">
              <span className="w-8 h-8 rounded-lg bg-[var(--accent-teal)]/20 text-[var(--accent-teal)] font-bold flex items-center justify-center text-sm">02</span>
              <h4 className="font-display font-bold text-white text-lg">Computer Vision Segmentation</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Active contour snakes isolate nuclear boundaries into Mean, Standard Error, and Worst metrics (30 features total).
              </p>
            </div>

            <div className="bg-[var(--bg-subcard)] rounded-xl p-6 border border-slate-700/80 space-y-3">
              <span className="w-8 h-8 rounded-lg bg-[var(--accent-teal)]/20 text-[var(--accent-teal)] font-bold flex items-center justify-center text-sm">03</span>
              <h4 className="font-display font-bold text-white text-lg">Subprocess ML Inference</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                The 30-feature vector executes inside our Python virtual environment bridge, returning real-time diagnostic probabilities.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Call-to-Action Footer Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[var(--accent-teal-dark)] p-8 sm:p-12 border border-[var(--border-teal-strong)] text-center space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Test Live Cytometric Inference?
          </h2>
          <p className="text-slate-200 max-w-2xl mx-auto text-sm sm:text-base">
            Input custom 30-feature values or load pre-set malignant/benign clinical samples to observe real-time pathology predictions.
          </p>
          <div className="pt-2 flex justify-center">
            <Link to="/predict" className="btn-split-primary group">
              <span className="btn-split-primary-text">
                <Cpu className="w-5 h-5 text-[var(--accent-teal)]" />
                <span>Launch Diagnostic Predictor</span>
              </span>
              <span className="btn-split-primary-icon">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
