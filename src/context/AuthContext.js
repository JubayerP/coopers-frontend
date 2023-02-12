import React, { createContext, useState } from 'react';

export const AUTH_CONTEXT = createContext()

const AuthContext = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [error, setError] = useState(null);

    const login = async (username, password) => {
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (!response.ok) {
            throw new Error(await response.text());
        }

        const data = await response.json();
        if (data.message === 'Login successful') {
            alert('Login successful');
            return setIsLoggedIn(true);
        }

        if (error) {
            setError(error.message);
        }

    }

    return (
        <AUTH_CONTEXT.Provider value={{login, isLoggedIn, error}}>
            {children}
        </AUTH_CONTEXT.Provider>
    );
};

export default AuthContext;