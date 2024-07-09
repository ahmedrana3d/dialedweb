import React, { useEffect, useRef, useState } from "react";
import Spline from '@splinetool/react-spline';
import { useAnimateText, useAnimateTextDelay } from "../ScrollAnimations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const SectionVideoMobile = () => {

    return (
      <>
        <section className="section-video-mobile">
            <div className="scroll-video-on-scroll-items">
                <div className="scroll-video-items-wrapper">
                    <h1 className="scroll-section-headline" >A</h1>
                    <div className="box-between-words-small box-between-words-image-1" />
                    <h1 className="scroll-section-headline" >tiny</h1>
                    <h1 className="scroll-section-headline" >mountain</h1>
                    <h1 className="scroll-section-headline" >village</h1>
                    <div className="box-between-words-small box-between-words-image-2" />
                    <h1 className="scroll-section-headline" >where</h1>
                    <h1 className="scroll-section-headline" >it</h1>
                    <h1 className="scroll-section-headline" >all</h1>
                    <h1 className="scroll-section-headline" >began...</h1>
                    <div className="box-between-words-big box-between-words-image-3" />
                </div>
            </div>
            <video src="./flowerkey3.mp4" preload="auto" playsInline="true" autoPlay webkit-playsinline="true" muted="muted" class="video-background"></video>
        </section>
      </>
    )
}
