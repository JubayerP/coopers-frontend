import React from 'react';
import logo from '../../assets/Logo.png';
import './Navbar.css'

const Navbar = () => {
    return (
        <div id="navbar_container">
            <img className="navbar_logo" src={logo} alt="logo" />
            <div>
            <button className="login_btn">Enter</button>
            </div>
        </div>
    );
};

export default Navbar;