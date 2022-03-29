import React from 'react'
import './styles/Drawer.css'
import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import ListItemIcon from '@mui/material/ListItemIcon';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SearchIcon from '@mui/icons-material/Search';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';

import InputBase from '@mui/material/InputBase';
import { display, sizing } from '@mui/system';
import Image from '../Assets/Vector.png'
import Dashborad from '../pages/Dashboard'
import { ListItem } from '@mui/material';
import Budget from '../pages/Budget';

function Drawer() {


  const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

/*____________________________________________________________________ */

const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


/*____________________________________________________________________ */


  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
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
    <div className='main_container'>
        
        <Box sx={{ display: 'flex'
      
      }}>
      <CssBaseline />

      <AppBar elevation={0} position="fixed" open={open}>
        

        {/* Toolbar/Header */}
      <div className="header-toolbar">

        <Toolbar 
        sx={{
          backgroundColor: '#F1F1F4',
          color: '#7C4CE0',
          display : 'flex', 
          justifyContent : 'space-between'          
        }}>

            <div className="header-left burger-icon">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
            </div>

            <div className="header-right">
              <div className="search-section">
                  <div className="search-component">
                    <Search
                  sx={{
                    color: 'black',
                    backgroundColor : 'white',
                    borderRadius :  5
                  }}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                    </Search>   
                  </div>
                  <div className="notification">
                      <NotificationsIcon/>
                    </div>  
                    <div className='vertical-divider'>
                    |
                    </div>
                    <div className="profile-icon">
                      <NoAccountsIcon/>
                      </div>
                </div>
              <div className="icons">
              </div>
           
            </div> 
          
        </Toolbar>

        </div>


            {/* AppBar/SideBar */}
      </AppBar>


            {/* Drawer */}
      <Drawer variant="permanent" open={open}>
        <div className="section_1">
        <DrawerHeader>
           
            {/* logo */}
            <div className="logo">
              <img src={Image} alt="" />
              <p>TrackIt</p>
            </div>
        
        <div className="icon-Button">
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        </DrawerHeader>
        </div>

        <div className="list-1">
        <List >
          {['Dashbaord', 'Budgets', 'Visualization', 'Transaction'].map((text, index) => (
            <ListItemButton
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                color: '#7C4CE0'
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  color: '#7C4CE0'
                }}

              >
              
                {index === 0 ? <DashboardIcon /> : (index === 1 ? <AccountBalanceWalletIcon /> : (index === 2 ? <InsertChartIcon /> : <CompareArrowsIcon /> ) )}
              
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          ))}
        </List>
        </div>


                {/* sidebar icons */}

        
        <List className='list-2'>
          {['Profile', 'Logout'].map((text, index) => (
            <ListItemButton
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                color: '#7C4CE0'
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  color: '#7C4CE0'
                }}
              >
                {index % 2 === 0 ? <PersonIcon /> : <LogoutIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          ))}
        </List>






      </Drawer>
      

              {/* Box */}
      <Box component="main" sx={{ flexGrow: 1, 
        p: 3, 
        bgcolor: '#F1F1F4'
        }}>
        <DrawerHeader /> 
        <span>     
          {/* <Dashborad/> */}
          <Budget/>
        </span>
      </Box>
    </Box>

    </div>
  )
}

export default Drawer