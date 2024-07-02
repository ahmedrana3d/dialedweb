import React, { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import Lenis from "@studio-freight/lenis";
import { Navigation } from "./Navigation";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./HomeGroup/Home"
import Contact from "./Contact"
import { AnimatePresence } from "framer-motion";

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
        {/* <h1 className="loading-screen__title animated-text">DIALEDWEB</h1>
        <div className="progress__container">
          <div className="progress__bar" style={{ width: `${progress}%` }}></div>
        </div> */}
        <img className="contact-video" src="/loading.gif" alt="" />
      </div>
    </div>
  );
};

function App() {

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

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  const location = useLocation()

  return (
      <>
        <LoadingScreen onLoaded={handleLoaded} />

        <Navigation />

        <AnimatePresence mode="wait" >
          <Routes location={location} key={location.pathname} >
            <Route index element={ <Home /> } />
            <Route path="/contact" element={ <Contact /> } />
          </Routes>
        </AnimatePresence>

      </>
  );
}

export default App;