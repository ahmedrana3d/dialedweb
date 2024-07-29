import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useAnimateText } from "../ScrollAnimations";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { initializeCursors } from "../Cursor";
import gsap from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import Accordion from "../Accordion";
import { Canvas } from "@react-three/fiber";
import SeltzersModel from "./SeltzersModel";
import { Environment, OrbitControls, Float } from "@react-three/drei";

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

export const CaseStudySeltzers = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    useEffect(() => {
        initializeCursors();
      }, []);

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

    useAnimateText(".casestudy-title")

      useEffect(() => {
        gsap.fromTo(
          ".casestudy-subtitle, .casestudy-button",
          { opacity: 0 },
          { opacity: 1, duration: 1.5, ease: "power1", delay: 1 }
        );
      }, []);

    //   const overlayRef = useRef()

    //   useEffect(() => {
    //     gsap.fromTo(overlayRef.current, 
    //         { yPercent: 0 },
    //         { yPercent: 125, duration: 2, ease: 'power1.out', delay: 2 }
    //       );
    //     }, []);

      useEffect(() => {
        gsap.to(".casestudy-top-right-image-img", {
            scale: 1.1, duration: 1, delay: 3, ease: 'power1.out',
        })
      }, []);

      useEffect(() => {
        const paragraphs = document.querySelectorAll('.animate-text');
    
        paragraphs.forEach(paragraph => {
          const childSplit = new SplitText(paragraph, {
            type: "lines",
            linesClass: "split-child"
          });
        
          // Set initial opacity to 0 for all lines
          gsap.set(childSplit.lines, { opacity: 0 });
        
          ScrollTrigger.create({
            trigger: paragraph,
            start: "top 90%",
            onEnter: () => {
              gsap.fromTo(childSplit.lines, 
                { opacity: 0, yPercent: 100 },
                {
                  duration: 1,
                  opacity: 1,
                  yPercent: 0,
                  ease: "power4.out",
                  stagger: 0.15
                }
              );
            },
            once: true
          });
        });
        
        return () => {
          paragraphs.forEach(paragraph => {
            const childSplit = new SplitText(paragraph, { type: "lines" });
            const parentSplit = new SplitText(paragraph, { linesClass: "split-parent" });
            childSplit.revert();
            parentSplit.revert();
          });
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
        }, []);

        useLayoutEffect(() => {
            gsap.fromTo(
              ".casestudy-full-image", 
              { yPercent: 15, opacity: 0 },
              { 
                yPercent: 0,
                opacity: 1, 
                duration: 1,
                scrollTrigger: {
                  trigger: ".casestudy-full-image",
                  start: "top bottom",
                }
              }
            );
          }, []);

          useLayoutEffect(() => {
            gsap.fromTo(
              ".casestudy-half-images", 
              { yPercent: 10, opacity: 0 },
              { 
                yPercent: 0,
                opacity: 1, 
                duration: 1.5,
                scrollTrigger: {
                  trigger: ".casestudy-half-images",
                  start: "top bottom",
                }
              }
            );
          }, []);

          const [rotate, setRotate] = useState(false);

          const handleInteractive = () => {
            setRotate(true);
          };

  return (
    <>

<div className="cursor" id="ball"></div>
<div className="cursor-text" id="cursor-text">Scroll</div>

      <section className="casestudy">
        <div className="casestudy-content" >
            <div className="casestudy-content-top" >
                <div className="casestudy-top-left">
                    <h1 className="headline casestudy-title" >Dialed Seltzers</h1>
                    <p className="casestudy-subtitle one-description" >Transforming the Digital Presence Strategy for DialedWeb Seltzers</p>
                    <div className="one-content-buttons casestudy-button">
              <motion.button
                className="one-button-transparent btn menu-btn"
                data-hover
                onClick={() => { hoverSoundMobile(); }}
                onMouseEnter={hoverSoundStart}
                onMouseLeave={hoverSoundEnd}
              >
                <div className="navigation-left-content">
                  <span className="navigation-text">VISIT WEBSITE</span>
                  <span className="navigation-text">VISIT WEBSITE</span>
                </div>
                <div className="navigation-arrow-box">
                  <i class="fa-solid fa-location-arrow"></i>
                </div>
                <div data-hover-bounds></div>
              </motion.button>
              <motion.button
                className="one-button btn menu-btn"
                onClick={() => { handleInteractive(); hoverSoundMobile(); }}
                onMouseEnter={hoverSoundStart}
                onMouseLeave={hoverSoundEnd}
                data-hover
              >
                <div className="navigation-left-content">
                  <span className="navigation-text">INTERACT</span>
                  <span className="navigation-text">INTERACT</span>
                </div>
                <div className="navigation-arrow-box">
                  <i class="fa-solid fa-location-arrow"></i>
                </div>
                <div data-hover-bounds></div>
              </motion.button>
            </div>
                </div>
                <div className="casestudy-top-right">
                    {/* <div className="casestudy-top-right-image" >
                        <img className="casestudy-top-right-image-img" src="/project7.png" alt="" />
                        <div ref={overlayRef} className="overlay"></div>
                    </div> */}
                    <Canvas camera={{ position: [10, 10, 7.5], fov: 35 }} >
                        <Suspense>
                            <Float rotationIntensity={ 0.25 } speed={ 2 } >
                                <SeltzersModel rotate={rotate} setRotate={setRotate} />
                            </Float>
                            <Environment preset="warehouse" />
                            <OrbitControls enablePan={ false } enableZoom={ false } />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
            <div className="casestudy-full-image">
                <img src="/project5.png" alt="" />
            </div>
            <div className="casestudy-explanation">
                <h1 className="casestudy-title" >The Brief</h1>
                <p className="casestudy-explanation-description animate-text" >In the bustling world of beverages, capturing the audience's attention online is more important than ever. DialedWeb Seltzers sought a vibrant and interactive website that would not only showcase their products but also create an unforgettable user experience. This case study explores how we made our own Seltzers' online platform through cutting-edge design and interactive features, ensuring a lasting impact on our audience.</p>
            </div>
            <div className="casestudy-half-images">
                <div className="casestudy-halfimage casestudy-halfimage-1" />
                <div className="casestudy-halfimage casestudy-halfimage-2" />
            </div>
            <div className="casestudy-features-box">
                <h1 className="casestudy-title" >Implemented Features</h1>
                <div className="casestudy-accordion">
                    <Accordion
                        title="Immersive Loading Screen"
                        content="The website features an engaging loading screen with a sleek animation of a seltzer can filling up. This initial interaction sets an exciting tone for the rest of the site, engaging users from the moment they arrive."
                    />
                    <Accordion
                        title="Interactive 3D Model Integration"
                        content="On the landing page, a 3D model of the seltzer can levitate and spin via a parallax scroll. Users can click the 'Rotate Can' button to interact with the model, with added sound effects of a can opening, enhancing the immersive experience."
                    />
                    <Accordion
                        title="Parallax Scrolling"
                        content="The entire website utilizes parallax scrolling to create a sense of depth and motion. This technique engages visitors by making the scrolling experience dynamic and visually appealing."
                    />
                    <Accordion
                        title="Animated Hover Effects"
                        content="Each button and can on the website features a wave effect upon hover. In the products section, hovering over a can triggers a pop-up animation that reveals ingredients and additional details, adding a playful and informative touch."
                    />
                    <Accordion
                        title="High-Quality Rendered Visuals"
                        content="The site includes high-quality rendered images and animations, showcasing the seltzers in vibrant, scenic settings. This rich visual content captures the refreshing essence of the product and enhances the overall aesthetic appeal."
                    />
                    <Accordion
                        title="Interactive Product Showcases"
                        content="Each product is presented with a dynamic showcase that includes 3D models and animated ingredient pop-ups. This feature allows users to explore the products in detail and encourages engagement through interactive elements."
                    />
                    <Accordion
                        title="Sound Design"
                        content="Incorporating subtle sound effects, such as the sound of a can opening when interacting with the 3D model, adds an extra layer of sensory engagement, making the website experience more memorable."
                    />
                    <Accordion
                        title="Engaging Visual Storytelling"
                        content="The website uses a combination of animated graphics and storytelling elements to narrate the brand's story. This approach creates an emotional connection with the audience and reinforces the brand identity."
                    />
                </div>
            </div>
        </div>
      </section>
    </>
  );
};