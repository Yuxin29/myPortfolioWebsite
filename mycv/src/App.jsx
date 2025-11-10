import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Gallery from './Gallery';
import Contact from './Contact';

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

    <div style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      marginBottom: "10px"
    }}>
      {/* Left group */}
      <div style={{ display: "flex", gap: "10px" }}>
        <a
          href="#project"
          style={{
            backgroundColor: "#b5e4ffff",
            color: "blue",
            padding: "8px 14px",
            fontWeight: "bold",
            textDecoration: "none"
          }}
        >
          My project
        </a>

        <a
          href="#contact"
          style={{
            backgroundColor: "#b5e4ffff",
            color: "blue",
            padding: "8px 14px",
            fontWeight: "bold",
            textDecoration: "none"
          }}
        >
          Contact me
        </a>
      </div>

      {/* Right item */}
      <a
        href="#gallery"
        style={{
          backgroundColor: "#001c2cff",
          color: "white",
          padding: "8px 14px",
          fontWeight: "bold",
          textDecoration: "none"
        }}
      >
        My hobby
      </a>
    </div>


      <h1 style={{ textAlign: "left" }}>Yuxin Wu</h1>
      <p>
        Architect (5+ years) → Junior Software Developer
      </p>
      <p>
        📧 yuxin.1.wu@gmail.com | 📞 +358 466803054 | 📍 Helsinki, Finland
      </p>
      <p>
        <a href="in/yuxin-w-ab719b198" target="_blank" rel="noreferrer">LinkedIn</a> |{" "}
        <a href="https://github.com/Yuxin29" target="_blank" rel="noreferrer">GitHub</a>
      </p>

      <h2>About</h2>
      <p>
        I’m an architect transitioning into software development. Through my studies at Hive Helsinki,
        I’ve built a solid foundation in C, C++, and Python, focusing on algorithms, data structures,
        and problem-solving. My design and project management background trained me to:
      </p>
      <p>-Think systematically</p>
      <p>-Collaborate across multidisciplinary teams</p>
      <p>-Deliver precise, reliable, and efficient technical solutions under tight deadlines</p>
      
      <h2>Tech Stacks</h2>
      <h4>Programming Languages <span>C, C++, Python, Bash, Makefile</span> </h4>
      <h4>Tools <span>Linux, Virtual Machines, Debian, Git</span> </h4>
      <h4>Offices <span>Microsoft, Slack, Discord</span> </h4>
      <h4>Design <span>AutoCAD, 3D modeling, rendering, visualization, Adobe Suite, Laser-cutting, 3D printing</span> </h4>
      <h4>Communications <span>Chinese(native), English(Excellent), Finnish(conversational) </span> </h4>
      
      <h2>Work Experience</h2>
      <h4>Project Architect <span>– Architecture Office Eero Korhonen Oy, Helsinki (1.2023 – now)</span> </h4>
      <h4>Architect <span>– Architecture Office Pet Michael Oy, Helsinki (1.2022 – 12.2022)</span> </h4>
      <h4>Assistant Architect <span>– H-K Architects, Helsinki (1.2023 – now)</span> </h4>
      <h4>Assistant Architect <span>– Powerhouse Company, Helsinki (1.2023 – now)</span> </h4>
    
      <h2 style={{ textAlign: "left" }}>Education</h2>
      <h4><b>Hive Helsinki, Finland</b> <span> Software Engineering 04.2024 – now</span></h4>
      <h4><b>Aalto University, Finland</b> <span> Master of Science in Architecture  2019–2021</span></h4>
      <h4><b>Southeast University, China</b> <span> Bachelor of Science in Architecture  2014–2019</span></h4>
      <h4><b>Iowa State University, USA</b> <span> Exchange study 2018</span></h4>


      <h2>Programming Projects (Hive Helsinki)</h2>
  
        <h4>
          <a href="https://github.com/Yuxin29/minishell" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
          <b>MiniLibft (C)</b>
          </a>
          <span> self-implemented C standard library functions </span>
        </h4>
        <p>MiniLibft is a project where I reimplemented several core functions from the C standard library. The goal was to understand the inner workings of common library functions such as malloc, free, strcpy, strlen, and more. This project provided me with a deep understanding of memory management and the importance of efficient, error-free coding when dealing with low-level operations.</p>

        <h4>
          <a href="https://github.com/Yuxin29/minishell" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
          <b>MiniShell (C)</b>
          </a>
          <span> Self-implemented Bash to practice command parsing, system calls and process management. </span>
        </h4>
        <p>MiniShell is a simplified version of the Bash shell built in C. It includes essential features like executing commands, handling pipes, and performing input/output redirection. The project focuses on building a functional shell with command parsing, handling of special symbols, and user input management. It allowed me to improve my understanding of system calls, process management, and file descriptors in a Unix-based environment.</p>

        <h4>
          <a href="https://github.com/Yuxin29/minishell" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
          <b>MiniRayTracer (C)</b>
          </a>
          <span> Created a lightweight ray tracer to explore 3D rendering algorithms. </span>
        </h4>
        <p>MiniRayTracer is a lightweight ray tracer built using C and the MLX42 graphics library. The project involves rendering simple 3D scenes by simulating the behavior of light rays as they interact with objects. I implemented basic features such as ray-object intersection, reflection, and simple lighting effects. This project helped me improve my problem-solving skills in computer graphics and algorithms for 3D rendering.</p>

        <h4>
          <a href="https://github.com/Yuxin29/minishell" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
          <b>CoinDigger (Python)</b>
          </a>
          <span> Developed a 2D game  to enhance skills OOP and interactive interfaces. </span>
        </h4>
        <p>CoinDigger is a 2D grid-based game built using Python and the Pygame library. In the game, players explore a grid filled with hidden coins, and their objective is to dig and find as many coins as possible while avoiding obstacles. This project helped me sharpen my skills in Python game development, algorithms, and object-oriented programming. It also allowed me to practice creating interactive user interfaces with Pygame.</p>

        <h4>
          <a href="https://github.com/Yuxin29/minishell" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
          <b>C++ Modules (C++)</b>
          </a>
          <span> Object-oriented exercises to understand C++ programming principles. </span>
        </h4>
        <p>The C++ Modules project involves various exercises focused on object-oriented programming (OOP) in C++. It includes exercises on inheritance, polymorphism, templates, and other OOP principles. By implementing these modules, I strengthened my understanding of advanced C++ concepts and how to structure and manage complex systems efficiently. The project also enhanced my skills in working with memory management and template programming.</p>

      {/* 🩵 在这里添加 Gallery 组件 */}
      <Gallery />
      <Contact/>


    </div>
    
  )
}

export default App
