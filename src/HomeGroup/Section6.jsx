import React, { useState } from "react";
import { useAnimateText } from "../ScrollAnimations";

export const Section6 = () => {
  useAnimateText(".six-content-headline");

  // State to manage which card is flipped
  const [flippedIndex, setFlippedIndex] = useState(null);

  // Function to handle card click
  const handleCardClick = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <>
      <section className="section six">
        <div className="six-content">
          <h1 className="headline six-content-headline">Our Services</h1>
          <div className="six-content-top">
            <div className="six-content-row">
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