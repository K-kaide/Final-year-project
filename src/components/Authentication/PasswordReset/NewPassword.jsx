import React, { useState } from 'react'
import "./styles/newPwrd.css"

function Newpassword() {

  const [pswdinp, setpswdinp] = useState("");

  const handlesubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="np-main">
         <div className="txt-Info">
                <div className="txt-field">
                    <h2>Forgot Your Password?</h2>
                    <h3>Input your new password</h3>
                </div>

                <form onSubmit={handlesubmit}>
                <input
                  placeholder="New Password"
                  type="password"
                  value={pswdinp}
                  onChange={(e) => {
                    setpswdinp(e.target.value);
                  }}
                  id="pswd"
                />

                <input
                  placeholder="Confirm Password"
                  type="password"
                  value={pswdinp}
                  onChange={(e) => {
                    setpswdinp(e.target.value);
                  }}
                  id="pswd"
                />
                </form>

                <button type="" id="change_butt">
                Change Password
                </button>
            </div>
    </div>
    
  )
}

export default Newpassword