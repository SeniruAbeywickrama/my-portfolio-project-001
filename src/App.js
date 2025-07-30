import './App.css';
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import About from "./components/about";
import { useState } from 'react';
import Experience from "./components/experience";
import Education from "./components/education";
import Projects from "./components/projects";


function App() {
  const [heroKey, setHeroKey] = useState(0);

  // Handler to force remount of Hero and About
  const handleHomeClick = () => setHeroKey(prev => prev + 1);

  return (
      <div className="scroll-smooth">
          <Header onHomeClick={handleHomeClick} />
          <div className=""> {/* Add padding to offset fixed header */}
              <Hero key={heroKey}/>
              <About key={heroKey}/>
              <Experience key={heroKey}/>
              <Education key={heroKey}/>
              <Projects key={heroKey}/>
          </div>
          <Footer/>
      </div>
  );
}

export default App;
