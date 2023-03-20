import React from "react";
import data from "../assets/data.json";
const Skills = () => {
  return (
    <div id="skills">
      <h2>My Skills</h2>
      <section>
        {data.skills.map((i) => (
          <SkillCard logo={i.icon} name={i.name} key={i.name} />
        ))}
      </section>
    </div>
  );
};

const SkillCard = ({ logo, name }) => (
  <div>
    <img src={logo} alt={name} />
    <p>{name}</p>
  </div>
);
export default Skills;
