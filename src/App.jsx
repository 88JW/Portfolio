import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
