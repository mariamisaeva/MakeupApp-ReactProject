import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {

    return (
        <div className="home">
            <h1>Welcome to BeautyBeat</h1>
            <p>Shop the best makeup products here</p>

            <button className="shopNow"><Link to='/products'>Shop Now</Link></button>
        </div>
    );
}

export default Home;
