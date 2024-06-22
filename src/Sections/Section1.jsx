import React, { useEffect, useRef, useState } from "react";
import CanvasContainer from "../CanvasContainer";
import { Section6 } from "./Section6";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import useTextEffect from "../OneTextEffect";

export const Section1 = () => {

  useTextEffect(".anim");

    return (
      <>
        <section className="one panel">
          <div className="experience-one" >
            <Canvas >
              <Sparkles scale={ 15 } size={ 3 } count={ 50 } color={ "#dcd7ff" } far={ 10 } />
            </Canvas>
          </div>
          <div className="navigation">
            <motion.button
              className="navigation-left"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h1 className="navigation-text" >MENU</h1>
              <i class="fa-solid fa-bars"></i>
            </motion.button>
            <h1 className="navigation-logo-text" >DIALEDWEB</h1>
            <motion.button
              className="navigation-right"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h1 className="navigation-text" >GET IN TOUCH</h1>
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