import React, { useEffect, useRef, useState } from "react";
import { useProgress } from "@react-three/drei";
import Lenis from "@studio-freight/lenis";
import { Navigation } from "./Navigation";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./HomeGroup/Home"
import Contact from "./Contact"
import { AnimatePresence } from "framer-motion";
import { initializeCursors } from "./Cursor";
import SectionProjects from "./Projects"
import Visualization from "./Visualization/Visualization";
import VisualizationSub from "./Visualization/VisualizationSub";
import VisualizationSub2 from "./Visualization/VisualizationSub2";
import VisualizationSub3 from "./Visualization/VisualizationSub3";
import VisualizationSub4 from "./Visualization/VisualizationSub4";
import VisualizationSub5 from "./Visualization/VisualizationSub5";
import VisualizationSub6 from "./Visualization/VisualizationSub6";
import { CaseStudySeltzers } from "./CaseStudies/Seltzers";
import VisualizationSub7 from "./Visualization/VisualizationSub7";
import VisualizationSub8 from "./Visualization/VisualizationSub8";
import Learnmorepage from "./LearnGroup/Learnmorepage";

const LoadingScreen = ({ onLoaded }) => {
  const { progress, active } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      onLoaded();
    }
  }, [progress, onLoaded]);

  return (
    <div className={`website-loading-screen ${active ? "" : "website-loading-screen--hidden"}`}>
        <img className="website-loading-video" src="/loading.gif" alt="" />
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

  const section6Ref = useRef(null);

  const scrollToSection6 = () => {
    if (section6Ref.current) {
      section6Ref.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("section6Ref.current is null");
    }
  };
  

  return (
      <>
        <LoadingScreen onLoaded={handleLoaded} />

        <Navigation scrollToSection6={scrollToSection6} />

        <AnimatePresence mode="wait" >
          <Routes location={location} key={location.pathname} >
            <Route index element={ <Home section6Ref={section6Ref} /> } />
            <Route path="/contact" element={ <Contact /> } />
            <Route path="/projects" element={ <SectionProjects /> } />
            <Route path="/projects/seltzers" element={ <CaseStudySeltzers /> } />
            <Route path="/projects/visualization" element={ <Visualization /> } />
            <Route path="/projects/:visualization/the-manor" element={ <VisualizationSub /> } />
            <Route path="/projects/:visualization/modern-beverly-hills-mansion" element={ <VisualizationSub2 /> } />
            <Route path="/projects/:visualization/tropical-vacation-home" element={ <VisualizationSub3 /> } />
            <Route path="/projects/:visualization/minimalistic-studio" element={ <VisualizationSub4 /> } />
            <Route path="/projects/:visualization/urban-sanctuary-hotel" element={ <VisualizationSub5 /> } />
            <Route path="/projects/:visualization/contemporary-home" element={ <VisualizationSub6 /> } />
            <Route path="/projects/:visualization/cityscapes" element={ <VisualizationSub7 /> } />
            <Route path="/projects/:visualization/urban-hideaway" element={ <VisualizationSub8 /> } />
            <Route path="/learn-more" element={ <Learnmorepage /> } />
          </Routes>
        </AnimatePresence>
{/* 
        <div className="cursor" id="ball"></div>
        <div className="cursor-text" id="cursor-text">Scroll</div> */}

      </>
  );
}

export default App;