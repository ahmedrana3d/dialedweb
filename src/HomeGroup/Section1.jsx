import React, { useEffect, useRef, useState } from "react";
import CanvasContainer from "../CanvasContainer";
import { Section6 } from "./Section6";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Sparkles } from "@react-three/drei";
import { useTextEffect } from "../ScrollAnimations";
import Model from "../Model";
import gsap from "gsap";
import Spline from '@splinetool/react-spline';
import { Link, useNavigate } from 'react-router-dom';

export const Section1 = () => {

  useTextEffect(".anim");

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

const [fullPageVisible, setFullPageVisible] = useState(false);
const handleFullPageToggle = () => {
  setFullPageVisible(!fullPageVisible);
};

useEffect(() => {
  // Fade in animation for the button when component mounts
  gsap.fromTo(
    ".one-button, .one-button-transparent, .one-description",
    { opacity: 0 },
    { opacity: 1, duration: 1.5, ease: "power1", delay: 2 }
  );
}, []);

const isMobile = window.innerWidth <= 768;

    return (
      <>
        <section className="one">
          <div className="one-content" >
            <div className="one-content-left">
              <h1 className="headline anim" >Crafting Digital <br /> <span className="headline-purple" >Masterpieces</span></h1>
              <p className="one-description" >Harnessing Cutting-Edge Visualization Technology to Transform Vision into Tailored Digital Reality</p>
              <div className="one-content-buttons" >
                <motion.button
                  className="one-button"
                  whileHover={{ scale: 1.075 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  onClick={handleFullPageToggle}
                >
                  <div className="navigation-left-content" >
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
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="navigation-left-content" >
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
              <img src="gsap.png" alt="" />
              <img src="spline.png" alt="" />
              <img src="threejs.png" alt="" />
              <img src="figma.png" alt="" />
              <img src="react.png" alt="" />
              <img src="hostinger.png" alt="" />
              <img src="webflow.png" alt="" />
              <img src="shopify.png" alt="" />
              <img src="gsap.png" alt="" />
              <img src="spline.png" alt="" />
              <img src="threejs.png" alt="" />
              <img src="figma.png" alt="" />
              <img src="react.png" alt="" />
              <img src="hostinger.png" alt="" />
              <img src="webflow.png" alt="" />
              <img src="shopify.png" alt="" />
            </div>
            </div>
          </div>
        </section>

        <AnimatePresence>
        {fullPageVisible && (
          <motion.div
            className="showreel-overlay"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <video className="showreel-video" src="/video.mp4" autoPlay="autoplay" muted="true" playsInline="true" data-wf-ignore="true" preload="auto"loop ></video>

            <motion.button
              className="navigation-left showreel-button"
              whileHover={{ scale: 1.075 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={handleFullPageToggle}
            >
              <div className="navigation-left-content" >

                {isMobile ? (
                  <i class="fa-solid fa-x"></i>
                ) : (
                <>
                  <span className="navigation-text" >CLOSE</span>
                  <span className="navigation-text" >CLOSE</span>
                </>
                )}
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      </>
    )
}
