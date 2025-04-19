import '../css/components/Header.css'
import { NavLink } from 'react-router-dom';
import React from 'react';

const Header: React.FC = () => {


    return (
        <header className="HeaderContainer">
            <nav>
                <NavLink to="/" className="NavLink" end>
                    Home
                </NavLink>
                <NavLink to="/about" className="NavLink" end>
                    About Me
                </NavLink>
                <NavLink to="/projects" className="NavLink" end>
                    My Projects
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;