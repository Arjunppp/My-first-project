import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom' //used for declarative routing  in react applications
import Home from './pages/home'
import About from './pages/About'
import Profile from './pages/profile'
import Signin from './pages/signin'
import Signup from './pages/Signup'
import Header from './components/Header' // Header element is used above routes to reflect in every file 

export default function App() {
  return ( <BrowserRouter> {/* Act as the foundation for routing in react app  ,browserouter will constantly url change and when some URL defined in the route  comes the element will be triggered*/}
       <Header />  
      <Routes> {/*encapsulates collection of various routes */}
        <Route path='/' element={<Home />} />  {/* whenevder the URL triggers Home will be triggered , its exported from home.jsx  */}
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
{/* link method of Router cdome can be used for navigation --it can be used throughout the application  --- <navigate='/' /> can be used to navigate t*/  }
      </Routes>
    </BrowserRouter>
  )
}
