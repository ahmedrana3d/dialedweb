import React from "react";
import { initializeCursors } from "./Cursor";

export const RealEstatePortfolio = () => {

  useEffect(() => {
    initializeCursors();
  }, []);

  return (
    <>

<div className="cursor" id="ball"></div>
<div className="cursor-text" id="cursor-text">Scroll</div>

      <section className="realestate">
        <h1 className="headline" >Real Estate Portfolio</h1>
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
          <div className="realestate-row-item realestate-image-14"/>
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
            <div className="realestate-row-item realestate-image-15"/>
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