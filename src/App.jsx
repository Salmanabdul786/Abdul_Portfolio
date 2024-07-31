import React from 'react'
import Intro from './component/Intro/Intro'
import './App.css'
import About from './component/About/About'
import Experience from './component/Experience/Experience'
import Skills from './component/Skills/Skills'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'


const App = () => {
  return (
    <div>
      <Intro/>
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App
