import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export const Section5 = () => {
  return (
      <HorizontalScrollCarousel />
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const isMobile = window.innerWidth <= 768;

  const endTransform = isMobile ? "-100%" : "-60%"; // Use "-30%" for mobile and "-60%" for larger screens
  const x = useTransform(scrollYProgress, [0, 1], ["1%", endTransform]);

  return (
    <section ref={targetRef} className="five-horizontal">
      <div className="five-horizontal-sticky">
        <motion.div style={{ x }} className="five-horizontal-div">

          <div className="five-horizontal-card-first">
            <img className="five-card-text-image" src="ourteam.png" alt="" />
          </div>

          <div className="five-horizontal-card">
            <div className="five-card-image idan" />
            <div className="five-card-text-box">
              <h1 className="five-card-title" >Founder & CEO</h1>
              <div className="five-card-border" />
              <h1 className="five-card-description" >Idan Zeidman</h1>
            </div>
          </div>

          <div className="five-horizontal-card">
            <div className="five-card-image lorenzo" />
            <div className="five-card-text-box">
              <h1 className="five-card-title" >Founder & CEO</h1>
              <div className="five-card-border" />
              <h1 className="five-card-description" >Lorenzo Noya</h1>
            </div>
          </div>

          <div className="five-horizontal-card">
            <div className="five-card-image matvey" />
            <div className="five-card-text-box">
              <h1 className="five-card-title" >Founder & COO</h1>
              <div className="five-card-border" />
              <h1 className="five-card-description" >Matvey Vasilyev</h1>
            </div>
          </div>

          <div className="five-horizontal-card">
            <div className="five-card-image gabriella" />
            <div className="five-card-text-box">
              <h1 className="five-card-title" >Social Media & <br /> Public Relations</h1>
              <div className="five-card-border" />
              <h1 className="five-card-description" >Gabriella Brookfield</h1>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

{/* <div className="carousel-content short" >
<div className="carousel-text-start" >
    <img className="carousel-text-image" src="ourteam.png" alt="" />
</div>
</div>

<div className="carousel-content" >
<div className="carousel-image" >
  <div className="carousel-person-image idan" />
  <div className="carousel-text-row">
    <h1 className="carousel-title" >Founder & CEO</h1>
    <div className="carousel-border" />
    <h1 className="carousel-description" >Idan Zeidman</h1>
  </div>
</div>
</div>

<div className="carousel-content" >
<div className="carousel-image" >
  <div className="carousel-person-image lorenzo" />
  <div className="carousel-text-row">
    <h1 className="carousel-title" >Founder & CEO</h1>
    <div className="carousel-border" />
    <h1 className="carousel-description" >Lorenzo Noya</h1>
  </div>
</div>
</div>

<div className="carousel-content" >
<div className="carousel-image" >
  <div className="carousel-person-image matvey" />
  <div className="carousel-text-row">
    <h1 className="carousel-title" >Founder & COO</h1>
    <div className="carousel-border" />
    <h1 className="carousel-description" >Matvey Vasilyev</h1>
  </div>
</div>
</div>

<div className="carousel-content" >
<div className="carousel-image" >
  <div className="carousel-person-image gabriella" />
  <div className="carousel-text-row">
    <h1 className="carousel-title" >Social Media & <br /> Public Relations</h1>
    <div className="carousel-border" />
    <h1 className="carousel-description" >Gabriella Brookfield</h1>
  </div>
</div>
</div> */}