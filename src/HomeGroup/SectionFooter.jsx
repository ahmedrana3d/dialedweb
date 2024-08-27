import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAnimateText } from "../ScrollAnimations";
import gsap from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

export const SectionFooter = () => {

    const handleClick = (linkUrl) => {
        window.open(linkUrl, '_blank');
      };

      const navigate = useNavigate();

      const handleNavigateClick = (linkUrl) => {
        navigate(linkUrl);
      };

      useAnimateText(".footer-main-title-text")

      const logoRef = useRef();
      const descriptionRef = useRef();
      const lineRef = useRef();
      const copyrightRef = useRef();
  
      useEffect(() => {
        gsap.fromTo( logoRef.current, { yPercent: 50, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: logoRef.current, start: "top bottom"}});
        const split = new SplitText(descriptionRef.current, { type: "words" });
        gsap.fromTo(split.words, 
          { opacity: 0, willChange: 'filter, transform', filter: 'blur(8px)' }, {
            ease: 'sine',
            opacity: 1,
            filter: 'blur(0px)',
            stagger: 0.025,
            scrollTrigger: {
              trigger: descriptionRef.current,
              start: "top bottom"
            }
          });
        gsap.fromTo( ".footer-animate-description", { yPercent: 100, opacity: 0 }, { stagger: { amount: 0.5 }, yPercent: 0, opacity: 1, duration: 0.5, ease: "power3", scrollTrigger: { trigger: ".footer-animate-description", start: "top bottom"}});
        gsap.fromTo( lineRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: lineRef.current, start: "top bottom"}});
        gsap.fromTo( copyrightRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: "power3", scrollTrigger: { trigger: copyrightRef.current, start: "top bottom"}});
        gsap.fromTo( ".footer-icon", { yPercent: 100, opacity: 0 }, { stagger: { amount: 0.5 }, yPercent: 0, opacity: 1, duration: 0.5, ease: "power3", scrollTrigger: { trigger: ".footer-icon", start: "top bottom"}});
      }, []);

  return (
    <section className="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img ref={logoRef} className="footer-logo" src="/loading.png" alt="" />
                <h1 className="headline footer-main-title-text" >Dialedweb</h1>
                <p className="description grey" ref={descriptionRef} >Harnessing Cutting-Edge Visualization Technology to Transform Vision into Tailored Digital Reality</p>
            </div>
            <div className="footer-content-right">
                <div className="footer-content-right-column">
                    <h2 className="description footer-animate-description" >Company</h2>
                    <div className="footer-column-contents">
                        <p className="description footer-description footer-animate-description" onClick={() => {  handleNavigateClick('/about'); }} >About</p>
                        <p className="description footer-description footer-animate-description" onClick={() => {  handleNavigateClick('/projects'); }} >Projects</p>
                        <p className="description footer-description footer-animate-description" onClick={() => {  handleNavigateClick('/learn-more'); }} >Learn More</p>
                        <p className="description footer-description footer-animate-description" onClick={() => {  handleNavigateClick('/contact'); }} >Get In Touch</p>
                    </div>
                </div>
                <div className="footer-content-right-column">
                    <h2 className="description footer-animate-description" >Legal</h2>
                    <div className="footer-column-contents">
                        <p className="description footer-description footer-animate-description" onClick={() => {  handleNavigateClick('/privacy-policy'); }} >Terms of Service</p>
                        <p className="description footer-description footer-animate-description" onClick={() => {  handleNavigateClick('/privacy-policy'); }} >Privacy Policy</p>
                        <p className="description footer-description footer-animate-description" onClick={() => {  handleNavigateClick('/privacy-policy'); }} >Cookie Policy</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-divider" ref={lineRef} />
        <div className="footer-content-bottom">
            <p className="description grey" ref={copyrightRef} >2024 © All Rights Reserved</p>
            <div className="footer-socials">
                <i className="fa-brands fa-instagram footer-icon" onClick={() => { handleClick('https://www.instagram.com/dialedweb/') }} />
                <i className="fa-brands fa-youtube footer-icon" onClick={() => { handleClick('https://www.instagram.com/dialedweb/') }} />
                <i className="fa-brands fa-linkedin footer-icon" onClick={() => { handleClick('https://www.linkedin.com/company/dialed-web/') }} />
            </div>
        </div>
    </section>
  );
};