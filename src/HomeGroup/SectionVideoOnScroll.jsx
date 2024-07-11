import React, { useEffect, useRef, useState } from "react";
import Spline from '@splinetool/react-spline';
import { useAnimateText, useAnimateTextDelay } from "../ScrollAnimations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";

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

    // gsap.utils.toArray(".box-between-words-small").forEach((box) => {
    //     gsap.fromTo(box, 
    //         { opacity: 0 }, 
    //         { 
    //             opacity: 1, 
    //             scrollTrigger: {
    //                 trigger: box,
    //                 start: "top bottom", // Adjust as needed
    //                 end: "bottom top", // Adjust as needed
    //                 scrub: true
    //             }
    //         }
    //     );
    // });
    
    }, []);

    useAnimateText(".scroll-headline-1, .scroll-headline-2, .scroll-headline-3, .scroll-headline-4, .scroll-headline-5, .scroll-headline-6, .scroll-headline-7, .scroll-headline-8, .box-between-words-image-1, .box-between-words-image-2, .box-between-words-image-3")

    return (
      <>
        <section className="scroll-video-on-scroll">
            <div className="scroll-video-on-scroll-items">
                <div className="scroll-video-items-wrapper">
                    <h1 className="scroll-section-headline scroll-headline-1" >Grow</h1>
                    <h1 className="scroll-section-headline scroll-headline-2" >your</h1>
                    <h1 className="scroll-section-headline scroll-headline-3 scroll-purple" >Digital</h1>
                    <motion.div whileHover={{ scale: 2, rotate: 10 }} transition={{ type: "tween", stiffness: 400, damping: 10 }} className="box-between-words-small box-between-words-image-1" />
                    <h1 className="scroll-section-headline scroll-headline-4" >Presence,</h1>
                    {/* <motion.div whileHover={{ scale: 2, rotate: 10 }} transition={{ type: "tween", stiffness: 400, damping: 10 }} className="box-between-words-small box-between-words-image-2" /> */}
                    <h1 className="scroll-section-headline scroll-headline-5" >let</h1>
                    <h1 className="scroll-section-headline scroll-headline-6" >your</h1>
                    <h1 className="scroll-section-headline scroll-headline-7 scroll-purple" >Vision</h1>
                    <motion.div whileHover={{ scale: 2, rotate: -10 }} transition={{ type: "tween", stiffness: 400, damping: 10 }} className="box-between-words-big box-between-words-image-3" />
                    <h1 className="scroll-section-headline scroll-headline-8" >Bloom</h1>
                </div>
            </div>
            <video src="./flowerkey3.mp4" preload="auto" playsInline="true" webkit-playsinline="true" muted="muted" class="video-background hover-area" data-cursor-text="SCROLL"></video>
        </section>
      </>
    )
}
