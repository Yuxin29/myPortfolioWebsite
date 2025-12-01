import { useEffect } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import './App.css'

import Project from './Project';
import Contact from './Contact';
import Gallery from './Gallery';
import Cv from './Cv';

function MainPage() {
  return (
    <div className="main_container">
      <div className="top_nav">
        {/* Left groups projects and Contect */}
        <div className='top_left_nav'>
          <a href="#project" className="top_left_nav">Projects</a>
          <a href="#contact" className="top_left_nav">Contact</a>
        </div>
        {/* Right item: Gallery page */}
        <Link to="/gallery" className='top_right_nav'>
          Gallery
        </Link>
      </div>
      {/* Main page content */}
      <Cv/>
      <Project/>
      <Contact/>
    </div>
  );
}

function App() {
  useEffect(() => {
    document.documentElement.style.backgroundColor = 'white'; // html
    document.body.style.backgroundColor = 'white';            // body
    const root = document.getElementById('root');
    if (root)
      root.style.backgroundColor = 'white';           // React root div
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App
