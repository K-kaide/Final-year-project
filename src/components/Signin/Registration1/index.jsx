import React from "react";
import "./registration.css";
import regImg from "../../../Assets/register.jpg";
import { Link } from "react-router-dom";

function index() {
  return (
    <div className="wrapperR">
      <div className="regImage">
        <img id="reg-id" src={regImg} alt="" />
      </div>

      <div className="regInfo">
        <div className="txt-field">
          <h2>Don’t Have An Account?</h2>
          <h3>Register To Create An Account</h3>
        </div>

        <button type="" id="reg_butt" >
          Register
        </button>
      </div>
    </div>
  );
}

export default index;
