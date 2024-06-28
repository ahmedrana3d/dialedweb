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
                  <h1 className="why-us-title" >Cutting Edge Technology</h1>
                </div>
                <div className="why-us-right">

                  <div className="why-us-right-row">
                    <i class="fa-solid fa-link why-us-icon"></i>
                    <div className="why-us-right-row-texts">
                      <h1 className="why-us-text-title" >High performance</h1>
                      <p className="why-us-text-description" >Utilizes the power of the GPU (Graphics Processing Unit) to render complex graphics and animations smoothly. Capable of handling large volumes of data and intricate scenes with high frame rates.</p>
                    </div>
                  </div>

                  <div className="why-us-right-row">
                    <i class="fa-solid fa-bars why-us-icon"></i>
                    <div className="why-us-right-row-texts">
                      <h1 className="why-us-text-title" >Interactivity</h1>
                      <p className="why-us-text-description" >Supports real-time user interactions, making websites more engaging. Users can navigate 3D environments, manipulate objects, and experience dynamic content.</p>
                    </div>
                  </div>

                  <div className="why-us-right-row">
                    <i class="fa-solid fa-fire why-us-icon"></i>
                    <div className="why-us-right-row-texts">
                      <h1 className="why-us-text-title" >Cross-Platform Compatibility</h1>
                      <p className="why-us-text-description" >Our 3D websites are designed to work flawlessly on a wide range of devices, ensuring accessibility for all users. Our web experiences offer real-time interactivity, allowing users to seamlessly manipulate objects, explore environments, and experience dynamic content. Users enjoy can enjoy our websites whether they are on a high-end desktop or a mobile device.</p>
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
                      <h1 className="why-us-text-title" >International Clientele</h1>
                      <p className="why-us-text-description" >Our services have a global appeal, attracting clients from various continents and industries. We understand the nuances of different markets, allowing us to tailor our solutions to meet specific regional requirements.</p>
                    </div>
                  </div>

                  <div className="why-us-right-row">
                    <i class="fa-solid fa-truck-fast why-us-icon"></i>
                    <div className="why-us-right-row-texts">
                      <h1 className="why-us-text-title" >Multi-Lingual Team</h1>
                      <p className="why-us-text-description" >Our team's diverse linguistic skills enable us to communicate effectively with clients worldwide. We offer support and services in multiple languages, ensuring clear and efficient communication.</p>
                    </div>
                  </div>

                  <div className="why-us-right-row">
                    <i class="fa-solid fa-ghost why-us-icon"></i>
                    <div className="why-us-right-row-texts">
                      <h1 className="why-us-text-title" >Global Market Insights</h1>
                      <p className="why-us-text-description" >Our team’s global background gives us deep insights into diverse international markets, allowing us to create tailored, culturally relevant solutions. We stay updated on trends and user behavior to design intuitive, engaging experiences that resonate worldwide.</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="why-us-box">
                <div className="why-us-left">
                  <h1 className="why-us-title" >Client-Centric Approach</h1>
                </div>
                <div className="why-us-right">

                  <div className="why-us-right-row">
                  <i class="fa-solid fa-compass why-us-icon"></i>
                    <div className="why-us-right-row-texts">
                      <h1 className="why-us-text-title" >Personalized Service</h1>
                      <p className="why-us-text-description" >We begin with in-depth consultations to fully understand your vision, objectives, and specific requirements. This allows us to tailor our services precisely to your needs, ensuring a customized solution that aligns perfectly with your brand.</p>
                    </div>
                  </div>

                  <div className="why-us-right-row">
                    <i class="fa-solid fa-key why-us-icon"></i>
                    <div className="why-us-right-row-texts">
                      <h1 className="why-us-text-title" >Collaborative Development</h1>
                      <p className="why-us-text-description" >Throughout the development process, we maintain open and continuous communication, valuing your input and feedback at every stage. This ensures the final product not only meets but exceeds your expectations, with every detail reflecting your vision.</p>
                    </div>
                  </div>

                  <div className="why-us-right-row">
                    <i class="fa-solid fa-code why-us-icon"></i>
                    <div className="why-us-right-row-texts">
                      <h1 className="why-us-text-title" >Dedicated Partnership</h1>
                      <p className="why-us-text-description" >We view our clients as partners and are committed to their long-term success. Beyond project delivery, we remain engaged to help you leverage new opportunities, adapt to changes, and continuously improve your 3D web experiences. Our team is always ready to provide strategic advice and support as your business evolves.</p>
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