import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        'service_l28y6sp',
        'template_u2zj1ho',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Achumile Kondile',
        },
        'kY5x3hJvaJQgTV4vX'
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('EmailJS Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      id="contacts" 
      className="py-5"
      style={{ 
        background: "linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)"
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 fw-bold mb-3" style={{ color: "#2d3436" }}>
            Contact <span style={{ color: "#6c5ce7" }}>Me</span>
          </h2>
          <div 
            className="mx-auto" 
            style={{ 
              width: "60px", 
              height: "4px", 
              background: "#6c5ce7", 
              marginTop: "1rem" 
            }}
          />
        </motion.div>

        <div className="row g-4">
          {/* Left Column - Form */}
          <motion.div 
            className="col-lg-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="card border-0" style={{
              background: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)"
            }}>
              <div className="card-body p-4">
                <h3 className="card-title text-center mb-4" style={{ color: "#2d3436" }}>
                  Send Me a Message
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      style={{
                        border: "1px solid #e4e8eb",
                        padding: "0.8rem",
                        borderRadius: "8px"
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      style={{
                        border: "1px solid #e4e8eb",
                        padding: "0.8rem",
                        borderRadius: "8px"
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Your Message"
                      required
                      style={{
                        border: "1px solid #e4e8eb",
                        padding: "0.8rem",
                        borderRadius: "8px"
                      }}
                    ></textarea>
                  </div>
                  <motion.button 
                    type="submit" 
                    className="btn btn-lg px-4 py-3 w-100"
                    style={{ 
                      background: "#6c5ce7",
                      color: "white",
                      borderRadius: "50px"
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="col-lg-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="card border-0 h-100" style={{
              background: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)"
            }}>
              <div className="card-body p-4">
                <h3 className="card-title text-center mb-4" style={{ color: "#2d3436" }}>
                  Get in Touch
                </h3>
                <p className="lead mb-4" style={{ color: "#636e72", lineHeight: "1.8" }}>
                  If you have any questions or would like to work together, feel free to reach out to me. 
                  You can use the form, or connect via email or social media.
                </p>
                
                <div className="mb-4" style={{ color: "#636e72" }}>
                  <p className="mb-1">
                    <strong style={{ color: "#2d3436" }}>Phone:</strong> 072 589 5129
                  </p>
                  <p className="mb-0">
                    <strong style={{ color: "#2d3436" }}>Location:</strong> Eastern Cape, King Williams Town
                  </p>
                </div>

                {/* Social Links */}
                <div className="d-flex justify-content-center gap-4">
                  <motion.a
                    href="https://www.linkedin.com/in/achumile-kondile/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-light btn-lg rounded-circle"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ background: "white", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                  >
                    <FaLinkedin className="text-primary" />
                  </motion.a>
                  <motion.a
                    href="https://github.com/Achumile-Kondile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-light btn-lg rounded-circle"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ background: "white", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                  >
                    <FaGithub className="text-dark" />
                  </motion.a>
                  <motion.a
                    href="https://wa.me/0725895129"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-light btn-lg rounded-circle"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ background: "white", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                  >
                    <FaWhatsapp className="text-success" />
                  </motion.a>
                  <motion.a
                    href="mailto:achumilekondile@gmail.com"
                    className="btn btn-light btn-lg rounded-circle"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ background: "white", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                  >
                    <FaEnvelope className="text-danger" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </section>
  );
};

export default Contact;