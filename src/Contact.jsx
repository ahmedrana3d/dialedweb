import React, { Suspense, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Spline from '@splinetool/react-spline';
import transition from "./Transition";

const Contact = () => {

    return (
      <>

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
                  <div className="contact-option-1">
                    <i class="fa-solid fa-phone option-icon"></i>
                    <p className="option-text" >Call</p>
                  </div>
                  <div className="contact-option-1">
                    <i class="fa-solid fa-envelope option-icon"></i>
                    <p className="option-text email" >Call</p>
                  </div>
                  <div className="contact-option-1">
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
            <div className="contact-overlay-right">
                {/* <Suspense >
                    <Spline loading="eager" scene="https://prod.spline.design/wR22Fdesv6d96-UY/scene.splinecode" />
              </Suspense> */}
              {/* <video className="contact-video" src="/loadingvid.mp4" autoPlay="autoplay" muted="true" playsInline="true" data-wf-ignore="true" preload="auto"loop ></video> */}
              <img className="contact-video" src="/loading.gif" alt="" />
            </div>
        </div>

      </>
    )
}

export default transition(Contact);
