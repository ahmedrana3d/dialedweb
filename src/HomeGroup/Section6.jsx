import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAnimateText } from "../ScrollAnimations";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const Section6 = () => {
  useAnimateText(".six-content-headline");

  // State to manage which card is flipped
  const [flippedIndex, setFlippedIndex] = useState(null);

  // Function to handle card click
  const handleCardClick = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const isMobile = window.innerWidth <= 768;

  // Refs for each box
  const boxRef1 = useRef();
  const boxRef2 = useRef();
  const boxRef3 = useRef();
  const boxRef4 = useRef();
  const boxRef5 = useRef();
  const boxRef6 = useRef();

  useEffect(() => {
    gsap.fromTo( boxRef1.current, { scaleX: 0, rotate: 10 }, { delay: 0, scale: 1, rotate: 0, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef1.current, start: "top bottom"}});
    gsap.fromTo( boxRef2.current, { scaleX: 0, rotate: 10 }, { delay: 0.25, scale: 1, rotate: 0, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef2.current, start: "top bottom"}});
    gsap.fromTo( boxRef3.current, { scaleX: 0, rotate: 10 }, { delay: isMobile ? 0 : 0.5, scale: 1, rotate: 0, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef3.current, start: "top bottom"}});
    gsap.fromTo( boxRef4.current, { scaleX: 0, rotate: 10 }, { delay: isMobile ? 0.25 : 0, scale: 1, rotate: 0, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef4.current, start: "top bottom"}});
    gsap.fromTo( boxRef5.current, { scaleX: 0, rotate: 10 }, { delay: isMobile ? 0 : 0.25, scale: 1, rotate: 0, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef5.current, start: "top bottom"}});
    gsap.fromTo( boxRef6.current, { scaleX: 0, rotate: 10 }, { delay: isMobile ? 0.25 : 0.5, scale: 1, rotate: 0, duration: 1, ease: "power3", scrollTrigger: { trigger: boxRef6.current, start: "top bottom"}});
  }, []);

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
      <section className="section six">
        <div className="six-content">
          <h1 className="headline six-content-headline">Our Services</h1>
          <div className="six-content-top">
            <div className="six-content-row" onMouseEnter={() => { handleMouseEnter(); }} onMouseLeave={() => { handleMouseLeave(); }} >
              {[
                {
                  title: "Websites",
                  services: [
                    "E-commerce Integration",
                    "Interactive 3D configurators",
                    "Frontend Development",
                    "Storytelling Functionalities",
                    "CMS Integration",
                  ],
                },
                {
                  title: "Design",
                  services: [
                    "Layout",
                    "Typography",
                    "Visual Content",
                    "Iconography",
                    "Color theory",
                  ],
                },
                {
                  title: "Visualization",
                  services: [
                    "Exterior/Interior Renderings",
                    "Architectural Walkthroughs",
                    "Augmented Reality (AR)",
                    "Virtual Reality (VR)",
                    "Product Renderings",
                  ],
                },
                {
                  title: "Data",
                  services: [
                    "Performance Analysis",
                    "SEO Audit",
                    "Content Assessment",
                    "Security Assessment",
                    "UI/UX Evaluation",
                  ],
                },
                {
                  title: "Animation",
                  services: [
                    "Custom Micro Animation",
                    "Product Visualization",
                    "SVG Sequences",
                    "VIRTUAL FX",
                    "Motion Graphics",
                  ],
                },
                {
                  title: "Consultation",
                  services: [
                    "Branding",
                    "Market Research",
                    "Audience Analysis",
                    "Maintenance Plans",
                    "Strategic Planning",
                  ],
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`six-content-row-box six-outside ${
                    flippedIndex === index ? "flipped" : ""
                  }`}
                  onClick={() => handleCardClick(index)}
                  ref={ index === 0
                      ? boxRef1
                      : index === 1
                      ? boxRef2
                      : index === 2
                      ? boxRef3
                      : index === 3
                      ? boxRef4
                      : index === 4
                      ? boxRef5
                      : index === 5
                      ? boxRef6
                      : null
                  }
                >
                  <div className="six-inside">
                    <div className="front">
                      <div className="front-top">
                        <h1 className="six-description">{item.title}</h1>
                      </div>
                      <div className="front-bottom">
                        <h1 className="front-bottom-text">Info</h1>
                        <div className="front-bottom-circle">
                          <i className="fa-solid fa-plus"></i>
                        </div>
                      </div>
                    </div>
                    <div className="back">
                      <div className="back-content">
                        {item.services.map((service, i) => (
                          <div key={i} className="back-content-box">
                            <h1 className="six-back-description">{service}</h1>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="floating-div" ref={floatingDiv}>
          <h1>CLICK</h1>
        </div>
      </section>
    </>
  );
};



{/* <div className="services-container">

<div className="service-box-top">
    <h1 className="headline-purple six-title" >Our Services</h1>
</div>
<div className="service-box service-one">
  <div className="service-box-left">
    <h1 className="service-title" > Website design, Development & Implementation</h1>
  </div>
  <div className="service-box-right">
    <div className="service-box-right-content">
    <div className="service-name-box">
      <h1 className="service-description" >E-commerce integration</h1>
    </div>
    <div className="service-name-box">
      <h1 className="service-description" >Interactive 3D configurators & customizers</h1>
    </div>
    <div className="service-name-box">
      <h1 className="service-description" >Front-End UI/UX Design</h1>
    </div>
    <div className="service-name-box">
      <h1 className="service-description" >Storytelling functionalities</h1>
    </div>
    </div>
  </div>
</div>
<div className="service-box">
  <div className="service-box-left">
    <h1 className="service-title" >Data Organization & Visualization</h1>
  </div>
  <div className="service-box-right">
    <div className="service-box-right-content">
    <div className="service-name-box">
      <h1 className="service-description" >Performance Analysis</h1>
    </div>
    <div className="service-name-box">
      <h1 className="service-description" >SEO Audit</h1>
    </div>
    <div className="service-name-box">
      <h1 className="service-description" >Technical Diagnostics</h1>
    </div>
    <div className="service-name-box">
      <h1 className="service-description" >Security Assessment</h1>
    </div>
    <div className="service-name-box">
      <h1 className="service-description" >UI/UX Evaluation</h1>
    </div>
    <div className="service-name-box">
      <h1 className="service-description" >Content Assessment</h1>
    </div>
    </div>
  </div>
</div>
<div className="service-box">
  <div className="service-box-left">
    <h1 className="service-title" >Architectural & Product Animation</h1>
  </div>
  <div className="service-box-right">
    <div className="service-box-right-content">
    <div className="service-name-box">
      <h1 className="service-description" >Interior & exterior renderings</h1>
    </div>
    <div className="service-name-box">
      <h1 className="service-description" >Architectural walkthrough & tours</h1>
    </div>
    <div className="service-name-box">
      <h1 className="service-description" >Augmented Reality (AR) Experiences</h1>
    </div>
    <div className="service-name-box">
      <h1 className="service-description" >Virtual Reality (VR) Experiences</h1>
    </div>
    <div className="service-name-box">
      <h1 className="service-description" >Product Renderings & Animations</h1>
    </div>
    </div>
  </div>
</div>

</div> */}

{/* <div className="six-spline">
<div className="mobile-scroll"></div>
<Spline scene="https://prod.spline.design/e-ojs0qqziUg38sU/scene.splinecode" />
</div> */}