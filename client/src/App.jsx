import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import PredictPage from './pages/PredictPage';
import HowItWorks from './pages/HowItWorks';
import ModelInfo from './pages/ModelInfo';
import About from './pages/About';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[var(--bg-main)] text-slate-100 selection:bg-[var(--accent-teal)] selection:text-slate-950">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/predict" element={<PredictPage />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/model-info" element={<ModelInfo />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
