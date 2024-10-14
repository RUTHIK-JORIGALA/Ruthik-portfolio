
import './App.css'
import Hero from './components/hero/Hero'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import About from './components/about/About'
import Navbar from './components/navbar/Navbar'
import Projects from './components/projects/Projects'

function App() {
 
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <Skills />
      <Experience/>
      <Projects/>
      {/* Add Project */}
      <About/>
    </div>
  )
}

export default App
