import React, { useEffect, useRef, useState } from "react";
import useAnimateText from "../ScrollAnimations";

export const Section3 = () => {

  useAnimateText('.split');

    return (
      <>
        <section className="three">
          <div className="three-content" >
            <div className="three-content-left">
              <h1 className="headline split" >Crafting Digital <br /> <span className="headline-purple" >Masterpieces</span></h1>
            </div>
            <div className="three-content-right">
              
            </div>
          </div>
        </section>
      </>
    )
}