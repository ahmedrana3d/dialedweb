import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useAnimateText } from "../ScrollAnimations";
import gsap from "gsap";

export const SectionScrollVideoOnScroll = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/scrolly-video@latest/dist/scrolly-video.js";
        script.async = true;
        script.onload = () => {
            new ScrollyVideo({
                scrollyVideoContainer: "scrolly-video",
                src: "/flowerkey3.mp4",
                transitionSpeed: 14,
                frameThreshold: 0.01,
                full: true,
            });
        };
        document.body.appendChild(script);

        // Cleanup script when component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useAnimateText(".scroll-headline-1, .scroll-headline-2, .scroll-headline-3, .scroll-headline-4, .scroll-headline-5, .scroll-headline-6, .scroll-headline-7, .scroll-headline-8, .box-between-words-image-1, .box-between-words-image-2, .box-between-words-image-3")

    const floatingDiv = useRef();
    const [showFloatingDiv, setShowFloatingDiv] = useState(false);

    useEffect(() => {
        let mouseX = 0;
        let mouseY = 0;
        let ballX = 0;
        let ballY = 0;
        const speed = 0.1;

        const handleMouseMove = (event) => {
            mouseX = event.clientX;
            mouseY = event.clientY;
        };

        const animate = () => {
            const distX = mouseX - ballX;
            const distY = mouseY - ballY;

            ballX += distX * speed;
            ballY += distY * speed;

            if (floatingDiv.current) {
                floatingDiv.current.style.left = `${ballX}px`;
                floatingDiv.current.style.top = `${ballY}px`;
            }

            requestAnimationFrame(animate);
        };

        animate();

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        if (showFloatingDiv) {
            gsap.to(floatingDiv.current, {
                autoAlpha: 1, // This sets both opacity and visibility
                scale: 1,
                duration: 0.3,
                ease: 'power3.out',
            });
        } else {
            gsap.to(floatingDiv.current, {
                autoAlpha: 0, // This sets both opacity and visibility
                scale: 0,
                duration: 0.3,
                ease: 'power3.in',
            });
        }
    }, [showFloatingDiv]);
    

    const handleMouseEnter = () => {
        console.log("Mouse entered"); // Debug log
        setShowFloatingDiv(true);
    };
    
    const handleMouseLeave = () => {
        console.log("Mouse left"); // Debug log
        setShowFloatingDiv(false);
    };

    return (
        <>
            <section className="section scroll-video-on-scroll" onMouseEnter={() => { handleMouseEnter(); }} onMouseLeave={() => { handleMouseLeave(); }} >
                <div className="scroll-video-on-scroll-items">
                    <div className="scroll-video-items-wrapper">
                        <h1 className="scroll-section-headline scroll-headline-1">Grow</h1>
                        <h1 className="scroll-section-headline scroll-headline-2">your</h1>
                        <h1 className="scroll-section-headline scroll-headline-3 scroll-purple">Digital</h1>
                        <motion.div whileHover={{ scale: 2, rotate: 10 }} transition={{ type: "tween", stiffness: 400, damping: 10 }} className="box-between-words-small box-between-words-image-1" />
                        <h1 className="scroll-section-headline scroll-headline-4">Presence,</h1>
                        <h1 className="scroll-section-headline scroll-headline-5">let</h1>
                        <h1 className="scroll-section-headline scroll-headline-6">your</h1>
                        <h1 className="scroll-section-headline scroll-headline-7 scroll-purple">Vision</h1>
                        <motion.div whileHover={{ scale: 2, rotate: -10 }} transition={{ type: "tween", stiffness: 400, damping: 10 }} className="box-between-words-big box-between-words-image-3" />
                        <h1 className="scroll-section-headline scroll-headline-8">Bloom</h1>
                    </div>
                </div>
                <div id="scrolly-video" className="video-background"></div>
                <div className="floating-div" ref={floatingDiv}>
                    <h1>SCROLL</h1>
                </div>
            </section>
        </>
    )
}

