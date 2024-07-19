import React, { useEffect, useRef, useState } from "react";
import Spline from '@splinetool/react-spline';
import Accordion from "../Accordion";
import { motion, AnimatePresence } from "framer-motion";
import { useAnimateText, useAnimateTextDelay } from "../ScrollAnimations";
import { useNavigate } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "../Sphere";
import { Environment } from "@react-three/drei";
import { easing } from "maath"

export const Section8 = () => {

  useAnimateText(".eight-main-title")

  const navigate = useNavigate();

  const handleNavigateClick = (linkUrl) => {
    navigate(linkUrl);
  };

const isMobile = window.innerWidth <= 768;

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
        <section className="eight">
            <div className="eight-content">
            <h1 className="headline eight-main-title" >Let’s talk about the  <br /> impact you'd like to make.</h1>
            <p className="description eight-title" >Let our projects speak for themselves and schedule your free consultation with us today.</p>
            <div className="eight-buttons">
                <motion.button
                  className="one-button btn menu-btn"
                  data-hover
                  onClick={() => { hoverSoundMobile(); handleNavigateClick('/projects') }}
                  onMouseEnter={hoverSoundStart}
                  onMouseLeave={hoverSoundEnd}
                >
                  <div className="navigation-left-content" >
                    <span className="navigation-text" >PROJECTS</span>
                    <span className="navigation-text" >PROJECTS</span>
                  </div>
                  <div className="navigation-arrow-box">
                    <i class="fa-solid fa-location-arrow"></i>
                  </div>
                  <div data-hover-bounds></div>
                </motion.button>
                <motion.button
                  className="one-button-transparent btn menu-btn"
                  data-hover
                  onClick={() => {  handleNavigateClick('/contact'); hoverSoundMobile(); }}
                  onMouseEnter={hoverSoundStart}
                  onMouseLeave={hoverSoundEnd}
                >
                  <div className="navigation-left-content" >
                    <span className="navigation-text" >GET IN TOUCH</span>
                    <span className="navigation-text" >GET IN TOUCH</span>
                  </div>
                  <div className="navigation-arrow-box">
                    <i class="fa-solid fa-location-arrow"></i>
                  </div>
                  <div data-hover-bounds></div>
                </motion.button>
            </div>
          </div>

          {isMobile && (
          <div className="experience-two" >
          <Canvas camera={{ position: [0, 0, 5], fov: 35 }} >
            <Sphere />
            <Rig />
            <Environment preset="night" />
          </Canvas>
        </div>
        )}
        </section>
      </>
    )
}

function Rig() {
  useFrame((state, delta) => {
    // Calculate the target camera position based on the pointer's x and y position
    const targetX = state.pointer.x * 0.15; // Adjust this multiplier as needed for the desired horizontal movement
    const targetY = state.pointer.y * 0.15;
    const targetZ = 8 + Math.atan(state.pointer.x * 2);
  
    // Smoothly move the camera to the target position
    easing.damp3(state.camera.position, [targetX, targetY, 7], 0.5, delta);
  
    // Make the camera look at a point slightly ahead of its current position to create a smooth look-at behavior
    state.camera.lookAt(state.camera.position.x, state.camera.position.y * 0.9, state.camera.position.z - 4);
  });
}