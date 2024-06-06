import React from 'react';
import '/Login.css';

import { NavLink } from "react-router-dom";

function Login() {
    return (
        <>
            <form id="login-form">
                <div>
                    <label htmlFor="username-login">Enter Your Username: </label>
                    <input type="email" placeholder="Enter your username" id="username-login" name="user-email" required 
                    onChange={(event) => secondInputChange(event)}/>
                </div>
                <div>
                    <label htmlFor="password-login">Enter Your Password: </label>
                    <input type="password" placeholder="Enter your password" id="password-login" name="user-password" required
                    onChange={(event) => secondInputChange(event)}/>
                </div>
            </form>
        </>
    )
}

export default Login;