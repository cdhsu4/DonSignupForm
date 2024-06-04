import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);



function App() {
  const [formData, setFormData] = useState({email:"", password:""});

  function onInputChange(event) {
    setFormData((oldFormData) => (
      {...oldFormData, [event.target.name]: event.target.value})
    );
  }

  function onSubmit(event) {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  return (
    <>
      <form className="login-form" id="login-form">
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
          <input value="Submit Login Information" type="submit" className="submit-btn" onClick={(event) => onSubmit(event)} />
      </form>
    </>
  )
}

export default App;