import React, { useEffect, useRef, useState } from "react";
import CanvasContainer from "../CanvasContainer";
import { Section6 } from "./Section6";
import useAnimateText from "../ScrollAnimations";

export const Section1 = () => {

  useAnimateText('.split');

    return (
      <>
        <section className="one">
          <div className="navigation">
            <div className="navigation-left">
            
              </div>
            <div className="navigation-right">

            </div>
          </div>
          <div className="one-content" >
            <div className="one-content-left">
              <h1 className="headline split" >Crafting Digital <br /> <span className="headline-purple" >Masterpieces</span></h1>
            </div>
            <div className="one-content-right">
              
            </div>
          </div>
        </section>
      </>
    )
}