import React from 'react'
import {Route, Routes} from 'react-router-dom'
import  HomePage  from './pages/Home'
import Login from './pages/Login'
import RegisterPage from './pages/Register'
import AboutPage from './pages/AboutPage'
import './App.css'
import LandingPage from './pages/LandingPage'
import ProfilePage from './pages/Profile'



const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/about' element={<AboutPage/>} />
        <Route path ='/profile' element={<ProfilePage/>}/>
      </Routes>
    </div>
  )
}

export default App