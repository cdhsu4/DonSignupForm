import React from 'react';
import { NavLink } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
    return(
        <>
            <h1 className="homepage-header">Welcome to the Public Homepage!</h1>
            <div className="homepage-subnav">
                <NavLink to="/login">Already have an Account? Proceed to Login</NavLink>
                <NavLink to="/signup">Need a New Account?</NavLink>
            </div>
        </>
    )
}

export default Homepage;