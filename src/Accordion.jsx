import React, { useEffect, useRef, useState } from "react";
import {  RotatingHeader } from "./ScrollAnimations";

function Accordion(props) {
  const [active, setActive] = useState(false);
  const content = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    console.log("Height for ", props.title, ": ", height);
  }, [height]);

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
  }

  return (
    <div className="accordion-section">
      <div
        className={`accordion ${active ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <div className="accordion-top">
          <RotatingHeader text={props.title} />
        </div>
        <div
          ref={content}
          style={{ maxHeight: `${height}` }}
          className="accordion-content"
        >
          <div
            className="small-text-accordion white"
            dangerouslySetInnerHTML={{ __html: props.content }}
          />
        </div>
      </div>
    </div>
  );
}

export default Accordion;