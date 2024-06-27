import { useState } from 'react'
import './App.css'
import Signup from './pages/Signup/Signup.jsx'
import Login from './pages/Login/Login.jsx'
import Homepage from './pages/Homepage/Homepage.jsx'
import Protect from './pages/Protect/Protect.jsx'
import Layout from './Layout.jsx'
import AuthRequired from './AuthRequired.jsx'

import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserSessionPersistence } from "firebase/auth";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { onIdChange } from 'firebase/installations'

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

/*
const auth = getAuth();
const signOut = signOut(auth).then(() => {
  // Sign-Out successful.
}).catch((error) => {
  // An error happened.
})
  */

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="browser-route-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout auth={auth} />}>
            <Route index element={<Homepage auth={auth} />}/> 
            <Route path="login" element={<Login auth={auth} user={user} setUser={setUser}/>} />
            <Route path="signup" element={<Signup auth={auth} user={user} setUser={setUser}/>} />
            <Route element={<AuthRequired />}>    
              <Route path="protect" element={<Protect auth={auth} user={user}/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ div>
  )
}

export default App;
