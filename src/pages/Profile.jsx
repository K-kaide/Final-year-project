import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import './style/profile.css'


function Profile() {

  const [emailval, setemailval] = useState("");
  const [passval, setpassval] = useState("");
  const [name, setname] = useState("");

  const handlesubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className='profile-wrappe'>
      <div className="page-title">
        Profile
      </div>

      <div className="p-content">
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={5}>
        <Grid item xs={12} 
          align="center"
        >
          <Avatar
          alt="John Doe"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 150, height: 150 }}
          />
        </Grid>
        
        <Grid item xs={12}>
          <form onSubmit={handlesubmit}>
          <input
          placeholder="Name"
          type="name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
          id="name"
        />
        
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
        <input
          placeholder="Password"
          type="password"
          value={passval}
          onChange={(e) => {
            setpassval(e.target.value);
          }}
          id="pwd2"
        />

        <button type="submit" id="p-sub_butt">
        Update profile
        </button>
      </form>
        </Grid>
        
      </Grid>
    </Box>
      </div>

    </div>
  )
}

export default Profile