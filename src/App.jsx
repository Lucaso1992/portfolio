import { useEffect, useState } from 'react'

import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer/Footer'
import Introduction from './components/Introduction/Introduction'
import Portfolio from './components/Portfolio/Portfolio'

import './App.css'

function App() {

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sectionColors = [
    { start: 0, end: 844, color: "whitesmoke" },
    { start: 844, end: 3000, color: "#010409" },  
    // { start: 1500, end: 2500, color: "#010409" },  
    // { start: 2500, end: 3500, color: "whitesmoke" },  
  
  ];

  const isScrolled = scrollPosition;

  return (
    <>
    <Navbar sectionColors={sectionColors} isScrolled={isScrolled}/>
    <Introduction/>
    <Portfolio/>
    <Footer sectionColors={sectionColors} isScrolled={isScrolled}/>
    </>
  )
}

export default App
