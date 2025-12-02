import React from "react";
import { useState } from 'react';

import './Project.css'

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
        title: "Webserver (C++)",
        inshort: "Webserver built from scratch",
        description: "WebServer is a lightweight HTTP server implemented in C++ that mimics the core behavior of real-world web servers. In a team of three, I focused on server infrastructure, configuration parsing, and full request–response cycle, including HTTP request parsing, routing logic, and response generation. Learned a lot about teamwork and Git workflows.",
        media: webserverImage,
        type: "image",
        link: "https://github.com/Yuxin29/Webserver.git"
    },
    {
        title: "MiniRayTracer (C)",
        inshort: "Created a ray tracer to explore 3D rendering algorithms",
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
        inshort: "Sorting algorithm using two stacks and minimal operations",
        description: "Push_Swap is an algorithmic C project sorting integers using two stacks and limited operations. Implemented robust parsing, small-input optimized routines, and scalable radix strategy. Strengthened skills in algorithm design, complexity analysis, and low-level C programming.",
        media: pushswapVideo,
        type: "video",
        link: "https://github.com/Yuxin29/RadixSort-PushSwap.git"
    },
    {
        title: "MiniLibft (C)",
        inshort: "self-implemented C standard library functions",
        description: "MiniLibft reimplemented several core C library functions to understand their inner workings (malloc, free, strcpy, strlen, etc.). Gained deep understanding of memory management and writing efficient, error-free low-level code.",
        media: libftImage,
        type: "image",
        link: "https://github.com/Yuxin29/Mini_C_Library.git"
    },
    {
        title: "CoinCollector (Python)",
        inshort: "a game where a robot collects coins, escapes devils",
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
                const needsToggle = proj.description.length > 100;
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