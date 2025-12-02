// src/index.js (FINAL FIX)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'; 
import './index.css'

// 1. Import the App component (which now consumes context)
import App from './App.jsx'
// 2. Import the ThemeProvider
import { ThemeProvider } from './ThemeContext'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* CRITICAL STEP: The Provider wraps the App (Consumer) */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);