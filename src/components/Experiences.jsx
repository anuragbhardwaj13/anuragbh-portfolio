import React from "react";
import data from "../assets/data.json";
const Experiences = () => {
  return (
    <div id="timeline">
      <div className="timelineBox">
        {data.exp.map((item, index) => (
          <TimelineItem
            org={item.org}
            pos={item.position}
            type={item.type}
            start={item.start}
            end={item.end}
            desc={item.desc}
            index={index}
            key={item.org}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ org, pos, type, start, end, desc, index }) => (
  <div
    className={`timelineItem ${
      index % 2 === 0 ? "leftTimeline" : "rightTimeline"
    }`}
  >
    <div>
      <h2>{org}</h2>
      <div>
        <h5>{pos}</h5>
        <h5>
          {start} - {end}
        </h5>
      </div>
      <p>{type}</p>
      <p>{desc}</p>
    </div>
  </div>
);
export default Experiences;
