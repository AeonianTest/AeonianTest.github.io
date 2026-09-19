import '../css/components/Footer.css'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import React from 'react';

const Footer: React.FC = () => {
    const dateObject: Date = new Date();

    return (
        <footer className="FooterContainer">
            <div className="FooterInner">
                <div className="FooterCopyright">&#169; Hugh Cameron { dateObject.getFullYear() }</div>
                <div className="FooterLinks">
                    <a
                        className="FooterLink"
                        href="https://github.com/AeonianTest/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub aria-hidden="true" />
                        GitHub
                    </a>
                    <a
                        className="FooterLink"
                        href="https://www.linkedin.com/in/hugh-cameron-5986242ba/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin aria-hidden="true" />
                        LinkedIn
                    </a>
                    <a
                        className="FooterLink"
                        href="mailto:hugh.cameron@live.com.au"
                    >
                        <FaEnvelope aria-hidden="true" />
                        Email
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
