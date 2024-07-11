import React, { useEffect, useRef } from "react";
import { Section1 } from "./Section1";
import { Section3 } from "./Section3";
import { Section4 } from "./Section4";
import { Section5 } from "./Section5";
import { Section6 } from "./Section6";
import { Section7 } from "./Section7";
import { Section8 } from "./Section8";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Sparkles } from "@react-three/drei";
import { EffectComposer } from "@react-three/postprocessing";
import { Fluid } from "@whatisjery/react-fluid-distortion";
import { Sphere } from "../Sphere";
import { easing } from "maath";
import transition from "../Transition";
import { SectionScrollVideoOnScroll } from "./SectionVideoOnScroll";
import { Section2 } from "./Section2";
import { SectionVideoMobile } from "./SectionVideoMobile";
import { initializeCursors } from "../Cursor";

const Home = () => {
  const isMobile = window.innerWidth <= 768;
  const section3Ref = useRef(null);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts or updates
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    initializeCursors();
  }, []);

  return (
    <>

<div className="cursor" id="ball"></div>
<div className="cursor-text" id="cursor-text">Scroll</div>

      <Section1 section3Ref={section3Ref} />
      <div ref={section3Ref} >
        <Section3 />
      </div>
      <Section2 />
      <Section6 />
      <Section4 />
      <Section5 />
      {isMobile ? <SectionVideoMobile /> : <SectionScrollVideoOnScroll />}
      <Section8 />

      <div className="experience-one">
        <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
          {/* <Sparkles position={[0, 0, -1]} scale={[10, 10, 3]} size={4} count={40} color={"#fefeff"} far={10} speed={1} /> */}
          <Rig />
          {!isMobile && (
            <>
            <Sphere />
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
    </>
  );
};

export default transition(Home);

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
