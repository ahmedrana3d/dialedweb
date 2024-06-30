import React, { Suspense, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Spline from '@splinetool/react-spline';
import transition from "./Transition";

const Contact = () => {

    return (
      <>

        <div className="contact-overlay" >
            <div className="contact-overlay-left">
              <h1 className="contact-overlay-title" >Get in touch</h1>
              <div className="contact-overlay-left-box">

                <div className="contact-person-box">
                  <div className="contact-person-image gabriella" />
                  <div className="contact-description-box">
                    <p className="contact-overlay-description" >Would you like to get in touch with the management directly? <span className="white-text" > Then send me an email to support@dialedworldwide.com</span></p>
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
                    <i class="fa-solid fa-location-arrow option-icon"></i>
                    <p className="option-text" >Route</p>
                  </div>
                </div>

                <div className="contact-phone">
                  <p className="option-text" >Phone</p>
                  <p className="phone-text" >+41 52 212 30 71</p>
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
              <video className="contact-video" src="/loadingvid.mp4" autoPlay="autoplay" muted="true" playsInline="true" data-wf-ignore="true" preload="auto" ></video>
            </div>
        </div>

      </>
    )
}

export default transition(Contact);
