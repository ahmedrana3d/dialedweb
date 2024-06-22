import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const RotatingHeader = ({ text }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const original = header.querySelector("h1");
    const tl = gsap.timeline({ paused: true });

    // Clone the original h1 tag
    const clone = original.cloneNode(true);
    header.appendChild(clone);
    gsap.set(clone, { yPercent: -120 });

    // Split text of original and clone into characters
    const originalSplit = SplitText.create(original, { type: "chars" });
    const cloneSplit = SplitText.create(clone, { type: "chars" });

    // Initial position of clones
    gsap.set(cloneSplit.chars, { rotationX: -90, opacity: 0, transformOrigin: "50% 50% -50" });

    // Build animations
    const duration = 0.4;
    const stagger = { each: 0.02, ease: "none", from: "start" };

    tl.to(originalSplit.chars, { duration: duration, rotationX: 90, transformOrigin: "50% 50% -50", stagger: { each: 0.0125, ease: "none", from: "start" } });
    tl.to(originalSplit.chars, { duration: duration, opacity: 0, stagger: stagger, ease: "power3" }, 0);

    tl.to(cloneSplit.chars, { duration: 0.5, opacity: 1, stagger: stagger }, 0.001);
    tl.to(cloneSplit.chars, { duration: duration, rotationX: 0, stagger: stagger }, 0);

    // Hover effect: play timeline on mouseenter and reverse on mouseleave
    const handleMouseEnter = () => {
      tl.play();
    };

    const handleMouseLeave = () => {
      tl.reverse();
    };

    header.addEventListener("mouseenter", handleMouseEnter);
    header.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup listeners
    return () => {
      header.removeEventListener("mouseenter", handleMouseEnter);
      header.removeEventListener("mouseleave", handleMouseLeave);
    };

  }, [text]);

  return (
    <div className="rotatingHeader" ref={headerRef}>
      <h1>{text}</h1>
    </div>
  );
};

export default RotatingHeader;