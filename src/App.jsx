import React, { useEffect, useRef, useState } from "react";
import { useProgress } from "@react-three/drei";
import Lenis from "@studio-freight/lenis";
import { Navigation } from "./Navigation";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./HomeGroup/Home"
import Contact from "./Contact"
import { AnimatePresence } from "framer-motion";
import SectionProjects from "./Projects"
import Visualization from "./Visualization/Visualization";
import VisualizationSub from "./Visualization/VisualizationSub";
import VisualizationSub2 from "./Visualization/VisualizationSub2";
import VisualizationSub3 from "./Visualization/VisualizationSub3";
import VisualizationSub4 from "./Visualization/VisualizationSub4";
import VisualizationSub5 from "./Visualization/VisualizationSub5";
import VisualizationSub6 from "./Visualization/VisualizationSub6";
import Learnmorepage from "./LearnGroup/Learnmorepage";
import { Policy } from "./HomeGroup/Policy";
import { SectionAbout } from "./About";
import { motion } from "framer-motion";

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

  const navigate = useNavigate();

  const handleNavigateClick = (linkUrl) => {
    navigate(linkUrl);
  };

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

  const [showCookiesPopup, setShowCookiesPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowCookiesPopup(true);
    }, 4000)
  }, []);
  const handleCookiesResponse = () => {
    setShowCookiesPopup(false);
  };
  

  return (
      <>
        <LoadingScreen onLoaded={handleLoaded} />

        <div className={`cookies-popup ${!showCookiesPopup ? 'fade-out' : ''}`}>
        <h1 className="cookies-title" >We value your privacy</h1>
        <p className="cookies-description" >This website uses cookies to help you have a superior browsing experience on the website. <span className="cookies-underlined" onClick={() => {  handleNavigateClick('/privacy-policy'); }} >Read more</span></p>
        <div className="cookies-row">
          <motion.button className="cookies-button" onClick={handleCookiesResponse} >
            <div className="navigation-left-content">
              <span className="navigation-text">ACCEPT</span>
              <span className="navigation-text">ACCEPT</span>
            </div>
          </motion.button>
          <motion.button className="cookies-button" onClick={handleCookiesResponse} >
            <div className="navigation-left-content">
              <span className="navigation-text">DECLINE</span>
              <span className="navigation-text">DECLINE</span>
            </div>
          </motion.button>
        </div>
      </div>

        <Navigation scrollToSection6={scrollToSection6} />

          <Switch >
            <Route path="/" element={ <Home section6Ref={section6Ref} /> } />
            <Route path="/contact" element={ <Contact /> } />
            <Route path="/projects" element={ <SectionProjects /> } />
            <Route path="/projects/visualization" element={ <Visualization /> } />
            <Route path="/projects/:visualization/the-manor" element={ <VisualizationSub /> } />
            <Route path="/projects/:visualization/modern-beverly-hills-mansion" element={ <VisualizationSub2 /> } />
            <Route path="/projects/:visualization/tropical-vacation-home" element={ <VisualizationSub3 /> } />
            <Route path="/projects/:visualization/minimalistic-studio" element={ <VisualizationSub4 /> } />
            <Route path="/projects/:visualization/urban-sanctuary-hotel" element={ <VisualizationSub5 /> } />
            <Route path="/projects/:visualization/contemporary-home" element={ <VisualizationSub6 /> } />
            <Route path="/learn-more" element={ <Learnmorepage /> } />
            <Route path="/privacy-policy" element={ <Policy /> } />
            <Route path="/about" element={ <SectionAbout /> } />
          </Switch>

      </>
  );
}

export default App;