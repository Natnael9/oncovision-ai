import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, MapPin, Menu, X, Cpu, Activity } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Predictor', path: '/predict' },
    { name: 'Our Science', path: '/how-it-works' },
    { name: 'Model Specs', path: '/model-info' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-[#14252a]/95 backdrop-blur-xl border-b border-[#00e5ce]/20 border-t-2 border-t-[#00e5ce]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* OncoVision AI Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#0d4044] border border-[#00e5ce]/40 flex items-center justify-center text-[#00e5ce] group-hover:bg-[#00e5ce] group-hover:text-[#051416] transition-all">
              <Activity className="w-5 h-5" />
            </div>

            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl tracking-tight text-white group-hover:text-[#00e5ce] transition-colors">
                OncoVision <span className="text-[#00e5ce] font-extrabold">AI</span>
              </span>
            </div>
          </Link>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-display text-sm font-medium transition-colors ${
                    active
                      ? 'text-[#00e5ce] font-bold border-b-2 border-[#00e5ce] pb-1'
                      : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Wireframe Icon Action Boxes */}
          <div className="hidden lg:flex items-center space-x-2">
            <Link
              to="/predict"
              className="p-2.5 rounded-lg border border-[#00e5ce]/40 bg-[#0d4044]/80 text-[#00e5ce] hover:bg-[#00e5ce] hover:text-[#051416] transition-all"
              title="Launch Predictor"
            >
              <Cpu className="w-4 h-4" />
            </Link>
            <a
              href="mailto:contact@oncovision.ai"
              className="p-2.5 rounded-lg border border-slate-700/60 bg-[#14252a] text-slate-300 hover:border-[#00e5ce]/40 hover:text-white transition-all"
              title="Contact Support"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://archive.ics.uci.edu"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg border border-slate-700/60 bg-[#14252a] text-slate-300 hover:border-[#00e5ce]/40 hover:text-white transition-all"
              title="Dataset Location"
            >
              <MapPin className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#14252a] border-b border-[#00e5ce]/20 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-display text-base font-medium text-slate-200 hover:text-[#00e5ce]"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
