import React, { useEffect, useRef, useState } from "react";
import Spline from '@splinetool/react-spline';
import Accordion from "../Accordion";
import { motion, AnimatePresence } from "framer-motion";
import { useAnimateText, useAnimateTextDelay } from "../ScrollAnimations";

export const Section8 = () => {

  useAnimateText(".eight-main-title")

    return (
      <>
        <section className="eight">
            <div className="eight-content">
            <h1 className="headline-purple eight-main-title" >Have an idea in mind for <br /> your business?</h1>
            <p className="description eight-title" >Let our projects speak for themselves and schedule your free consultation with us today.</p>
            <div className="eight-buttons">
                <motion.button
                  className="one-button"
                  whileHover={{ scale: 1.075 }}
                  whileTap={{ scale: 0.9 }}
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
                  className="one-button"
                  whileHover={{ scale: 1.075 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="navigation-left-content" >
                    <span className="navigation-text" >GET IN TOUCH</span>
                    <span className="navigation-text" >GET IN TOUCH</span>
                  </div>
                  <div className="navigation-arrow-box">
                    <i class="fa-solid fa-location-arrow"></i>
                  </div>
                </motion.button>
            </div>
          </div>
        </section>
      </>
    )
}