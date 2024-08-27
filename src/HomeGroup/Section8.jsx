import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAnimateText, useAnimateTextDelay } from "../ScrollAnimations";
import { useNavigate } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "../Sphere";
import { Environment } from "@react-three/drei";
import gsap from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

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

useAnimateText(".eight-main-title")

const descriptionRef = useRef()
const buttonRef1 = useRef()
const buttonRef2 = useRef()

useEffect(() => {
  gsap.fromTo( descriptionRef.current, { opacity: 0 }, {  opacity: 1, duration: 1.5, ease: "power1", scrollTrigger: { trigger: descriptionRef.current, start: "top bottom"}});
  gsap.fromTo(buttonRef1.current, { xPercent: -50, opacity: 0, }, { xPercent: 0, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: ".eight-buttons", start: "top bottom"} });
  gsap.fromTo(buttonRef2.current, { xPercent: 50, opacity: 0, }, { xPercent: 0, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: ".eight-buttons", start: "top bottom"} });
}, []);

    return (
      <>
        <section className="section eight">
            <div className="eight-content">
            <h1 className="headline eight-main-title" >Let’s talk about the  <br /> impact you'd like to make.</h1>
            <p className="description eight-title" ref={descriptionRef} >Let our projects speak for themselves and schedule your free consultation with us today.</p>
            <div className="eight-buttons">
                <motion.button
                  className="one-button"
                  onClick={() => { hoverSoundMobile(); handleNavigateClick('/projects') }}
                  onMouseEnter={hoverSoundStart}
                  onMouseLeave={hoverSoundEnd}
                  ref={buttonRef1}
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
                  className="one-button-transparent eight-bottom-buttons"
                  onClick={() => {  handleNavigateClick('/contact'); hoverSoundMobile(); }}
                  onMouseEnter={hoverSoundStart}
                  onMouseLeave={hoverSoundEnd}
                  ref={buttonRef2}
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
        <Canvas camera={{ position: [0, 0, isMobile ? 5.5 : 7.5], fov: 35 }}>
            <Sphere />
          <Environment preset="night" />
        </Canvas>
      </div>
        </section>
      </>
    )
}