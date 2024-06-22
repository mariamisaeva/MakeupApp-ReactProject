import React, { useState, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HiShoppingBag } from "react-icons/hi2";
import { CartContext } from '../../Context/CartContext';
import './navbar.css';

const Navbar = () => {

    const { cartCount } = useContext(CartContext);

    const [openMenu, setOpenMenu] = useState(false);


    return (
        <nav>

            <Link to='/' className='title'>
                BeautyBeat
            </Link>

            <div className='menu' onClick={() => setOpenMenu(!openMenu)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={openMenu ? "open" : ""}>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/products' >Products</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                <Link to='/cart'>  <HiShoppingBag size={40} className='bagIcon' />
                    <span className='cartCount'>{cartCount}</span></Link>
            </ul>


        </nav>
    );
}

export default Navbar;
