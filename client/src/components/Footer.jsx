import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ExternalLink, Activity } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050b0c] border-t border-[#00e5ce]/15 text-slate-400 font-sans">
      
      {/* Clinical Disclaimer Banner */}
      <div className="bg-[#091214] border-b border-[#00e5ce]/15 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-start sm:items-center space-x-3 text-[#00e5ce] text-xs sm:text-sm">
          <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-slate-300">
            <strong className="font-semibold text-[#00e5ce]">Academic &amp; Research Disclaimer:</strong> This application serves benchmark models for Wisconsin Diagnostic Breast Cancer classification. It is not certified for standalone clinical diagnostic decisions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-[#042a2d] border border-[#00e5ce]/40 flex items-center justify-center text-[#00e5ce]">
                <Activity className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-xl text-white">OncoVision AI</span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Serving real-time machine learning predictions using 30 digitized Fine Needle Aspiration (FNA) nuclear morphometrics trained on Random Forest Ensembles.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li><Link to="/" className="hover:text-[#00e5ce] transition-colors">Home Overview</Link></li>
              <li><Link to="/predict" className="hover:text-[#00e5ce] transition-colors">Interactive Predictor</Link></li>
              <li><Link to="/how-it-works" className="hover:text-[#00e5ce] transition-colors">Our Science &amp; Pipeline</Link></li>
              <li><Link to="/model-info" className="hover:text-[#00e5ce] transition-colors">Model Specifications</Link></li>
            </ul>
          </div>

          {/* Credits */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4 uppercase tracking-wider">Source Citation</h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              WDBC Dataset: W.H. Wolberg, W.N. Street, and O.L. Mangasarian (Univ. of Wisconsin Clinical Sciences Center).
            </p>
            <a
              href="https://archive.ics.uci.edu/ml/datasets/Breast+Cancer+Wisconsin+(Diagnostic)"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs text-[#00e5ce] hover:underline font-semibold"
            >
              <span>UCI ML Repository</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} OncoVision AI Pathology Assistant. MERN Stack &amp; Python Architecture.</p>
          <p>Powered by Scikit-Learn, Express, React, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
