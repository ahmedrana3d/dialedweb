import React, { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import Lenis from "@studio-freight/lenis";
import { Navigation } from "./Navigation";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./HomeGroup/Home"
import Contact from "./Contact"
import { AnimatePresence } from "framer-motion";
import { RealEstatePortfolio } from "./RealEstatePortfolio";
import gsap from "https://esm.sh/gsap";
import { vec2 } from "https://esm.sh/vecteur";
import { initializeCursors } from "./Cursor";
import SectionProjects from "./Projects"
import OurServices from "./OurServices";
import ProjectSubpage1 from "./ProjectSubpage1";

const LoadingScreen = ({ onLoaded }) => {
  const { progress, active } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      onLoaded();
    }
  }, [progress, onLoaded]);

  return (
    <div className={`loading-screen ${active ? "" : "loading-screen--hidden"}`}>
      <div className="loading-screen__container">
        <img className="contact-video" src="/loading.gif" alt="" />
      </div>
    </div>
  );
};

function App() {

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  const [lenis, setLenis] = useState(null);

  useEffect(() => {

    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
    setLenis(lenis);

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  const handleLoaded = () => {
    setTimeout(() => {
      if (lenis) {
        lenis.start();
      }
      document.body.style.overflow = 'auto';
    }, 1000); // Delay for 1 second
  };

  useEffect(() => {
    if (lenis) {
      lenis.stop();
    }
    document.body.style.overflow = 'hidden';
  }, [lenis]);

  const location = useLocation()

  // useEffect(() => {
  //   initializeCursors();
  // }, []);
  

  return (
      <>
        <LoadingScreen onLoaded={handleLoaded} />

        <Navigation />

        <AnimatePresence mode="wait" >
          <Routes location={location} key={location.pathname} >
            <Route index element={ <Home /> } />
            <Route path="/contact" element={ <Contact /> } />
            <Route path="/projects" element={ <SectionProjects /> } />
            <Route path="/projects/:visualization" element={ <ProjectSubpage1 /> } />
            <Route path="/ourservices" element={ <OurServices /> } />
            <Route path="/realestate" element={ <RealEstatePortfolio /> } />
          </Routes>
        </AnimatePresence>
{/* 
        <div className="cursor" id="ball"></div>
        <div className="cursor-text" id="cursor-text">Scroll</div> */}

      </>
  );
}

export default App;