import React, { useEffect, useRef, useState } from "react";
import {  RotatingHeader } from "../ScrollAnimations";
import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import BalloonModel from "../BalloonModel";

export const Section4 = () => {

    return (
      <>
        <section className="four">
          <div className="four-content-one"/>
          <div className="four-content-two"/>
          <div className="four-content-three"/>
          <div className="four-experience">
            <Canvas makeDefault camera={{ position: [0, 0 ,10], fov: 35 }} >
              <Float>
                <BalloonModel />
              </Float>
              <Environment preset="apartment" />
            </Canvas>
          </div>
        </section>
      </>
    )
}