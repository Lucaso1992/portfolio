import { BrowserRouter } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import useAppContext from './store/AppContext.jsx'

import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Introduction from './components/Introduction/Introduction.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import AboutMe from './components/About me/About-me.jsx'
import Contact from './components/Contact/Contact.jsx'

import './App.css'

AOS.init();

function App() {
  const { store } = useAppContext();

  // sectionColors={store.sectionColors} isScrolled={store.isScrolled}
  return (
    <BrowserRouter basename='/'>
    <Navbar />
    <Introduction/>
    <Portfolio/>
    <AboutMe/>
    <Contact/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
