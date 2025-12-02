//import { useEffect } from 'react'
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

        <div className='top_left_nav'>
          <a href="#project" className="top_left_nav">Projects</a>
          <a href="#contact" className="top_left_nav">Contact</a>
        </div>

        <Link to="/gallery" className='top_right_nav'>
          Gallery
        </Link>

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
