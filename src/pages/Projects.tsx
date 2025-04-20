import '../css/pages/Projects.css'
import React from 'react';

interface Project {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    repoLink: string;
} // May need images

const Projects: React.FC = () => {
    const ProjectsList: Project[] = [
        
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