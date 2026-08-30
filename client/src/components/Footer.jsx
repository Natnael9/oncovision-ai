import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, ShieldAlert, BookOpen, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400">
      
      {/* Disclaimer Banner */}
      <div className="bg-slate-900/90 border-b border-amber-500/20 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-start sm:items-center space-x-3 text-amber-400/90 text-xs sm:text-sm">
          <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5 sm:mt-0 text-amber-400" />
          <p>
            <strong className="font-semibold text-amber-300">Clinical Research &amp; Academic Disclaimer:</strong> This application is built for research bench-testing, educational demonstration, and scientific inquiry using the Wisconsin Diagnostic Breast Cancer (WDBC) dataset. It is not certified for direct clinical diagnosis or medical decision-making.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                <Activity className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="font-bold text-xl text-white">OncoVision AI</span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Serving real-time machine learning predictions using 30 digitized Fine Needle Aspiration (FNA) nuclear morphometric attributes. Trained on Random Forest Ensembles to maximize diagnostic sensitivity and specificity.
            </p>
            <div className="flex items-center space-x-2 text-xs text-slate-500">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>Dataset Source: UCI ML Repository / Univ. of Wisconsin Clinical Sciences Center</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-200 text-sm mb-4 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-cyan-400 transition-colors">Home Overview</Link>
              </li>
              <li>
                <Link to="/predict" className="hover:text-cyan-400 transition-colors">Interactive Predictor</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-cyan-400 transition-colors">FNA Extraction Pipeline</Link>
              </li>
              <li>
                <Link to="/model-info" className="hover:text-cyan-400 transition-colors">Model Specifications &amp; ROC</Link>
              </li>
            </ul>
          </div>

          {/* Research Citation */}
          <div>
            <h4 className="font-semibold text-slate-200 text-sm mb-4 uppercase tracking-wider">Citation &amp; Credits</h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              W.N. Street, W.H. Wolberg, and O.L. Mangasarian. "Nuclear feature extraction for breast tumor diagnosis." <em>IS&amp;T/SPIE 1993 International Symposium on Electronic Imaging</em>.
            </p>
            <a
              href="https://archive.ics.uci.edu/ml/datasets/Breast+Cancer+Wisconsin+(Diagnostic)"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-medium"
            >
              <span>UCI ML Repository Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} OncoVision AI Pathology Assistant. MERN Stack &amp; Python ML Architecture.</p>
          <p className="flex items-center space-x-1">
            <span>Powered by Scikit-Learn, Express, React, and Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
