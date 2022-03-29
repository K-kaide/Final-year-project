import React, { useState } from 'react'
import "./styles/frgtpswd.css"

function Forgotpassword() {

  const [emailinpt, setemailinpt] = useState("");

  const handlesubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="fp-main">
         <div className="txt-Info">
                <div className="txt-field">
                    <h2>Forgot Your Password?</h2>
                    <h3>Input the email address associated with your account and a resent link would be sent to your email</h3>
                </div>

                <form onSubmit={handlesubmit}>
                <input
                  placeholder="Email Address"
                  type="email"
                  value={emailinpt}
                  onChange={(e) => {
                    setemailinpt(e.target.value);
                  }}
                  id="email1"
                />
                </form>

                <button type="" id="send_butt">
                Send Code
                </button>
            </div>
    </div>
    
  )
}

export default Forgotpassword