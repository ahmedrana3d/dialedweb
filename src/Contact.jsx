import React, { Suspense, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Spline from '@splinetool/react-spline';
import transition from "./Transition";
import { initializeCursors } from "./Cursor";

const Contact = () => {

  const handleClick = (linkUrl) => {
    window.open(linkUrl, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:support@dialedworldwide.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+16193176418';
  };

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const x = (clientX - centerX) / 150; // Adjust the divisor to control the movement intensity
    const y = (clientY - centerY) / 150;
    setPosition({ x, y });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    initializeCursors();
  }, []);


    return (
      <>

<div className="cursor" id="ball"></div>
<div className="cursor-text" id="cursor-text">Scroll</div>

        <div className="contact-overlay" >
            <div className="contact-overlay-left">
              <h1 className="contact-overlay-title" >Get in Touch</h1>
              <div className="contact-overlay-left-box">

                <div className="contact-person-box">
                  <div className="contact-person-image gabriella" />
                  <div className="contact-description-box">
                    <p className="contact-overlay-description" >Let’s bring your idea to life. <span className="white-text" >Get in touch with management directly. </span></p>
                  </div>
                </div>

                <div className="contact-options-box">
                  <a className="contact-option-1" href="tel:+16193176418">
                    <i class="fa-solid fa-phone option-icon"></i>
                    <p className="option-text" >Call</p>
                  </a>
                  <a className="contact-option-1" href="mailto:support@dialedworldwide.com">
                    <i class="fa-solid fa-envelope option-icon" ></i>
                    <p className="option-text email" >Email</p>
                  </a>
                  <div className="contact-option-1" onClick={() => handleClick('https://www.linkedin.com/company/dialed-web/')}>
                    <i class="fa-brands fa-linkedin option-icon"></i>
                    <p className="option-text" >LinkedIn</p>
                  </div>
                </div>

                <div className="contact-phone">
                  <p className="option-text" >Phone</p>
                  <p className="phone-text" >+1 619 317 6418</p>
                </div>

                <div className="contact-phone">
                  <p className="option-text" >Email</p>
                  <p className="phone-text" >support@dialedworldwide.com</p>
                </div>

                <div className="contact-address">
                  <p className="option-text" >Address</p>
                  <p className="phone-text" >DialedWEB</p>
                  <p className="phone-text" >Address</p>
                  <p className="phone-text" >Address</p>
                </div>

              </div>
            </div>
            <div className="contact-overlay-right" onMouseMove={handleMouseMove}>
              <img className="contact-video" src="/loading.png" style={{ transform: `translate3d(${-position.x * 8}px, ${-position.y * 8}px, 0) rotateX(${position.x}deg) rotateY(${position.y}deg)`,}}/>
            </div>
        </div>

      </>
    )
}

export default transition(Contact);
