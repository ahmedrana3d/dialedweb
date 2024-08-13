import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAnimateText, useAnimateTextDelay } from "../ScrollAnimations";
import { useNavigate } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "../Sphere";
import { Environment } from "@react-three/drei";
import { easing } from "maath"
import { EffectComposer } from "@react-three/postprocessing";
import { Fluid } from "@whatisjery/react-fluid-distortion";

export const Section8 = () => {

  const navigate = useNavigate();

  const handleNavigateClick = (linkUrl) => {
    navigate(linkUrl);
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Function to update isMobile based on window size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
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

    return (
      <>
        <section className="section eight">
            <div className="eight-content">
            <h1 className="headline eight-main-title" >Let’s talk about the  <br /> impact you'd like to make.</h1>
            <p className="description eight-title" >Let our projects speak for themselves and schedule your free consultation with us today.</p>
            <div className="eight-buttons">
                <motion.button
                  className="one-button btn menu-btn"
                  data-hover
                  onClick={() => { hoverSoundMobile(); handleNavigateClick('/projects') }}
                  onMouseEnter={hoverSoundStart}
                  onMouseLeave={hoverSoundEnd}
                >
                  <div className="navigation-left-content" >
                    <span className="navigation-text" >PROJECTS</span>
                    <span className="navigation-text" >PROJECTS</span>
                  </div>
                  <div className="navigation-arrow-box">
                    <i className="fa-solid fa-location-arrow"></i>
                  </div>
                  <div data-hover-bounds></div>
                </motion.button>
                <motion.button
                  className="one-button-transparent btn menu-btn"
                  data-hover
                  onClick={() => {  handleNavigateClick('/contact'); hoverSoundMobile(); }}
                  onMouseEnter={hoverSoundStart}
                  onMouseLeave={hoverSoundEnd}
                >
                  <div className="navigation-left-content" >
                    <span className="navigation-text" >GET IN TOUCH</span>
                    <span className="navigation-text" >GET IN TOUCH</span>
                  </div>
                  <div className="navigation-arrow-box">
                    <i className="fa-solid fa-location-arrow"></i>
                  </div>
                  <div data-hover-bounds></div>
                </motion.button>
            </div>
          </div>

          <div className="experience-one">
        <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
          {/* <Sparkles position={[0, 0, -1]} scale={[10, 10, 3]} size={4} count={40} color={"#fefeff"} far={10} speed={1} /> */}
            <Sphere />
            {!isMobile && (
              <>
                <Rig />
                <EffectComposer>
                <Fluid
                radius={0.03}
                curl={10}
                swirl={5}
                distortion={1}
                force={2}
                pressure={0.94}
                densityDissipation={0.98}
                velocityDissipation={0.99}
                intensity={0.3}
                rainbow={false}
                blend={0}
                showBackground={false}
                fluidColor="#515151"
                />
              </EffectComposer>
            </>
          )}
          <Environment preset="night" />
        </Canvas>
      </div>
        </section>
      </>
    )
}

function Rig() {
  useFrame((state, delta) => {
    // Calculate the target camera position based on the pointer's x and y position
    const targetX = state.pointer.x * 0.15; // Adjust this multiplier as needed for the desired horizontal movement
    const targetY = state.pointer.y * 0.15;
    const targetZ = 8 + Math.atan(state.pointer.x * 2);
  
    // Smoothly move the camera to the target position
    easing.damp3(state.camera.position, [targetX, targetY, 7], 0.5, delta);
  
    // Make the camera look at a point slightly ahead of its current position to create a smooth look-at behavior
    state.camera.lookAt(state.camera.position.x, state.camera.position.y * 0.9, state.camera.position.z - 4);
  });
}