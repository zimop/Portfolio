import React from 'react';
import logo from './logo.svg';
import Introduction from './components/Introduction/app';
import AboutMe from './components/AboutMe/app';
import Skills from './components/Skills/app';
import Projects from './components/Projects/app';
import './globals.css'
import NavBar from './components/general/NavBar';

function App() {
  return (
    <>
      <div className = "layout">
        <NavBar />
        <Introduction />
        <AboutMe />
        <Skills />
        <Projects />
      </div>
    </>
  );
}

export default App;
