import React from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>Anurag Bhardwaj</h1>
        <p>Last Updated @ 08/03/2023</p>
        <a href="#header">
          <BsArrowUpCircleFill />
        </a>
      </div>
      <div>
        <h5>Follow Me</h5>
        <div>
          <a href="https://instagram.com/anuragbhardwaj13" target="blank">
            Instagram
          </a>
          <a href="https://linkedin.com/in/anuragbhardwaj13" target="blank">
            LinkedIn
          </a>
          <a href="https://github.com/anuragbhardwaj13" target="blank">
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
