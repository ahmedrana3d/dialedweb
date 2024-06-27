import React, { useEffect, useRef, useState } from "react";
import Spline from '@splinetool/react-spline';
import Accordion from "../Accordion";
import { motion, AnimatePresence } from "framer-motion";
import { useAnimateText } from "../ScrollAnimations";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const useAnimateTextEight = (textSelector) => {
  useEffect(() => {
    function animateTextEight(selector) {
      document.querySelectorAll(selector).forEach((element) => {
        gsap.set(element, {
          transformPerspective: 500,
          transformOrigin: 'center bottom',
          rotationX: 70,
        });

        let mySplitText = new SplitText(element, { type: 'chars' });
        let chars = mySplitText.chars;

        gsap.fromTo(
          element,
          {
            rotationX: 70,
            opacity: 0,
          },
          {
            rotationX: 0,
            opacity: 1,
            duration: 1.25,
            delay: 0.85,
            ease: 'back.out',
            scrollTrigger: {
              trigger: '.eight-main-title',  // Start animation when '.six-content' reaches the viewport
              start: 'top center',      // Trigger animation when '.six-content' top reaches the center of the viewport
              toggleActions: 'play none none reset',
            },
          }
        );

        gsap.from(chars, {
          yPercent: 50,
          stagger: 0.03,
          opacity: 0,
          delay: 0.85,
          ease: 'power1.out',
          duration: 0.5,
          scrollTrigger: {
            trigger: '.eight-main-title',  // Start animation when '.six-content' reaches the viewport
            start: 'top center',      // Trigger animation when '.six-content' top reaches the center of the viewport
            toggleActions: 'play none none reset',
          },
        });
      });
    }

    // Apply animation to all elements with the given selector
    animateTextEight(textSelector);

    // Cleanup function to remove ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [textSelector]);
};

export const Section8 = () => {

  useAnimateTextEight(".eight-main-title")

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