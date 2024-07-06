import React, { useEffect, useRef, useState } from "react";
import { useAnimateText, useSmallTextAnimation, useImageAnimation } from "../ScrollAnimations";
import Typewriter from 'typewriter-effect';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export const Section3 = () => {

  useAnimateText(".three-title")

  const isMobile = window.innerWidth <= 768;

  const [dragging, setDragging] = useState(false);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  const handleMouseDown = () => {
      setDragging(true);
  };

  const handleMouseUp = () => {
      setDragging(false);
  };

  const handleMouseMove = (e) => {
      if (!dragging) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      let x = e.clientX - containerRect.left;
      const width = containerRect.width;

      // Constrain the x position to within the container boundaries
      x = Math.max(0, Math.min(x, width));
      const percentage = (x / width) * 100;

      sliderRef.current.style.left = `${percentage}%`;
      containerRef.current.style.setProperty('--mask-width', `${percentage}%`);
  };

  const handleTouchMove = (e) => {
      if (!dragging) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      let x = e.touches[0].clientX - containerRect.left;
      const width = containerRect.width;

      // Constrain the x position to within the container boundaries
      x = Math.max(0, Math.min(x, width));
      const percentage = (x / width) * 100;

      sliderRef.current.style.left = `${percentage}%`;
      containerRef.current.style.setProperty('--mask-width', `${percentage}%`);
  };

  useEffect(() => {
      const handleMouseUpOutside = () => {
          setDragging(false);
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUpOutside);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUpOutside);

      return () => {
          window.removeEventListener('mousemove', handleMouseMove);
          window.removeEventListener('mouseup', handleMouseUpOutside);
          window.removeEventListener('touchmove', handleTouchMove);
          window.removeEventListener('touchend', handleMouseUpOutside);
      };
  }, [dragging]);

  return (
    <>
      <section className="three">
        {!isMobile && (
          <div className="three-content-box-right">
            <div className="container" onMouseMove={handleMouseMove} ref={containerRef}>
                <div className="video video1">
                  <video className="three-video" src="/laptopwhite.webm" autoPlay="autoplay" muted="true" playsInline="true" data-wf-ignore="true" preload="auto" loop></video>
                </div>
                <div className="video video2">
                  <video className="three-video" src="/laptopcolorful2.webm" autoPlay="autoplay" muted="true" playsInline="true" data-wf-ignore="true" preload="auto" loop></video>
                </div>
            </div>
          </div>
        )}
                      <div className="slider-container">
                <div className="slider-line"></div>
                <div className="slider" onMouseDown={handleMouseDown} onTouchStart={handleMouseDown} ref={sliderRef}>
                  <div className="circle">
                    <i className="fas fa-arrows-alt-h"></i>
                  </div>
                </div>
              </div>
        <div className="three-content">
          <div className="three-content-box-left">
            <h1 className="headline three-title">Our Mission</h1>
            <p className="description three-description purple">To innovate and enhance digital experiences by crafting tailored, user-centric web solutions. We elevate and engage audiences through creativity and technology, delivering modern, intuitive websites that drive business’s success.</p>
            <div className="typewriter-box">
              <h1 className="typewriter">
                <span className='typewriter-main'>We<span className="typewriter-text"></span></span>
              </h1>
            </div>
          </div>
          {isMobile && (
          <div className="three-content-box-right">
          <div className="container" onMouseMove={handleMouseMove} ref={containerRef}>
              <div className="video video1">
                <video className="three-video" src="/laptopwhite.webm" autoPlay="autoplay" muted="true" playsInline="true" data-wf-ignore="true" preload="auto" loop></video>
              </div>
              <div className="video video2">
                <video className="three-video" src="/laptopcolorful2.webm" autoPlay="autoplay" muted="true" playsInline="true" data-wf-ignore="true" preload="auto" loop></video>
              </div>
          </div>
        </div>
          )}
        </div>
      </section>
      {/* <div className="container" onMouseMove={handleMouseMove} ref={containerRef}>
        <div className="video video1">
          <video src="/laptop.webm" autoPlay="autoplay" muted="true" playsInline="true" data-wf-ignore="true" preload="auto" loop></video>
        </div>
        <div className="video video2">
          <video src="/laptopcolorful.mp4" autoPlay="autoplay" muted="true" playsInline="true" data-wf-ignore="true" preload="auto" loop></video>
        </div>
        <div className="slider" onMouseDown={handleMouseDown} ref={sliderRef}>
          <div className="circle">
            <i className="fas fa-arrows-alt-h"></i>
          </div>
        </div>
      </div> */}
    </>
  );
};