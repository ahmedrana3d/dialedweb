import React, { useEffect, useRef, useState } from "react";
import CanvasContainer from "../CanvasContainer";
import { Section6 } from "./Section6";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Sparkles } from "@react-three/drei";
import { useTextEffect } from "../ScrollAnimations";
import { easing } from "maath"
import { EffectComposer } from "@react-three/postprocessing";
import { Fluid } from "@whatisjery/react-fluid-distortion";
import Model from "../Model";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

const customEase = CustomEase.create("customEase", ".4,0,.1,1")

export const Section1 = () => {

  // NAV OVERLAY
  const [menu, setMenu] = useState(false);
  const menuContentRef = useRef(null);
  const menuNavRef = useRef(null);
  const menuContainerRef = useRef(null);
  const menuSocialRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      ".menu",
      { display: "none" },
      { display: "block", duration: 0.5, ease: customEase },
      0
    );

    tl.fromTo(
      menuContentRef.current,
      { opacity: 0, gap: "150px" },
      { opacity: 1, duration: 0.5, gap: "10px", ease: customEase },
      0
    );

    tl.fromTo(
      menuNavRef.current,
      { transform: "translate3d(0, 5.5em, 0) rotate(3.5deg)" },
      {
        transform: "translate3d(0, 0, 0) rotate(0deg)",
        duration: 0.5,
        ease: customEase,
      },
      0
    );

    tl.fromTo(
      menuContainerRef.current,
      { transform: "translate3d(0, 5.5em, 0) rotate(-3.5deg)" },
      {
        transform: "translate3d(0, 0, 0) rotate(0deg)",
        duration: 0.5,
        ease: customEase,
      },
      0
    );

    tl.fromTo(
      menuSocialRef.current,
      { transform: "translate3d(0, 5.5em, 0) rotate(-3.5deg)" },
      {
        transform: "translate3d(0, 0, 0) rotate(0deg)",
        duration: 0.5,
        ease: customEase,
      },
      0
    );

    // Function to handle opening and closing
    const handleOpen = (isClosed) => {
      if (isClosed) {
        tl.play();
      } else {
        tl.progress(1).reverse();
      }
    };

    handleOpen(menu);

    return () => {
      tl.kill();
    };
  }, [menu]);

  const navLinks = [
    { title: "HOME", path: "/" },
    { title: "PROJECTS", path: "/project" },
    { title: "LEARN", path: "/" },
    { title: "GET IN TOUCH", path: "/contact" },
  ];
  // OTHER

  useTextEffect(".anim");

  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        const scrollThreshold = 10;
        if (window.scrollY > scrollThreshold) {
            setNavScrolled(true);
        } else {
            setNavScrolled(false);
        }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

useEffect(() => {
  const scrollers = document.querySelectorAll(".scroller");

  // If a user hasn't opted in for reduced motion, then we add the animation
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    scrollers.forEach((scroller) => {
      // add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute("data-animated", true);

      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }
}, []);

    return (
      <>
        <section className="one">

        <div className="menu-container" >
        <div className="menu ">
          <div key="menuContent" className="menuContent" ref={menuContentRef}>
            <div className="menuNav" ref={menuNavRef}>
              <div className="menu-button" >
                <span className="menu-text" >HOME</span>
                <span className="menu-text" >HOME <i class="fa-solid fa-location-arrow menu-icon"></i> </span>
              </div>
              <div className="menu-button" >
                <span className="menu-text" >PROJECTS</span>
                <span className="menu-text" >PROJECTS <i class="fa-solid fa-location-arrow menu-icon"></i> </span>
              </div>
              <div className="menu-button" >
                <span className="menu-text" >LEARN</span>
                <span className="menu-text" >LEARN <i class="fa-solid fa-location-arrow menu-icon"></i> </span>
              </div>
              <div className="menu-button" >
                <span className="menu-text" >GET IN TOUCH</span>
                <span className="menu-text" >GET IN TOUCH <i class="fa-solid fa-location-arrow menu-icon"></i> </span>
              </div>
            </div>
              <div ref={menuContainerRef} className="menuContainer">
                <h1 className="menu-text">Book Your Consultation</h1>
                <div className="inputContainer">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="emailinput"
                  />
                </div>
              </div>
            <div className="menuSocial" ref={menuSocialRef}>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>
        </div>

          <div className={`navigation ${navScrolled ? "scrolled" : ""}`}>
            <motion.button
              className="navigation-left"
              whileHover={{ scale: 1.075 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={() => {
                setMenu(!menu);
              }}
            >
              <div className="navigation-left-content" >
                <span className="navigation-text" >MENU</span>
                <span className="navigation-text" >MENU</span>
              </div>
            </motion.button>
            <div className="navigation-center" >
              <img src="/Keycap.png" className="navigation-image" alt="" />
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
                  <div className="navigation-left-content" >
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
                  <div className="navigation-left-content" >
                    <span className="navigation-text" >OUR MISSION</span>
                    <span className="navigation-text" >OUR MISSION</span>
                  </div>
                  <div className="navigation-arrow-box-blue">
                    <i class="fa-solid fa-location-arrow"></i>
                  </div>
                </motion.button>
              </div>
            </div>
            <div className="one-content-right" >
              <div className="experience" >
                <Canvas camera={{ position: [15, 2, 5], fov: 35 }} >  
                  <Float speed={ 0.5 } fallback rotationIntensity={ 0 } >
                    <Model />
                  </Float>
                  <Environment preset="warehouse" />
                </Canvas>
              </div>
            </div>
          </div>
          <div className="one-content-logos">
            <div className='scroller' data-direction="left" data-speed="slow" >
            <div className="scroller__inner">
              <img src="logo.png" alt="" />
              <img src="logo.png" alt="" />
              <img src="logo.png" alt="" />
              <img src="logo.png" alt="" />
              <img src="logo.png" alt="" />
              <img src="logo.png" alt="" />
              <img src="logo.png" alt="" />
              <img src="logo.png" alt="" />
              <img src="logo.png" alt="" />
              <img src="logo.png" alt="" />
              <img src="logo.png" alt="" />
              <img src="logo.png" alt="" />
              <img src="logo.png" alt="" />
              <img src="logo.png" alt="" />
              <img src="logo.png" alt="" />
              <img src="logo.png" alt="" />
            </div>
            </div>
          </div>
        </section>
      </>
    )
}
