import '../css/pages/HomePage.css'
import React from 'react';

const HomePage: React.FC = () => {

    
    return (
        <div className="OuterContainerHomePage">
            <section className="Introduction">
                <h2>Hello</h2>
                <p>Place holder text</p>
                <p>Link to my projects</p>
            </section>
            <section className="TechStack">
                <h2>Tech Stack</h2>
                <p>Icons</p>
            </section>
        </div>
    )
}

export default HomePage;