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
      { transform: "translate3d(0, 5vh, 0) rotate(-5deg)" },
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

  const hoverSound = new Audio('/fx.mp3');

  const hoverSoundStart = () => {
    if (!isMobile) {
      hoverSound.play();
      hoverSound.currentTime = 0;
    }
  };
  
  const hoverSoundEnd = () => {
    if (!isMobile) {
      hoverSound.pause();
      hoverSound.currentTime = 0;
    }
  };
  
  const hoverSoundMobile = () => {
    if (isMobile) {
      hoverSound.play();
    }
  };

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
                  <span className="menu-text">Home</span>
                  <span className="menu-text">Home</span>
                </div>
              </Link>
              <Link to="/projects" className="menu-text">
                <div className="menu-button">
                  <span className="menu-text">Projects</span>
                  <span className="menu-text">Projects</span>
                </div>
              </Link>
              <Link to="/ourservices" className="menu-text">
                <div className="menu-button">
                  <span className="menu-text">Services</span>
                  <span className="menu-text">Services</span>
                </div>
              </Link>
              <Link to="/contact" className="menu-text">
                <div className="menu-button">
                  <span className="menu-text">Get In Touch</span>
                  <span className="menu-text">Get In Touch</span>
                </div>
              </Link>
              {/* <Link to="/realestate" className="menu-text">
                <div className="menu-button">
                  <span className="menu-text">Real estate</span>
                  <span className="menu-text">Real estate</span>
                </div>
              </Link> */}
            </div>
            <div className="menuSocial" ref={menuSocialRef}>
              <i className="fa-brands fa-instagram nav-brands" onClick={() => handleClick('https://www.instagram.com/dialedweb/')}></i>
              <i className="fa-brands fa-youtube nav-brands" onClick={() => handleClick('https://www.instagram.com/dialedweb/')}></i>
              <i className="fa-brands fa-linkedin nav-brands" onClick={() => handleClick('https://www.linkedin.com/company/dialed-web/')}></i>
            </div>
          </div>
        </div>
      </div>

      <div className={`navigation ${navScrolled ? "scrolled" : ""}`}>
        <motion.button
          className="navigation-left btn menu-btn"
          onClick={() => { setMenu(!menu); hoverSoundMobile(); }}
          onMouseEnter={hoverSoundStart}
          onMouseLeave={hoverSoundEnd}
          data-hover
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
          <div data-hover-bounds></div>
        </motion.button>
        <Link to="/"   onClick={(e) => {e.preventDefault(); window.location.href = '/'; }} className="navigation-center" >
            <div className="navigation-center">
                <img src="/loading.png" className="navigation-image" alt="" />
            </div>
        </Link>
        <motion.button
          className="navigation-right btn menu-btn"
          onClick={() => { handleContactNavigate(); hoverSoundMobile(); }}
          onMouseEnter={hoverSoundStart}
          onMouseLeave={hoverSoundEnd}
          data-hover
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
          <div data-hover-bounds></div>
        </motion.button>
      </div>
    </>
  );
};
