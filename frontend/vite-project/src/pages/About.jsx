import React from "react";
import "../App.css";
import shivamImage from "./shivam.png";
export default function About() {
  const techCategories = [
    {
      title: "Languages & Core",
      skills: ["JavaScript (ES6+)", "HTML5", "CSS3 / SCSS"],
    },
    {
      title: "Frontend & UI",
      skills: ["React.js", "Redux", "Tailwind CSS"],
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express.js", "MongoDB"],
    },
    {
      title: "Real-Time & Tools",
      skills: ["WebRTC", "Socket.io", "Git & GitHub"],
    },
  ];

  return (
    <div className="aboutWrapper">
      <div className="aboutContainer">
        {/* Left Column: Image, Name, Quick Links */}
        <div className="aboutSidebar">
          <div className="profileImageContainer">
            <img
  src={shivamImage}
              alt="Shivam Singh"
              className="profileImage"
            />
          </div>

          <h1 className="profileName">Shivam Singh</h1>
          <h3 className="profileTitle">Full Stack MERN Developer</h3>

          <p className="sidebarLocation">📍 Greater Noida, India</p>

          <div className="aboutActions">
            <a
              href="https://github.com/YOUR_GITHUB"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btnPrimary"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btnSecondary"
            >
              LinkedIn
            </a>
             <a
              href="https://linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btnSecondary"
            >
              Portfolio
            </a>
            <a href="mailto:yourmail@gmail.com" className="btn btnOutline">
              Email Me
            </a>
          </div>
        </div>

        {/* Right Column: Bio, Stats, Categorized Tech Stack */}
        <div className="aboutContent">
          <div className="bioSection">
            <h2 className="sectionHeading">About Me</h2>
            <p className="bioText">
              Hi! I'm <b>Shivam Singh</b>, a Computer Science Engineering student
              passionate about architecting scalable full-stack web applications,
              integrating AI features, and solving complex DSA problems.
            </p>
            <p className="bioText">
              I specialize in building real-time applications using the MERN stack,
              WebRTC, and Socket.io—ranging from live video conferencing and interactive 
              chat systems to robust e-commerce architectures.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="statsGrid">
            <div className="statCard">
              <span className="statNumber">2+</span>
              <span className="statLabel">Years Coding</span>
            </div>
            <div className="statCard">
              <span className="statNumber">10+</span>
              <span className="statLabel">Projects Built</span>
            </div>
            <div className="statCard">
              <span className="statNumber">MERN</span>
              <span className="statLabel">Core Focus</span>
            </div>
          </div>

          {/* Skills Breakdown */}
          <div className="skillsSection">
            <h2 className="sectionHeading">Technical Expertise</h2>
            <div className="skillsGrid">
              {techCategories.map((cat, idx) => (
                <div key={idx} className="skillCategoryCard">
                  <h4 className="categoryTitle">{cat.title}</h4>
                  <div className="techBadges">
                    {cat.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}