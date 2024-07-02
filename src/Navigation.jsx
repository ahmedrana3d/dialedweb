import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { Link, useLocation, useNavigate } from "react-router-dom";

gsap.registerPlugin(CustomEase);

const customEase = CustomEase.create("customEase", ".4,0,.1,1");

export const Navigation = () => {
  const location = useLocation();

  // NAV OVERLAY
  const [menu, setMenu] = useState(false);
  const menuContentRef = useRef(null);
  const menuNavRef = useRef(null);
  const menuContainerRef = useRef(null);
  const menuSocialRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      ".menu",
      { display: "none" },
      { display: "block", duration: 0.5, ease: customEase },
      0
    );

    tl.fromTo(
      menuContentRef.current,
      { opacity: 0, gap: "150px" },
      { opacity: 1, duration: 0.5, gap: "1vw", ease: customEase },
      0
    );

    tl.fromTo(
      menuNavRef.current,
      { transform: "translate3d(0, 5vh, 0) rotate(5deg)" },
      {
        transform: "translate3d(0, 0, 0) rotate(0deg)",
        duration: 0.5,
        ease: customEase,
      },
      0
    );

    tl.fromTo(
      menuContainerRef.current,
      { transform: "translate3d(0, 5vh, 0) rotate(-5deg)" },
      {
        transform: "translate3d(0, 0, 0) rotate(0deg)",
        duration: 0.5,
        ease: customEase,
      },
      0
    );

    tl.fromTo(
      menuSocialRef.current,
      { transform: "translate3d(0, 5vh, 0) rotate(5deg)" },
      {
        transform: "translate3d(0, 0, 0) rotate(0deg)",
        duration: 0.5,
        ease: customEase,
      },
      0
    );

    // Function to handle opening and closing
    const handleOpen = (isClosed) => {
      if (isClosed) {
        tl.play();
      } else {
        tl.progress(1).reverse();
      }
    };

    handleOpen(menu);

    return () => {
      tl.kill();
    };
  }, [menu]);

  useEffect(() => {
    // Close the menu when the location changes
    if (menu) {
      setMenu(false);
    }
  }, [location.pathname]);

  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 10;
      if (window.scrollY > scrollThreshold) {
        setNavScrolled(true);
      } else {
        setNavScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = useNavigate();

  const handleContactNavigate = () => {
    if (location.pathname === "/contact") {
      navigate("/");
    } else {
      navigate("/contact");
    }
  };

  const handleClick = (linkUrl) => {
    window.open(linkUrl, '_blank');
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <div className={`menu-container ${menu ? 'open' : ''}`}           onClick={() => {
            setMenu(!menu);
          }}>
        <div className="menu">
          <div key="menuContent" className="menuContent" ref={menuContentRef}>
            <div className="menuNav" ref={menuNavRef}>
              <Link to="/" className="menu-text">
                <div className="menu-button">
                  <span className="menu-text">HOME</span>
                  <span className="menu-text">HOME</span>
                </div>
              </Link>
              <div className="menu-button">
                <span className="menu-text">PROJECTS</span>
                <span className="menu-text">PROJECTS</span>
              </div>
              <div className="menu-button">
                <span className="menu-text">LEARN</span>
                <span className="menu-text">LEARN</span>
              </div>
              <Link to="/contact" className="menu-text">
                <div className="menu-button">
                  <span className="menu-text">GET IN TOUCH</span>
                  <span className="menu-text">GET IN TOUCH</span>
                </div>
              </Link>
            </div>
            <div ref={menuContainerRef} className="menuContainer">
              <h1 className="menu-text">Book Your Consultation</h1>
              <div className="inputContainer">
                <div className="emailinput" onClick={handleContactNavigate}>
                  Get in touch
                </div>
              </div>
            </div>
            <div className="menuSocial" ref={menuSocialRef}>
              <i className="fa-brands fa-instagram nav-brands" onClick={() => handleClick('https://www.instagram.com/dialedweb/')}></i>
              <i className="fa-brands fa-youtube nav-brands" onClick={() => handleClick('https://www.instagram.com/dialedweb/')}></i>
              <i className="fa-brands fa-linkedin nav-brands" onClick={() => handleClick('https://calendly.com/d/cn6c-4s9-66h/meeting?month=2024-04')}></i>
            </div>
          </div>
        </div>
      </div>

      <div className={`navigation ${navScrolled ? "scrolled" : ""}`}>
        <motion.button
          className="navigation-left"
          whileHover={{ scale: 1.075 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <div className="navigation-left-content">
            {isMobile ? (
              <i className="fa-solid fa-bars"></i>
            ) : (
              <>
                <span className="navigation-text">MENU</span>
                <span className="navigation-text">MENU</span>
              </>
            )}
          </div>
        </motion.button>
        <Link to="/"   onClick={(e) => {e.preventDefault(); window.location.href = '/'; }} className="navigation-center" >
            <div className="navigation-center">
                <img src="/Keycap.png" className="navigation-image" alt="" />
            </div>
        </Link>
        <motion.button
          className="navigation-right"
          whileHover={{ scale: 1.075 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onClick={handleContactNavigate}
        >
          <div className="navigation-right-content">
            {isMobile ? (
              <i class="fa-solid fa-envelope"></i>
            ) : (
              <>
                <span className="navigation-text">GET IN TOUCH</span>
                <span className="navigation-text">GET IN TOUCH</span>
              </>
            )}
          </div>
        </motion.button>
      </div>
    </>
  );
};
