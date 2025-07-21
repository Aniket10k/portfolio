import "./App.css";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Skills from "./Skills/Skills";
import Education from "./Education/Education";
//import Achievements from "./Achievements/Achievements";
import Contact from "./Contact/Contact";
import Navigation from "./Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main className="main-content">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        {/* <Achievements /> */}
        <Contact /> 
      </main>
    </div>
  );
}

export default App;
