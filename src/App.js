import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Banner from './components/Banner';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cards from './components/Cards';
import Papeleria from './components/Papeleria';
import Mision from './components/Mision';
import WhatsappIcon from './components/WhatsappIcon';
import Descartables from './components/Descartables';
import Cotillon from './components/Cotillon';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Carousel />
              <Banner />
              <Cards />
              <About />
              <Mision />
              <Contact />
              <WhatsappIcon />
              <Footer />
            </>
          }/>
          <Route path="/papeleria" element={<Papeleria />} />
          <Route path="/descartables" element={<Descartables />} />
          <Route path="/cotillon" element={<Cotillon />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
