import React from "react";

const Header = () => {
  return (
    <nav>
      <NavContent />
    </nav>
  );
};

const NavContent = () => (
  <>
    <h2 id="header">Anurag Bhardwaj</h2>
    <div>
      <a href="#home">Home</a>
      <a href="#skills">Skills</a>
      <a href="#timeline">Experiences</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
    <a href="mailto:a4anurag13@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
