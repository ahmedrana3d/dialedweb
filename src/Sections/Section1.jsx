import React, { useEffect, useRef, useState } from "react";
import CanvasContainer from "../CanvasContainer";
import { Section6 } from "./Section6";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { useTextEffect } from "../ScrollAnimations";
import { easing } from "maath"
import { EffectComposer } from "@react-three/postprocessing";
import { Fluid } from "@whatisjery/react-fluid-distortion";

export const Section1 = () => {

  useTextEffect(".anim");

    return (
      <>
        <section className="one panel">
          <div className="experience-one" >
            <Canvas >
              <Sparkles position={ [ 0, 0, 0 ] } scale={ [ 20, 20, 5 ] } size={ 4 } count={ 40 } color={ "#a09bcb" } far={ 10 } speed={ 1 } />
              <Rig />
              <EffectComposer>
                <Fluid showBackground={ false } />
              </EffectComposer>
            </Canvas>
          </div>
          <div className="navigation">
            <motion.button
              className="navigation-left"
              whileHover={{ scale: 1.075 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="navigation-left-content" >
                <span className="navigation-text" >MENU</span>
                <span className="navigation-text" >MENU</span>
              </div>
            </motion.button>
            <h1 className="navigation-logo-text" >DIALEDWEB</h1>
            <motion.button
              className="navigation-right"
              whileHover={{ scale: 1.075 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="navigation-right-content" >
                <span className="navigation-text" >GET IN TOUCH</span>
                <span className="navigation-text" >GET IN TOUCH</span>
              </div>
            </motion.button>
          </div>
          <div className="one-content" >
            <div className="one-content-left">
              <h1 className="headline anim" >Crafting Digital <br /> <span className="headline-purple" >Masterpieces</span></h1>
            </div>
            <div className="one-content-right">
              
            </div>
          </div>
        </section>
      </>
    )
}

function Rig() {
  useFrame((state, delta) => {
    // Calculate the target camera position based on the pointer's x and y position
    const targetX = state.pointer.x * 0.5; // Adjust this multiplier as needed for the desired horizontal movement
    const targetY = state.pointer.y * 0.5;
    const targetZ = 8 + Math.atan(state.pointer.x * 2);
  
    // Smoothly move the camera to the target position
    easing.damp3(state.camera.position, [targetX, targetY, 7], 0.5, delta);
  
    // Make the camera look at a point slightly ahead of its current position to create a smooth look-at behavior
    state.camera.lookAt(state.camera.position.x, state.camera.position.y * 0.9, state.camera.position.z - 4);
  });
}