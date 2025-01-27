import React from "react";
import { motion } from "framer-motion";
import headerImg from "../assets/Media.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = () => {
  const closeNavbar = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse) {
      navbarCollapse.classList.remove("show");
    }
  };

  const navItems = [
    { href: "#about", text: "About" },
    { href: "#projects", text: "Projects" },
    { href: "#technologies", text: "Technologies" },
    { href: "#contacts", text: "Contact" }
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top" style={{
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 2px 20px rgba(0,0,0,0.1)"
      }}>
        <div className="container">
          <motion.a 
            className="navbar-brand fw-bold"
            href="#home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ color: "#2d3436", fontSize: "1.4rem" }}
          >
            Achumile Kondile
          </motion.a>
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {navItems.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="nav-item"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a 
                    className="nav-link px-3" 
                    href={item.href} 
                    onClick={closeNavbar}
                    style={{ color: "#2d3436", fontWeight: "500" }}
                  >
                    {item.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="min-vh-100 d-flex align-items-center"
        style={{
          background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)",
          paddingTop: "5rem"
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <motion.div 
              className="col-lg-6 text-center text-lg-start"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="display-4 fw-bold mb-4" style={{ color: "#2d3436" }}>
                Hi, I'm <span style={{ color: "#6c5ce7" }}>Achumile Kondile</span>
              </h1>
              <h2 className="h3 text-secondary mb-4">
                A passionate Software Developer
              </h2>
              <p className="lead mb-4" style={{ color: "#636e72" }}>
                Welcome to my personal portfolio where I showcase my work,
                skills, and journey.
              </p>
              <motion.a
                href="/ACHUMILE_KONDILE_Curriculum_Vitae.pdf"
                download
                className="btn btn-lg px-4 py-3"
                style={{ 
                  background: "#6c5ce7",
                  color: "white",
                  borderRadius: "50px"
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download My CV
              </motion.a>
            </motion.div>

            <motion.div 
              className="col-lg-6 text-center mt-5 mt-lg-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={headerImg}
                alt="Achumile Kondile"
                className="img-fluid"
                style={{
                  maxWidth: "80%",
                  filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.15))"
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;