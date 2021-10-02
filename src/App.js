import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";

function App() {
  const [menuOpen, handleMenuOpen] = useState(false);

  const changeMenuState = () => {
    handleMenuOpen(!menuOpen);
  };

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} handleMenuOpen={changeMenuState} />
      <Menu menuOpen={menuOpen} handleMenuOpen={changeMenuState} />
      <div className="sections">
        <Intro />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
