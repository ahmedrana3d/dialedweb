import React, { useEffect, useRef, useState } from "react";
import {  RotatingHeader } from "../ScrollAnimations";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import BalloonModel from "../BalloonModel";

export const Section4 = () => {

    return (
      <>
        <section className="four">
          <div className="four-content-one"/>
          <div className="four-content-two"/>
          <div className="four-content-three"/>
          <div className="four-experience">
            <Canvas>
              <Float>
                <BalloonModel />
              </Float>
            </Canvas>
          </div>
        </section>
      </>
    )
}