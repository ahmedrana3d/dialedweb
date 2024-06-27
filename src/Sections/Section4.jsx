import React, { useEffect, useRef, useState, Suspense } from "react";
import {  RotatingHeader } from "../ScrollAnimations";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import BalloonModel from "../BalloonModel";
import Accordion from "../Accordion";

export const Section4 = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const accordionsData = [
    {
      title: "Innovation and Expertise",
      content: "We combine cutting-edge technology with creative design to deliver exceptional web solutions."
    },
    {
      title: "Global Reach",
      content: "We have the capability to deliver projects for clients around the world, understanding diverse market needs and preferences."
    },
    {
      title: "Custom Solutions",
      content: "Every project is unique, and we provide tailored services to meet your specific needs."
    },
    {
      title: "Cutting-Edge Technology",
      content: "We harness the most advanced tools and technologies to provide state-of-the-art solutions."
    },
    {
      title: "Brand Elevation",
      content: "We elevate your brand's online presence with modern, functional websites."
    },
    {
      title: "Quick Turnaround",
      content: "We ensure timely completion of projects without sacrificing quality, providing you with swift, dependable results that meet your deadlines."
    }
  ];

    return (
      <>
        <section className="four">
          <div className="four-content-one"/>
          <div className="four-content-two"/>
          <div className="four-content-three"/>
          <div className="four-experience">
            <Canvas camera={{ position: [0, 0, 5], fov: 35 }} >
              <Suspense fallback >
                <Float speed={2} >
                  <BalloonModel />
                </Float>
              </Suspense>
              <Environment preset="apartment" />
              <OrbitControls enableZoom={ false } />
            </Canvas>
          </div>
          <div className="four-content">
            {accordionsData.map((accordion, index) => (
              <Accordion
                key={index}
                index={index}
                title={accordion.title}
                content={accordion.content}
                isActive={activeIndex === index}
                onToggle={() => setActiveIndex(activeIndex === index ? null : index)}
              />
            ))}
          </div>
        </section>
      </>
    )
}