import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import TechStack from "./components/TechStack/TechStack";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <TechStack />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
