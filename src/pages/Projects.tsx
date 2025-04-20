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
    projectImage?: ProjectImage; // TODO: Source images and make this field mandatory
}

const Projects: React.FC = () => {    
    // Source of data to accomodate website limitations
    const ProjectsList: Project[] = [
        {
            id: 1,
            title: "Title1",
            description: "Des1",
            techStack: ["Tech1"],
            repoLink: "https://location.com",
            liveLink: "Website link",
            projectImage: {
                path: "/path/to/image",
                altText: "Description of the image"
            }
        },
        {
            id: 2,
            title: "Title2",
            description: "Des2",
            techStack: ["Tech2"],
            repoLink: "https://location.com"
        },
        {
            id: 3,
            title: "Title3",
            description: "Des3",
            techStack: ["Tech3"],
            repoLink: "https://location.com"
        }
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