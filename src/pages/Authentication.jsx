import React, {useState} from 'react'
import SignIn from "../components/Signin"
import SignUp from "../components/Signup"
import "./style/authentication.css";

function Authentication() {

    const [inout, setInout] = useState(true)

    const openInout = () => {
      setInout (prev => !prev)
    }

  return (
    <div>
    <div className="main">
      <div className="login-contain">
          {
            inout? <SignIn/> : <SignUp/> 
          }
      </div>
    </div>

    </div>
  )
}

export default Authentication


/* 
import React from 'react'
import Login1 from "../components/Signin/Login1"
import Register1 from "../components/Signin/Registration1"
import SignIn from "../components/Signin"
import SignUp from "../components/Signup"
import "./style/authentication.css";

function Authentication() {
  return (
    <div>
    <div className="main">
      <div className="login-contain">
        <div className="left-side">
          <SignIn />
            </div>

            <div className="right-side">
          <SignUp />
        </div>
      </div>
    </div>

    </div>
  )
}

export default Authentication
*/