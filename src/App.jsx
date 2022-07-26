import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
