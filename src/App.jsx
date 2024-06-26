import React, { useEffect, useState } from "react";
import { Sparkles, useProgress } from "@react-three/drei";
import { Section1 } from "./Sections/Section1";
import { Section2 } from "./Sections/Section2";
import { Section3 } from "./Sections/Section3";
import { Section4 } from "./Sections/Section4";
import { Section5 } from "./Sections/Section5";
import Lenis from "@studio-freight/lenis";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import { Fluid } from "@whatisjery/react-fluid-distortion";
import { easing } from "maath"
import Spline from '@splinetool/react-spline';

const LoadingScreen = ({ onLoaded }) => {
  const { progress, active } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      onLoaded();
    }
  }, [progress, onLoaded]);

  return (
    <div className={`loading-screen ${active ? "" : "loading-screen--hidden"}`}>
      <div className="loading-screen__container">
        <h1 className="loading-screen__title animated-text">DIALEDWEB</h1>
        <div className="progress__container">
          <div className="progress__bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

function App() {

  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 0.5,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    setLenis(lenisInstance);

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  const handleLoaded = () => {
    setTimeout(() => {
      if (lenis) {
        lenis.start();
      }
      document.body.style.overflow = 'auto';
    }, 1000); // Delay for 1 second
  };

  useEffect(() => {
    if (lenis) {
      lenis.stop();
    }
    document.body.style.overflow = 'hidden';
  }, [lenis]);

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return (
      <>
        <LoadingScreen onLoaded={handleLoaded} />

        <Section1 />
        <Section3 />
        <Section4 />
        <Section5 />

        <div className="experience-one" >
          <Canvas >
            <Sparkles position={ [ 0, 0, -1 ] } scale={ [ 20, 20, 5 ] } size={ 4 } count={ 40 } color={ "#a09bcb" } far={ 10 } speed={ 1 } />
            <Rig />
            {/* <mesh>
              <sphereGeometry />
            </mesh> */}
            <EffectComposer>
              <Fluid showBackground={ false } intensity={ 0.35 } radius={ 0.05 } fluidColor="#a09bcb" />
            </EffectComposer>
          </Canvas>
        </div>

      </>
  );
}

export default App;

function Rig() {
  useFrame((state, delta) => {
    // Calculate the target camera position based on the pointer's x and y position
    const targetX = state.pointer.x * 0.5; // Adjust this multiplier as needed for the desired horizontal movement
    const targetY = state.pointer.y * 0.5;
    const targetZ = 8 + Math.atan(state.pointer.x * 2);
  
    // Smoothly move the camera to the target position
    easing.damp3(state.camera.position, [targetX, targetY, 7], 0.5, delta);
  
    // Make the camera look at a point slightly ahead of its current position to create a smooth look-at behavior
    state.camera.lookAt(state.camera.position.x, state.camera.position.y * 0.9, state.camera.position.z - 4);
  });
}