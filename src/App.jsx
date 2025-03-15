import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

function App() {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    loadTranslations(language);
  }, [language]);

  const loadTranslations = (language) => {
    fetch(`/locales/${language}.json`)
      .then(response => response.json())
      .then(data => setTranslations(data));
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="App">
      <Header language={language} onLanguageChange={handleLanguageChange} translations={translations} />
      
      <About translations={translations} />
      <Skills translations={translations} />
      <Portfolio translations={translations} />
      <Contact translations={translations} />
    </div>
  );
}

export default App;
