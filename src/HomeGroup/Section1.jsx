import React, { Suspense, useEffect, useRef, useState } from "react";
import { Section6 } from "./Section6";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, OrbitControls, Sparkles } from "@react-three/drei";
import { useTextEffect } from "../ScrollAnimations";
import gsap from "gsap";
import { Link, useNavigate } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import { Item3 } from "./Coins";

export const Section1 = ({ section3Ref }) => {
  useTextEffect(".anim");

  const [colorIndex, setColorIndex] = useState(0);

  const handleInteractive = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % 4); // Cycle through 4 colors
    setRotate(true);
  };

  useEffect(() => {
    // Fade in animation for the button when component mounts
    gsap.fromTo(
      ".one-button, .one-button-transparent, .one-description",
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power1", delay: 2 }
    );
  }, []);

  const isMobile = window.innerWidth <= 768;
  const navigate = useNavigate();

  const handleContactNavigate = () => {
    if (location.pathname === "/contact") {
      navigate("/");
    } else {
      navigate("/contact");
    }
  };

  const [rotate, setRotate] = useState(false);

  const handleRotate = () => {
    setRotate(true);
};

const handleScrollToSection3 = () => {
  section3Ref.current.scrollIntoView({ behavior: "smooth" });
};

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
      <section className="section one">
      <div className="background-element-small" />
      <div className="background-element-grid-small" />
        <div className="one-content">
          <div className="one-content-left">
            <h1 className="headline anim">Crafting Digital <br /> Masterpieces</h1>
            <p className="one-description">Harnessing Cutting-Edge Visualization Technology to Transform Vision into Tailored Digital Reality</p>
            <div className="one-content-buttons">
              <motion.button
                className="one-button-transparent"
                onClick={() => { handleScrollToSection3(); hoverSoundMobile(); }}
                onMouseEnter={hoverSoundStart}
                onMouseLeave={hoverSoundEnd}
              >
                <div className="navigation-left-content">
                  <span className="navigation-text">SEE MORE</span>
                  <span className="navigation-text">SEE MORE</span>
                </div>
                <div className="navigation-arrow-box">
                  <i className="fa-solid fa-location-arrow"></i>
                </div>
              </motion.button>
              <motion.button
                className="one-button"
                onClick={() => { handleContactNavigate(); hoverSoundMobile(); }}
                onMouseEnter={hoverSoundStart}
                onMouseLeave={hoverSoundEnd}
              >
                <div className="navigation-left-content">
                  <span className="navigation-text">GET IN TOUCH</span>
                  <span className="navigation-text">GET IN TOUCH</span>
                </div>
                <div className="navigation-arrow-box">
                  <i className="fa-solid fa-location-arrow"></i>
                </div>
              </motion.button>
            </div>
          </div>
          <div className="one-content-right">
            <div className="one-content-right-experience" >
              <Canvas camera={{ position: [ isMobile ? 0 : 5, 0, isMobile ? 8.5 : 12], fov: 35 }}>
                <Suspense fallback>
                  <Float rotationIntensity={0.5} floatIntensity={2} speed={2}>
                    <Item3 />
                  </Float>
                </Suspense>
                <Environment preset="sunset" />
                <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} enableRotate={true} enablePan={false} />
              </Canvas>
            </div>
          </div>
        </div>
        <div className="one-content-logos">
          <Marquee speed={50}>
            <div className="marquee-row">
              <img className="marquee-image" src="/webflow.png" alt="" />
              <img className="marquee-image" src="/spline.png" alt="" />
              <img className="marquee-image" src="/threejs.png" alt="" />
              <img className="marquee-image" src="/shopify.png" alt="" />
              <img className="marquee-image" src="/react.png" alt="" />
              <img className="marquee-image" src="/hostinger.png" alt="" />
              <img className="marquee-image" src="/figma.png" alt="" />
              <img className="marquee-image" src="/gsap.png" alt="" />
            </div>
          </Marquee>
        </div>
      </section>

    </>
  );
};


