import '../css/components/Header.css'
import { NavLink, Link } from 'react-router-dom';
import { FaCode, FaHome } from 'react-icons/fa';
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="HeaderContainer">
            <div className="HeaderInner">
                <Link to="/" className="HeaderBrand">Hugh Cameron</Link>
                <nav>
                    <NavLink to="/" className="NavLink" end>
                        <FaHome aria-hidden="true" />
                        Home
                    </NavLink>
                    <NavLink to="/projects" className="NavLink" end>
                        <FaCode aria-hidden="true" />
                        Projects
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header;
