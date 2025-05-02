import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaEye,
} from "react-icons/fa";
import { scrambleText } from "./animations";

const Header: React.FC = () => {
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      scrambleText("Venkatesh Yerram", setDisplayName);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        <img
          src="/Portfolio/profile.jpg"
          width="200"
          height="230"
          alt="Venkatesh Yerram"
          className="profile-photo"
        />
        <div className="header-info">
          <h1>{displayName}</h1>
          <div className="contact-info">
            <div className="contact-section">
              <div className="contact-item">
                <FaEnvelope className="contact-icon email-icon" />
                <a href="mailto:venkateshyerram6@gmail.com">
                  venkateshyerram6@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon phone-icon" />
                <span>+1 980-277-2061</span>
              </div>
            </div>
            <div className="contact-section">
              <div className="contact-item">
                <FaLinkedin className="contact-icon linkedin-icon" />
                <a
                  href="https://linkedin.com/in/venkatesh-yerram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className="contact-item">
                <FaGithub className="contact-icon github-icon" />
                <a
                  href="https://github.com/venkateshyerram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="contact-section">
              <div className="contact-item">
                <a
                  href="https://1drv.ms/w/c/3c3d2b4611bce999/EaM9xd00DeFDo5hQly6mDy4BU9yTtVMh3BcVyIpdf39ZUQ?e=ZmWUoq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-cv"
                >
                  <FaEye /> <span>View CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
