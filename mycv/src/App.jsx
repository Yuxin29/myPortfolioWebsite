import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import profilePic from './assets/profile.jpg';

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

      <img 
        src={profilePic} 
        alt="Yuxin Wu" 
        style={{ 
          width: "150px", 
          height: "150px", 
          borderRadius: "50%",  
          objectFit: "cover",    
          marginBottom: "1rem" 
        }} 
      />

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

      <h2>Tech Stacks</h2>
      <h4>Languages <span>C, C++, Python, Bash, Makefile</span> </h4>
      <h4>Tools <span>Linux, Virtual Machines, Debian, Git</span> </h4>
      <h4>Web Development <span>Microsoft, Slack, Discord</span> </h4>
      <h4>Office <span>C, C++, Python, Bash, Makefile</span> </h4>
      <h4>Design <span>AutoCAD, 3D modeling, Adobe Suite, rendering engines</span> </h4>
    

      <h2>Work Experience</h2>

      <h4>Project Architect <span>– Architecture Office Eero Korhonen Oy, Helsinki (1.2023 – now)</span> </h4>
      <p>• ustomer service and adapting design approach according to user's need.</p>
      <p>• Managing and implementing dynamic design changes based on construction site and contractor feedback</p>
      <p>• Cooperation between design departments such as HVAC-, interior designers and building control officers.</p>
      
      <h4>Architect <span>– Architecture Office Pet Michael Oy, Helsinki (1.2022 – 12.2022)</span> </h4>
      <p>• Housing design in permit phase and implementation phase.</p>

      <h4>Assistant Architect <span>– H-K Architects, Helsinki (1.2023 – now)</span> </h4>
      <p>• Project development in building information model using Archicad.</p>
      <p>• Use of real-time rendering and simulation platforms to support design workflows.</p>
      <p>• Design prototyping using computational aided design softwares.</p>

      <h4>Assistant Architect <span>– Powerhouse Company, Helsinki (1.2023 – now)</span> </h4>
      <p>• Computational Graphic Imaginary using various renders (V-ray, twinmiton)..</p>
      <p>• Conceptual and schematic building design and urban development.</p>
      <p>• Assistance in business develepment such as making the Chinese version Portfolio.</p>

      <h2>Languages</h2>
      <h4>Chinese <span> Native </span> </h4>
      <h4>English <span> Excellent (IELTS 7.5 / 9) </span> </h4>
      <h4>Finnish <span> Professional (YKI 3 / 5) </span> </h4>


      <h2>Interests</h2>
      <p>GIS and mapping, Urban data, Visualization, Laser-cutting, 3D printing, Photography</p>


    </div>
  )
}

export default App
