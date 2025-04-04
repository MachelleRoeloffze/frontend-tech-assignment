import TimelineCard from "./TimelineCard";
import Step from "./Step";

import vision from "../assets/vision.svg";
import baby from "../assets/family.svg";
import holiday from "../assets/holiday.svg";
import home from "../assets/home.svg";
import piggy from "../assets/piggy.svg";
import debt from "../assets/debt.svg";
import retire from "../assets/retire.svg";

type ArrowPosition = "left" | "center" | "right";

type Milestone = {
  label: string;
  direction: "up" | "down";
  position: string;
  image?: string;
  arrowPosition?: ArrowPosition;
  arrowPlacement?: "top" | "bottom";
  bgColor?: string;
  arrowColor?: string;
  labelMaxWidth?: string;
};

const milestones: Milestone[] = [
  {
    label: "Baby’s birth",
    direction: "up",
    arrowPlacement: "bottom",
    image: baby,
    position: "85px",
  },
  {
    label: "Holiday",
    direction: "up",
    arrowPlacement: "bottom",
    image: holiday,
    position: "69px",
  },
  {
    label: "New home",
    direction: "down",
    image: home,
    position: "-277px",
  },
  {
    label: "Emergency fund",
    direction: "down",
    image: piggy,
    position: "3px",
    labelMaxWidth: "80px",
  },
  {
    label: "Debt free",
    direction: "down",
    image: debt,
    position: "112px",
  },
  {
    label: "Retire",
    direction: "up",
    arrowPlacement: "bottom",
    image: retire,
    position: "9%",
  },
  {
    label: "Make a contribution to my community through philanthropy",
    direction: "down",
    image: vision,
    position: "-38px",
    arrowPosition: "right",
    arrowColor: "#3c7f90",
    bgColor: "#3c7f90",
    labelMaxWidth: "93px",
  },
];

type StepData = {
  label: string;
  isActive?: boolean;
  lineAfter?: { width: string; dotted?: boolean };
};

const steps: StepData[] = [
  { label: "You are here", isActive: true, lineAfter: { width: "0px" } },
  { label: "In 1 year and 9 months", lineAfter: { width: "72px" } },
  { label: "In 3 years and 2 months", lineAfter: { width: "202px" } },
  { label: "In 4 years and 9 months", lineAfter: { width: "197px" } },
  {
    label: "In 8 years and 11 months",
    lineAfter: { width: "173px", dotted: true },
  },
  { label: "Ultimately" },
];

const Timeline: React.FC = () => {
  const currentStep = 0; 

  return (
    <div className="timeline-wrapper">
      <div className="timeline">
        <div className="timeline__progress-bar">
          {steps.map((step, index) => (
            <Step
              key={index}
              label={step.label}
              isActive={index === currentStep}
              isFinal={index === steps.length - 1}
              lineAfter={step.lineAfter}
            />
          ))}
        </div>

        {milestones.map((milestone, index) => (
          <TimelineCard key={index} {...milestone} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
