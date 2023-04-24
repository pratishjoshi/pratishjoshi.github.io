import Navbar from "./modules/navbar/Navbar";
import Landing from "./modules/landing/Landing";
import About from "./modules/about/About";
import Projects from "./modules/projects/Projects";
import "./App.scss";

const App = () => {
  return (
    <div className="App font-sans">
      <Landing />
      <Navbar />
      <About />
      <Projects />
    </div>
  );
};

export default App;
