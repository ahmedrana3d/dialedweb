import React, { useEffect, useRef, useState } from "react";
import Spline from '@splinetool/react-spline';
import Accordion from "../Accordion";
import { useAnimateText } from "../ScrollAnimations";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const useAnimateTextSeven = (textSelector) => {
  useEffect(() => {
    function animateTextSeven(selector) {
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
            delay: 0.85,
            ease: 'back.out',
            scrollTrigger: {
              trigger: '.seven-titles',  // Start animation when '.six-content' reaches the viewport
              start: 'top center',      // Trigger animation when '.six-content' top reaches the center of the viewport
              toggleActions: 'play none none reset',
            },
          }
        );

        gsap.from(chars, {
          yPercent: 50,
          stagger: 0.03,
          opacity: 0,
          delay: 0.85,
          ease: 'power1.out',
          duration: 0.5,
          scrollTrigger: {
            trigger: '.seven-titles',  // Start animation when '.six-content' reaches the viewport
            start: 'top center',      // Trigger animation when '.six-content' top reaches the center of the viewport
            toggleActions: 'play none none reset',
          },
        });
      });
    }

    // Apply animation to all elements with the given selector
    animateTextSeven(textSelector);

    // Cleanup function to remove ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [textSelector]);
};

export const Section7 = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const accordionsData = [
    {
      title: "Research",
      content: "At DIALEDweb, every great project starts with thorough research. We dive deep into understanding your industry, target audience, and competitors. Our research phase involves gathering valuable insights and data to inform our strategies and decisions. By analyzing trends and identifying opportunities, we ensure that our approach is well-informed and tailored to your specific needs. This foundational step sets the stage for a successful project by providing us with a clear understanding of the landscape and your unique position within it."
    },
    {
      title: "Planning & Design",
      content: "With solid research in hand, we move on to planning and designing your project. This phase is all about translating your vision into reality. We work closely with you to outline the project scope, establish timelines, and define key milestones. Our design team then brings your ideas to life with wireframes, mockups, and prototypes, ensuring that every detail aligns with your brand and goals. The planning and design phase is where creativity meets strategy, resulting in a clear, visually compelling blueprint for your project."
    },
    {
      title: "Development",
      content: "In the development phase, our team of experts use the detailed blueprints and designs - beginning the process of bringing them to life. Using cutting-edge technologies our professionals work to write clean & efficient code to build robust and complex products. We focus on creating a seamless user experience and ensure that the platform is secure, fast, and reliable. Every feature is developed with precision to meet your specific requirements, setting the foundation for successful implementation."
    },
    {
      title: "Implementation",
      content: "Once the development is complete, we move on to the implementation phase. This is where the final product is brought together and launched. We conduct thorough testing to identify and fix any bugs or issues, ensuring everything works flawlessly. Our team handles the deployment process, making sure the transition to live environment is not only aesthetic but seamless. At DIALEDweb, implementation is about ensuring that your project is not only ready for launch but also set up for long-term success."
    }
  ];

  useAnimateTextSeven(".seven-titles")

    return (
      <>
        <section className="seven">
          <div className="seven-content">
            <h1 className="headline-purple seven-titles" >Our Methodology</h1>
              <div className="seven-accordion">
                {accordionsData.map((accordion, index) => (
                  <Accordion
                    key={index}
                    index={index}
                    title={accordion.title}
                    content={accordion.content}
                    isActive={activeIndex === index}
                    onToggle={() => setActiveIndex(activeIndex === index ? null : index)}
                  />
                ))}
              </div>
          </div>
        </section>
      </>
    )
}