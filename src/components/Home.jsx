import React from "react";
import { motion } from "framer-motion";
import TypewriterComponent from "typewriter-effect";
import { BsChevronDown, BsFileEarmarkFill } from "react-icons/bs";
import logo from "../assets/logo.png";
const Home = () => {
  const animations = {
    h1: {
      initial: { x: "-100%", opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
    },
    button: {
      initial: { y: "-100%", opacity: 0 },
      whileInView: { y: 0, opacity: 1 },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I'm
            <br />
            Anurag Bhardwaj
          </motion.h1>
          <TypewriterComponent
            options={{
              strings: ["A Developer", "A Graphic Designer", "A Thinker.."],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
          <div>
            <a href="https://cutt.ly/M4zuomE" target="blank">
              My Resume <BsFileEarmarkFill />
            </a>
          </div>
        </div>
      </section>
      <section>
        <img src={logo} alt="anurag" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
