import React, { useEffect, useRef, useState } from "react";
import { useAnimateText, useSmallTextAnimation, useImageAnimation } from "../ScrollAnimations";

export const Section3 = () => {

  useAnimateText('.split');

  useImageAnimation('.reveal');

  return (
    <>
      <section className="three">
        <div className="three-content">
          <div className="three-content-left">
            <h1 className="headline-purple split">Our Mission</h1>
          </div>
          <div className="three-content-right">
              <div className="reveal">
                <div className="image-wrap">
                  <img src='/img.png' alt="Animated" />
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};