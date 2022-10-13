import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <NavLink to='/home' className={({ isActive }) => isActive ? `active` : undefined} >Home</NavLink>
            <NavLink to='/orders'>Orders</NavLink>
            <NavLink to='/grandpa'>Grandpa</NavLink>
            <NavLink to='/about'>About</NavLink>
        </nav>
    );
};

export default Header;