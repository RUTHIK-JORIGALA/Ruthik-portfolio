
import './App.css'
import Hero from './components/hero/Hero'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import About from './components/about/About'
import Navbar from './components/navbar/Navbar'

function App() {
 

  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <Skills />
      <Experience/>
      <About/>
      {/* 
Works/Projects
About */}
      {/* <iframe src="./resume.pdf" width="600" height="1000"></iframe> */}
    </div>
  )
}

export default App
