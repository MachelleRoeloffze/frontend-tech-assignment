
import TimelineCard from "./TimelineCard";

type Milestone = {
    label: string;
    time: string;
    direction: "up" | "down";
    icon: string;
};

const milestones: Milestone[] = [
    {
        label: "Baby’s birth",
        time: "In 1 year and 9 months",
        direction: "up",
        icon: "👶",
    },
    {
        label: "Holiday",
        time: "In 3 years and 2 months",
        direction: "up",
        icon: "🏖️",
    },
    {
        label: "New home",
        time: "In 1 year and 9 months",
        direction: "down",
        icon: "🏡",
    },
    {
        label: "Emergency fund",
        time: "In 4 years and 9 months",
        direction: "down",
        icon: "🐷",
    },
    {
        label: "Debt free",
        time: "In 8 years and 11 months",
        direction: "down",
        icon: "💸",
    },
    {
        label: "Retire",
        time: "In 8 years and 11 months",
        direction: "up",
        icon: "🪑",
    },
    { label: "Philanthropy", time: "Ultimately", direction: "down", icon: "🏔️" },
];

const Timeline: React.FC = () => {
    return (<>

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
                    icon={item.icon}
                    label={item.label}
                    time={item.time}
                    direction={item.direction}
                />
            ))}
        </div>
    </>
    );
};

export default Timeline;

