import './App.css';
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";


function App() {
  return (
      <div className="scroll-smooth">
          <Header />
          <div className=""> {/* Add padding to offset fixed header */}
              <Hero/>
          </div>
          <Footer/>
      </div>
  );
}

export default App;
