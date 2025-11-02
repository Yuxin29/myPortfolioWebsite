import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  return (
    <div style={{
      maxWidth: "800px",
      margin: "40px auto",
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.6",
      color: "#222",
      padding: "20px"
    }}>
      <h1 style={{ textAlign: "left" }}>Yuxin Wu</h1>
      <p style={{ textAlign: "left" }}>
        Architect (5+ years) → Junior Software Developer
      </p>
      <p style={{ textAlign: "left" }}>
        📧 yuxin.1.wu@gmail.com | 📞 +358 466803054 | 📍 Helsinki, Finland
      </p>
      <p style={{ textAlign: "left" }}>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a> |{" "}
        <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
      </p>

      <h2 style={{ textAlign: "left" }}>About</h2>
      <p style={{ textAlign: "left" }}>
        I’m an architect transitioning into software development. Through my studies at Hive Helsinki,
        I’ve built a solid foundation in C, C++, and Python, focusing on algorithms, data structures,
        and problem-solving. My design and project management background trained me to:
      </p>
      <p style={{ textAlign: "left" }}>-Think systematically</p>
      <p style={{ textAlign: "left" }}>-Collaborate across multidisciplinary teams</p>
      <p style={{ textAlign: "left" }}>-Deliver precise, reliable, and efficient technical solutions under tight deadlines</p>

      <h2 style={{ textAlign: "left" }}>Education</h2>
      <p style={{ textAlign: "left" }}><b>Hive Helsinki</b> (FI), 2024 – Software Engineering</p>
      <p style={{ textAlign: "left" }}><b>Aalto University</b> (FI), 2019–2021 – Master of Science in Architecture</p>
      <p style={{ textAlign: "left" }}><b>Southeast University</b> (CN), 2014–2019 – Bachelor of Science in Architecture</p>
      <p style={{ textAlign: "left" }}><b>Iowa State University</b> (USA), 2018 – Exchange study</p>

      <h2 style={{ textAlign: "left" }}>Programming Projects (Hive Helsinki)</h2>
        <p style={{ textAlign: "left" }}><b>Mini-libft (C)</b> – Reimplemented C standard library functions.</p>
        <p style={{ textAlign: "left" }}><b>Minishell (C)</b> – Simplified Bash shell with pipes and redirection.</p>
        <p style={{ textAlign: "left" }}><b>MiniRT (C + MLX42)</b> – Lightweight ray tracer rendering 3D scenes.</p>
        <p style={{ textAlign: "left" }}><b>CoinDigger (Python)</b> – 2D grid-based game built with Pygame.</p>
        <p style={{ textAlign: "left" }}><b>C++ Modules</b> – Object-oriented exercises on inheritance and templates.</p>
        <p style={{ textAlign: "left" }}><b>Safe Lauttasaari</b> – Full-stack project showing road construction data.</p>

      <h2 style={{ textAlign: "left" }}>Tech Stacks</h2>
      <h3 style={{ textAlign: "left" }}>Languages</h3>
      <p style={{ textAlign: "left" }}>C, C++, Python, Bash, Makefile</p>
      <h3 style={{ textAlign: "left" }}>Tools</h3>
      <p style={{ textAlign: "left" }}>Linux, Virtual Machines, Debian, Git</p>
      <h3 style={{ textAlign: "left" }}>Web Development</h3>
      <p style={{ textAlign: "left" }}>HTML, Javascript, React</p>
      <h3 style={{ textAlign: "left" }}>Office</h3>
      <p style={{ textAlign: "left" }}>Slack, Teams, Discord, Microsoft</p>
      <h3 style={{ textAlign: "left" }}>Design</h3>
      <p style={{ textAlign: "left" }}>AutoCAD, 3D modeling, Adobe Suite, rendering engines</p>

      <h2 style={{ textAlign: "left" }}>Work Experience</h2>

      <p style={{ textAlign: "left" }}><b>Project Architect</b> – Architecture Office Eero Korhonen Oy, Helsinki (1.2023 – now)</p>
      <p style={{ textAlign: "left" }}>• Lead architectural design from concept to implementation.</p>
      <p style={{ textAlign: "left" }}>• Collaborated with multidisciplinary engineering teams</p>
      <p style={{ textAlign: "left" }}>• Coordinated between contractors and clients</p>
      
      <p style={{ textAlign: "left" }}><b>Architect</b> – Architecture Office Pet Michael Oy, Espoo (1.2022 – 12.2022)</p>
      
      <p style={{ textAlign: "left" }}><b>Assistant Architect</b> – H-K Architects / Powerhouse Company (9.2020 – 12.2022)</p>


      <h2 style={{ textAlign: "left" }}>Languages</h2>
      <p style={{ textAlign: "left" }}>Chinese (Native) </p>
      <p style={{ textAlign: "left" }}> English (Professional)</p>
      <p style={{ textAlign: "left" }}> Finnish (Professional)</p>

      <h2 style={{ textAlign: "left" }}>Certifications</h2>
      <ul>
        <p>Introduction to Programming (Python) – University of Helsinki</p>
        <p>Finnish Proficiency Test, Level 3</p>
        <p>English Proficiency Test, IELTS 7.5</p>
      </ul>

      <h2>Interests</h2>
      <p>GIS and mapping, Urban data, Visualization, Laser-cutting, 3D printing, Photography</p>


    </div>
  )
}

export default App
