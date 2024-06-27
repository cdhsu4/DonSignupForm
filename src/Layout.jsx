import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

function Layout( { auth } ) {
 
    function handleLogout() {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("Yay, this has been called");
            }).catch((error) => {
            // An error happened.
        });
    }    

    return (
    <>
        <nav className="navbar">
            <NavLink className="li" to="/">Home Page</NavLink>
            <NavLink className="li" to="/protect">Protected</NavLink>
            <NavLink className="li" to="/signup">Go to Signup</NavLink>
            <NavLink className="li" to="/login">Go to Login</NavLink>
            <button onClick={handleLogout}>Logout</button>
        </nav>
        <main>
            <Outlet />
        </main>
    </>
    );
}

export default Layout;