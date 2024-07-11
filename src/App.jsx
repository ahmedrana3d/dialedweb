import React, { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import Lenis from "@studio-freight/lenis";
import { Navigation } from "./Navigation";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./HomeGroup/Home"
import Contact from "./Contact"
import { AnimatePresence } from "framer-motion";
import { RealEstatePortfolio } from "./RealEstatePortfolio";
import gsap from "https://esm.sh/gsap";
import { vec2 } from "https://esm.sh/vecteur";

const LoadingScreen = ({ onLoaded }) => {
  const { progress, active } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      onLoaded();
    }
  }, [progress, onLoaded]);

  return (
    <div className={`loading-screen ${active ? "" : "loading-screen--hidden"}`}>
      <div className="loading-screen__container">
        <img className="contact-video" src="/loading.gif" alt="" />
      </div>
    </div>
  );
};

function App() {

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  const [lenis, setLenis] = useState(null);

  useEffect(() => {

    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
    setLenis(lenis);

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  const handleLoaded = () => {
    setTimeout(() => {
      if (lenis) {
        lenis.start();
      }
      document.body.style.overflow = 'auto';
    }, 1000); // Delay for 1 second
  };

  useEffect(() => {
    if (lenis) {
      lenis.stop();
    }
    document.body.style.overflow = 'hidden';
  }, [lenis]);

  const location = useLocation()

  useEffect(() => {

    class Cursor {
      constructor(targetEl) {
        this.el = targetEl;
    
        this.position = {
          previous: vec2(-100, -100),
          current: vec2(-100, -100),
          target: vec2(-100, -100),
          lerpAmount: 0.1
        };
        this.scale = {
          previous: 1,
          current: 1,
          target: 1,
          lerpAmount: 0.1
        };
    
        this.isHovered = false;
        this.hoverEl = null;
    
        this.addListeners();
      }
    
      update() {
        this.position.current.lerp(this.position.target, this.position.lerpAmount);
        this.scale.current = gsap.utils.interpolate(
          this.scale.current,
          this.scale.target,
          this.scale.lerpAmount
        );
    
        const delta = this.position.current.clone().sub(this.position.previous);
    
        this.position.previous.copy(this.position.current);
        this.scale.previous = this.scale.current;
    
        gsap.set(this.el, {
          x: this.position.current.x,
          y: this.position.current.y
        });
    
        if (!this.isHovered) {
          const angle = Math.atan2(delta.y, delta.x) * (180 / Math.PI);
          const distance = Math.sqrt(delta.x * delta.x + delta.y * delta.y) * 0.04;
    
          gsap.set(this.el, {
            rotate: angle,
            scaleX: this.scale.current + Math.min(distance, 1),
            scaleY: this.scale.current - Math.min(distance, 0.3)
          });
        }
      }
    
      updateTargetPosition(x, y) {
        if (this.isHovered) {
          const bounds = this.hoverEl.getBoundingClientRect();
    
          const cx = bounds.x + bounds.width / 2;
          const cy = bounds.y + bounds.height / 2;
    
          const dx = x - cx;
          const dy = y - cy;
    
          this.position.target.x = cx + dx * 0.15;
          this.position.target.y = cy + dy * 0.15;
          this.scale.target = 2;
    
          const angle = Math.atan2(dy, dx) * (180 / Math.PI);
          const distance = Math.sqrt(dx * dx + dy * dy) * 0.01;
    
          gsap.set(this.el, { rotate: angle });
          gsap.to(this.el, {
            scaleX: this.scale.target + Math.pow(Math.min(distance, 0.6), 3) * 3,
            scaleY: this.scale.target - Math.pow(Math.min(distance, 0.3), 3) * 3,
            duration: 0.5,
            ease: "power4.out",
            overwrite: true
          });
        } else {
          this.position.target.x = x;
          this.position.target.y = y;
          this.scale.target = 1;
        }
      }
    
      addListeners() {
        gsap.utils.toArray("[data-hover]").forEach((hoverEl) => {
          // set hover states
          {
            const hoverBoundsEl = hoverEl.querySelector("[data-hover-bounds]");
            hoverBoundsEl.addEventListener("pointerover", () => {
              this.isHovered = true;
              this.hoverEl = hoverBoundsEl;
            });
            hoverBoundsEl.addEventListener("pointerout", () => {
              this.isHovered = false;
              this.hoverEl = null;
            });
          }
    
          // magnetic effect
          {
            const xTo = gsap.quickTo(hoverEl, "x", {
              duration: 1,
              ease: "elastic.out(1, 0.3)"
            });
            const yTo = gsap.quickTo(hoverEl, "y", {
              duration: 1,
              ease: "elastic.out(1, 0.3)"
            });
    
            hoverEl.addEventListener("pointermove", (event) => {
              const { clientX: cx, clientY: cy } = event;
              const { height, width, left, top } = hoverEl.getBoundingClientRect();
              const x = cx - (left + width / 2);
              const y = cy - (top + height / 2);
              xTo(x * 0.2);
              yTo(y * 0.2);
            });
    
            hoverEl.addEventListener("pointerout", () => {
              xTo(0);
              yTo(0);
            });
          }
        });
      }
    }

    class CursorText extends Cursor {
      constructor(targetEl) {
        super(targetEl);
      }
    
      update() {
        this.position.current.lerp(this.position.target, this.position.lerpAmount);
        this.scale.current = gsap.utils.interpolate(
          this.scale.current,
          this.scale.target,
          this.scale.lerpAmount
        );
    
        this.position.previous.copy(this.position.current);
        this.scale.previous = this.scale.current;
    
        gsap.set(this.el, {
          x: this.position.current.x,
          y: this.position.current.y
        });
    
        // Always maintain a constant rotation
        const constantRotation = 0; // Adjust this value as needed
        gsap.set(this.el, {
          rotate: constantRotation,
          scaleX: this.scale.current,
          scaleY: this.scale.current
        });
      }
    }
    
    const cursor = new Cursor(document.querySelector(".cursor"));
    const cursorTextMoving = new CursorText(document.querySelector(".cursor-text"));
    
    const cta = document.querySelector(".cta");
    const menuBtn = document.querySelector(".menu-btn");
    
    onResize();
    
    function update() {
      cursor.update();
      cursorTextMoving.update();
    }

    // function updateCursorTextPosition(x, y) {
    //   gsap.set(cursorText, {
    //     x: x + 20, // Adjust the offset as needed
    //     y: y + 20  // Adjust the offset as needed
    //   });
    // }
    
    function onMouseMove(event) {
      const x = event.clientX;
      const y = event.clientY;
    
      cursor.updateTargetPosition(x, y);
      cursorTextMoving.updateTargetPosition(x, y);
    }
    
    function onResize() {
      const { x, y, width, height } = menuBtn.getBoundingClientRect();
    
      gsap.set(cta, {
        left: x - width,
        top: y + height
      });
    }
    
    gsap.ticker.add(update);
    window.addEventListener("pointermove", onMouseMove);
    window.addEventListener("resize", onResize);

    var ball = document.getElementById("ball");
    var cursorText = document.getElementById("cursor-text");
    
    var hoverAreas = document.querySelectorAll('.hover-area');
    
    var lastHoveredElement = null;
    
    function updateCursor(e) {
      if (window.innerWidth > 768 && lastHoveredElement === null) {
        ball.style.display = 'block';
        ball.style.height = "1.75vw";
        ball.style.width = "1.75vw";
        cursorText.style.opacity = '0';
      }
    }
    
    // Handle hover enter only if screen width is greater than 768px (example threshold)
    function handleHoverEnter(e) {
      if (window.innerWidth > 768) {
        cursorText.innerHTML = e.target.getAttribute('data-cursor-text');
        cursorText.style.opacity = '1';
        ball.style.height = "10vw";
        ball.style.width = "10vw";
      
        lastHoveredElement = e.target;
      }
    }
    
    // Handle hover leave only if screen width is greater than 768px (example threshold)
    function handleHoverLeave(e) {
      if (window.innerWidth > 768) {
        cursorText.style.opacity = '0';
        ball.style.display = 'block';
      
        lastHoveredElement = null;
      }
    }
    
    // Add event listeners conditionally based on screen width
    if (window.innerWidth > 768) {
      document.addEventListener('mousemove', updateCursor);
      
      hoverAreas.forEach(function(elem) {
        elem.addEventListener('mouseenter', handleHoverEnter);
        elem.addEventListener('mouseleave', handleHoverLeave);
      });
    }

  }, []);
  

  return (
      <>
        <LoadingScreen onLoaded={handleLoaded} />

        <Navigation />

        <AnimatePresence mode="wait" >
          <Routes location={location} key={location.pathname} >
            <Route index element={ <Home /> } />
            <Route path="/contact" element={ <Contact /> } />
            <Route path="/realestate" element={ <RealEstatePortfolio /> } />
          </Routes>
        </AnimatePresence>

        <div className="cursor" id="ball"></div>
        <div className="cursor-text" id="cursor-text">Scroll</div>

      </>
  );
}

export default App;