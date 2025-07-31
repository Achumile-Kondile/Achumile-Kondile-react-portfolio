import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure this is correctly loaded

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const colors = {
    softPink: "#FFB6C1",        // Light Pink for background
    hotPink: "#FF69B4",         // Hot Pink for accents/hover
    darkMagenta: "#8B008B",     // Dark Magenta for brand/links
    mediumVioletRed: "#C71585", // Medium Violet Red for hover/active
    white: "#FFFFFF",           // White for text on dark backgrounds
    shadowPink: "rgba(255,105,180,0.2)", // Pink shadow
  };

  const navStyles = {
    navbar: {
      background: colors.softPink,
      backdropFilter: "blur(5px)",
      boxShadow: `0 4px 15px ${colors.shadowPink}`,
      padding: '1.2rem 0',
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
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const closeNavbar = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  // Function to handle smooth scrolling to sections
  const scrollToSection = (e, id) => {
    e.preventDefault(); // Prevent default anchor link behavior (which changes URL hash)
    closeNavbar(); // Close mobile navbar if open

    // Determine the target ID. For 'home', we might want to ensure it's always 'home'.
    const targetId = id === 'home' ? 'home' : id;
    const section = document.getElementById(targetId);

    if (section) {
      console.log(`Scrolling to section: #${targetId}`); // Debugging log
      // Use navigate to update the URL hash for direct linking and active state
      // Using replace: true prevents adding multiple identical entries to history if clicking same link
      navigate(`#${targetId}`, { replace: true });

      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for fixed navbar height
        behavior: 'smooth'
      });
    } else {
      console.warn(`Section with ID '${targetId}' not found. Cannot scroll.`); // Debugging warning
      // Fallback for 'home' if section not found (e.g., if HomePage component doesn't have id="home")
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate('/', { replace: true }); // Clear hash if home section isn't found
      }
    }
  };

  // Helper function to apply active styles based on current hash
  const getNavLinkStyle = (id) => {
    // Check if the current hash matches the section ID
    const isHashActive = location.hash === `#${id}`;
    // Special case for 'home': active if no hash, or if hash is #home
    const isHomeActive = id === 'home' && (location.pathname === '/' && (!location.hash || location.hash === '#home'));

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
          {/* Brand link should scroll to the top of the page (or home section) */}
          <a href="#home" className="navbar-brand" style={navStyles.brand} onClick={(e) => scrollToSection(e, 'home')}>
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
          {/* Custom toggler icon for better theme integration */}
          <span className="navbar-toggler-icon" style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%23${colors.darkMagenta.substring(1)}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`,
          }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <motion.li className="nav-item" variants={navItemVariants} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>
              <a
                className="nav-link"
                href="#home" // Link to the ID of the home section
                onClick={(e) => scrollToSection(e, 'home')}
                style={getNavLinkStyle('home')}
                onMouseEnter={e => e.currentTarget.style.color = navStyles.navLinkHover.color}
                onMouseLeave={e => e.currentTarget.style.color = navStyles.navLink.color}
              >
                Home
                {(location.hash === '#home' || (location.pathname === '/' && !location.hash)) && <span style={{ ...navStyles.activeLinkIndicator, width: '100%' }}></span>}
              </a>
            </motion.li>
            <motion.li className="nav-item" variants={navItemVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
              <a
                className="nav-link"
                href="#about" // Link to the ID of the about section
                onClick={(e) => scrollToSection(e, 'about')}
                style={getNavLinkStyle('about')}
                onMouseEnter={e => e.currentTarget.style.color = navStyles.navLinkHover.color}
                onMouseLeave={e => e.currentTarget.style.color = navStyles.navLink.color}
              >
                About
                {location.hash === '#about' && <span style={{ ...navStyles.activeLinkIndicator, width: '100%' }}></span>}
              </a>
            </motion.li>

            <motion.li className="nav-item" variants={navItemVariants} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
              <a
                className="nav-link"
                href="#projects" // Link to the ID of the projects section
                onClick={(e) => scrollToSection(e, 'projects')}
                style={getNavLinkStyle('projects')}
                onMouseEnter={e => e.currentTarget.style.color = navStyles.navLinkHover.color}
                onMouseLeave={e => e.currentTarget.style.color = navStyles.navLink.color}
              >
                Projects
                {location.hash === '#projects' && <span style={{ ...navStyles.activeLinkIndicator, width: '100%' }}></span>}
              </a>
            </motion.li>
            <motion.li className="nav-item" variants={navItemVariants} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
              <a
                className="nav-link"
                href="#experience" // <--- CHANGED FROM #tech-stack TO #experience
                onClick={(e) => scrollToSection(e, 'experience')} // <--- CHANGED FROM 'tech-stack' TO 'experience'
                style={getNavLinkStyle('experience')} // <--- CHANGED FROM 'tech-stack' TO 'experience'
                onMouseEnter={e => e.currentTarget.style.color = navStyles.navLinkHover.color}
                onMouseLeave={e => e.currentTarget.style.color = navStyles.navLink.color}
              >
                Experience
                {location.hash === '#experience' && <span style={{ ...navStyles.activeLinkIndicator, width: '100%' }}></span>}
              </a>
            </motion.li>
            <motion.li className="nav-item" variants={navItemVariants} initial="hidden" animate="visible" transition={{ delay: 0.5 }}>
              <a
                className="nav-link"
                href="#contact" // Link to the ID of the contact section
                onClick={(e) => scrollToSection(e, 'contact')}
                style={getNavLinkStyle('contact')}
                onMouseEnter={e => e.currentTarget.style.color = navStyles.navLinkHover.color}
                onMouseLeave={e => e.currentTarget.style.color = navStyles.navLink.color}
              >
                Contact
                {location.hash === '#contact' && <span style={{ ...navStyles.activeLinkIndicator, width: '100%' }}></span>}
              </a>
            </motion.li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;