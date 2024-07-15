import React, { Suspense, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import transition from "./Transition";
import { useAnimateText } from "./ScrollAnimations";
import { initializeCursors } from "./Cursor";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

const phrases = [
    "OUR ARCHITECTURAL",
    "VISUALIZATION STUDIO EXCELS",
    "IN CRAFTING STUNNING",
    "RENDERINGS OF LUXURIOUS",
    "VILLAS, ELEGANT HOUSES, AND",
    "SOPHISTICATED HOTELS",
  ]

const ProjectSubPage1 = () => {

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);

    const navigate = useNavigate();

      useEffect(() => {
        initializeCursors();
      }, []);

      useEffect(() => {
        gsap.from(".introduction-section-title", {
          duration: 1.75,
          y: 250,
          delay: 2.9,
          stagger: 0.1,
          ease: "power4.inOut",
        });
        gsap.fromTo(
          ".introduction-section-description, .introduction-section-description-top",
          { opacity: 0 },
          { opacity: 1, duration: 1.5, ease: "power1", delay: 4.5 }
        );
    
        gsap.fromTo(".overlay", 
          { width: "125%" },
          { width: "0%", duration: 1, ease: "none" }
        );
        
        gsap.to(".introduction-image-img", {
          y: "-10vw",
          delay: 3,
          duration: 0.4,
          ease: "none",
        });
    }, []);

    return (
        <>

<div className="cursor" id="ball"></div>
<div className="cursor-text" id="cursor-text">Scroll</div>

    <section className="introduction">
      <div className="introduction-content">
        <div className="introduction-text-box">
            <h1 className="introduction-section-title" >VISUALIZATION</h1>
        </div>
          <div className="introduction-image">
            <div className="overlay"></div>
              <img className="introduction-image-img" src="/bali.jpg" alt="" />
          </div>
          <div className="introduction-bottom-content">
            <div className="introduction-bottom-content-left">
                <div className="introduction-bottom-circle"></div>
                <h1 className="introduction-bottom-left-text" >Architectural 3D Visualization</h1>
            </div>
            <div className="introduction-bottom-content-right">
                {/* <h1 className="introduction-bottom-content-right-text" >Our architectural visualization studio excels in crafting stunning renderings of luxurious villas, elegant houses, and sophisticated hotels.</h1> */}
                <div className="masktext-container">
                    <MaskText/>
                </div>
            </div>
          </div>
      </div>
      <div className="introduction-content-images">
        <div className="introduction-content-images-sticky-box">
            <h1 className="introduction-images-sticky-text" >Featured Real Estate Projects</h1>
        </div>
        <div className="introduction-content-images-container">

          <div className="introduction-images-container-row-left">
            <div className="introduction-images-row-left">
              <h1 className="introduction-image-row-number" >01</h1>
              <img src="/bali2.jpg" className="introduction-images-row-img" alt="" />
              <h1 className="introduction-image-row-title" >Secluded Bali Villa</h1>
            </div>
          </div>

          <div className="introduction-images-container-row-right">
            <div className="introduction-images-row-right">
              <h1 className="introduction-image-row-number" >02</h1>
              <img src="/project1cover.jpg" className="introduction-images-row-img" alt="" />
              <h1 className="introduction-image-row-title" >Modern Beverly Hills Home</h1>
            </div>
          </div>

          <div className="introduction-images-container-row-left">
            <div className="introduction-images-row-left">
              <h1 className="introduction-image-row-number" >03</h1>
              <img src="/project5cover.png" className="introduction-images-row-img" alt="" />
              <h1 className="introduction-image-row-title" >Minimalisitic Penthouse</h1>
            </div>
          </div>

          <div className="introduction-images-container-row-right">
            <div className="introduction-images-row-right">
              <h1 className="introduction-image-row-number" >04</h1>
              <img src="/project2cover.jpg" className="introduction-images-row-img" alt="" />
              <h1 className="introduction-image-row-title" >Premier Luxury Hotel</h1>
            </div>
          </div>

          <div className="introduction-images-container-row-left">
            <div className="introduction-images-row-left">
              <h1 className="introduction-image-row-number" >05</h1>
              <img src="/project6cover.jpg" className="introduction-images-row-img" alt="" />
              <h1 className="introduction-image-row-title" >Minimalisitic Penthouse</h1>
            </div>
          </div>

          <div className="introduction-images-container-row-right">
            <div className="introduction-images-row-right">
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

export default transition(ProjectSubPage1);

export function MaskText() {

    const animation = {
      initial: {y: "100%"},
      enter: i => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})
    }
  
    const { ref, inView, entry } = useInView({
      threshold: 0.75,
      triggerOnce: true
    });
  
    return(
      <div ref={ref} >
        {
          phrases.map( (phrase, index) => {
            return <div key={index} className="lineMask">
              <motion.p custom={index} className="lineMask-text" variants={animation} initial="initial" animate={inView ? "enter" : ""}>{phrase}</motion.p>
            </div>
          })
        }
      </div>
    )
  }