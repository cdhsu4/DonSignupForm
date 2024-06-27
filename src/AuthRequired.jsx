import React from 'react';
import { Outlet, Navigate } from "react-router-dom";

import { getAuth, onAuthStateChanged } from "firebase/auth";

function AuthRequired() {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
        return <Navigate 
            to="/login"
            state={{message: `"You must log in first!"`}}
        />;
    }

    return <Outlet />;
}

export default AuthRequired;