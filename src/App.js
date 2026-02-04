import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Students from './pages/Students';
import FooterComponent from './components/FooterComponent';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
