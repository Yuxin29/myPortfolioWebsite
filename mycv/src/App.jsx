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
      <h1 style={{ textAlign: "center" }}>Yuxin Wu</h1>
      <p style={{ textAlign: "center" }}>
        Architect (5+ years) → Junior Software Developer
      </p>
      <p style={{ textAlign: "center" }}>
        📧 yuxin.1.wu@gmail.com | 📞 +358 466803054 | 📍 Helsinki, Finland
      </p>
      <p style={{ textAlign: "center" }}>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a> |{" "}
        <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
      </p>

      <h2>About</h2>
      <p>
        I’m an architect transitioning into software development. Through my studies at Hive Helsinki,
        I’ve built a solid foundation in C, C++, and Python, focusing on algorithms, data structures,
        and problem-solving. My design and project management background trained me to:
      </p>
      <ul>
        <li>Think systematically</li>
        <li>Collaborate across multidisciplinary teams</li>
        <li>Deliver precise, reliable, and efficient technical solutions under tight deadlines</li>
      </ul>

      <h2>Tech Stacks</h2>
      <h3>Languages</h3>
      <p>C, C++, Python, Bash, Makefile</p>
      <h3>Tools</h3>
      <p>Linux, Virtual Machines, Debian, Git</p>
      <h3>Web Development</h3>
      <p>HTML, REST API</p>
      <h3>Office</h3>
      <p>Slack, Teams, Discord, Microsoft</p>
      <h3>Design</h3>
      <p>AutoCAD, 3D modeling, Adobe Suite, rendering engines</p>

      <h2>Education</h2>
      <ul>
        <li><b>Hive Helsinki</b> (FI), 2024 – Software Engineering</li>
        <li><b>Aalto University</b> (FI), 2019–2021 – Master of Science in Architecture</li>
        <li><b>Southeast University</b> (CN), 2014–2019 – Bachelor of Science in Architecture</li>
        <li><b>Iowa State University</b> (USA), 2018 – Exchange study</li>
      </ul>

      <h2>Languages</h2>
      <p>Chinese (Native), English / Finnish (Professional)</p>

      <h2>Certifications</h2>
      <ul>
        <li>Introduction to Programming (Python) – University of Helsinki</li>
        <li>Finnish Proficiency Test, Level 3</li>
        <li>English Proficiency Test, IELTS 7.5</li>
      </ul>

      <h2>Interests</h2>
      <p>GIS and mapping, Urban data, Visualization, Laser-cutting, 3D printing, Photography</p>

      <h2>Programming Projects (Hive Helsinki)</h2>
      <ul>
        <li><b>Mini-libft (C)</b> – Reimplemented C standard library functions.</li>
        <li><b>Minishell (C)</b> – Simplified Bash shell with pipes and redirection.</li>
        <li><b>MiniRT (C + MLX42)</b> – Lightweight ray tracer rendering 3D scenes.</li>
        <li><b>CoinDigger (Python)</b> – 2D grid-based game built with Pygame.</li>
        <li><b>C++ Modules</b> – Object-oriented exercises on inheritance and templates.</li>
        <li><b>Safe Lauttasaari</b> – Full-stack project showing road construction data.</li>
      </ul>

      <h2>Work Experience</h2>
      <ul>
        <li><b>Project Architect</b> – Architecture Office Eero Korhonen Oy, Helsinki (1.2023 – now)</li>
        <li><b>Architect</b> – Architecture Office Pet Michael Oy, Espoo (1.2022 – 12.2022)</li>
        <li><b>Assistant Architect</b> – H-K Architects / Powerhouse Company (9.2020 – 12.2022)</li>
      </ul>
    </div>
  )
}

export default App
