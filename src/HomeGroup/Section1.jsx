import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useTextEffect } from "../ScrollAnimations";

export const Section1 = () => {
  useTextEffect(".anim");

  const [fullPageVisible, setFullPageVisible] = useState(false);
  const handleFullPageToggle = () => {
    setFullPageVisible(!fullPageVisible);
  };

  useEffect(() => {
    // Fade in animation for the button when component mounts
    gsap.fromTo(
      ".one-button, .one-button-transparent, .one-description",
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power1", delay: 2 }
    );

    let currentScroll = 0;
    let isScrollingDown = true;

    const tween = gsap.to(".marquee-part", {
      xPercent: -100,
      repeat: -1,
      duration: 1,
      ease: "linear",
    });

    gsap.set(".marquee-inner", { xPercent: -50 });

    const onScroll = () => {
      if (window.pageYOffset > currentScroll) {
        isScrollingDown = true;
      } else {
        isScrollingDown = false;
      }

      gsap.to(tween, {
        timeScale: isScrollingDown ? -1 : 1,
      });

      currentScroll = window.pageYOffset;
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <section className="one">
        <div className="one-content">
          <div className="one-content-left">
            <h1 className="headline anim grey">
              Crafting Digital <br /> <span className="headline-purple grey">Masterpieces</span>
            </h1>
            <p className="one-description">
              Harnessing Cutting-Edge Visualization Technology to Transform Vision into Tailored Digital Reality
            </p>
            <div className="one-content-buttons">
              <motion.button
                className="one-button"
                whileHover={{ scale: 1.075 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={handleFullPageToggle}
              >
                <div className="navigation-left-content">
                  <span className="navigation-text">WATCH OUR REEL</span>
                  <span className="navigation-text">WATCH OUR REEL</span>
                </div>
                <div className="navigation-arrow-box">
                  <i className="fa-solid fa-location-arrow"></i>
                </div>
              </motion.button>
              <motion.button
                className="one-button-transparent"
                whileHover={{ scale: 1.075 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="navigation-left-content">
                  <span className="navigation-text">OUR MISSION</span>
                  <span className="navigation-text">OUR MISSION</span>
                </div>
                <div className="navigation-arrow-box-blue">
                  <i className="fa-solid fa-location-arrow"></i>
                </div>
              </motion.button>
            </div>
          </div>
        </div>
        <div className="marquee">
          <div className="marquee-inner">
            <div className="marquee-part"><img className="marquee-image" src="gsap.png" alt="" /></div>
            <div className="marquee-part"><img className="marquee-image" src="gsap.png" alt="" /></div>
            <div className="marquee-part"><img className="marquee-image" src="gsap.png" alt="" /></div>
            <div className="marquee-part"><img className="marquee-image" src="gsap.png" alt="" /></div>
            <div className="marquee-part"><img className="marquee-image" src="gsap.png" alt="" /></div>
            <div className="marquee-part"><img className="marquee-image" src="gsap.png" alt="" /></div>
            <div className="marquee-part"><img className="marquee-image" src="gsap.png" alt="" /></div>
            <div className="marquee-part"><img className="marquee-image" src="gsap.png" alt="" /></div>
            <div className="marquee-part"><img className="marquee-image" src="gsap.png" alt="" /></div>
            <div className="marquee-part"><img className="marquee-image" src="gsap.png" alt="" /></div>
            <div className="marquee-part"><img className="marquee-image" src="gsap.png" alt="" /></div>
            <div className="marquee-part"><img className="marquee-image" src="gsap.png" alt="" /></div>
            <div className="marquee-part"><img className="marquee-image" src="gsap.png" alt="" /></div>
            <div className="marquee-part"><img className="marquee-image" src="gsap.png" alt="" /></div>
            <div className="marquee-part"><img className="marquee-image" src="gsap.png" alt="" /></div>
            <div className="marquee-part"><img className="marquee-image" src="gsap.png" alt="" /></div>
            <div className="marquee-part"><img className="marquee-image" src="gsap.png" alt="" /></div>
            <div className="marquee-part"><img className="marquee-image" src="gsap.png" alt="" /></div>
            <div className="marquee-part"><img className="marquee-image" src="gsap.png" alt="" /></div>
            <div className="marquee-part"><img className="marquee-image" src="gsap.png" alt="" /></div>
            <div className="marquee-part"><img className="marquee-image" src="gsap.png" alt="" /></div>
            <div className="marquee-part"><img className="marquee-image" src="gsap.png" alt="" /></div>
            <div className="marquee-part"><img className="marquee-image" src="gsap.png" alt="" /></div>
            <div className="marquee-part"><img className="marquee-image" src="gsap.png" alt="" /></div>
            <div className="marquee-part"><img className="marquee-image" src="gsap.png" alt="" /></div>
            <div className="marquee-part"><img className="marquee-image" src="gsap.png" alt="" /></div>
            <div className="marquee-part"><img className="marquee-image" src="gsap.png" alt="" /></div>
            <div className="marquee-part"><img className="marquee-image" src="gsap.png" alt="" /></div>
            <div className="marquee-part"><img className="marquee-image" src="gsap.png" alt="" /></div>
            <div className="marquee-part"><img className="marquee-image" src="gsap.png" alt="" /></div>
            <div className="marquee-part"><img className="marquee-image" src="gsap.png" alt="" /></div>
            <div className="marquee-part"><img className="marquee-image" src="gsap.png" alt="" /></div>
            <div className="marquee-part"><img className="marquee-image" src="gsap.png" alt="" /></div>
            <div className="marquee-part"><img className="marquee-image" src="gsap.png" alt="" /></div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {fullPageVisible && (
          <motion.div
            className="showreel-overlay"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <video
              className="showreel-video"
              src="/video.mp4"
              autoPlay
              muted
              playsInline
              data-wf-ignore="true"
              preload="auto"
              loop
            ></video>

            <motion.button
              className="navigation-left showreel-button"
              whileHover={{ scale: 1.075 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={handleFullPageToggle}
            >
              <div className="navigation-left-content">
                {isMobile ? (
                  <i className="fa-solid fa-x"></i>
                ) : (
                  <>
                    <span className="navigation-text">CLOSE</span>
                    <span className="navigation-text">CLOSE</span>
                  </>
                )}
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

