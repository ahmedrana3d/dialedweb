import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SectionFooter = () => {

    const handleClick = (linkUrl) => {
        window.open(linkUrl, '_blank');
      };

      const navigate = useNavigate();

      const handleNavigateClick = (linkUrl) => {
        navigate(linkUrl);
      };

  return (
    <section className="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img className="footer-logo" src="/loading.png" alt="" />
                <h1 className="headline" >Dialedweb</h1>
                <p className="description grey" >Harnessing Cutting-Edge Visualization Technology to Transform Vision into Tailored Digital Reality</p>
            </div>
            <div className="footer-content-right">
                <div className="footer-content-right-column">
                    <h2 className="description" >Company</h2>
                    <div className="footer-column-contents">
                        <p className="description footer-description" onClick={() => {  handleNavigateClick('/about'); }} >About</p>
                        <p className="description footer-description" onClick={() => {  handleNavigateClick('/projects'); }} >Projects</p>
                        <p className="description footer-description" onClick={() => {  handleNavigateClick('/learn-more'); }} >Learn More</p>
                        <p className="description footer-description" onClick={() => {  handleNavigateClick('/contact'); }} >Get In Touch</p>
                    </div>
                </div>
                <div className="footer-content-right-column">
                    <h2 className="description" >Legal</h2>
                    <div className="footer-column-contents">
                        <p className="description footer-description" onClick={() => {  handleNavigateClick('/privacy-policy'); }} >Terms of Service</p>
                        <p className="description footer-description" onClick={() => {  handleNavigateClick('/privacy-policy'); }} >Privacy Policy</p>
                        <p className="description footer-description" onClick={() => {  handleNavigateClick('/privacy-policy'); }} >Cookie Policy</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-divider" />
        <div className="footer-content-bottom">
            <p className="description grey" >2024 © All Rights Reserved</p>
            <div className="footer-socials">
                <i className="fa-brands fa-instagram footer-icon" onClick={() => { handleClick('https://www.instagram.com/dialedweb/') }} />
                <i className="fa-brands fa-youtube footer-icon" onClick={() => { handleClick('https://www.instagram.com/dialedweb/') }} />
                <i className="fa-brands fa-linkedin footer-icon" onClick={() => { handleClick('https://www.linkedin.com/company/dialed-web/') }} />
            </div>
        </div>
    </section>
  );
};