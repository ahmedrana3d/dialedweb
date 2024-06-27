import React, { useEffect, useRef, useState } from "react";
import Spline from '@splinetool/react-spline';
import { useAnimateText } from "../ScrollAnimations";

export const Section6 = () => {

useAnimateText(".six-title");

    return (
      <>
        <section className="six">
          <div className="six-content">
            <div className="services-container">

              <div className="service-box-top">
                  <h1 className="headline-purple six-title" >Our Services</h1>
              </div>
              <div className="service-box">
                <div className="service-box-left">
                  <h1 className="service-title" >Website Design</h1>
                </div>
                <div className="service-box-right">
                  <div className="service-name-box">
                    <h1 className="service-description" >Pitchdeks</h1>
                  </div>
                  <div className="service-name-box">
                    <h1 className="service-description" >Social Media Posts</h1>
                  </div>
                  <div className="service-name-box">
                    <h1 className="service-description" >Product Mockups</h1>
                  </div>
                  <div className="service-name-box">
                    <h1 className="service-description" >Advertisements</h1>
                  </div>
                  <div className="service-name-box">
                    <h1 className="service-description" >Product Packaging / Invitations</h1>
                  </div>
                </div>
              </div>
              <div className="service-box">
                <div className="service-box-left">
                  <h1 className="service-title" >Website Development</h1>
                </div>
                <div className="service-box-right">
                  <div className="service-name-box">
                    <h1 className="service-description" >Pitchdeks</h1>
                  </div>
                  <div className="service-name-box">
                    <h1 className="service-description" >Social Media Posts</h1>
                  </div>
                  <div className="service-name-box">
                    <h1 className="service-description" >Product Mockups</h1>
                  </div>
                  <div className="service-name-box">
                    <h1 className="service-description" >Advertisements</h1>
                  </div>
                  <div className="service-name-box">
                    <h1 className="service-description" >Product Packaging / Invitations</h1>
                  </div>
                </div>
              </div>
              <div className="service-box">
                <div className="service-box-left">
                  <h1 className="service-title" >Product Visualization</h1>
                </div>
                <div className="service-box-right">
                  <div className="service-name-box">
                    <h1 className="service-description" >Pitchdeks</h1>
                  </div>
                  <div className="service-name-box">
                    <h1 className="service-description" >Social Media Posts</h1>
                  </div>
                  <div className="service-name-box">
                    <h1 className="service-description" >Product Mockups</h1>
                  </div>
                  <div className="service-name-box">
                    <h1 className="service-description" >Advertisements</h1>
                  </div>
                  <div className="service-name-box">
                    <h1 className="service-description" >Product Packaging / Invitations</h1>
                  </div>
                </div>
              </div>
              <div className="service-box">
                <div className="service-box-left">
                  <h1 className="service-title" >Product Animation</h1>
                </div>
                <div className="service-box-right">
                  <div className="service-name-box">
                    <h1 className="service-description" >Pitchdeks</h1>
                  </div>
                  <div className="service-name-box">
                    <h1 className="service-description" >Social Media Posts</h1>
                  </div>
                  <div className="service-name-box">
                    <h1 className="service-description" >Product Mockups</h1>
                  </div>
                  <div className="service-name-box">
                    <h1 className="service-description" >Advertisements</h1>
                  </div>
                  <div className="service-name-box">
                    <h1 className="service-description" >Product Packaging / Invitations</h1>
                  </div>
                </div>
              </div>

            </div>
            <div className="six-spline">
              <Spline scene="https://prod.spline.design/PcB3KICHfLuffJGZ/scene.splinecode" />
            </div>
          </div>
        </section>
      </>
    )
}