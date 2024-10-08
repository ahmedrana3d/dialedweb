import React, { useEffect } from "react";
import "./App.css";
import Learn from "./Learn";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

const LearnApp = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts or updates
    window.scrollTo(0, 0);
  }, []);

  return (
    <ReactLenis root>
      <div className="learn-more-overflow overflow-x-hidden">
        <Learn />
      </div>
    </ReactLenis>
  );
};

export default LearnApp;
