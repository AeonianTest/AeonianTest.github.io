import '../css/pages/Projects.css'
import React from 'react';

// Model for an image and its data
interface ProjectImage {
    url: string;
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
    projectImage?: ProjectImage;
}

const Projects: React.FC = () => {    
    // Source of data to accomodate website limitations
    const ProjectsList: Project[] = [
        {
            id: 1,
            title: "Title1",
            description: "Des1",
            techStack: ["Tech1"],
            repoLink: "https://location.com"
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
                <h1>My Projects</h1>
            </div>
        </div>
    )
}

export default Projects;