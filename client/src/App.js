import {Routes , Route } from 'react-router-dom'
import React from 'react'
import About from './components/About'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import Signup from './components/Signup'
import Login from './components/Login'
import './App.css'



const App = () => {
  return (
   <>
     <Navbar />

     <Routes>

          <Route  path="/" element={ <Home /> } />

          <Route path='/about' element={ <About /> }  />

          <Route path='/contact' element={ <Contact /> }  />

          <Route path='/login' element={ <Login /> }  />

          <Route path='/signup' element={ <Signup /> }  />

     </Routes>
     </>
  )
}

export default App