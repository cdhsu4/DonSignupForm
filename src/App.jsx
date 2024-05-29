import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <form className="login-form">
        <div className="email-entry-container">
          <label for="email-entry">Enter Email: </label>
          <input type="email" id="email-entry" value="" className="email-input"></input>
        </div>
        <div className="password-entry-container">
          <label for="password-entry">Enter Password: </label>
          <input type="password" id="password-entry" value="" className="password-input"></input>
        </div>
          <button type="submit" className="submit-btn">Submit Login Information</button>
      </form>
    </>
  )
}

export default App
