import Navbar from "./modules/navbar/Navbar";
import Landing from "./modules/landing/Landing";
import About from "./modules/about/About";
import Projects from "./modules/projects/Projects";
import Contact from "./modules/contact/Contact";
import "./App.scss";

const App = () => {
  return (
    <div className="App font-sans">
      <Landing />
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
