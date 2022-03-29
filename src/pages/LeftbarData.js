import React from 'react'

import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';


export const LeftbarData =  [
  { 
   text: "Dashboard",
   icon: <DashboardIcon />, 
   path: "/",
   cName: 'nav-text'

  },

  { 
    text: "Budget",
    icon: <AccountBalanceWalletIcon />,  
    path: "/budget",
    cName: 'nav-text'
  },
   
  { 
   text: "Visualisation",
   icon: <InsertChartIcon />,  
   path: "/visualisation",
   cName: 'nav-text'
  },
  
  { 
    text: "Transaction",
    icon: <CompareArrowsIcon />,  
    path: "/transaction",
    cName: 'nav-text'
  },
  
  { 
    text: "Profile",
    icon:<PersonIcon />,  
    path: "/profile",
    cName: 'nav-text'
  },
  { 
    text: "Logout",
    icon: <LogoutIcon />,  
    path: ("/logout"),
    cName: 'nav-text'
  }

]
