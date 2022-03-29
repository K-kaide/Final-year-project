import React from 'react'
import "./index.css";
import Login from './Login1'
import Register from './Registration1'

function Authentication() {
  return (
    <div>
    <div className="main">
      <div className="login-contain">
        <div className="left-side">
          <Login />
            </div>

            <div className="right-side">
          <Register />
        </div>
      </div>
    </div>

    </div>
  )
}

export default Authentication