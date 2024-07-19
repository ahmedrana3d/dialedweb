import React, { useEffect, useRef, useState } from "react";
import Spline from '@splinetool/react-spline';
import { useAnimateText, useAnimateTextDelay } from "../ScrollAnimations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const SectionVideoMobile = () => {

  useAnimateText(".scroll-headline-1, .scroll-headline-2, .scroll-headline-3, .scroll-headline-4, .scroll-headline-5, .scroll-headline-6, .scroll-headline-7, .scroll-headline-8, .box-between-words-image-1, .box-between-words-image-2, .box-between-words-image-3")

    return (
      <>
        <section className="section-video-mobile">
            <div className="scroll-video-on-scroll-items">
                <div className="scroll-video-items-wrapper">
                    <h1 className="scroll-section-headline scroll-headline-1" >Grow</h1>
                    <h1 className="scroll-section-headline scroll-headline-2" >your</h1>
                    <h1 className="scroll-section-headline scroll-headline-3 scroll-purple" >Digital</h1>
                    <div className="box-between-words-small box-between-words-image-1" />
                    <h1 className="scroll-section-headline scroll-headline-4" >Presence,</h1>
                    {/* <div className="box-between-words-small box-between-words-image-2" /> */}
                    <h1 className="scroll-section-headline scroll-headline-5" >let</h1>
                    <h1 className="scroll-section-headline scroll-headline-6" >your</h1>
                    <h1 className="scroll-section-headline scroll-headline-7 scroll-purple" >Vision</h1>
                    <div className="box-between-words-big box-between-words-image-3" />
                    <h1 className="scroll-section-headline scroll-headline-8" >Bloom</h1>
                </div>
            </div>
            <video src="./flowerkey3.mp4" preload="auto" playsInline="true" autoPlay="true" webkit-playsinline="true" muted="muted" class="video-background" ></video>
        </section>
      </>
    )
}
