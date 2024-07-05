import React, { useEffect, useRef, useState } from "react";
import { useAnimateText, useSmallTextAnimation, useImageAnimation } from "../ScrollAnimations";
import Typewriter from 'typewriter-effect';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export const Section3 = () => {

  useAnimateText(".three-title")

  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <section className="three">
        {!isMobile && (
          <div className="three-content-box-right">
            <div className="three-video-frame">
              <video className="three-video" src="/video.mp4" autoPlay="autoplay" muted="true" playsInline="true" data-wf-ignore="true" preload="auto" loop></video>
            </div>
          </div>
        )}
        <div className="three-content">
          <div className="three-content-box-left">
            <h1 className="headline three-title">Our Mission</h1>
            <p className="description three-description purple">To innovate and enhance digital experiences by crafting tailored, user-centric web solutions. We elevate and engage audiences through creativity and technology, delivering modern, intuitive websites that drive business’s success.</p>
            <div className="typewriter-box">
              <h1 className="typewriter">
                <span className='typewriter-main'>We<span className="typewriter-text"></span></span>
              </h1>
            </div>
          </div>
          {isMobile && (
            <div className="three-content-box-right">
              <div className="three-video-frame">
                <video className="three-video" src="/video.mp4" autoPlay="autoplay" muted="true" playsInline="true" data-wf-ignore="true" preload="auto" loop></video>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};