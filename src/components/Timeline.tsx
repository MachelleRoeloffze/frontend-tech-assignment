import React from "react";
import TimelineCard from "./TimelineCard";
import Step from "./Step";

import baby from "../assets/family.svg";
import holiday from "../assets/holiday.svg";
import home from "../assets/home.svg";
import piggy from "../assets/piggy.svg";
import debt from "../assets/debt.svg";
import retire from "../assets/retire.svg";
import vision from "../assets/vision.svg";

type Milestone = {
  label: string;
  direction: "up" | "down";
  image: string;
  position: string;
};

const milestones: Milestone[] = [
  { label: "Baby’s birth", direction: "up", image: baby, position: "16%" },
  { label: "Holiday", direction: "up", image: holiday, position: "20%" },
  { label: "New home", direction: "down", image: home, position: "-13%" },
  { label: "Emergency fund", direction: "down", image: piggy, position: "10%" },
  { label: "Debt free", direction: "down", image: debt, position: "14%" },
  { label: "Retire", direction: "up", image: retire, position: "9%" },
  { label: "Philanthropy", direction: "down", image: vision, position: "0%" },
];

type StepData = {
  label: string;
  isActive?: boolean;
  lineAfter?: { width: string; dotted?: boolean };
};

const steps: StepData[] = [
  { label: "You are here", isActive: true, lineAfter: { width: "12%" } },
  { label: "In 1 year and 9 months", lineAfter: { width: "10%" } },
  { label: "In 3 years and 2 months", lineAfter: { width: "14%" } },
  { label: "In 4 years and 9 months", lineAfter: { width: "20%" } },
  {
    label: "In 8 years and 11 months",
    lineAfter: { width: "10%", dotted: true },
  },
  { label: "Ultimately" },
];

const Timeline: React.FC = () => {
  return (
    <div className="timeline-wrapper">
      <div className="timeline">
        <div className="timeline__progress-bar">
          {steps.map((step, index) => (
            <Step key={index} {...step} />
          ))}
        </div>

        {milestones.map((item, i) => (
          <TimelineCard
            key={i}
            image={item.image}
            label={item.label}
            direction={item.direction}
            position={item.position}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
