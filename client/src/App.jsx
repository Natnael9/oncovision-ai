import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import PredictPage from './pages/PredictPage';
import HowItWorks from './pages/HowItWorks';
import ModelInfo from './pages/ModelInfo';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/predict" element={<PredictPage />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/model-info" element={<ModelInfo />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
