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

const VisualizationSub2 = () => {

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);

    const navigate = useNavigate();

      useAnimateText(".beverly-title-text")

    return (
        <>

  <section className="visualizationsub">

    <h1 className="headline beverly-title-text" >Modern Beverly Hills Mansion</h1>

      <div className="visualizationsub-row">
        <div className="visualizationsub-image beverly-image-1"/>
      </div>

      <div className="visualizationsub-row">
        <div className="visualizationsub-image beverly-image-2"/>
        <div className="visualizationsub-image beverly-image-3"/>
      </div>

      <div className="visualizationsub-row">
        <div className="visualizationsub-image beverly-image-4"/>
      </div>

  </section>
        </>
      );
    };

export default transition(VisualizationSub2);