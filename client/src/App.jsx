import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/About'
import Profile from './pages/profile'
import Signin from './pages/signin'
import Signup from './pages/signup'
import Header from './components/Header' // Header element is used above routes to reflect in every file 

export default function App() {
  return ( <BrowserRouter>
       <Header />  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />

      </Routes>
    </BrowserRouter>
  )
}
