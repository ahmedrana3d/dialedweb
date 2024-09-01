import React, { Suspense, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import transition from "./Transition";
import { useAnimateText } from "./ScrollAnimations";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const SectionProjects = () => {

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);

    const navigate = useNavigate();

    const handleNavigateClick = (projectSubpage) => {
      navigate(`/projects/${projectSubpage}`);
    };

    const handleClick = (linkUrl) => {
        window.open(linkUrl, '_blank');
      };

      useAnimateText(".projects-animate-text")

      const isMobile = window.innerWidth <= 768;

      const hoverSound = new Audio('/fx.mp3');

      const hoverSoundStart = () => {
        if (!isMobile) {
          hoverSound.play();
          hoverSound.currentTime = 0;
        }
      };
      
      const hoverSoundEnd = () => {
        if (!isMobile) {
          hoverSound.pause();
          hoverSound.currentTime = 0;
        }
      };
      
      const hoverSoundMobile = () => {
        if (isMobile) {
          hoverSound.play();
        }
      };

    return (
        <>

        <section className="projects-section">
          <div className="projects-section-content">
            <div className="projects-top-texts">
              <h1 className="headline projects-animate-text" >Projects</h1>
              {/* <div className="projects-top-texts-bottom">
                <h1 className="projects-section-title-small" >Liran Stalik</h1>
                <p className="projects-section-title-description"  >Maintenance Of Luxury Homes and Project Management</p>
              </div> */}
            </div>
            <div className="projects-section-container">
              
                <div className="project" onClick={() => { hoverSoundMobile(); handleNavigateClick("visualization") }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                  <div className="project-image hover-area" data-cursor-text="CLICK" >
                      <img loading="lazy" src="/visualization.jpg" alt="Project 1" />
                  </div>
                  <div className="project-text-container">
                    <div className="project-text-container-title">
                      <p className="project-text-title" >Architectural Visualization</p>
                    </div>
                    <p className="project-text-description" >3D Renderings</p>
                    <p className="project-text-description" >(2024)</p>
                  </div>
                </div>

                <div className="project" onClick={() => { hoverSoundMobile(); handleClick('https://www.peakcreations.ee/'); }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                  <div className="project-image hover-area" data-cursor-text="CLICK" >
                      <img loading="lazy" src="/peakcreations.jpeg" alt="Project 3" />
                  </div>
                  <div className="project-text-container">
                    <div className="project-text-container-title">
                      <p className="project-text-title" >Peak Creations</p>
                    </div>
                    <p className="project-text-description" >UI/UX Design, Development</p>
                    <p className="project-text-description" >(2024)</p>
                  </div>
                </div>

                <div className="project" onClick={() => { hoverSoundMobile(); handleClick('https://vitalenta.vercel.app/'); }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                  <div className="project-image hover-area" data-cursor-text="CLICK" >
                      <img loading="lazy" src="/vitalentaproject.jpg" alt="Project 4" />
                  </div>
                  <div className="project-text-container">
                    <div className="project-text-container-title">
                      <p className="project-text-title" >Vita Lenta</p>
                    </div>
                    <p className="project-text-description" >UI/UX Design, Development</p>
                    <p className="project-text-description" >(2024)</p>
                  </div>
                </div>

                <div className="project" onClick={() => { hoverSoundMobile(); handleClick('https://ring-configurator-lac.vercel.app/'); }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                  <div className="project-image hover-area" data-cursor-text="CLICK" >
                      <img loading="lazy" src="/ringproject.jpg" alt="Project 4" />
                  </div>
                  <div className="project-text-container">
                    <div className="project-text-container-title">
                      <p className="project-text-title" >Dialedweb Jewelry</p>
                    </div>
                    <p className="project-text-description" >UI/UX Design, Development</p>
                    <p className="project-text-description" >(2024)</p>
                  </div>
                </div>
    
                <div className="project" onClick={() => { hoverSoundMobile(); handleClick("https://dialedwebseltzers.vercel.app/") }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                  <div className="project-image hover-area" data-cursor-text="CLICK" >
                      <img loading="lazy" src="/project7.png" alt="Project 2" />
                  </div>
                  <div className="project-text-container">
                    <div className="project-text-container-title">
                      <p className="project-text-title" >DialedWeb Seltzer</p>
                    </div>
                    <p className="project-text-description" >UI/UX Design, Development</p>
                    <p className="project-text-description" >(2024)</p>
                  </div>
                </div>
    
                <div className="project" onClick={() => { hoverSoundMobile(); handleClick('https://stalikenglish-main.vercel.app/'); }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                  <div className="project-image hover-area" data-cursor-text="CLICK" >
                      <img loading="lazy" src="/stalikproject.jpg" alt="Project 3" />
                  </div>
                  <div className="project-text-container">
                    <div className="project-text-container-title">
                      <p className="project-text-title" >Liran Stalik</p>
                    </div>
                    <p className="project-text-description" >UI/UX Design, Development</p>
                    <p className="project-text-description" >(2024)</p>
                  </div>
                </div>

                <div className="project" onClick={() => { hoverSoundMobile(); handleClick('https://ecomwaveprojectmain.vercel.app/'); }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} >
                  <div className="project-image hover-area" data-cursor-text="CLICK" >
                      <img loading="lazy" src="/ecomwaveproject.jpg" alt="Project 3" />
                  </div>
                  <div className="project-text-container">
                    <div className="project-text-container-title">
                      <p className="project-text-title" >Ecomwave</p>
                    </div>
                    <p className="project-text-description" >UI/UX Design, Development</p>
                    <p className="project-text-description" >(2024)</p>
                  </div>
                </div>
    
            </div>
          </div>
        </section>
        </>
      );
    };

export default SectionProjects;