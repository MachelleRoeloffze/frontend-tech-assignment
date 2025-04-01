import TimelineCard from "./TimelineCard";
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
};

const milestones: Milestone[] = [
  { label: "Baby’s birth", direction: "up", image: baby },
  { label: "Holiday", direction: "up", image: holiday },
  { label: "New home", direction: "down", image: home },
  { label: "Emergency fund", direction: "down", image: piggy },
  { label: "Debt free", direction: "down", image: debt },
  { label: "Retire", direction: "up", image: retire },
  { label: "Philanthropy", direction: "down", image: vision },
];

const Timeline: React.FC = () => {
  return (
    <>
      <div className="timeline-wrapper">
        <div className="timeline">
          <div className="timeline__progress-bar">
            <div className="step active"></div>
            <div className="line"></div>
            <div className="step"></div>
            <div className="line"></div>
            <div className="step"></div>
            <div className="line"></div>
            <div className="step"></div>
            <div className="line dotted"></div>
            <div className="arrow"></div>
          </div>
          <span className="timeline__now">You are here</span>
          {milestones.map((item, i) => (
            <TimelineCard
              key={i}
              image={item.image}
              label={item.label}
              direction={item.direction}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Timeline;
