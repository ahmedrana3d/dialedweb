import React, { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import Lenis from "@studio-freight/lenis";
import { Navigation } from "./Navigation";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./HomeGroup/Home"
import Contact from "./Contact"
import { AnimatePresence } from "framer-motion";
import { RealEstatePortfolio } from "./RealEstatePortfolio";

const LoadingScreen = ({ onLoaded }) => {
  const { progress, active } = useProgress();

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

  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })
  
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)

  const location = useLocation()
  

  return (
      <>
        <LoadingScreen />

        <Navigation />

        <AnimatePresence mode="wait" >
          <Routes location={location} key={location.pathname} >
            <Route index element={ <Home /> } />
            <Route path="/contact" element={ <Contact /> } />
            <Route path="/realestate" element={ <RealEstatePortfolio /> } />
          </Routes>
        </AnimatePresence>

      </>
  );
}

export default App;