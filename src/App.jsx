import { useState } from 'react'
import './App.css'
import Signup from './pages/Signup/Signup.jsx'
import Login from './pages/Login/Login.jsx'
import Homepage from './pages/Homepage/Homepage.jsx'

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

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
  const [user, setUser] = useState(null);
  return (
    <>

      <BrowserRouter>
        <nav>
          <NavLink to="/signup">Go to Signup</NavLink>
          <NavLink to="/login">Go to Login</NavLink>
        </nav>
        <Routes>
          <Route path="/">
            <Route index element={<Homepage />}/>
            <Route path="login" element={<Login auth={auth} user={user} setUser={setUser}/>} />
            <Route path="signup" element={<Signup auth={auth} user={user} setUser={setUser}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
