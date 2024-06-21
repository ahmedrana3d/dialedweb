import { Environment, Float, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import Model from "../Model";

export const Section2 = () => {

    return (
      <>
        <section className="two panel">
        <div className="experience" >
                <Canvas camera={{ position: [10, 0, 10], fov: 50 }} >  
                  <Float speed={ 0.5 } fallback rotationIntensity={ 0 } >
                    <Model />
                  </Float>
                  <Environment preset="warehouse" />
                </Canvas>
            </div>
            <div className="two-content" >
            </div>
        </section>
      </>
    )
}