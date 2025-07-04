import React from "react";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      {" "}
      {/* Added role for accessibility */}
      <p>
        &copy; {new Date().getFullYear()} Tushar Kalathiya. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
