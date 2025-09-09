import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const location = useLocation();

  const colors = {
    softPink: "#FFB6C1",
    hotPink: "#FF69B4",
    darkMagenta: "#8B008B",
    mediumVioletRed: "#C71585",
    white: "#FFFFFF",
    shadowPink: "rgba(255,105,180,0.2)",
  };

  const navStyles = {
    navbar: {
      background: colors.softPink,
      backdropFilter: "blur(5px)",
      boxShadow: `0 4px 15px ${colors.shadowPink}`,
      padding: "1.2rem 0",
    },
    brand: {
      color: colors.darkMagenta,
      fontSize: "2rem",
      fontWeight: "800",
      letterSpacing: "0.08em",
      textShadow: "1px 1px 3px rgba(0,0,0,0.1)",
    },
    navLink: {
      color: colors.darkMagenta,
      fontWeight: "600",
      fontSize: "1.15rem",
      margin: "0 18px",
      transition: "all 0.3s ease-in-out",
      position: "relative",
      textDecoration: "none",
    },
    navLinkHover: {
      color: colors.hotPink,
      transform: "translateY(-2px)",
    },
    activeLinkIndicator: {
      content: '""',
      position: "absolute",
      bottom: "-5px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "0%",
      height: "3px",
      backgroundColor: colors.hotPink,
      borderRadius: "2px",
      transition: "width 0.3s ease-in-out",
    },
    activeLink: {
      color: colors.mediumVioletRed,
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Smooth scroll to section
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      window.location.hash = `#${id}`;
      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 10);
    } else if (id === "home") {
      window.location.hash = "";
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // Collapse navbar on mobile
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  const getNavLinkStyle = (id) => {
    const isHashActive = location.hash === `#${id}`;
    const isHomeActive = id === "home" && (location.pathname === "/" && (!location.hash || location.hash === "#home"));
    const isActive = isHashActive || isHomeActive;
    return {
      ...navStyles.navLink,
      ...(isActive ? navStyles.activeLink : {}),
    };
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={navStyles.navbar}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <a href="#home" className="navbar-brand" style={navStyles.brand} onClick={(e) => scrollToSection(e, "home")}>
            Achumile Kondile
          </a>
        </motion.div>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "projects", label: "Projects" },
              { id: "experience", label: "Experience" },
              { id: "contact", label: "Contact" },
            ].map((item, idx) => (
              <motion.li className="nav-item" key={item.id} variants={navItemVariants} initial="hidden" animate="visible" transition={{ delay: 0.1 + idx * 0.1 }}>
                <a
                  className="nav-link"
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  style={getNavLinkStyle(item.id)}
                  onMouseEnter={e => e.currentTarget.style.color = navStyles.navLinkHover.color}
                  onMouseLeave={e => e.currentTarget.style.color = navStyles.navLink.color}
                >
                  {item.label}
                  {(location.hash === `#${item.id}` || (item.id === "home" && location.pathname === "/" && !location.hash)) && <span style={{ ...navStyles.activeLinkIndicator, width: "100%" }}></span>}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;