import React from "react";
import { useState } from 'react';

import './Project.css'

import filletImage from "./assets/filletedge_maxradius.gif";
import reactImage from "./assets/0_EitUXT-pqbaQSCTt.gif";
import libftImage from "./assets/libft.png";
import pushswapVideo from "./assets/pushswap.webm";
import minishellImage from "./assets/minishell.png";
import miniRTVideo from "./assets/miniRT.webm";
import webserverImage from "./assets/webserver.png";
//import solongVideo from "./assets/solong.webm";
import CoinCollectorVideo from "./assets/CoinCollector.webm";

// an array of projects
const projects = [
    {
        title: "Non-destructive Filleting Tool(C++)",
        inshort: "FilletEdge extension for Rhino3d using Rhino SDK",
        description: "A C++ plugin for Rhino 3D that introduces a non-destructive approach to edge filleting, allowing designers to preserve editable base geometry while visualizing smooth blended edges in real time.",
        media: filletImage, // Replace with the actual imported variable name (e.g., cvPageImage)
        type: "image",
        link: "https://github.com/Yuxin29/NonDestructiveFilletEdge" // Update this to your main portfolio repo
        },
    {
    title: "Portfolio & CV Page (React, JavaScript)",
    inshort: "Accessible Single Page Application (SPA)",
    description: "An extendable full-stack portfolio website built to present my projects and background. Developed with React and Express, deployed on Vercel with automated CI/CD. This project introduced me to modern web development practices and continuous deployment in production environment",
    media: reactImage, // Replace with the actual imported variable name (e.g., cvPageImage)
    type: "image",
    link: "https://www.yuxinwu.eu/" // Update this to your main portfolio repo
    },
    {
        title: "Webserver (C++)",
        inshort: "Webserver built from scratch",
        description: "WebServer is a lightweight HTTP server implemented in C++ that mimics the core behavior of real-world web servers. In a team of three, I focused on server infrastructure, configuration parsing, and full request–response cycle, including HTTP request parsing, routing logic, and response generation. Learned a lot about teamwork and Git workflows.",
        media: webserverImage,
        type: "image",
        link: "https://github.com/Yuxin29/Webserver.git"
    },
    {
        title: "MiniRayTracer (C)",
        inshort: "RayTracer 3D Rendering",
        description: "MiniRayTracer is a lightweight ray tracer built using C and the MLX42 graphics library. Rendered simple 3D scenes simulating light rays. Implemented ray-object intersection, reflection, and simple lighting effects. Improved problem-solving skills in 3D rendering.",
        media: miniRTVideo,
        type: "video",
        link: "https://github.com/Yuxin29/my_miniRT.git"
    },
    {
        title: "MiniShell (C)",
        inshort: "Self-implemented Bash shell",
        description: "MiniShell is a simplified Bash shell with command execution, pipes, and I/O redirection. Focused on command parsing, special symbol handling, and user input management. Strengthened understanding of system calls, process management, and file descriptors.",
        media: minishellImage,
        type: "image",
        link: "https://github.com/Yuxin29/minishell"
    },
    {
        title: "Radix Sort (C)",
        inshort: "Sorting using two stacks and minimal ops",
        description: "Push_Swap is an algorithmic C project sorting integers using two stacks and limited operations. Implemented robust parsing, small-input optimized routines, and scalable radix strategy. Strengthened skills in algorithm design, complexity analysis, and low-level C programming.",
        media: pushswapVideo,
        type: "video",
        link: "https://github.com/Yuxin29/RadixSort-PushSwap.git"
    },
    {
        title: "MiniLibft (C)",
        inshort: "self-implemented C standard library",
        description: "MiniLibft reimplemented several core C library functions to understand their inner workings (malloc, free, strcpy, strlen, etc.). Gained deep understanding of memory management and writing efficient, error-free low-level code.",
        media: libftImage,
        type: "image",
        link: "https://github.com/Yuxin29/Mini_C_Library.git"
    },
    {
        title: "CoinCollector (Python)",
        inshort: "Collision, Map, and Sprite Engine",
        description: "Built with Python and Pygame. Implemented movement logic, map system, collision detection, and sprite rendering, including coin collection, enemy interactions, and win/lose conditions. Strengthened understanding of event handling, game loops, and interactive gameplay design.",
        media: CoinCollectorVideo,
        type: "video",
        link: "https://github.com/Yuxin29/CoinCollector.git"
    }
];

const getShortDescription = (description, maxLength = 200) => {
    if (description.length <= maxLength) {
        return description;
    }
    // Return truncated text with '...'
    return description.substring(0, maxLength).trim() + '...'; 
}

// map() us an array method that loops though all elements
// ternary condition ? valueIfTrue : valueIfFalse
// === strict equality operator
// == loose equality operator
function Project() {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const handleToggleDescription = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index)
    }
    return (
         <div id="project">
            <h2 className="title_text"> Projects</h2>
            {projects.map((proj, idx) => 
                {
                const isExpanded = expandedIndex === idx;
                const needsToggle = proj.description.length > 45;
                return (
                    <div className="project-card" key={idx}>
                        {proj.type === "image" ? 
                        (<img className="project-media" src={proj.media} alt={`${proj.title} preview`} />) 
                        : 
                        (
                            <video
                                className="project-video"
                                src={proj.media}
                                controls
                                loop
                                muted
                                playsInline
                                preload="metadata"
                            />
                        )}
                        <div className="project-text">
                            <h4>
                                <a href={proj.link} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                                    <b>{proj.title}</b>
                                </a>
                                <p>{proj.inshort}</p>
                            </h4>
                            <p>
                                {isExpanded || !needsToggle 
                                    ? proj.description // Show full text if expanded or short enough
                                    : getShortDescription(proj.description) // Show truncated text
                                }
                            </p>
                            
                            {/* Toggle Button (Only show if description is long) */}
                            {needsToggle && (
                                <button
                                    // Use the setter function to trigger the state change on click
                                    onClick={() => handleToggleDescription(idx)}
                                    // Minimal inline styles to make the button look like a link
                                    style={{ 
                                        border: 'none', 
                                        background: 'none', 
                                        color: '#aaaaaa', // A common link blue color
                                        cursor: 'pointer',
                                        padding: '0', 
                                        // textDecoration: 'underline',
                                        textAlign: 'left',
                                        display: 'block' // Ensure it takes its own line
                                    }}
                                >
                                    {isExpanded ? 'Show Less' : 'Show More'}
                                </button>
                            )}
                            {/* <p>{proj.description}</p> */}
                        </div>
                    </div>
                )
            }
            )}
        </div>
    );
}

export default Project