import React from 'react'
import "./index.css";
import Login from './Login2'
import Register from './Registration2'

function Authentication() {
  return (
    <div>
    <div className="main">
      <div className="login-contain">
        <div className="left-side">
          <Login />
            </div>

            <div className="right-side">
              <div className="element">
                <Register />
              </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Authentication