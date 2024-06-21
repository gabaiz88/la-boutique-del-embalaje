import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Banner from './components/Banner';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cards from './components/Cards';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Papeleria from './components/Papeleria'; // Ajusta la ruta según sea necesario
import Mision from './components/Mision';
import WhatsappIcon from './components/WhatsappIcon';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Carousel />
        <Banner />
        <Cards />
        <About />
        <Mision />
        <Contact />
        <WhatsappIcon />
        <Footer />
        <Routes>
          <Route path="/papeleria" element={<Papeleria />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

