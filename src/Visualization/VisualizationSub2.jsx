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

      useEffect(() => {
        initializeCursors();
      }, []);

      useAnimateText(".beverly-title-text")

    return (
        <>

<div className="cursor" id="ball"></div>
<div className="cursor-text" id="cursor-text">Scroll</div>

  <section className="visualizationsub">

    <h1 className="headline beverly-title-text" >Modern Beverly Hills Home</h1>

      <div className="visualizationsub-row-big">
        <div className="visualizationsub-image beverly-image-1"/>
        <div className="visualizationsub-image beverly-image-2"/>
      </div>

      <div className="visualizationsub-row">
        <div className="visualizationsub-image beverly-image-3"/>
        <div className="visualizationsub-image beverly-image-4"/>
        <div className="visualizationsub-image beverly-image-5"/>
      </div>

      <div className="visualizationsub-row-big">
      <div className="visualizationsub-image beverly-image-6"/>
      <div className="visualizationsub-image beverly-image-7"/>
      </div>

  </section>
        </>
      );
    };

export default transition(VisualizationSub2);