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

const handleContactNavigate = () => {
  if (location.pathname === "/contact") {
    navigate("/");
  } else {
    navigate("/contact");
  }
};

const isMobile = window.innerWidth <= 768;

    return (
      <>
        <section className="eight">
            <div className="eight-content">
            <h1 className="headline eight-main-title" >Have an idea in mind for <br /> your business?</h1>
            <p className="description eight-title" >Let our projects speak for themselves and schedule your free consultation with us today.</p>
            <div className="eight-buttons">
                <motion.button
                  className="one-button"
                  whileHover={{ scale: 1.075 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="navigation-left-content" >
                    <span className="navigation-text" >PROJECTS</span>
                    <span className="navigation-text" >PROJECTS</span>
                  </div>
                  <div className="navigation-arrow-box">
                    <i class="fa-solid fa-location-arrow"></i>
                  </div>
                </motion.button>
                <motion.button
                  className="one-button-transparent"
                  whileHover={{ scale: 1.075 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="navigation-left-content" onClick={ handleContactNavigate } >
                    <span className="navigation-text" >GET IN TOUCH</span>
                    <span className="navigation-text" >GET IN TOUCH</span>
                  </div>
                  <div className="navigation-arrow-box">
                    <i class="fa-solid fa-location-arrow"></i>
                  </div>
                </motion.button>
            </div>
          </div>

          {isMobile && (
          <div className="experience-two" >
          <Canvas camera={{ position: [0, 0, 5], fov: 35 }} >
            <Sphere />
            <Rig />
            <Environment preset="sunset" />
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