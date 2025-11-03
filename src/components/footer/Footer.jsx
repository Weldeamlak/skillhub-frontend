// Footer.jsx
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <h3>SkillHub</h3>
          <p>
            Ethiopian online learning marketplace for students and instructors.
          </p>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h4>Legal</h4>
          <ul>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div>
          <h4>Ethiopia</h4>
          <p>Empowering African learners 🇪🇹</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 SkillHub. All rights reserved.</p>
        <span>Made for Ethiopian learners</span>
      </div>
    </footer>
  );
};

export default Footer;
