import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <hr />
      <About />
      <hr />
      <Skills />
      <hr />
      <Portfolio />
      <hr />
      <Contact />
      <hr />
      <Footer />
    </>
  );
}

export default App;
