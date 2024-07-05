import React from "react";

export const RealEstatePortfolio = () => {

  return (
    <>
      <section className="realestate">
        <div className="realestate-content">

          <div className="realestate-row">
            <div className="realestate-row-item realestate-image-1"/>
            <div className="realestate-row-item realestate-image-2"/>
            <div className="realestate-row-item realestate-image-3"/>
          </div>

          <div className="realestate-row">
            <div className="realestate-row-item-big realestate-image-1"/>
            <div className="realestate-row-item-big realestate-image-2"/>
          </div>

          <div className="realestate-row-video">
            <video className="realestate-video" src="/r14.mp4" autoPlay="autoplay" muted="true" playsInline="true" data-wf-ignore="true" preload="auto"loop></video>
          </div>

          <div className="realestate-row">
            <div className="realestate-row-item realestate-image-4"/>
            <div className="realestate-row-item realestate-image-5"/>
            <div className="realestate-row-item realestate-image-6"/>
          </div>

          <div className="realestate-row">
            <div className="realestate-row-item-big realestate-image-7"/>
            <div className="realestate-row-item-big realestate-image-8"/>
          </div>

          <div className="realestate-row-video">
            <video className="realestate-video" src="/r15.mp4" autoPlay="autoplay" muted="true" playsInline="true" data-wf-ignore="true" preload="auto"loop></video>
          </div>

          <div className="realestate-row">
            <div className="realestate-row-item realestate-image-9"/>
            <div className="realestate-row-item realestate-image-10"/>
            <div className="realestate-row-item realestate-image-11"/>
          </div>

          <div className="realestate-row">
            <div className="realestate-row-item-big realestate-image-12"/>
            <div className="realestate-row-item-big realestate-image-13"/>
          </div>

        </div>
      </section>
    </>
  );
};