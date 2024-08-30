import React, { Suspense, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import transition from "../Transition";
import { useAnimateText } from "../ScrollAnimations";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

const VisualizationSub4 = () => {

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);

    const navigate = useNavigate();

    return (
        <>
<section className="visualizationsub">

<h1 className="headline hotel-title-text" >Minimalistic Studio</h1>

  <div className="visualizationsub-row">
    <div className="visualizationsub-image st-1"/>
    <div className="visualizationsub-image st-2"/>
  </div>

  <div className="visualizationsub-row">
    <div className="visualizationsub-image st-3"/>
    <div className="visualizationsub-image st-4"/>
  </div>

</section>
        </>
      );
    };

export default transition(VisualizationSub4);