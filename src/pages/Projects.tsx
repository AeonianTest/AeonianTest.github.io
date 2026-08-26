import '../css/pages/Projects.css'
import React, { useRef, useState } from 'react';
import projectImages from '../utils/projectImages';

// Model for an image/video and its data
interface ProjectImage {
    image: string;
    altText: string;
    isVideo?: boolean;
    poster?: string;
}

interface ProjectMediaProps {
    media: ProjectImage;
    playOnClick?: boolean;
}

const showVideoFirstFrame = (video: HTMLVideoElement) => {
    if (video.currentTime === 0) {
        video.currentTime = 0.001;
    }
};

const ProjectMedia: React.FC<ProjectMediaProps> = ({ media, playOnClick = false }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleTogglePlayback = (event: React.MouseEvent | React.KeyboardEvent) => {
        if (!playOnClick || !videoRef.current) {
            return;
        }

        event.stopPropagation();
        const video = videoRef.current;

        if (video.paused) {
            void video.play();
        } else {
            video.pause();
        }
    };

    if (!media.isVideo) {
        return <img src={media.image} alt={media.altText} />;
    }

    if (!playOnClick && media.poster) {
        return <img src={media.poster} alt={media.altText} />;
    }

    return (
        <div
            className={`ProjectVideo${playOnClick ? ' ProjectVideo--interactive' : ''}`}
            onClick={handleTogglePlayback}
            onKeyDown={event => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    handleTogglePlayback(event);
                }
            }}
            role={playOnClick ? 'button' : undefined}
            tabIndex={playOnClick ? 0 : undefined}
            aria-label={playOnClick ? `${isPlaying ? 'Pause' : 'Play'} ${media.altText}` : undefined}
        >
            <video
                ref={videoRef}
                src={media.image}
                poster={media.poster}
                preload="metadata"
                playsInline
                onLoadedMetadata={event => showVideoFirstFrame(event.currentTarget)}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={event => {
                    setIsPlaying(false);
                    event.currentTarget.currentTime = 0.001;
                }}
                aria-label={media.altText}
            />
            {!isPlaying && (
                <span className="VideoPlayBadge" aria-hidden="true">▶</span>
            )}
        </div>
    );
};

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
            id: 8,
            title: "Sorcerous Applications",
            description: "A Terraria magic-focused content mod built with tModLoader, adding custom magic gameplay",
            techStack: ["C#", "tModLoader"],
            repoLink: "https://github.com/AeonianTest/SorcerousApplications",
            projectImages: [
            {
                image: projectImages.Project8_1_video,
                poster: projectImages.Project8_1,
                altText: "Gameplay of Sorcerous Applications magic projectile stream in Terraria",
                isVideo: true
            }
            ]
        },
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
        },
        {
            id: 7,
            title: "guiApp",
            description: "Mock student enrollment system writen in Java",
            techStack: ["Java", "Maven", "JavaFX"],
            repoLink: "https://github.com/AeonianTest/guiApp.git",
            projectImages: [
            {
                image: projectImages.Project7_1,
                altText: "Screenshot of the Java guiApp dashboard"
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
                                <ProjectMedia media={project.projectImages[0]} />
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
                                        <ProjectMedia
                                            media={selectedProject.projectImages[0]}
                                            playOnClick
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