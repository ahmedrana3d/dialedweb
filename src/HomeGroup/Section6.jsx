import React, { useEffect, useRef, useState } from "react";
import Spline from '@splinetool/react-spline';
import { useAnimateText, useAnimateTextDelay } from "../ScrollAnimations";

export const Section6 = () => {

  useAnimateText(".six-title")

    return (
      <>
        <section className="six">
          <div className="six-content">

            <div className="six-content-top">
              <div className="six-content-top-big">
                <div className="six-content-top-big-content">
                  <div className="six-content-circle" />
                  <h1 className="six-title" >Our services</h1>
                </div>
              </div>
              <div className="six-content-bottom-big six-outside">
                <div className="six-inside" >
                  <div className="front" >
                    <h1 className="six-description" >Website design & Development</h1>
                  </div>
                  <div className="back">
                    <div className="back-content">
                      <div className="back-content-box">
                        <h1 className="six-back-description" >E-commerce integration</h1>
                      </div>
                      <div className="back-content-box">
                        <h1 className="six-back-description" >Interactive 3D configurators & customizers</h1>
                      </div>
                      <div className="back-content-box">
                        <h1 className="six-back-description" >Front-End UI/UX Design</h1>
                      </div>
                      <div className="back-content-box">
                        <h1 className="six-back-description" >Storytelling functionalities</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="six-content-bottom">
              <div className="six-content-bottom-big six-outside">
                <div className="six-inside" >
                  <div className="front" >
                    <h1 className="six-description" >Data Organization & Visualization</h1>
                  </div>
                  <div className="back">
                    <div className="back-content">
                      <div className="back-content-box">
                        <h1 className="six-back-description" >Performance Analysis</h1>
                      </div>
                      <div className="back-content-box">
                        <h1 className="six-back-description" >SEO Audit</h1>
                      </div>
                      <div className="back-content-box">
                        <h1 className="six-back-description" >Technical Diagnostics</h1>
                      </div>
                      <div className="back-content-box">
                        <h1 className="six-back-description" >Security Assessment</h1>
                      </div>
                      <div className="back-content-box">
                        <h1 className="six-back-description" >UI/UX Evaluation</h1>
                      </div>
                      <div className="back-content-box">
                        <h1 className="six-back-description" >Content Assessment</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="six-content-bottom-big six-outside">
                <div className="six-inside" >
                  <div className="front" >
                    <h1 className="six-description" >Architectural & Product Animation</h1>
                  </div>
                  <div className="back">
                    <div className="back-content">
                      <div className="back-content-box">
                        <h1 className="six-back-description" >Interior & exterior renderings</h1>
                      </div>
                      <div className="back-content-box">
                        <h1 className="six-back-description" >Architectural walkthrough & tours</h1>
                      </div>
                      <div className="back-content-box">
                        <h1 className="six-back-description" >Augmented Reality (AR) Experiences</h1>
                      </div>
                      <div className="back-content-box">
                        <h1 className="six-back-description" >Virtual Reality (VR) Experiences</h1>
                      </div>
                      <div className="back-content-box">
                        <h1 className="six-back-description" >Product Renderings & Animations</h1>
                      </div>
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

{/* <div className="services-container">

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

</div> */}

{/* <div className="six-spline">
<div className="mobile-scroll"></div>
<Spline scene="https://prod.spline.design/e-ojs0qqziUg38sU/scene.splinecode" />
</div> */}