import React, { useEffect, useRef, useState } from "react";
import { useAnimateText, useSmallTextAnimation, useImageAnimation } from "../ScrollAnimations";
import gsap from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

export const Section3 = () => {

  useAnimateText(".three-title, .three-top-text-animate");

  const isMobile = window.innerWidth <= 768;

  const descriptionRef = useRef()
  const typewriterRef = useRef()

  useEffect(() => {
    // const split = new SplitText(descriptionRef.current, { type: "words" });
    // gsap.fromTo(split.words, 
    //   { opacity: 0, willChange: 'filter, transform', filter: 'blur(8px)' }, {
    //     ease: 'sine',
    //     opacity: 1,
    //     filter: 'blur(0px)',
    //     stagger: 0.025,
    //     scrollTrigger: {
    //       trigger: descriptionRef.current,
    //       start: "top bottom"
    //     }
    //   });
    // gsap.fromTo( typewriterRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2", scrollTrigger: { trigger: typewriterRef.current, start: "top bottom"}});
  })

  return (
    <>
      <section className="section three">
        {!isMobile && (
          <div className="three-content-box-right">
            <div className="container">
              <video className="three-video" src="/laptop3.webm" autoPlay="autoplay" muted playsInline="true" data-wf-ignore="true" preload="auto" loop></video>
            </div>
          </div>
        )}
        <div className="three-content">
          <div className="three-content-box-left">
            <h1 className="headline three-title">Virtual Turns <br />Tangible</h1>
            <p className="description three-description purple" ref={descriptionRef} >To innovate and enhance digital experiences by crafting tailored, user-centric web solutions. We create captivating web experiences that takes users on an immersive journey beyond their imagination.</p>
            <div className="typewriter-box" >
              <h1 className="typewriter" ref={typewriterRef} >
                <span className='typewriter-main'>We<span className="typewriter-text"></span></span>
              </h1>
            </div>
          </div>
          {isMobile && (
            <div className="three-content-box-right">
              <div className="container">
                <video className="three-video" src="/laptop3.webm" autoPlay="autoplay" muted playsInline="true" data-wf-ignore="true" preload="auto" loop></video>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};