import React from 'react';
import './App.css';
import Navbar from './components/functionComponent/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/functionComponent/Home';
import About from './components/functionComponent/About';
import Experience from './components/functionComponent/Experience';
import Login from './components/functionComponent/Login';
import Footer from './components/functionComponent/footer';
import Reference from './components/functionComponent/reference';
import Map from './components/functionComponent/map';
import Callback from './components/functionComponent/callback';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/login" element={<Login />} />
          <Route path="/refer" element={<Reference />} />
          <Route path="/map" element={<Map />} />
          <Route path="/callback" element={<Callback />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
