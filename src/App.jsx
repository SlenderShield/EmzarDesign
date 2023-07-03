import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Gallery from "./pages/gallery";
import Info from "./components/Info";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollTop";
import ProjectDetailsPage from "./components/ProjectDetailsPage";
import CalendlyButton from "./components/Meet_Greet";

function App() {
  return (
    <Router>
      <Info />
      <Navbar />
      <Routes>
        <Route exact={"true".toString()} path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route
          exact={"true".toString()}
          path="/projects/:projectId"
          element={<ProjectDetailsPage />}
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <CalendlyButton
        link={"https://calendly.com/slendershield/30min"}
        description={"Schedule a Meeting"}
        height={96}
      />
      <CalendlyButton
        link={"https://wa.me/+919844083281"}
        description={"Whatsapp"}
        height={150}
      />
      <ScrollToTop />
      <Footer />
    </Router>
  );
}

export default App;
