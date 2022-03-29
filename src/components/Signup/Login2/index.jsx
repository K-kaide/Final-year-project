import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import logImg from "../../../Assets/login.jpg"


function Login() {

  return (
    <div className="wrapper">
      <div className="logImage">
        <img id="log-id" src={logImg} alt="" />
      </div>
      
      <div className="logInfo">
        <div className="txt-field">
          <h2>Already Have and Account?</h2>
          <h3>Login Back To Your Account</h3>
        </div>

        
        <button type="submit" id="log_butt">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
