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

const isMobile = window.innerWidth <= 768;

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
      gsap.to(".introduction-section-title-top", {
        marginLeft: "15%",
        scrollTrigger: {
          trigger: ".introduction-image",
          start: isMobile ? "top 40%" : "top 70%",
          end: "bottom center",
          scrub: 1,
        }
      });
      gsap.to(".introduction-section-title-bottom", {
        marginRight: "15%",
        scrollTrigger: {
          trigger: ".introduction-image",
          start: isMobile ? "top 40%" : "top 70%",
          end: "bottom center",
          scrub: 1,
        }
      });
    }, []);

    return (
        <>

<div className="cursor" id="ball"></div>
<div className="cursor-text" id="cursor-text">Scroll</div>

    <section className="introduction">
      <div className="introduction-content">
        <div className="introduction-text-box">
          <div className="introduction-text-box-left">
            <h1 className="introduction-section-title visualization-text-title-effect" > <span className="introduction-section-title-top" >Architectural</span> <br /> <span className="introduction-section-title-bottom" >Visualization</span> </h1>
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
            <div className="introduction-images-row-left" >
              <h1 className="introduction-image-row-number" >01</h1>
              <img src="/v1.jpg" className="introduction-images-row-img" alt="" />
              <h1 className="introduction-image-row-title" >Hotel Lobby</h1>
            </div>
          </div>

          {/* onClick={() => { handleNavigateClick("secluded-bali-villa") }} */}

          <div className="introduction-images-container-row-right">
            <div className="introduction-images-row-right" >
              <h1 className="introduction-image-row-number" >02</h1>
              <img src="/v2.jpg" className="introduction-images-row-img" alt="" />
              <h1 className="introduction-image-row-title" >Modern Beverly Hills Mansion</h1>
            </div>
          </div>

          <div className="introduction-images-container-row-left">
            <div className="introduction-images-row-left" >
              <h1 className="introduction-image-row-number" >03</h1>
              <img src="/newv.jpg" className="introduction-images-row-img" alt="" />
              <h1 className="introduction-image-row-title" >Tropical Vacation Home</h1>
            </div>
          </div>

          <div className="introduction-images-container-row-right">
            <div className="introduction-images-row-right" >
              <h1 className="introduction-image-row-number" >04</h1>
              <img src="/v3.jpg"  className="introduction-images-row-img" alt="" />
              <h1 className="introduction-image-row-title" >Minimalisitic Penthouse </h1>
            </div>
          </div>

          <div className="introduction-images-container-row-left">
            <div className="introduction-images-row-left" >
              <h1 className="introduction-image-row-number" >05</h1>
              <img src="/v4.jpg" className="introduction-images-row-img" alt="" />
              <h1 className="introduction-image-row-title" >Urban Skyscraper</h1>
            </div>
          </div>

          {/* <div className="introduction-images-container-row-right">
            <div className="introduction-images-row-right" onClick={() => { handleNavigateClick("visualizationsubpage6") }} >
              <h1 className="introduction-image-row-number" >06</h1>
              <img src="/project4cover.jpg" className="introduction-images-row-img" alt="" />
              <h1 className="introduction-image-row-title" >Modern Beverly Hills Home</h1>
            </div>
          </div> */}

        </div>
      </div>
    </section>
        </>
      );
    };

export default transition(Visualization);