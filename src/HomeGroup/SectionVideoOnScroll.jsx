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
            <video src="https://cdn.glitch.global/b75b22a8-446a-45ca-bd37-9e63f6cd7c5d/WhatsApp%20Video%202024-07-07%20at%2023.39.52_d57e0e15.mp4?v=1720377726119"       playsinline="true" webkit-playsinline="true" preload="auto"       muted="muted" class="video-background"></video>
        </section>
      </>
    )
}
