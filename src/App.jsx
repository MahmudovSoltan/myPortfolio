import Footer from "./components/leyout/footer/Footer"
import Header from "./components/leyout/header/Header"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Experiens from "./pages/experiesns/Experiens"
import Home from "./pages/home/Home"
import Skills from "./pages/skills/Skills"
import Work from "./pages/work/Work"

function App() {


  return (
     <main>
        <Header/>
        <Home/>
        <About/>
        <Skills/>
        <Experiens/>
        <Work/>
        <Contact/>
        <Footer/>
     </main>
  )
}

export default App
