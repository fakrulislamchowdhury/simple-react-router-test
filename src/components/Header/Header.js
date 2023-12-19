import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';

const Header = () => {
    return (
        <nav className='header_style'>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/friends">Friends</NavLink>
            <NavLink to="/about">About us</NavLink>
        </nav>
    );
};

export default Header;