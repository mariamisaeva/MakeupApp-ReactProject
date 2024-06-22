import React from 'react';
import './about.css';

function About() {
    return (
        <div className='about-wrapper'>
            <div className='about-container'>
                <h1 className='about-title'>About Us</h1>
                <p className='about-content'>
                    We are a team of passionate makeup artists dedicated to helping you enhance your beauty and confidence through the power of makeup.
                </p>
                <p className='about-content'>
                    Our mission is to provide you with high-quality makeup products that not only meet your beauty needs but also inspire creativity and self-expression.
                    Whether you're a makeup enthusiast, a professional makeup artist, or someone looking to explore the world of cosmetics, we've got you covered.
                </p>
                <br /><hr /><br />
                <h3 className='about-title'>Our Team</h3>
                <ul className="team">
                    <li>John Doe - Makeup Artist & Founder</li>
                    <li>Jane Doe - Creative Director</li>
                    <li>Mary Smith - Lead Makeup Consultant</li>
                </ul>
                <img src="https://img.trvcdn.net/https://s3.ap-southeast-2.amazonaws.com/thebalibible.com/uploads/images/venue/a55b6d7cbf658a49141f4cce610c82bf.jpg?v=1?imgeng=m_box/w_1418/h_946" alt="Our Team" className="team-image" />
            </div>
        </div>
    );
}

export default About;
