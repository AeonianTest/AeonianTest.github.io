import '../css/pages/HomePage.css'
import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/profile.png';

const skillGroups = [
    {
        title: 'Languages',
        items: 'C# / .NET, TypeScript/JavaScript (Node.js), Python, C/C++, Java, HTML/CSS, T-SQL, Shell scripting'
    },
    {
        title: 'Frameworks & APIs',
        items: 'ASP.NET, React, FastAPI, Spring Boot, Flask, RESTful API development, Umbraco CMS'
    },
    {
        title: 'Tools & DevOps',
        items: 'Git, GitHub, Azure DevOps, Cursor CLI, Docker, Snyk'
    },
    {
        title: 'Testing & Automation',
        items: 'JUnit, GDB/LLDB, Selenium'
    },
    {
        title: 'Concepts',
        items: 'Agile Methodology, Object-Oriented Programming, Data-Intensive Applications, Cloud Computing, CI/CD'
    },
    {
        title: 'Environments',
        items: 'Unix, macOS, Windows'
    },
    {
        title: 'Interpersonal',
        items: 'Cross-functional team collaboration, systems thinking & problem solving, clear technical communication, deadline & priority management, autonomous initiative, persistent curiosity'
    },
    {
        title: 'Activities & Interests',
        items: 'RMIT Matrix (competitive coding), sci-fi/fantasy & technical literature, board/card games'
    }
];

const HomePage: React.FC = () => {
    return (
        <div className="HomePage">
            <div className="HomeLayout">
                <div className="HomeIntro">
                    <img
                        className="HomePortrait"
                        src={profileImage}
                        alt="Hugh Cameron"
                    />
                    <div className="HomeIntroText">
                        <h1>Hugh Cameron</h1>
                        <p className="HomeBio">
                            Aspiring and dedicated software developer currently studying a Bachelor of Software Engineering at RMIT University.
                            Passionate about developing systems with positive impacts of national and global relevance.
                        </p>
                        <div className="HomeActions">
                            <Link to="/projects" className="PrimaryButton">View Projects</Link>
                            <a className="PrimaryButton" href="mailto:hugh.cameron@live.com.au">Contact Me</a>
                        </div>
                    </div>
                </div>

                <div className="HomeColumns">
                    <div className="HomeIdentity">
                        <section className="HomeSection">
                            <h2>Education</h2>
                            <div className="InfoItem">
                                <div className="InfoHeader">
                                    <h3>RMIT University</h3>
                                    <p className="InfoDate">2023 - Present</p>
                                </div>
                                <p>Bachelor of Software Engineering (Professional)</p>
                            </div>
                            <div className="InfoItem">
                                <div className="InfoHeader">
                                    <h3>Caulfield Grammar School</h3>
                                    <p className="InfoDate">2008 - 2022</p>
                                </div>
                                <p>Victorian Certificate of Education (VCE)</p>
                            </div>
                        </section>

                        <section className="HomeSection">
                            <h2>Skills & Interests</h2>
                            <div className="SkillsContainer">
                                {skillGroups.map(group => (
                                    <div className="SkillCategory" key={group.title}>
                                        <h3>{group.title}</h3>
                                        <p>{group.items}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="HomeWork">
                        <section className="HomeSection">
                            <h2>Professional Experience</h2>
                            <div className="InfoItem">
                                <div className="InfoHeader">
                                    <h3>Software Intern</h3>
                                    <p className="InfoDate">Mar 2026 - May 2026</p>
                                </div>
                                <p className="InfoOrg">Cavroc · Work Integrated Learning</p>
                                <ul>
                                    <li>Architected and developed a Python/FastAPI orchestration service to automate end-to-end CFD (Computational Fluid
                                        Dynamics) simulation workflows, eliminating hours of manual intervention in solver execution pipelines.</li>
                                    <li>Engineered containerised Flac3d & OpenFOAM solver environments using Docker to ensure reproducible, isolated simulation execution
                                        across deployments, viewable through data-analysis platforms (Paraview, etc).</li>
                                </ul>
                            </div>
                            <div className="InfoItem">
                                <div className="InfoHeader">
                                    <h3>Software Developer Intern</h3>
                                    <p className="InfoDate">Feb 2025 - Feb 2026</p>
                                </div>
                                <p className="InfoOrg">WEX Inc.</p>
                                <ul>
                                    <li>Delivered a zero-downtime full lifecycle migration to the Equifax Marketing API in C# .NET, eliminating legacy integration risk while maintaining uninterrupted service across production systems.</li>
                                    <li>Maintained and optimised critical Fuel Card payment systems serving dozens of clients, ensuring high availability and compliance with strict internal code standards.</li>
                                    <li>Collaborated cross-functionally with Marketing, Product, Credit, and SRE teams to design and ship customer-facing and internal Fuel Card payment features, translating business requirements into production-ready software.</li>
                                    <li>Operated within an Agile environment to deliver system improvements and support critical business applications through ticket resolution.</li>
                                    <li>Owned feature ticket workflow to meet monthly deployment schedules while supporting colleagues across concurrent project streams with peer code-reviews.</li>
                                    <li>Utilising a wide range of technologies including .NET, SQL, IIS, Azure, and more</li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
