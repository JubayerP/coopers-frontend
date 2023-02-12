import React, { createContext, useContext, useState } from 'react';
import img from "../../assets/login.png";
import { AUTH_CONTEXT } from '../../context/AuthContext';
import './Login.css';



const Modal = ({ setShowModal, showModal }) => {
    const { login, error } = useContext(AUTH_CONTEXT)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    

    const handleInput1Change = event => {
        setUsername(event.target.value);
    };

    const handleInput2Change = event => {
        setPassword(event.target.value);
    };

    const handleSubmit = async event => {
        event.preventDefault();
        login(username, password)
        console.log({ username, password })


    };

    return (
            <div>
                {showModal && (
                    <div className="modal-wrapper">
                        <form className="modal-form" onSubmit={handleSubmit}>
                            <button className="modal_close_btn" type="button" onClick={() => setShowModal(false)}>
                                Close
                            </button>

                            <div className="modal_info">
                                <img src={img} alt="" />
                                <div className="texts">
                                    <h2>Sign in</h2>
                                    <h4>to access your list</h4>
                                </div>
                            </div>


                            <div>
                                <label htmlFor="user">User:</label>
                                <input
                                    id="user"
                                    type="text"
                                    value={username}
                                    onChange={handleInput1Change}
                                />
                            </div>
                            <div>
                                <label htmlFor="password">Password:</label>
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={handleInput2Change}
                                />
                            </div>

                            {error && <div style={{ color: 'red' }}>{error}</div>}
                            <button type="submit">Sign in</button>
                        </form>
                    </div>
                )}
            </div>
    );
};

export default Modal;
