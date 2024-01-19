import { useState } from 'react'
import Navbar from "./Navbar.jsx";
import './App.css'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import {Route, Routes} from 'react-router-dom';
function App() {
 

  return (
  
    <>
    <Navbar />
    <div className='container'> 
<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/projects' element={<Projects />}/>
  <Route path='/about' element ={<About />} />
</Routes>
    
    </div>
    </>
      
  )
}

export default App
