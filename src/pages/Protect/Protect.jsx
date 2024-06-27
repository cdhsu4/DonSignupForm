import { onAuthStateChanged, setPersistence, browserSessionPersistence } from 'firebase/auth';
import React from 'react';
import './Protect.css';

function Protect( {auth} ) {
    /*const loggedInUserToken = onAuthStateChanged(
        auth, (user) => {
            const userToken = user.getIdToken()
            return userToken
        }
    ) */
       /*onAuthStateChanged(auth, (user) => {*/
    
    /*})*/
    /*setPersistence(auth, browserSessionPersistence)
        .then(
            console.log("The Browser Session Persistence has been set to Session")
        );*/
    console.log(auth.user);

    return (
        <div className="protected-page">
            <h1>This is a Protected Page that 
                should only show when logged in</h1>
            <h2>Secret Data should only be shown to logged in users</h2>
            <h3>The user _______ is logged in!</h3>
        </div>
    )
}

export default Protect;