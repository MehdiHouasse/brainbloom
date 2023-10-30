import "./Footer.css"


import React from "react";

const Footer = () => {
  return (
    <footer className="footer indigo lighten-2 fixed-bottom">
      {" "}
      {/* Add the fixed-bottom class */}
      <p style={{ color: "#fff", padding: "5px", textAlign: "right" }}>
        &copy; 2023 BrainBloom
      </p>
    </footer>
  );
};

export default Footer;
