import React, { useEffect, useRef, useState } from "react";
import {  RotatingHeader } from "../ScrollAnimations";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import BalloonModel from "../BalloonModel";
import Accordion from "../Accordion";

export const Section4 = () => {

    return (
      <>
        <section className="four">
          <div className="four-content-one"/>
          <div className="four-content-two"/>
          <div className="four-content-three"/>
          <div className="four-experience">
            <Canvas camera={{ position: [0, 0, 5], fov: 35 }} >
              <Float speed={0} >
                <BalloonModel />
              </Float>
              <Environment preset="apartment" />
              <OrbitControls enableZoom={ false } />
            </Canvas>
          </div>
          <div className="four-content">
            <div className="four-content-left">
              <Accordion 
                title="Innovation and Expertise"
                content="We combine cutting-edge technology with creative design to deliver exceptional web solutions."
              />
              <Accordion 
                title="Global Reach"
                content="We have the capability to deliver projects for clients around the world, understanding diverse market needs and preferences."
              />
              <Accordion 
                title="Custom Solutions"
                content="Every project is unique, and we provide tailored services to meet your specific needs."
              />                            
            </div>
            <div className="four-content-left">
              <Accordion 
                title="Cutting-Edge Technology"
                content="We harness the most advanced tools and technologies to provide state-of-the-art solutions."
              />
              <Accordion 
                title="Brand Elevation"
                content="We elevate your brand's online presence with modern, functional websites."
              />
              <Accordion 
                title="Quick Turnaround"
                content="We ensure timely completion of projects without sacrificing quality, providing you with swift, dependable results that meet your deadlines."
              />                            
            </div>
          </div>
        </section>
      </>
    )
}