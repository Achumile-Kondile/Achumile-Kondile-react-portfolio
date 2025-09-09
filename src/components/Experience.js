import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Experience = () => {
  const colors = {
    softPink: "#FFB6C1",
    hotPink: "#FF69B4",
    darkMagenta: "#8B008B",
    mediumVioletRed: "#C71585",
    indigo: "#4B0082",
    white: "#FFFFFF",
    shadowPink: "rgba(255,105,180,0.2)",
    lightLavender: "#E6E6FA",
    paleRose: "#FFD1DC",
  };

  const education = [
    {
      id: 1,
      institution: "Walter Sisulu University",
      degree: "Diploma in ICT Application Development",
      years: "2021 – 2023",
      description:
        "Completed a three-year diploma program focused on software development, systems analysis, and programming, providing a solid foundation in modern application development and IT practices.",
    },
    {
      id: 2,
      institution: "GirlCode",
      degree: "Python Bootcamp (Online)",
      years: "June 2024 – September 2024",
      description:
        "Participated in an intensive online bootcamp focused on Python fundamentals, coding best practices, and real-world problem-solving using Python. The program emphasized hands-on projects and collaborative learning in a virtual environment.",
    },
    {
      id: 3,
      institution: "Walter Sisulu University",
      degree: "Samsung Innovation Campus – Python & Artificial Intelligence",
      years: "2023",
      description:
        "Selected to be part of the Samsung Innovation Campus where I received training in Python programming and Artificial Intelligence. Recognized among the top 3 performers in the AI module and awarded a prize for excellence.",
    },
  ];

  return (
    <section id="experience" className="py-5" style={{ background: colors.paleRose }}>
      <div className="container">
        <h2 className="text-center mb-5" style={{ color: colors.darkMagenta, fontWeight: "bold" }}>
          Experience & Education
        </h2>
        <div className="row g-4 justify-content-center">
          {education.map((item) => (
            <div className="col-md-6 col-lg-4 d-flex" key={item.id}>
              <div className="card shadow-sm" style={{ width: "100%", borderRadius: "1rem", background: colors.white }}>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title" style={{ color: colors.hotPink }}>{item.institution}</h5>
                  <h6 className="card-subtitle mb-2" style={{ color: colors.mediumVioletRed }}>{item.degree}</h6>
                  <span className="mb-2" style={{ color: colors.indigo, fontWeight: "bold" }}>{item.years}</span>
                  <p className="card-text" style={{ color: colors.darkMagenta }}>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;