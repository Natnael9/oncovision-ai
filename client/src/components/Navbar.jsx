import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, MapPin, Menu, X, Cpu } from 'lucide-react';
import logo from '../assets/logo.png';

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
    <header className="sticky top-0 z-50 bg-[var(--bg-header)] backdrop-blur-2xl border-b border-[var(--border-teal)] border-t-2 border-t-[var(--accent-teal)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* OncoVision AI Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-[var(--border-teal-strong)] bg-slate-950 flex items-center justify-center group-hover:border-[var(--accent-teal)] transition-all">
              <img src={logo} alt="OncoVision AI Logo" className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl tracking-tight text-white group-hover:text-[var(--accent-teal)] transition-colors">
                OncoVision <span className="text-[var(--accent-teal)] font-extrabold">AI</span>
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
                      ? 'text-[var(--accent-teal)] font-bold border-b-2 border-[var(--accent-teal)] pb-1'
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
              className="p-2.5 rounded-lg border border-[var(--border-teal-strong)] bg-[var(--accent-teal-dark)] text-[var(--accent-teal)] hover:bg-[var(--accent-teal)] hover:text-slate-950 transition-all"
              title="Launch Predictor"
            >
              <Cpu className="w-4 h-4" />
            </Link>
            <a
              href="mailto:contact@oncovision.ai"
              className="p-2.5 rounded-lg border border-slate-700/60 bg-[var(--bg-main)] text-slate-300 hover:border-[var(--accent-teal)] hover:text-white transition-all"
              title="Contact Support"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://archive.ics.uci.edu"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg border border-slate-700/60 bg-[var(--bg-main)] text-slate-300 hover:border-[var(--accent-teal)] hover:text-white transition-all"
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
        <div className="md:hidden bg-[var(--bg-main)] border-b border-[var(--border-teal)] px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-display text-base font-medium text-slate-200 hover:text-[var(--accent-teal)]"
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
