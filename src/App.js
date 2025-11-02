import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-root">
      <Helmet>
        <title>Dragon Infosolution — All IT Tech Skill</title>
        <meta name="description" content="Dragon Infosolution: Full-stack development, cloud, DevOps, AI and mobile solutions. 6+ years experience." />
      </Helmet>

      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
