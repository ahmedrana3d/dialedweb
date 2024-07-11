// Cursor.js
import gsap from "https://esm.sh/gsap";
import { vec2 } from "https://esm.sh/vecteur";

export class Cursor {
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

export class CursorText extends Cursor {
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

// Initialize the cursor and cursorText
export function initializeCursors() {
  const cursor = new Cursor(document.querySelector(".cursor"));
  const cursorTextMoving = new CursorText(document.querySelector(".cursor-text"));

  const cta = document.querySelector(".cta");
  const menuBtn = document.querySelector(".menu-btn");

  onResize();

  function update() {
    cursor.update();
    cursorTextMoving.update();
  }

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

  function handleHoverEnter(e) {
    if (window.innerWidth > 768) {
      cursorText.innerHTML = e.target.getAttribute('data-cursor-text');
      cursorText.style.opacity = '1';
      ball.style.height = "10vw";
      ball.style.width = "10vw";

      lastHoveredElement = e.target;
    }
  }

  function handleHoverLeave(e) {
    if (window.innerWidth > 768) {
      cursorText.style.opacity = '0';
      ball.style.display = 'block';

      lastHoveredElement = null;
    }
  }

  if (window.innerWidth > 768) {
    document.addEventListener('mousemove', updateCursor);

    hoverAreas.forEach(function(elem) {
      elem.addEventListener('mouseenter', handleHoverEnter);
      elem.addEventListener('mouseleave', handleHoverLeave);
    });
  }
}
