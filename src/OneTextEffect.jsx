import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

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

export default useTextEffect;