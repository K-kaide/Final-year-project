import React, {useState} from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Budget from './pages/Budget'
import Visualisation from './pages/Visualisation'
import Transaction from './pages/Log'
import Profile from './pages/Profile'
import Main from './pages/main'
// import Logout from './pages/calender'
import Logout from './pages/Logout'
import Authentication from './pages/Authentication'


function App() {
  const newLocal = <Route exact path='/transaction' element={<Transaction />} />
  
  const [option, setOption] = useState(false)

  /* 
  Event handler 
  const openOption = () => {
    setOption (prev => !prev)
  } */
  

  return (
    <div className='App'>
    
    <Router>
{option ? <Authentication/>: 
       <Main>
          <Routes>
            <Route exact  path='/' element={<Dashboard/>}/>
            <Route exact  path='/dashboard' element={<Dashboard/>}/>
            <Route exact  path='/budget' element={<Budget/>}/>
            <Route exact  path='/visualisation' element={<Visualisation/>}/> 
            {newLocal}
            <Route exact  path='/profile' element={<Profile/>}/> 
            <Route exact  path='/logout' element={<Logout/>}/>
          </Routes>
        </Main> 
}
    </Router>
    </div>
    )
}

export default App






/*
 Backup code

import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Budget from './pages/Budget'
import Visualisation from './pages/Visualisation'
import Transaction from './pages/Transaction'
import Profile from './pages/Profile'
import Drawer from './components/Drawer'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Main from './pages/main'
import Demo from './pages/Demo'


function App() {
  return (
    <div className='App'>
    <Router>
        <Demo />
        
        <Routes>
          <Route exact  path='/dashboard' element={<Dashboard/>}/>
          <Route path='/budget' element={<Budget/>}/>
          <Route path='/visualization' element={<Visualisation/>}/> 
          <Route path='/transaction' element={<Transaction/>}/> 
          <Route path='/profile' element={<Profile/>}/> 
          
        </Routes>
    </Router>
    </div>
    )
}

export default App 
_________________________________________________________________________________
<Demo /> app.js code

import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Budget from './pages/Budget'
import Visualisation from './pages/Visualisation'
import Transaction from './pages/Transaction'
import Profile from './pages/Profile'
import Drawer from './components/Drawer'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Main from './pages/main'
import Demo from './pages/Demo'


function App() {
  return (
    <div className='App'>
    <Router>
        <Demo>
          <Routes>
            
            <Route exact  path='/' element={<Dashboard/>}/>
            <Route exact  path='/dashboard' element={<Dashboard/>}/>
            <Route path='/budget' element={<Budget/>}/>
            <Route path='/visualisation' element={<Visualisation/>}/> 
            <Route path='/transaction' element={<Transaction/>}/> 
            <Route path='/profile' element={<Profile/>}/> 
            {/* <Route path='/logout' element={<LogOut/>}/> 
            </Routes>
            </Demo>
        </Router>
        </div>
        )
    }
    
    export default App




*/