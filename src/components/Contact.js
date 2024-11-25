import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-light text-center">
      <div className="container">
        {/* Section Title */}
        <h2 className="display-4 mb-4">Contact Me</h2>
        <p className="lead mb-4">
          Feel free to reach out to me on any of the platforms below:
        </p>

        {/* Contact Links */}
        <div className="d-flex justify-content-center gap-4 mb-4 fs-2">
          <a
            href="https://www.linkedin.com/in/achumile-kondile/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-decoration-none text-dark"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Achumile861"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-decoration-none text-dark"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/0725895129"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-decoration-none text-dark"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:achumilekondile@gmail.com"
            aria-label="Email"
            className="text-decoration-none text-dark"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Download CV Button */}
        <a
          href="/ACHUMILE KONDILE Curriculum Vitae.pdf"
          download="ACHUMILE KONDILE Curriculum Vitae.pdf"
          className="btn btn-primary btn-lg shadow-sm"
        >
          Download My CV
        </a>
      </div>
    </section>
  );
};

export default Contact;