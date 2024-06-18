import React from 'react';
import './Login.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";

function Login( props ) {
    const [formData, setFormData] = React.useState({username:"", password:""});
    const [isLoggedIn, setIsLoggedIn] = React.useState();
    const [loginMsg, setLoginMsg] = React.useState("");
    const navigate = useNavigate();
    function onInputChange(event) {  
        setFormData((oldFormData) => (
          {...oldFormData, [event.target.name]: event.target.value})
        );
      }

    function onSubmit(event) {
        event.preventDefault();
        console.log(formData.username);
        console.log(formData.password);
        signInWithEmailAndPassword(props.auth, formData.username, formData.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(userCredential);
            setIsLoggedIn(true);
            setLoginMsg("You've logged in!");
            props.setUser(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setIsLoggedIn(false);
            setLoginMsg(`There's been an error! ${errorMessage}`);
        });
    }    
    
    if (props.user) {
        return navigate("/", {replace: true});
    }
    
    return (
        <>
            <form id="login-form" className="login-form">
                <div className="username-login-container">
                    <label htmlFor="username">Enter Your Username: </label>
                    <input type="email" placeholder="Enter your username" id="username" value={formData.username} name="username" required 
                    className="username-login" onChange={(event) => onInputChange(event)}/>
                </div>
                <div className="password-login-container">
                    <label htmlFor="password">Enter Your Password: </label>
                    <input type="password" placeholder="Enter your password" id="password" value={formData.password} name="password" required
                    className="password-login" onChange={(event) => onInputChange(event)}/>
                </div>
                <input value="Login w/ Username & Password" type="submit" className="login-btn" onClick={(event) => onSubmit(event)} />
                {setIsLoggedIn && <p>{loginMsg}</p>}
                <NavLink to="/signup">Need a New Account?</NavLink>
            </form>
        </>
    )
}

export default Login;