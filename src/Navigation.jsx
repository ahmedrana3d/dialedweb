import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { Link, useLocation, useNavigate } from "react-router-dom";

gsap.registerPlugin(CustomEase);

const customEase = CustomEase.create("customEase", ".4,0,.1,1");

export const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // NAV OVERLAY
  const [menu, setMenu] = useState(false);
  const menuContentRef = useRef(null);
  const menuNavRef = useRef(null);
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

  const [shouldScroll, setShouldScroll] = useState(false);

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

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Function to update isMobile based on window size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const handleClickSection = (linkUrl) => {
    if (linkUrl === "#section6") {
      setShouldScroll(true);
      if (location.pathname === "/") {
        scrollToSection("section6");
      } else {
        navigate("/", { state: { fromServices: true } });
      }
    } else {
      window.open(linkUrl, '_blank');
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      let offset = -10 * window.innerHeight / 100; // -10vh for all sections
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    if (location.state && location.state.fromServices) {
      navigate(location.pathname, { replace: true, state: {} }); // Clear the state after scrolling
      setTimeout(() => {
        scrollToSection("section6");
      }, 2000); // Add a 1 second delay
    }
  }, [location, navigate]);

  return (
    <>
      <div className={`menu-container z-50 ${menu ? 'open' : ''}`} onClick={() => setMenu(!menu)}>
        <div className="menu">
          <div className="menu-hover-close hover-area" data-cursor-text="CLOSE" />
          <div key="menuContent" className="menuContent" ref={menuContentRef}>
            <div className="menuNav" ref={menuNavRef}>
              <Link to="/" className="menu-text">
                <div className="menu-button" onClick={hoverSoundMobile} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd}>
                  <span className="menu-text">Home</span>
                  <span className="menu-text">Home</span>
                </div>
              </Link>
              <Link to="/about" className="menu-text">
                <div className="menu-button" onClick={hoverSoundMobile} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd}>
                  <span className="menu-text">About</span>
                  <span className="menu-text">About</span>
                </div>
              </Link>
              <Link to="/projects" className="menu-text">
                <div className="menu-button" onClick={hoverSoundMobile} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd}>
                  <span className="menu-text">Projects</span>
                  <span className="menu-text">Projects</span>
                </div>
              </Link>
              <div className="menu-text" onClick={() => handleClickSection("#section6")}>
                <div className="menu-button" onClick={hoverSoundMobile} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd}>
                  <span className="menu-text">Services</span>
                  <span className="menu-text">Services</span>
                </div>
              </div>
              <Link to="/learn-more" className="menu-text">
                <div className="menu-button" onClick={hoverSoundMobile} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd}>
                  <span className="menu-text">Learn More</span>
                  <span className="menu-text">Learn More</span>
                </div>
              </Link>
              <Link to="/contact" className="menu-text">
                <div className="menu-button" onClick={hoverSoundMobile} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd}>
                  <span className="menu-text">Get In Touch</span>
                  <span className="menu-text">Get In Touch</span>
                </div>
              </Link>
            </div>
            <div className="menuSocial" ref={menuSocialRef}>
              <i className="fa-brands fa-instagram nav-brands" onClick={() => { hoverSoundMobile(); handleClick('https://www.instagram.com/dialedweb/') }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} ></i>
              <i className="fa-brands fa-youtube nav-brands" onClick={() => { hoverSoundMobile(); handleClick('https://www.instagram.com/dialedweb/') }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} ></i>
              <i className="fa-brands fa-linkedin nav-brands" onClick={() => { hoverSoundMobile(); handleClick('https://www.linkedin.com/company/dialed-web/') }} onMouseEnter={hoverSoundStart} onMouseLeave={hoverSoundEnd} ></i>
            </div>
          </div>
        </div>
      </div>

      <div className={`navigation ${navScrolled ? "scrolled" : ""}`}>
        <motion.button
          className="navigation-left"
          onClick={() => { setMenu(!menu); hoverSoundMobile(); }}
          onMouseEnter={hoverSoundStart}
          onMouseLeave={hoverSoundEnd}
        >
            {isMobile ? (
              <i className="fa-solid fa-bars"></i>
            ) : (
              <>
                <div className="navigation-left-content">
                  <span className="navigation-text">MENU</span>
                  <span className="navigation-text">MENU</span>
                </div>
              </>
            )}
        </motion.button>
        <Link to="/" onClick={(e) => { e.preventDefault(); window.location.href = '/'; }} className="navigation-center">
          <div className="navigation-center">
            <img src="/loading.png" className="navigation-image" alt="" />
          </div>
        </Link>
        <motion.button
          className="navigation-right"
          onClick={() => { handleContactNavigate(); hoverSoundMobile(); }}
          onMouseEnter={hoverSoundStart}
          onMouseLeave={hoverSoundEnd}
        >
            {isMobile ? (
              <i className="fa-solid fa-envelope"></i>
            ) : (
              <>
                <div className="navigation-right-content">
                  <span className="navigation-text">GET IN TOUCH</span>
                  <span className="navigation-text">GET IN TOUCH</span>
                </div>
              </>
            )}
        </motion.button>
      </div>
    </>
  );
};

