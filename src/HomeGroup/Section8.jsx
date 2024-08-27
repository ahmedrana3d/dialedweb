import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAnimateText, useAnimateTextDelay } from "../ScrollAnimations";
import { useNavigate } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "../Sphere";
import { Environment } from "@react-three/drei";
import { easing } from "maath"
import { EffectComposer } from "@react-three/postprocessing";
import { Fluid } from "@whatisjery/react-fluid-distortion";

export const Section8 = () => {

  const navigate = useNavigate();

  const handleNavigateClick = (linkUrl) => {
    navigate(linkUrl);
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Function to update isMobile based on window size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

const hoverSound = new Audio('/fx.mp3');

const hoverSoundStart = () => {
  if (!isMobile) {
    hoverSound.play();
    hoverSound.currentTime = 0;
  }
};

const hoverSoundEnd = () => {
  if (!isMobile) {
    hoverSound.pause();
    hoverSound.currentTime = 0;
  }
};

const hoverSoundMobile = () => {
  if (isMobile) {
    hoverSound.play();
  }
};

    return (
      <>
        <section className="section eight">
            <p className="eight-bottom-description" onClick={() => handleNavigateClick('/privacy-policy')} >Privacy Policy</p>
            <div className="eight-content">
            <h1 className="headline eight-main-title" >Let’s talk about the  <br /> impact you'd like to make.</h1>
            <p className="description eight-title" >Let our projects speak for themselves and schedule your free consultation with us today.</p>
            <div className="eight-buttons">
                <motion.button
                  className="one-button"
                  onClick={() => { hoverSoundMobile(); handleNavigateClick('/projects') }}
                  onMouseEnter={hoverSoundStart}
                  onMouseLeave={hoverSoundEnd}
                >
                  <div className="navigation-left-content" >
                    <span className="navigation-text" >PROJECTS</span>
                    <span className="navigation-text" >PROJECTS</span>
                  </div>
                  <div className="navigation-arrow-box">
                    <i className="fa-solid fa-location-arrow"></i>
                  </div>
                </motion.button>
                <motion.button
                  className="one-button-transparent"
                  onClick={() => {  handleNavigateClick('/contact'); hoverSoundMobile(); }}
                  onMouseEnter={hoverSoundStart}
                  onMouseLeave={hoverSoundEnd}
                >
                  <div className="navigation-left-content" >
                    <span className="navigation-text" >GET IN TOUCH</span>
                    <span className="navigation-text" >GET IN TOUCH</span>
                  </div>
                  <div className="navigation-arrow-box">
                    <i className="fa-solid fa-location-arrow"></i>
                  </div>
                </motion.button>
            </div>
          </div>

          <div className="experience-one">
        <Canvas camera={{ position: [0, 0, 7.5], fov: 35 }}>
          {/* <Sparkles position={[0, 0, -1]} scale={[10, 10, 3]} size={4} count={40} color={"#fefeff"} far={10} speed={1} /> */}
            <Sphere />
          <Environment preset="night" />
        </Canvas>
      </div>
        </section>
      </>
    )
}