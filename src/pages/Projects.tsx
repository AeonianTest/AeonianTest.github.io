import '../css/pages/Projects.css'
import React from 'react';

// Model for an image and its data
interface ProjectImage {
    path: string;
    altText: string;
}

// Model for Project object
interface Project {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    repoLink: string;
    liveLink?: string;
    projectImage?: ProjectImage[]; // TODO: Source images and make this field mandatory
}

const Projects: React.FC = () => {    
    // Source of data to accomodate website limitations
    // Don't believe a db can be used in this context
    const ProjectsList: Project[] = [
        {
            id: 1,
            title: "AeonianTest.github.io",
            description: "Personal website (what you are looking at!) to host my personal details and projects",
            techStack: ["React", "Typescript"],
            repoLink: "https://github.com/AeonianTest/AeonianTest.github.io.git",
            liveLink: "https://aeoniantest.github.io/",
            projectImage: [
            {
                path: "/path/to/image",
                altText: "Description of the image"
            }
            ]
        },
        {
            id: 2,
            title: "Shell (BACI)",
            description: "A basic UNIX shell implementation written in C",
            techStack: ["C", "POSIX Syscalls", "UNIX"],
            repoLink: "https://github.com/AeonianTest/Shell"
        },
        {
            id: 3,
            title: "eCom-app",
            description: "An E-Commerce website mockup with user auth, item shopping and responsive website",
            techStack: ["React", "Javascript", "SQL"],
            repoLink: "https://github.com/AeonianTest/eCom-app.git"
        },
        {
            id: 4,
            title: "Map Generator",
            description: "Basic 2D Command Line map-generator using Recursive Backtracking",
            techStack: ["C++", "Algorithms"],
            repoLink: "https://github.com/AeonianTest/mapGen.git"
        },
        {
            id: 5,
            title: "Flask Website",
            description: "Lightweight website constructed using Python Flask framework",
            techStack: ["Python", "Flask"],
            repoLink: "https://github.com/AeonianTest/flask-website.git"
        } // TODO: Even the projects once CSS and else nailed
    ]

    return (
        <div className="OuterContainerProjects">
            <div className="ProjectsHeader">
                <h2>My Projects</h2>
                <p>Collection of my Personal Projects</p>
            </div>
            <div className="ProjectsGrid">
                { ProjectsList.map(project => (
                    <div key={project.id} className="ProjectCard">
                        <div className="ProjectInfo">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            {/* TODO: Add tech stack mapping */}
                        </div>
                        <div className="ProjectImage">
                            Image placeholder
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;