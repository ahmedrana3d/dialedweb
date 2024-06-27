import React, { useEffect, useRef, useState } from "react";
import { useAnimateText, useSmallTextAnimation, useImageAnimation } from "../ScrollAnimations";
import Typewriter from 'typewriter-effect';

export const Section3 = () => {

  useAnimateText(".three-title")

  return (
    <>
      <section className="three">
        <div className="three-content">
          <div className="three-content-box" >
            <div className="three-content-box-left">
              <h1 className="headline-purple three-title">Our Mission</h1>
              <p className="description three-description purple">Our mission at DialedWeb is to innovate and <br /> enhance digital experiences by crafting <br /> tailored, user-centric web solutions. We <br /> elevate and engage audiences through <br /> creativity and technology, delivering modern,<br /> intuitive websites that drive business’s <br /> international success.
              </p>
              <div className="typewriter-box" >
                <h1 className="typewriter" >
                  <span class='typewriter-main'>We<span class="typewriter-text"></span></span>
                </h1>
              </div>
            </div>
            <div className="three-content-box-right">
              <div className="three-video-frame">
                <video className="three-video" src="/video.mp4" autoPlay="autoplay" muted="true" playsInline="true" data-wf-ignore="true" preload="auto"loop ></video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

{/* <div className="three-content-left">
<h1 className="headline-purple split">Our Mission</h1>
<p className="description">
  Our mission at DialedWeb is to innovate and enhance <br /> digital
  experiences by crafting tailored, user-centric web<br /> solutions.
  We elevate and engage audiences through <br /> creativity and
  technology, delivering modern, intuitive <br /> websites that drive
  business’s international success.
</p>
</div>
<div className="three-content-right">
  <div className="reveal">
    <div className="image-wrap">
      <video src="/video.mp4" autoPlay="autoplay" muted="true" playsInline="true" data-wf-ignore="true" preload="auto" className="background-video" loop ></video>
    </div>
  </div>
</div> */}