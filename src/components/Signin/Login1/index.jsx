import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  const [emailval, setemailval] = useState("");
  const [passval, setpassval] = useState("");

  const handlesubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="wrapper">
      <div className="txt-field">
        <h2>Welcome Back</h2>
        <h3>Login into your account</h3>
      </div>

      <form onSubmit={handlesubmit}>
        <input
          placeholder="Email Address"
          type="email"
          value={emailval}
          onChange={(e) => {
            setemailval(e.target.value);
          }}
          id="emil1"
        />
        <input
          placeholder="Password"
          type="password"
          value={passval}
          onChange={(e) => {
            setpassval(e.target.value);
          }}
          id="pwd1"
        />

        <div className="pss-forgot">
          <Link to="" id="forgot-link">
            Forgot password?
          </Link>
        </div>

        <button type="submit" id="sub_butt">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
