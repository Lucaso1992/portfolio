import { useEffect, useState } from 'react'

import useAppContext from './store/AppContext.jsx'

import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Introduction from './components/Introduction/Introduction.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import AboutMe from './components/About me/About-me.jsx'
import Contact from './components/Contact/Contact.jsx'

import './App.css'

function App() {
  const { store } = useAppContext();
  return (
    <>
    <Navbar sectionColors={store.sectionColors} isScrolled={store.isScrolled}/>
    <Introduction/>
    <Portfolio/>
    <AboutMe/>
    <Contact/>
    <Footer sectionColors={store.sectionColors} isScrolled={store.isScrolled}/>
    </>
  )
}

export default App
