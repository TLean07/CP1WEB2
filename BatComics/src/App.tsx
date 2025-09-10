import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ComicDetails from './pages/ComicDetails';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

function App() {
  return (
    <Router>
      <div className="bg-dark-bg min-h-screen flex flex-col">
        <Header />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comic/:id" element={<ComicDetails />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;