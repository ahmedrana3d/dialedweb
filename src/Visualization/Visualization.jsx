import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import transition from "../Transition";
import { useAnimateText, useTextEffect } from "../ScrollAnimations";
import { initializeCursors } from "../Cursor";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

const phrasesDesktop = [
  "OUR ARCHITECTURAL",
  "VISUALIZATION STUDIO EXCELS",
  "IN CRAFTING STUNNING",
  "RENDERINGS OF LUXURIOUS",
  "VILLAS, ELEGANT HOUSES, AND",
  "SOPHISTICATED HOTELS",
];

const phrasesMobile = [
  "OUR ARCHITECTURAL",
  "VISUALIZATION STUDIO",
  "EXCELS IN CRAFTING",
  "STUNNING RENDERINGS",
  "OF LUXURIOUS VILLAS,",
  "ELEGANT HOUSES, AND",
  "SOPHISTICATED",
  "HOTELS"
];

const Visualization = () => {

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);

    const navigate = useNavigate();

    const handleNavigateClick = (projectSubpage) => {
      navigate(`/projects/visualization/${projectSubpage}`);
    };

      useEffect(() => {
        initializeCursors();
      }, []);

      useEffect(() => {
    
        gsap.fromTo(".overlay", 
          { width: "125%" },
          { width: "0%", duration: 1, ease: "none" }
        );
        
    }, []);

    useTextEffect(".visualization-text-title-effect")

    useEffect(() => {
      // Fade in animation for the button when component mounts
      gsap.fromTo(
        ".introduction-text-box-right-text",
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power1", delay: 2 }
      );
    }, []);

    useEffect(() => {
      gsap.to(".introduction-image", {
        width: "100%",
        scrollTrigger: {
          trigger: ".introduction-image",
          start: "top bottom",
          end: "bottom center",
          scrub: 1,
        }
      });
      // gsap.to(".introduction-image-img", {
      //   scale: 1.1,
      //   scrollTrigger: {
      //     trigger: ".introduction-image",
      //     start: "top bottom",
      //     end: "bottom center",
      //     scrub: 1,
      //   }
      // });
    }, []);

    return (
        <>

<div className="cursor" id="ball"></div>
<div className="cursor-text" id="cursor-text">Scroll</div>

    <section className="introduction">
      <div className="introduction-content">
        <div className="introduction-text-box">
          <div className="introduction-text-box-left">
            <h1 className="introduction-section-title visualization-text-title-effect" >Architectural <br /> Visualization</h1>
          </div>
          <div className="introduction-text-box-right">
            <p className="introduction-text-box-right-text" >Our architectural visualization studio excels in crafting stunning renderings of luxurious villas, elegant houses, and sophisticated hotels.</p>
          </div>
        </div>
          <div className="introduction-image">
            <div className="overlay" />
            <div className="introduction-image-img" />
            {/* <img className="introduction-image-img" src="/bali.jpg" alt="" /> */}
          </div>
      </div>
      <div className="introduction-content-images">
        <div className="introduction-content-images-sticky-box">
            <h1 className="introduction-images-sticky-text" >Featured Real Estate Projects</h1>
        </div>
        <div className="introduction-content-images-container">

          <div className="introduction-images-container-row-left">
            <div className="introduction-images-row-left" onClick={() => { handleNavigateClick("secluded-bali-villa") }} >
              <h1 className="introduction-image-row-number" >01</h1>
              <img src="/bali2.jpg" className="introduction-images-row-img" alt="" />
              <h1 className="introduction-image-row-title" >Secluded Bali Villa</h1>
            </div>
          </div>

          <div className="introduction-images-container-row-right">
            <div className="introduction-images-row-right" onClick={() => { handleNavigateClick("modern-beverly-hills-home") }} >
              <h1 className="introduction-image-row-number" >02</h1>
              <img src="/project1cover.jpg" className="introduction-images-row-img" alt="" />
              <h1 className="introduction-image-row-title" >Modern Beverly Hills Home</h1>
            </div>
          </div>

          <div className="introduction-images-container-row-left">
            <div className="introduction-images-row-left" onClick={() => { handleNavigateClick("premier-luxury-hotel") }} >
              <h1 className="introduction-image-row-number" >03</h1>
              <img src="/project2cover.jpg" className="introduction-images-row-img" alt="" />
              <h1 className="introduction-image-row-title" >Premier Luxury Hotel</h1>
            </div>
          </div>

          <div className="introduction-images-container-row-right">
            <div className="introduction-images-row-right" onClick={() => { handleNavigateClick("minimalistic-penthouse") }} >
              <h1 className="introduction-image-row-number" >04</h1>
              <img src="/project5cover.png"  className="introduction-images-row-img" alt="" />
              <h1 className="introduction-image-row-title" >Minimalisitic Penthouse </h1>
            </div>
          </div>

          <div className="introduction-images-container-row-left">
            <div className="introduction-images-row-left" onClick={() => { handleNavigateClick("visualizationsubpage5") }} >
              <h1 className="introduction-image-row-number" >05</h1>
              <img src="/project6cover.jpg" className="introduction-images-row-img" alt="" />
              <h1 className="introduction-image-row-title" >Minimalisitic Penthouse</h1>
            </div>
          </div>

          <div className="introduction-images-container-row-right">
            <div className="introduction-images-row-right" onClick={() => { handleNavigateClick("visualizationsubpage6") }} >
              <h1 className="introduction-image-row-number" >06</h1>
              <img src="/project4cover.jpg" className="introduction-images-row-img" alt="" />
              <h1 className="introduction-image-row-title" >Modern Beverly Hills Home</h1>
            </div>
          </div>

        </div>
      </div>
    </section>
        </>
      );
    };

export default transition(Visualization);

export function MaskText() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this breakpoint as per your design needs
    };

    handleResize(); // Initial check on mount
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const phrases = isMobile ? phrasesMobile : phrasesDesktop;

  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: "0",
      transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i },
    }),
  };

  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      {phrases.map((phrase, index) => (
        <div key={index} className="lineMask">
          <motion.p
            custom={index}
            className="lineMask-text"
            variants={animation}
            initial="initial"
            animate={inView ? "enter" : ""}
          >
            {phrase}
          </motion.p>
        </div>
      ))}
    </div>
  );
}