import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import AboutMe from "./components/aboutme/AboutMe";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contactMe/ContactMe";
import Resume from "./components/resume/Resume";
import Footer from "./components/footer/Footer";
import "./Global.css";

function App() {
  return (
    <Router>
      <Header />
      <div style={{ flexGrow: 1 }}>
        <Routes>
          <Route exact path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
