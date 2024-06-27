import React, { useEffect, useRef, useState, Suspense } from "react";
import {  RotatingHeader, useAnimateText } from "../ScrollAnimations";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import BalloonModel from "../BalloonModel";
import Accordion from "../Accordion";

export const Section4 = () => {

  useAnimateText(".four-animate-text")

    return (
      <>
        <section className="balloonStart" >

        </section>
        <section className="four">
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
            <h1 className="headline-purple-big four-animate-text" >Why Us</h1>
            <div className="why-us-container">

              <div className="why-us-box">
                <div className="why-us-left">
                  <h1 className="why-us-title" >Innovation, Expertise</h1>
                </div>
                <div className="why-us-right">

                  <div className="why-us-right-row">
                    <i class="fa-solid fa-link why-us-icon"></i>
                    <div className="why-us-right-row-texts">
                      <h1 className="why-us-text-title" >Cross-Chain Swaps</h1>
                      <p className="why-us-text-description" >Seamlessly swap between thousands of  tokens across 10+ blockchain networks.</p>
                    </div>
                  </div>

                  <div className="why-us-right-row">
                    <i class="fa-solid fa-bars why-us-icon"></i>
                    <div className="why-us-right-row-texts">
                      <h1 className="why-us-text-title" >Get The Best Prices</h1>
                      <p className="why-us-text-description" >We connect you to over 100+ different trading platforms and private market makers to ensure you always get the best prices.</p>
                    </div>
                  </div>

                  <div className="why-us-right-row">
                    <i class="fa-solid fa-fire why-us-icon"></i>
                    <div className="why-us-right-row-texts">
                      <h1 className="why-us-text-title" >Gasless Trading</h1>
                      <p className="why-us-text-description" >Scepter handles the network fees on all trades so you never run out of gas – even for cross-chain swaps.</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="why-us-box">
                <div className="why-us-left">
                  <h1 className="why-us-title" >Global Reach</h1>
                </div>
                <div className="why-us-right">

                  <div className="why-us-right-row">
                    <i class="fa-solid fa-wand-magic-sparkles why-us-icon" ></i>
                    <div className="why-us-right-row-texts">
                      <h1 className="why-us-text-title" >One click Strategies</h1>
                      <p className="why-us-text-description" >Put your idle crypto to work in seconds. Explore the best opportunities to earn yield on your digital assets.</p>
                    </div>
                  </div>

                  <div className="why-us-right-row">
                    <i class="fa-solid fa-truck-fast why-us-icon"></i>
                    <div className="why-us-right-row-texts">
                      <h1 className="why-us-text-title" >Cross-Chain Swaps</h1>
                      <p className="why-us-text-description" >Seamlessly swap between thousands of  tokens across 10+ blockchain networks</p>
                    </div>
                  </div>

                  <div className="why-us-right-row">
                    <i class="fa-solid fa-ghost why-us-icon"></i>
                    <div className="why-us-right-row-texts">
                      <h1 className="why-us-text-title" >Connect to any dApp</h1>
                      <p className="why-us-text-description" >Connect your crypto to any DeFi application using our Wallet Connect integration.</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="why-us-box">
                <div className="why-us-left">
                  <h1 className="why-us-title" >Custom Solutions</h1>
                </div>
                <div className="why-us-right">

                  <div className="why-us-right-row">
                  <i class="fa-solid fa-compass why-us-icon"></i>
                    <div className="why-us-right-row-texts">
                      <h1 className="why-us-text-title" >Explore</h1>
                      <p className="why-us-text-description" >Seamlessly swap between thousands of  tokens across 10+ blockchain networks</p>
                    </div>
                  </div>

                  <div className="why-us-right-row">
                    <i class="fa-solid fa-key why-us-icon"></i>
                    <div className="why-us-right-row-texts">
                      <h1 className="why-us-text-title" >Price tracking</h1>
                      <p className="why-us-text-description" >Seamlessly swap between thousands of  tokens across 10+ blockchain networks</p>
                    </div>
                  </div>

                  <div className="why-us-right-row">
                    <i class="fa-solid fa-code why-us-icon"></i>
                    <div className="why-us-right-row-texts">
                      <h1 className="why-us-text-title" >Gallery</h1>
                      <p className="why-us-text-description" >Seamlessly swap between thousands of  tokens across 10+ blockchain networks</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>
      </>
    )
}