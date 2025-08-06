import { useState, useEffect } from 'react'
import Welcome from './Component/welcome.jsx'
import MainContent  from './Component/MainContent.jsx'
import Home from './Component/Home.jsx'
import About from './Component/About.jsx'
import Project from './Component/Project.jsx'
import Skills from './Component/Skills.jsx'
import './App.css'
import { AnimatePresence } from 'framer-motion'

function App() {


const [activePage, setActivePage] = useState('welcome');


  return (
    <>
      {/* {!introDone && <Welcome onComplete={() => setIntroDone(true)} />}
      {introDone &&

    <div className="home">
      <MainContent onButtonClick={() => setshowHome(true)} />
        {showHome && <Home/>}
    </div>
} */}

<div className="app-container">
  <AnimatePresence mode = "wait">



 {activePage === 'welcome' && (
        <Welcome 
        key = "welcome"
        onComplete={() => setActivePage('main')} />
      )}

      {activePage === 'main' && (
        <MainContent 
        key="main"
        onButtonClick={() => setActivePage('home')}
        about={() => setActivePage('about')}
        projects={() => setActivePage('projects')}
        skills={() => setActivePage('skills')}
        />
      )}
      
        
        

                    
      

      {activePage === 'home' && (
        <Home 
        key="home"
        onBack={() => setActivePage('main')} />
      )}


      {activePage === 'about' && (
        <About 
        key="about"
        />
      )}

      {activePage === 'projects' && (
        <Project 
        key = "project"
        onBack={() => setActivePage('main')} />
      )}

      {activePage === 'skills' && (
        <Skills 
        key = "skills"
        onBack={() => setActivePage('main')} />
         
      )}
        
      
  </AnimatePresence>

      </div>


      
    </>
  );
}

export default App
