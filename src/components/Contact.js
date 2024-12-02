import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <section id="contacts" className="py-5 bg-light text-center">
      <div className="container">
        {/* Section Title */}
        <h2 className="display-4 fw-bold mb-4">Contact Me</h2>

        <div className="row">
          {/* Left Column - Form */}
          <div className="col-lg-6 mb-4">
            <form action="https://formspree.io/f/mjkvjovy" method="POST" className="p-4 shadow rounded bg-white">
              <h3 className="mb-4">Send Me a Message</h3>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-bold">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-bold">
                  Your Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column - Information, Links, and Button */}
          <div className="col-lg-6">
            {/* Contact Information */}
            <h3 className="fw-bold mb-3">Get in Touch</h3>
            <p className="lead text-muted">
              If you have any questions or would like to work together, feel free to reach out to me. You can use the form, or connect via email or social media.
            </p>
            <p className="mb-4">
              <strong>Phone:</strong> 072 589 5129 <br />
              <strong>Location:</strong> Eastern Cape, King Williams Town
            </p>

            {/* Social Media Links */}
            <div className="d-flex justify-content-center gap-4 mb-4">
              <a
                href="https://www.linkedin.com/in/achumile-kondile/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-decoration-none text-dark d-flex align-items-center justify-content-center rounded-circle bg-light border border-secondary p-3 shadow hover-effect"
                style={{ width: "60px", height: "60px" }}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Achumile-Kondile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-decoration-none text-dark d-flex align-items-center justify-content-center rounded-circle bg-light border border-secondary p-3 shadow hover-effect"
                style={{ width: "60px", height: "60px" }}
              >
                <FaGithub />
              </a>
              <a
                href="https://wa.me/0725895129"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-decoration-none text-dark d-flex align-items-center justify-content-center rounded-circle bg-light border border-secondary p-3 shadow hover-effect"
                style={{ width: "60px", height: "60px" }}
              >
                <FaWhatsapp />
              </a>
              <a
                href="mailto:achumilekondile@gmail.com"
                aria-label="Email"
                className="text-decoration-none text-dark d-flex align-items-center justify-content-center rounded-circle bg-light border border-secondary p-3 shadow hover-effect"
                style={{ width: "60px", height: "60px" }}
              >
                <FaEnvelope />
              </a>
            </div>

            {/* Download CV Button */}
            <a
              href="/ACHUMILE KONDILE Curriculum Vitae.pdf"
              download="ACHUMILE KONDILE Curriculum Vitae.pdf"
              className="btn btn-primary btn-lg shadow"
            >
              Download My CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
