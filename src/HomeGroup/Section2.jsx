import React, { useEffect, useRef, useState } from "react";
import { useAnimateText } from "../ScrollAnimations";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

export const Section2 = () => {

    useAnimateText(".two-title");

    const navigate = useNavigate();

    const handleProjectsNavigate = () => {
        navigate("/projects");
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

    const boxRef1 = useRef();
    const boxRef2 = useRef();
    const boxRef3 = useRef();
    const boxRef4 = useRef();

    useEffect(() => {
      gsap.fromTo( boxRef1.current, { xPercent: -50, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef1.current, start: "top bottom"}});
      gsap.fromTo( boxRef2.current, { xPercent: 50, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef2.current, start: "top bottom"}});
      gsap.fromTo( boxRef3.current, { xPercent: -50, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef3.current, start: "top bottom"}});
      gsap.fromTo( boxRef4.current, { xPercent: 50, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef4.current, start: "top bottom"}});
    }, []);

  return (
    <>
      <section className="section two">
        <div className="two-content">
            <h1 className="headline two-title">Featured Projects</h1>
            <div className="two-images-container">
                <div className="two-images-container-row">
                    <div className="two-images-box-big  hover-area" ref={boxRef1} data-cursor-text="CLICK" onClick={() => { handleProjectsNavigate(); hoverSoundMobile(); }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                        <img className="two-images-box-big-image" src="/ecomwaveproject.jpg" alt="" />
                        <div className="two-images-box-content">
                            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item-first">
                                <h1 className="two-images-box-content-item-text" >Websites</h1>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                <h1 className="two-images-box-content-item-text" >Design</h1>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                <h1 className="two-images-box-content-item-text" >Visualisation</h1>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                <h1 className="two-images-box-content-item-text" >Animation</h1>
                            </motion.div>
                        </div>
                    </div>
                    <div className="two-images-box-small  hover-area" ref={boxRef2} data-cursor-text="CLICK" onClick={() => { handleProjectsNavigate(); hoverSoundMobile(); }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                        <img className="two-images-box-big-image" src="/vitalentaproject.jpg" alt="" />
                        <div className="two-images-box-content">
                            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item-first">
                                <h1 className="two-images-box-content-item-text" >Websites</h1>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                <h1 className="two-images-box-content-item-text" >Design</h1>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                <h1 className="two-images-box-content-item-text" >Visualisation</h1>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                <h1 className="two-images-box-content-item-text" >Animation</h1>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className="two-images-container-row">
                    <div className="two-images-box-small  hover-area" ref={boxRef3} data-cursor-text="CLICK" onClick={() => { handleProjectsNavigate(); hoverSoundMobile(); }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                        <img className="two-images-box-big-image" src="/project7.png" alt="" />
                        <div className="two-images-box-content">
                            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item-first">
                                <h1 className="two-images-box-content-item-text" >Websites</h1>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                <h1 className="two-images-box-content-item-text" >Design</h1>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                <h1 className="two-images-box-content-item-text" >Consultation</h1>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                <h1 className="two-images-box-content-item-text" >Data</h1>
                            </motion.div>
                        </div>
                    </div>
                    <div className="two-images-box-big  hover-area" ref={boxRef4} data-cursor-text="CLICK" onClick={() => { handleProjectsNavigate(); hoverSoundMobile(); }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                        <img className="two-images-box-big-image" src="/diginew.png" alt="" />
                        <div className="two-images-box-content">
                            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item-first">
                                <h1 className="two-images-box-content-item-text" >Websites</h1>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                <h1 className="two-images-box-content-item-text" >Design</h1>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                <h1 className="two-images-box-content-item-text" >Visualisation</h1>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className="two-images-box-content-item">
                                <h1 className="two-images-box-content-item-text" >Animation</h1>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};