import React, { Suspense, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import transition from "../Transition";
import { useAnimateText } from "../ScrollAnimations";
import { initializeCursors } from "../Cursor";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

const VisualizationSub5 = () => {

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);

    const navigate = useNavigate();

      useEffect(() => {
        initializeCursors();
      }, []);

    return (
        <>

<div className="cursor" id="ball"></div>
<div className="cursor-text" id="cursor-text">Scroll</div>

<section className="visualizationsub">

<h1 className="headline hotel-title-text" >Urban Sanctuary Hotel</h1>

  <div className="visualizationsub-row">
    <div className="visualizationsub-image ur-1"/>
    <div className="visualizationsub-image ur-2"/>
  </div>

  <div className="visualizationsub-row">
    <div className="visualizationsub-image ur-3"/>
  </div>

  <div className="visualizationsub-row">
    <div className="visualizationsub-image ur-4"/>
    <div className="visualizationsub-image ur-5"/>
  </div>

  <div className="visualizationsub-row">
    <div className="visualizationsub-image ur-6"/>
  </div>

  <div className="visualizationsub-row">
    <div className="visualizationsub-image ur-7"/>
    <div className="visualizationsub-image ur-8"/>
  </div>

</section>
        </>
      );
    };

export default transition(VisualizationSub5);