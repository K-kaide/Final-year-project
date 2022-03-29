import React from 'react'
import './styles/header.css'

import { styled, useTheme, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';


function Header() {


    
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
     /*  backgroundColor: alpha(theme.palette.common.white, 0.25), */
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));



  return (
    <div className='header-wrapper'>
        <div className="search-section">
          
          <div className="search-component">
            <Search
              sx={{
                color: 'black',
                backgroundColor : 'white',
                borderRadius :  5
              }}>
              <SearchIconWrapper>
                <SearchIcon 
                sx={{
                    color: '#7C4CE0'
                  }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>   
          </div>
          
          <div className="notification">
            <NotificationsIcon
            sx={{
              color: '#7C4CE0'
            }}
            />
          </div>  
          
          <div className='vertical-divider'>
          |
          </div>

          <div className="profile-icon">
            <NoAccountsIcon
            sx={{
              color: '#7C4CE0'
            }}/>
          </div>

        </div>
    </div>
  )
}

export default Header