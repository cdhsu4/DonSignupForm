import { useState } from 'react';
import './Signup.css';
import { NavLink } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup( props ) {
    const [formData, setFormData] = useState({email:"", password:""});
    const [loginStatus, setLoginStatus] = useState("");
    const [statusMsg, setStatusMsg] = useState("");
  
    function onInputChange(event) {  
      setFormData((oldFormData) => (
        {...oldFormData, [event.target.name]: event.target.value})
      );
    }
    
    function onSubmit(event) {
        event.preventDefault();
        createUserWithEmailAndPassword(props.auth, formData.email, formData.password)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            //const successMsg = "You have successfully signed up!"
            setLoginStatus("success");
            setStatusMsg("Account Creation Successful!");
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            //const failMsg = "The New Login Creation has failed!"
            setLoginStatus("failure");
            setStatusMsg(`There's been an error! ${errorMessage}`);
          });
      }

    return (
        <>
          <form className="signup-form" id="signup-form">
              <div className="email-entry-container">
                  <label htmlFor="email-entry">Enter Email: </label>
                  <input type="email" id="email-entry" name="email" value={formData.email} required
                  className="email-input" onChange={(event) => onInputChange(event)}></input>
              </div>
              <div className="password-entry-container">
                  <label htmlFor="password-entry">Enter Password: </label>
                  <input type="password" id="password-entry" name="password" value={formData.password} required
                  className="password-input" onChange={(event) => onInputChange(event)}></input>
              </div>
              <input value="Submit New Account Information" type="submit" className="submit-btn" onClick={(event) => onSubmit(event)} />
              {loginStatus && <p>{statusMsg}</p>}
              <NavLink to="/login">Already have an Account? Proceed to Login</NavLink>
          </form>
        </>
    )
}

export default Signup;