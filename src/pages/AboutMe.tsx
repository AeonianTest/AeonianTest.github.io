import '../css/pages/AboutMe.css'
import React from 'react';

const AboutMe: React.FC = () => {


    return (
        <div className="OuterContainerAboutMe">       
            <div className="AboutMeHeader">
                <h2>About Me</h2>
                <p>A brief introduction about myself</p>
            </div>
            <div className="AboutMeContent">
                <section className="AboutMeSection">
                    <h3>Who I Am</h3>
                    <div className="AboutMeText">
                        <p>
                            Aspiring and dedicated software developer currently studying at RMIT a Bachelor of Software Engineering. 
                            Passionate about developing systems with positive global impacts.
                        </p>
                    </div>
                </section>
                <section className="AboutMeSection">
                    <h3>Skills</h3>
                    <div className="SkillsContainer">
                        <div className="SkillCategory">
                            <h4>Programming Languages</h4>
                            <ul>
                                <li>JavaScript/TypeScript</li>
                                <li>Python</li>
                                <li>C/C++</li>
                                <li>C#</li>
                                <li>Java</li>
                                <li>SQL</li>
                                <li>HTML/CSS</li>
                            </ul>
                        </div>
                        <div className="SkillCategory">
                            <h4>Frameworks & Libraries</h4>
                            <ul>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>Flask</li>
                                <li>ASP.NET</li>
                            </ul>
                        </div>
                        <div className="SkillCategory">
                            <h4>Personal Skills</h4>
                            <ul>
                                <li>Teamwork</li>
                                <li>Interpersonal Communication</li>
                                <li>Problem Solving</li>
                                <li>Adaptability</li>
                                <li>Time Management</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="AboutMeSection">
                    <h3>Education</h3>
                    <div className="EducationItem">
                        <h4>RMIT University</h4>
                        <p className="EducationDate">2023 - Present</p>
                        <p>Bachelor of Software Engineering</p>
                    </div>
                    <div className="EducationItem">
                        <h4>Caulfield Grammar School</h4>
                        <p className="EducationDate">2008 - 2022</p>
                        <p>VCE</p>
                    </div>
                </section>
                <section className="AboutMeSection">
                    <h3>Experience</h3>
                    <div className="ExperienceItem">
                        <h4>Software Developer Intern</h4>
                        <p className="ExperienceDate">2025 - Present</p>
                        <p>WEX inc</p>
                        <ul>
                            <li>Working on the WEX Fleet Management System</li>
                            <li>Analysing and resolving Production levelissues</li>
                            <li>Developing and managing new feature work</li>
                            <li>Collaborating with an Agile team of developers</li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AboutMe;