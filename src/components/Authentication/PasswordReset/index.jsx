import React from "react";
import { Link } from "react-router-dom";
import "./styles/index.css";
import ForgotPswd from "./ForgotPassword"
import PswrdImg from "../../../Assets/frgtpswd.jpg"
import Newpswd from './NewPassword'

function PswrdReset() {
  return (
    <div className="pr-main">
      <div className="pr-contain">
        
        <div className="left-side">
            <div className="fiImage">
                <img id="fi-id" src={PswrdImg} alt="" />
            </div>
        </div>

        <div className="right-side">
          <ForgotPswd/>
        </div>
      </div>
    </div>
  );
}

export default PswrdReset;
