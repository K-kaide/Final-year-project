import React, { useState } from "react";
import "./registration.css";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

function Login() {
  const [emailval, setemailval] = useState("");
  const [passval, setpassval] = useState("");

  const handlesubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="wrapper2">
      <div className="txt-field">
        <h2>Create Account</h2>
        <h3>Register to Keep Track of Yor Money</h3>
      </div>

      <form onSubmit={handlesubmit}>
        <input
          placeholder="First Name"
          type="firstN"
          value={emailval}
          onChange={(e) => {
            setemailval(e.target.value);
          }}
          id="emil1"
        />
        <input
          placeholder="Last Name"
          type="lastN"
          value={passval}
          onChange={(e) => {
            setpassval(e.target.value);
          }}
          id="pwd1"
        />
        <input
          placeholder="Email Address"
          type="emailAddress"
          value={passval}
          onChange={(e) => {
            setpassval(e.target.value);
          }}
          id="pwd1"
        />
        <input
          placeholder="Phone Number"
          type="phoneNum"
          value={passval}
          onChange={(e) => {
            setpassval(e.target.value);
          }}
          id="pwd1"
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
        <input
          placeholder="Confirm Password"
          type="confirmPassword"
          value={passval}
          onChange={(e) => {
            setpassval(e.target.value);
          }}
          id="pwd1"
        />

        {/* <div className="termsAndCondition">
          <input type="checkbox" id="terms"/>
          <label htmlFor="terms">By clicking the checkbox, you agree to the Terms and
conditions</label>
        </div> */}
        

        <FormGroup>
          <FormControlLabel control={<Checkbox/>}  
           label={<span style={{ fontSize: '12px' }}> By clicking the checkbox, you agree to the Terms and
        conditions </span>}
/>
        </FormGroup>

        <button type="" id="sub_butt">
          Register
        </button>
      </form>
    </div>
  );
}

export default Login;