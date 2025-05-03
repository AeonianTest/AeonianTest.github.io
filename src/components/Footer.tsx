import '../css/components/Footer.css'
import { GrGithub } from 'react-icons/gr';
import { CiLinkedin } from 'react-icons/ci';
import React from 'react';

const Footer: React.FC = () => {
    const dateObject: Date = new Date();
    
    return(
        <footer className="FooterContainer">
            <div className="FooterCopyright">&#169; Hugh Cameron { dateObject.getFullYear() }</div>
            <div className="FooterLinks">
                <div className="FooterLink">
                    <GrGithub />
                    <a href="https://github.com/AeonianTest/" target="_blank" rel="noopener noreferrer">Github Account</a>
                </div>
                <div className="FooterLink">
                    <CiLinkedin />
                    <a href="https://www.linkedin.com/in/hugh-cameron-5986242ba/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;