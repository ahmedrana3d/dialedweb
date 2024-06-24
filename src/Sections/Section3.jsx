import React, { useEffect, useRef, useState } from "react";
import { useAnimateText, useSmallTextAnimation, useImageAnimation } from "../ScrollAnimations";

export const Section3 = () => {

  useAnimateText('.split');

  useSmallTextAnimation(".small-text-animate");

  useImageAnimation('.reveal');

  const [isVisibleOne, setIsVisibleOne] = useState(false);
  const oneRef = useRef(null);

  useEffect(() => {
    const observerOne = new IntersectionObserver(([entry]) => {
        setIsVisibleOne(entry.isIntersecting);
    });

    observerOne.observe(oneRef.current);

    return () => {
        observerOne.unobserve(oneRef.current);
    };
}, []);

  return (
    <>
      <section className="three">
        <div className={`three-content ${isVisibleOne ? 'visible' : ''}`} ref={oneRef}>
          <div className="three-content-left">
            <h1 className="headline-purple split">Our Mission</h1>
            <p className="description small-text-animate">
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
                  <img src='/threeimg.png' alt="Animated" />
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};