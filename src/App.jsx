import './App.css'
import Navbar from './componentes/Navbar/Navbar'
import Hero from './componentes/Hero/Hero'
import Contact from './componentes/Contact/Contact'
import About from './componentes/About/About'
import Skills from './componentes/Skills/Skills'
import Footer from './componentes/Footer/Footer'
import Projects from "./componentes/Projects/Projects"
function App() {

  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    <Skills></Skills>
    <Projects></Projects>
    <Contact></Contact>
    <Footer></Footer>
    </>
  )
}

export default App
