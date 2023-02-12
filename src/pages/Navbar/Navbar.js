import React, { useContext, useState } from 'react';
import logo from '../../assets/Logo.png';
import './Navbar.css'
import Modal from '../Login/Login';
import { AUTH_CONTEXT } from '../../context/AuthContext';

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    const {isLoggedIn} = useContext(AUTH_CONTEXT)
    console.log(isLoggedIn)
    return (
        <nav id="navbar_container">
            <img className="navbar_logo" src={logo} alt="logo" />
            <div>
                <>
                    {isLoggedIn ? <button className="login_btn">Sign out</button> : <button className="login_btn" onClick={() => setShowModal(true)}>Enter</button>}
                </>
            <Modal showModal={showModal} setShowModal={setShowModal} />
            </div>
        </nav>
    );
};

export default Navbar;