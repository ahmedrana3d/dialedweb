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
        <section className="one">
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
            <div className="navigation-center" >
              <h1 className="navigation-logo-text" >DIALEDWEB</h1>
            </div>
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
              <div className="one-content-buttons" >
                <motion.button
                  className="one-button"
                  whileHover={{ scale: 1.075 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="one-button-content" >
                    <span className="navigation-text" >WATCH OUR REEL</span>
                    <span className="navigation-text" >WATCH OUR REEL</span>
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
                  <div className="one-button-content" >
                    <span className="navigation-text" >OUR MISSION</span>
                    <span className="navigation-text" >OUR MISSION</span>
                  </div>
                  <div className="navigation-arrow-box-blue">
                    <i class="fa-solid fa-location-arrow"></i>
                  </div>
                </motion.button>
              </div>
            </div>
            <div className="one-content-right" />
          </div>
        </section>
      </>
    )
}