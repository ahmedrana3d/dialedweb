import React, { useEffect, useRef, useState } from "react";
import Spline from '@splinetool/react-spline';
import { useAnimateText } from "../ScrollAnimations";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const useAnimateTextSix = (textSelector) => {
  useEffect(() => {
    function animateTextSix(selector) {
      document.querySelectorAll(selector).forEach((element) => {
        gsap.set(element, {
          transformPerspective: 500,
          transformOrigin: 'center bottom',
          rotationX: 70,
        });

        let mySplitText = new SplitText(element, { type: 'chars' });
        let chars = mySplitText.chars;

        gsap.fromTo(
          element,
          {
            rotationX: 70,
            opacity: 0,
          },
          {
            rotationX: 0,
            opacity: 1,
            duration: 1.25,
            delay: 0.85,
            ease: 'back.out',
            scrollTrigger: {
              trigger: '.service-one',  // Start animation when '.six-content' reaches the viewport
              start: 'top center',      // Trigger animation when '.six-content' top reaches the center of the viewport
              toggleActions: 'play none none reset',
            },
          }
        );

        gsap.from(chars, {
          yPercent: 50,
          stagger: 0.03,
          opacity: 0,
          delay: 0.85,
          ease: 'power1.out',
          duration: 0.5,
          scrollTrigger: {
            trigger: '.service-one',  // Start animation when '.six-content' reaches the viewport
            start: 'top center',      // Trigger animation when '.six-content' top reaches the center of the viewport
            toggleActions: 'play none none reset',
          },
        });
      });
    }

    // Apply animation to all elements with the given selector
    animateTextSix(textSelector);

    // Cleanup function to remove ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [textSelector]);
};

export const Section6 = () => {

useAnimateTextSix(".six-title");

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
                  <h1 className="service-title" >Website Design & Development</h1>
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
            </div>
          </div>
        </section>
      </>
    )
}