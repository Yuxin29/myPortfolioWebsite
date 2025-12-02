//import { useEffect } from 'react'
import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import './App.css'
import { useTheme } from './ThemeContext';

import Project from './Project';
import Contact from './Contact';
import Gallery from './Gallery';
import Cv from './Cv';

// --- Accessibility Toggle Button ---
function AccessibilityToggleButton() {
  const { isAccessibilityMode, toggleAccessibility } = useTheme();

  const buttonLabel = isAccessibilityMode 
    ? 'Disable High Accessibility Mode' 
    : 'Enable High Accessibility Mode (Larger Text/Bolder Focus)';
    
  return (
    <button
      onClick={toggleAccessibility}
      title={buttonLabel}
      aria-label={buttonLabel}
      className={`accessibility-toggle-button`}
    >
      {isAccessibilityMode ? 'Standard' : 'Accessible'}
    </button>
  );
}

function MainPage() {
  return (
    <div className="main_container">
      <div className="top_nav">

        <div className='top_left_nav'>
          <a href="#project" className="top_left_nav">Projects</a>
          <a href="#contact" className="top_left_nav">Contact</a>
          <Link to="/gallery" className='top_right_nav'>
            Gallery
          </Link>
        </div>

        <div className="nav_controls">
          <AccessibilityToggleButton />
        </div>

      </div>

      <Cv/>
      <Project/>
      <Contact/>
    </div>
  );
}

// useEffect perform side effects in functional components, side effects are anything that interacts with the "outside word"
// for explample fetching data(API calls), manuakkt changing DOM, setting up event listerns
  // useEffect(() => {
  //   document.documentElement.style.backgroundColor = 'white'; // html
  //   document.body.style.backgroundColor = 'white';            // body
  //   const root = document.getElementById('root');
  //   if (root)
  //     root.style.backgroundColor = 'white';           // React root div
  // }, []);
// however, this is not the best practice to overwrite React
// so I did it in App.css
function App() {
  const { theme, isAccessibilityMode } = useTheme();
  const accessibilityClass = isAccessibilityMode ? 'high-accessibility' : 'normal-mode'
  return (
    <div 
      // Apply theme and accessibility attributes to the outermost div
      className={`app-container ${theme} ${accessibilityClass}`} 
      data-access={isAccessibilityMode ? 'on' : 'off'} 
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App

