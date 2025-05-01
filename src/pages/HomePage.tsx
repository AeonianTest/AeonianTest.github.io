import '../css/pages/HomePage.css'
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
        <div className="OuterContainerHomePage">
            <div className="HeroSection">
                <h1>My Portfolio</h1>
                <p className="HeroSubtitle">Software Developer and Ethusiast</p>
                <div className="HeroButtons">
                    <Link to="/projects" className="PrimaryButton">View My Projects</Link>
                    <Link to="/about" className="SecondaryButton">Learn More About Me</Link>
                </div>
            </div>

            <div className="FeaturedSkills">
                <h2>What I Do</h2>
                <div className="SkillsGrid">
                    <div className="SkillCard">
                        <h3>Web Development</h3>
                        <p>Building responsive and interactive Full-Stack Web Applications</p>
                    </div>
                    <div className="SkillCard">
                        <h3>Software Engineering</h3>
                        <p>Designing and implementing efficient software solutions for real world problems</p>
                    </div>
                    <div className="SkillCard">
                        <h3>Problem Solving</h3>
                        <p>Creating innovative solutions to address complex challenges and issues</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;