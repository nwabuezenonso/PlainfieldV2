import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './Components';
import { Home, About, Events, Gallery, Sermon } from './Pages';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/Event" element={<Events/>} />
        <Route path="/Gallery" element={<Gallery/>} />
        <Route path="/Sermon" element={<Sermon/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
