import React, { useEffect, useRef, useState } from "react";
import Spline from '@splinetool/react-spline';
import { useAnimateTextDelay } from "../ScrollAnimations";

export const Section6 = () => {

  useAnimateTextDelay(".six-title");

    return (
      <>
        <section className="six">
          <div className="six-content">
            <div className="services-container">

              <div className="service-box-top">
                  <h1 className="headline-purple six-title" >Our Services</h1>
              </div>
              <div className="service-box service-one">
                <div className="service-box-left">
                  <h1 className="service-title" > Website design, Development & Implementation</h1>
                </div>
                <div className="service-box-right">
                  <div className="service-box-right-content">
                  <div className="service-name-box">
                    <h1 className="service-description" >E-commerce integration</h1>
                  </div>
                  <div className="service-name-box">
                    <h1 className="service-description" >Interactive 3D configurators & customizers</h1>
                  </div>
                  <div className="service-name-box">
                    <h1 className="service-description" >Front-End UI/UX Design</h1>
                  </div>
                  <div className="service-name-box">
                    <h1 className="service-description" >Storytelling functionalities</h1>
                  </div>
                  </div>
                </div>
              </div>
              <div className="service-box">
                <div className="service-box-left">
                  <h1 className="service-title" >Data Organization & Visualization</h1>
                </div>
                <div className="service-box-right">
                  <div className="service-box-right-content">
                  <div className="service-name-box">
                    <h1 className="service-description" >Performance Analysis</h1>
                  </div>
                  <div className="service-name-box">
                    <h1 className="service-description" >SEO Audit</h1>
                  </div>
                  <div className="service-name-box">
                    <h1 className="service-description" >Technical Diagnostics</h1>
                  </div>
                  <div className="service-name-box">
                    <h1 className="service-description" >Security Assessment</h1>
                  </div>
                  <div className="service-name-box">
                    <h1 className="service-description" >UI/UX Evaluation</h1>
                  </div>
                  <div className="service-name-box">
                    <h1 className="service-description" >Content Assessment</h1>
                  </div>
                  </div>
                </div>
              </div>
              <div className="service-box">
                <div className="service-box-left">
                  <h1 className="service-title" >Architectural & Product Animation</h1>
                </div>
                <div className="service-box-right">
                  <div className="service-box-right-content">
                  <div className="service-name-box">
                    <h1 className="service-description" >Interior & exterior renderings</h1>
                  </div>
                  <div className="service-name-box">
                    <h1 className="service-description" >Architectural walkthrough & tours</h1>
                  </div>
                  <div className="service-name-box">
                    <h1 className="service-description" >Augmented Reality (AR) Experiences</h1>
                  </div>
                  <div className="service-name-box">
                    <h1 className="service-description" >Virtual Reality (VR) Experiences</h1>
                  </div>
                  <div className="service-name-box">
                    <h1 className="service-description" >Product Renderings & Animations</h1>
                  </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="six-spline">
            </div>
          </div>
        </section>
      </>
    )
}