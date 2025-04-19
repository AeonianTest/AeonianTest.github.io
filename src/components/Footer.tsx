import '../css/components/Footer.css'
import { GrGithub } from 'react-icons/gr';
import { CiLinkedin } from 'react-icons/ci';
import React from 'react';

const Footer: React.FC = () => {

    
    return(
        <footer className="FooterContainer">
            <div className="FooterCopyright">&#169; Hugh Cameron</div>
            <div className="FooterLinks">
                <div className="FooterLink">
                    <GrGithub />
                    <a href="https://github.com/AeonianTest/">Github Account</a>
                </div>
                <div className="FooterLink">
                    <CiLinkedin />
                    <a href="https://www.linkedin.com/in/hugh-cameron-5986242ba/">LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;