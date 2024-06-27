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
          <img src="/ourteam.png" className="five-image" alt="" />
        </div>
        <div className="wrapper">
          <div className="item item-6" id="box1">
            <i class="fa-solid fa-users"></i>
            <h1 className="item-job" >30+ 3D Modelers</h1>
            <p className="item-name" >10+ Years of Experience</p>
          </div>
          <div className="item item-1" id="box2">
            <div className="item-image item-image-1"/>
            <h1 className="item-job" >Founder & CEO</h1>
            <p className="item-name" >Lorenzo Noya</p>
          </div>
          <div className="item item-3" id="box3">
            <div className="item-image item-image-3"/>
            <h1 className="item-job" >Founder & CEO</h1>
            <p className="item-name" >Idan Zeidman</p>
          </div>
          <div className="item item-2" id="box4">
            <div className="item-image item-image-2"/>
            <h1 className="item-job" >Founder & COO</h1>
            <p className="item-name" >Matvey Vasilyev</p>
          </div>
          <div className="item item-4" id="box5">
            <i class="fa-solid fa-users"></i>
            <h1 className="item-job" >15+ DevOps Engineers</h1>
            <p className="item-name" >10+ Years of Experience</p>
          </div>
          <div className="item item-5" id="box6">
            <i class="fa-solid fa-users"></i>
            <h1 className="item-job" >30+ 3D Modelers</h1>
            <p className="item-name" >10+ Years of Experience</p>
          </div>
          <svg viewBox="0 0 300 300">
            <circle id="holder" className="st0" cx="151" cy="151" r="150" />
          </svg>
        </div>
      </section>
    </>
  );
};