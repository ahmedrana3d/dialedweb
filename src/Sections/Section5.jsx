import React, { useEffect, useRef, useState } from "react";
import Accordion from "../Accordion";
import { RotatingHeader, circleAnimation } from "../ScrollAnimations";

export const Section5 = () => {

  const wrapperSelector = '.wrapper';
  const itemSelector = '.item';
  const svgSelector = 'svg';
  const circlePathSelector = '#holder';

  circleAnimation(wrapperSelector, itemSelector, svgSelector, circlePathSelector);

  return (
    <>
      <section className="five">
        <div className="five-content">
          <h1 className="five-text" >Our Team</h1>
        </div>
        <div className="wrapper">
          <div className="item" id="box1">1</div>
          <div className="item" id="box2">2</div>
          <div className="item" id="box3">3</div>
          <div className="item" id="box4">4</div>
          <div className="item" id="box5">5</div>
          <div className="item" id="box6">6</div>
          <svg viewBox="0 0 300 300">
            <circle id="holder" className="st0" cx="151" cy="151" r="150" />
          </svg>
        </div>
      </section>
    </>
  );
};