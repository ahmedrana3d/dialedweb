import React, { useEffect, useRef, useState } from "react";
import CanvasContainer from "../CanvasContainer";
import { Section6 } from "./Section6";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Sparkles } from "@react-three/drei";
import { useTextEffect } from "../ScrollAnimations";
import { easing } from "maath"
import { EffectComposer } from "@react-three/postprocessing";
import { Fluid } from "@whatisjery/react-fluid-distortion";
import Model from "../Model";

export const Section1 = () => {

  useTextEffect(".anim");

  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        const scrollThreshold = 10;
        if (window.scrollY > scrollThreshold) {
            setNavScrolled(true);
        } else {
            setNavScrolled(false);
        }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

useEffect(() => {
  const scrollers = document.querySelectorAll(".scroller");

  // If a user hasn't opted in for reduced motion, then we add the animation
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    scrollers.forEach((scroller) => {
      // add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute("data-animated", true);

      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }
}, []);

    return (
      <>
        <section className="one">
          <div className={`navigation ${navScrolled ? "scrolled" : ""}`}>
            <motion.button
              className="navigation-left"
              whileHover={{ scale: 1.075 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="navigation-left-content" >
                <span className="navigation-text" >MENU</span>
                <span className="navigation-text" >MENU</span>
              </div>
            </motion.button>
            <div className="navigation-center" >
              <img src="/Keycap.png" className="navigation-image" alt="" />
            </div>
            <motion.button
              className="navigation-right"
              whileHover={{ scale: 1.075 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="navigation-right-content" >
                <span className="navigation-text" >GET IN TOUCH</span>
                <span className="navigation-text" >GET IN TOUCH</span>
              </div>
            </motion.button>
          </div>
          <div className="one-content" >
            <div className="one-content-left">
              <h1 className="headline anim" >Crafting Digital <br /> <span className="headline-purple" >Masterpieces</span></h1>
              <div className="one-content-buttons" >
                <motion.button
                  className="one-button"
                  whileHover={{ scale: 1.075 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="one-button-content" >
                    <span className="navigation-text" >WATCH OUR REEL</span>
                    <span className="navigation-text" >WATCH OUR REEL</span>
                  </div>
                  <div className="navigation-arrow-box">
                    <i class="fa-solid fa-location-arrow"></i>
                  </div>
                </motion.button>
                <motion.button
                  className="one-button-transparent"
                  whileHover={{ scale: 1.075 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="one-button-content" >
                    <span className="navigation-text" >OUR MISSION</span>
                    <span className="navigation-text" >OUR MISSION</span>
                  </div>
                  <div className="navigation-arrow-box-blue">
                    <i class="fa-solid fa-location-arrow"></i>
                  </div>
                </motion.button>
              </div>
            </div>
            <div className="one-content-right" >
              <div className="experience" >
                <Canvas camera={{ position: [15, 2, 5], fov: 35 }} >  
                  <Float speed={ 0.5 } fallback rotationIntensity={ 0 } >
                    <Model />
                  </Float>
                  <Environment preset="warehouse" />
                </Canvas>
              </div>
            </div>
          </div>
          <div className="one-content-logos">
            <div className='scroller' data-direction="left" data-speed="slow" >
            <div className="scroller__inner">
              <img src="logo.png" alt="" />
              <img src="logo.png" alt="" />
              <img src="logo.png" alt="" />
              <img src="logo.png" alt="" />
              <img src="logo.png" alt="" />
              <img src="logo.png" alt="" />
              <img src="logo.png" alt="" />
              <img src="logo.png" alt="" />
              <img src="logo.png" alt="" />
              <img src="logo.png" alt="" />
              <img src="logo.png" alt="" />
              <img src="logo.png" alt="" />
              <img src="logo.png" alt="" />
              <img src="logo.png" alt="" />
              <img src="logo.png" alt="" />
              <img src="logo.png" alt="" />
            </div>
            </div>
          </div>
        </section>
      </>
    )
}