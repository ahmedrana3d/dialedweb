import React, { useEffect, useRef, useState } from "react";
import Spline from '@splinetool/react-spline';
import { useAnimateText, useAnimateTextDelay } from "../ScrollAnimations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const SectionScrollVideoOnScroll = () => {

    useEffect(() => {
        const video = document.querySelector(".video-background");
        let src = video.currentSrc || video.src;

        function once(el, event, fn, opts) {
            var onceFn = function (e) {
                el.removeEventListener(event, onceFn);
                fn.apply(this, arguments);
        };
        el.addEventListener(event, onceFn, opts);
        return onceFn;
    }

    once(document.documentElement, "touchstart", function (e) {
        video.play();
        video.pause();
    });

    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
            trigger: ".scroll-video-on-scroll",
            start: "top top",
            end: "bottom bottom",
            scrub: true
        }
    });

    once(video, "loadedmetadata", () => {
        tl.fromTo(
        video,
        {
            currentTime: 0
        },
        {
            currentTime: video.duration || 1
        }
        );
    });

    setTimeout(function () {
        if (window["fetch"]) {
            fetch(src)
            .then((response) => response.blob())
            .then((response) => {
            var blobURL = URL.createObjectURL(response);

            var t = video.currentTime;
            once(document.documentElement, "touchstart", function (e) {
                video.play();
                video.pause();
            });

            video.setAttribute("src", blobURL);
            video.currentTime = t + 0.01;
        });
        }
    }, 1000);
    
    }, []);

    return (
      <>
        <section className="scroll-video-on-scroll">
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
            <video src="./flowerkey3.mp4" preload="auto" playsInline="true" webkit-playsinline="true" muted="muted" class="video-background"></video>
        </section>
      </>
    )
}
