import '../css/pages/Projects.css'
import React, { useState } from 'react';
import projectImages from '../utils/projectImages';

// Model for an image and its data
interface ProjectImage {
    image: string;
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
    projectImages: ProjectImage[]; // TODO: Carraige of images?
}

const Projects: React.FC = () => {    
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
            projectImages: [
            {
                image: projectImages.Project1_1,
                altText: "Screenshot of the personal website"
            }
            ]
        },
        {
            id: 2,
            title: "Shell (BACI)",
            description: "A basic UNIX shell implementation written in C, POSIX standard compliant",
            techStack: ["C", "POSIX Syscalls", "UNIX"],
            repoLink: "https://github.com/AeonianTest/Shell",
            projectImages: [
            {
                image: projectImages.Project2_1,
                altText: "Screenshot of the Shell"
            }
            ]
        },
        {
            id: 3,
            title: "eCom-app",
            description: "An E-Commerce website mockup with user auth, item shopping and responsive website",
            techStack: ["React", "Javascript", "SQL"],
            repoLink: "https://github.com/AeonianTest/eCom-app.git",
            projectImages: [
            {
                image: projectImages.Project3_1,
                altText: "Screenshot of the eCom-app"
            }
            ]
        },
        {
            id: 4,
            title: "Map Generator",
            description: "Basic 2D Command Line map-generator using Recursive Backtracking",
            techStack: ["C++", "Algorithms"],
            repoLink: "https://github.com/AeonianTest/mapGen.git",
            projectImages: [
            {
                image: projectImages.Project4_1,
                altText: "Screenshot of a generated 2D map"
            }
            ]
        },
        {
            id: 5,
            title: "Flask Website",
            description: "Lightweight website constructed using Python Flask framework",
            techStack: ["Python", "Flask"],
            repoLink: "https://github.com/AeonianTest/flask-website.git",
            projectImages: [
            {
                image: projectImages.Project5_1,
                altText: "Screenshot of the Flask website"
            }
            ]
        },
        {
            id: 6,
            title: "AES-128 Encoder/Decoder",
            description: "AES-128 Encoder/Decoder implemented in C",
            techStack: ["C", "AES-128"],
            repoLink: "https://github.com/AeonianTest/Encoder.git",
            projectImages: [
            {
                image: projectImages.Project6_1,
                altText: "Screenshot of the AES-128 Encoder/Decoder"
            }
            ]
        }
        
    ]

    // Handle user clicking on a project card
    // On click, pass the project object to the overlay (modal)
    const handleCardClick = (project: Project) => {
        setSelectedProject(project);
    };

    // Handle user closing the overlay
    // On click we set overlay project to null
    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="OuterContainerProjects">
            <div className="ProjectsHeader">
                <h2>My Projects</h2>
                <p>Collection of my Personal Projects</p>
            </div>
            <div className="ProjectsGrid">
                { ProjectsList.map(project => (
                    <div 
                        key={project.id} 
                        className="ProjectCard"
                        onClick={() => handleCardClick(project)}
                    >
                        <div className="ProjectInfo">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                        <div className="ProjectImage">
                            { project.projectImages.length > 0 &&
                                <img src={project.projectImages[0].image} alt={project.projectImages[0].altText} />
                            }
                        </div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="ProjectModalOverlay" onClick={handleCloseModal}>
                    <div className="ProjectModal" onClick={event => event.stopPropagation()}>
                        <button className="CloseButton" onClick={handleCloseModal}>×</button>
                        <div className="ModalContent">
                            <div className="ModalHeader">
                                <h2>{selectedProject.title}</h2>
                                <div className="ProjectLinks">
                                    <a href={selectedProject.repoLink} target="_blank" rel="noopener noreferrer" className="RepoLink">
                                        View Repository
                                    </a>
                                    {selectedProject.liveLink && (
                                        <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="LiveLink">
                                            Live link
                                        </a>
                                    )}
                                </div>
                            </div> 
                            <div className="ModalBody">
                                <div className="ModalImage">
                                    {selectedProject.projectImages.length > 0 && (
                                        <img 
                                            src={selectedProject.projectImages[0].image} 
                                            alt={selectedProject.projectImages[0].altText} 
                                        />
                                    )}
                                </div>
                                <div className="ModalInfo">
                                    <p className="ModalDescription">{selectedProject.description}</p>
                                    <div className="TechStack">
                                        <h3>Technologies Used</h3>
                                        <div className="TechTags">
                                            {selectedProject.techStack.map((tech, index) => (
                                                <span key={index} className="TechTag">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Projects;