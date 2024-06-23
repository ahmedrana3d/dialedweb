import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const useAnimateText = (textSelector) => {
  useEffect(() => {
    function animateText(selector) {
      document.querySelectorAll(selector).forEach((element) => {
        gsap.set(element, {
          transformPerspective: 500,
          transformOrigin: 'center bottom',
          rotationX: 70,
        });

        let mySplitText = new SplitText(element, { type: 'chars' });
        let chars = mySplitText.chars;

        gsap.fromTo(
          element,
          {
            rotationX: 70,
            opacity: 0,
          },
          {
            rotationX: 0,
            opacity: 1,
            duration: 1.25,
            ease: 'back.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 100%',
              toggleActions: 'play none none reset',
            },
          }
        );

        gsap.from(chars, {
          yPercent: 50,
          stagger: 0.03,
          // stagger: {
          //   each: 0.03, // Adjusted stagger for smoother animation
          //   ease: 'power1.out', // Added ease for each stagger
          // },
          opacity: 0,
          ease: 'power1.out',
          duration: 0.5,
          scrollTrigger: {
            trigger: element,
            start: 'top 100%',
            toggleActions: 'play none none reset',
          },
        });

        gsap.fromTo(
          element,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top 100%',
              end: 'top 60%',
              scrub: true,
              toggleActions: 'play reverse play reverse',
            },
          }
        );

        gsap.fromTo(
          element,
          {
            opacity: 1,
          },
          {
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top 20%',
              end: 'top 0%',
              scrub: true,
              toggleActions: 'play reverse play reverse',
            },
          }
        );


      });
    }

    // Apply animation to all elements with the given selector
    animateText(textSelector);

    // Cleanup function to remove ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [textSelector]);
};

const useSmallTextAnimation = (textSelector) => {
  useEffect(() => {
    function smallTextAnimation(selector) {
      document.querySelectorAll(selector).forEach((element) => {

        let mySplitText = new SplitText(element, { type: 'chars' });
        let chars = mySplitText.chars;

        gsap.from(chars, {
          stagger: 0.002,
          ease: "power3.out",
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reset',
          },
        });

        gsap.fromTo(
          element,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              end: 'top 60%',
              scrub: true,
              toggleActions: 'play reverse play reverse',
            },
          }
        );

        gsap.fromTo(
          element,
          {
            opacity: 1,
          },
          {
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top 40%',
              end: 'top 0%',
              scrub: true,
              toggleActions: 'play reverse play reverse',
            },
          }
        );


      });
    }

    // Apply animation to all elements with the given selector
    smallTextAnimation(textSelector);

    // Cleanup function to remove ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [textSelector]);
};

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

    tl.to(cloneSplit.chars, { duration: 0.5, stagger: stagger }, 0.001);
    tl.to(cloneSplit.chars, { duration: 0.75, opacity: 1, ease: "fade", stagger: 0.025 }, 0.001);
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

const useTextEffect = (textSelector) => {
  useEffect(() => {
    function textEffect(selector) {
      document.querySelectorAll(selector).forEach((element) => {
        gsap.set(element, {
          transformPerspective: 500,
          transformOrigin: 'center bottom',
          rotationX: 70,
        });

        let mySplitText = new SplitText(element, { type: 'chars' });
        let chars = mySplitText.chars;

        gsap.fromTo(
          element,
          {
            rotationX: 70,
            opacity: 0,
          },
          {
            rotationX: 0,
            opacity: 1,
            duration: 1.25,
            ease: 'back.out',
            delay: 1,
            scrollTrigger: {
              trigger: element,
              start: 'top 100%',
              toggleActions: 'play none none reset',
            },
          }
        );

        gsap.from(chars, {
          yPercent: 50,
          stagger: 0.03,
          // stagger: {
          //   each: 0.03, // Adjusted stagger for smoother animation
          //   ease: 'power1.out', // Added ease for each stagger
          // },
          opacity: 0,
          ease: 'power1.out',
          duration: 0.5,
          delay: 1,
          scrollTrigger: {
            trigger: element,
            start: 'top 100%',
            toggleActions: 'play none none reset',
          },
        });

        gsap.fromTo(
          element,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            ease: 'none',
            delay: 1,
            scrollTrigger: {
              trigger: element,
              start: 'top 100%',
              end: 'top 60%',
              scrub: true,
              toggleActions: 'play reverse play reverse',
            },
          }
        );

        gsap.fromTo(
          element,
          {
            opacity: 1,
          },
          {
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top 20%',
              end: 'top 5%',
              scrub: true,
              toggleActions: 'play reverse play reverse',
            },
          }
        );


      });
    }

    // Apply animation to all elements with the given selector
    textEffect(textSelector);

    // Cleanup function to remove ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [textSelector]);
};

const useDivAnimation = (textSelector) => {
  useEffect(() => {
    function divAnimation(selector) {
      document.querySelectorAll(selector).forEach((element) => {

        gsap.from(element, {
          xPercent: 150,
          ease: "power3.out",
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reset',
          },
        });

        gsap.fromTo(
          element,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              end: "top 60%",
              scrub: true,
              toggleActions: 'play reverse play reverse',
            },
          }
        );

        gsap.fromTo(
          element,
          {
            opacity: 1,
          },
          {
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top 5%',
              end: 'top 0%',
              scrub: true,
              toggleActions: 'play reverse play reverse',
            },
          }
        );


      });
    }

    // Apply animation to all elements with the given selector
    divAnimation(textSelector);

    // Cleanup function to remove ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [textSelector]);
};

export { useSmallTextAnimation, useAnimateText, RotatingHeader, useTextEffect, useDivAnimation };