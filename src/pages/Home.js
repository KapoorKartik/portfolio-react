import React from "react";
import Hero from "../components/Hero/Hero.jsx";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import { Tool } from "../components/ToolUsed/Tool.jsx";
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Tool />
      <Projects />
      <Contact />
      <Footer />
      <FixSocialIcon />
    </>
  );
}

export default Home;
