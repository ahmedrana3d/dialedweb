import React, { useEffect, useRef, useState } from "react";
import { Section1 } from "./Section1";
import { Section3 } from "./Section3";
import { Section4 } from "./Section4";
import { Section5 } from "./Section5";
import { Section6 } from "./Section6";
import { Section8 } from "./Section8";
import transition from "../Transition";
import { SectionScrollVideoOnScroll } from "./SectionVideoOnScroll";
import { Section2 } from "./Section2";
import { SectionVideoMobile } from "./SectionVideoMobile";
import '../styles.css'
import { SectionFooter } from "./SectionFooter";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

const Home = () => {
  const section3Ref = useRef(null);
  const section6Ref = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    // Function to update isMobile based on window size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts or updates
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <ReactLenis root>
      <Section1 section3Ref={section3Ref} />
      <div ref={section3Ref} >
        <Section3 />
      </div>
      <Section2 />
      <div ref={section6Ref} id="section6">
        <Section6 />
      </div>
      <Section4 />
      {isMobile ? <SectionVideoMobile /> : <SectionScrollVideoOnScroll />}
      <Section8 />
      <SectionFooter />
    </ReactLenis>
    </>
  );
};

export default Home;
