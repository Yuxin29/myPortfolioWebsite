import React from "react";
import './Project.css'

import libftImage from "./assets/libft.png";
import pushswapVideo from "./assets/pushswap.webm";
import minishellImage from "./assets/minishell.png";
import miniRTVideo from "./assets/miniRT.webm";
import webserverImage from "./assets/webserver.png";
import solongVideo from "./assets/solong.webm";
import CoinCollectorVideo from "./assets/CoinCollector.webm";

function Project() {
    return (
        <div id="project">
            <h2 style={{ textAlign: "left" }}>Programming Projects (Hive Helsinki)</h2>
            <div className="project-card">
                <img
                    className="project-media"
                    src={webserverImage}
                    alt="Libft project preview"
                />

                <div className="project-text">
                    <h4>
                        <b>Webserver (C++)</b>
                        <span> Webserver built from scratch.</span>
                    </h4>
                    <p>
                        WebServer is a lightweight HTTP server implemented in C++ that mimics the core behavior of real-world web servers. In a team of three, forcucing individually on the server infrastructure, configuration parsing and full request–response cycle(me), including HTTP request parsing, routing logic, and response generation.                      
                        Throughout this project, Ilearned a great deal about teamwork, Git branch management, and coordinating development workflows in a multi-developer environment.
                    </p>
                </div>
            </div>

            <div className="project-card">
                <video
                    className="project-video"
                    src={miniRTVideo}
                    controls
                    loop
                    muted
                    playsInline
                    preload="metadata"
                >
                </video>
                <div className="project-text">
                    <h4>
                        <a href="https://github.com/Yuxin29/my_miniRT.git"
                           target="_blank"
                           rel="noreferrer"
                           style={{ textDecoration: "none", color: "inherit" }}>
                           <b>MiniRayTracer (C)</b>
                        </a>
                        <span> Created a ray tracer to explore 3D rendering algorithms.</span>
                    </h4>
                    <p>
                        MMiniRayTracer is a lightweight ray tracer built using C and the MLX42 graphics library. The project involves rendering simple 3D scenes by simulating the behavior of light rays as they interact with objects. I implemented basic features such as ray-object intersection, reflection, and simple lighting effects. This project helped me improve my problem-solving skills in computer graphics and algorithms for 3D rendering.
                    </p>
                </div>
            </div>

            <div className="project-card">
                <img
                    className="project-media"
                    src={minishellImage}
                    alt="Libft project preview"
                />

                <div className="project-text">
                    <h4>
                        <a href="https://github.com/Yuxin29/minishell"
                           target="_blank"
                           rel="noreferrer"
                           style={{ textDecoration: "none", color: "inherit" }}>
                           <b>MiniShell (C)</b>
                        </a>
                        <span> Self-implemented Bash shell.</span>
                    </h4>
                    <p>
                        MiniShell is a simplified version of the Bash shell. It includes essential features like executing commands, handling pipes, and performing input/output redirection. The project focuses on building a functional shell with command parsing, handling of special symbols, and user input management. It allowed me to improve my understanding of system calls, process management, and file descriptors in a Unix-based environment.
                    </p>
                </div>
            </div>

            <div className="project-card">
                <video
                    className="project-video"
                    src={pushswapVideo}
                    controls
                    loop
                    muted
                    playsInline
                    preload="metadata"
                >
                </video>
                <div className="project-text">
                    <h4>
                        <a href="https://github.com/Yuxin29/my_miniRT.git"
                           target="_blank"
                           rel="noreferrer"
                           style={{ textDecoration: "none", color: "inherit" }}>
                           <b>Radix Sort (C)</b>
                        </a>
                        <span> Sorting challenge using two stacks and minimal operations.</span>
                    </h4>
                    <p>
                        Push_Swap is an algorithmic C project where I wrote a solver that sorts a sequence of integers using only two stacks and the allowed operations (sa, sb, ss, pa, pb, ra, rb, rr, rra, rrb, rrr). I implemented robust input parsing and error handling, small-input optimized routines, and a scalable strategy (radix) for larger inputs. The project strengthened my skills in algorithm design, complexity analysis, low-level C programming, and writing tests that verify correctness and measure move-efficiency.
                    </p>
                </div>
            </div>

            <div className="project-card">
                <img
                    className="project-media"
                    src={libftImage}
                    alt="Libft project preview"
                />
                <div className="project-text">
                    <h4>
                        <a href="https://github.com/Yuxin29/Mini_C_Library.git"
                           target="_blank"
                           rel="noreferrer"
                           style={{ textDecoration: "none", color: "inherit" }}>
                           <b>MiniLibft (C)</b> </a>
                        <span> self-implemented C standard library functions.</span>
                    </h4>
                    <p>
                        MiniLibft is a project where I reimplemented several core functions from the C standard library. The goal was to understand the inner workings of common library functions such as malloc, free, strcpy, strlen, and more. This project provided me with a deep understanding of memory management and the importance of efficient, error-free coding when dealing with low-level operations.
                    </p>
                </div>
            </div>

            <div className="project-card">
                <video
                    className="project-video"
                    src={CoinCollectorVideo}
                    controls
                    loop
                    muted
                    playsInline
                    preload="metadata"
                >
                    Your browser does not support the video tag.
                </video>

                <div className="project-text">
                    <h4>
                        <a href="https://github.com/Yuxin29/Solong.git"
                           target="_blank"
                           rel="noreferrer"
                           style={{ textDecoration: "none", color: "inherit" }}>
                           <b>CoinCollector(Python)</b>
                        </a>
                        <span> a game where a robot collects coins, escapes ghosts. </span>
                    </h4>
                    <p> . </p>
                    <p>
                        Built with Python and Pygame, I implemented the movement logic, map system, collision detection, and sprite rendering, including coin collection, enemy interactions, and win/lose conditions. This project strengthened my understanding of event handling, game loops and real-time graphics, while providing experience in designing interactive gameplay and user feedback.                    </p>
                </div>
            </div>

            {/* <div className="project-card">
                <video
                    className="project-video"
                    src={solongVideo}
                    controls
                    loop
                    muted
                    playsInline
                    preload="metadata"
                >
                    Your browser does not support the video tag.
                </video>

                <div className="project-text">
                    <h4>
                        <a href="https://github.com/Yuxin29/Solong.git"
                           target="_blank"
                           rel="noreferrer"
                           style={{ textDecoration: "none", color: "inherit" }}>
                           <b>MushroomPicker (C)</b>
                        </a>
                        <span> — a 2D game where a Shiba picks up boletus.</span>
                    </h4>
                    <p>
                        Mushroom_picker is a 2D adventure game built with C and MLX42, 
                        where a Shiba Inu collects mushrooms in the forest. 
                        I designed the movement logic, map parsing, and sprite animation system. 
                        This project helped me understand event handling, 
                        image rendering, and performance optimization in real-time graphics.
                    </p>
                </div>
            </div> */}

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

        </div>
    );
}

export default Project