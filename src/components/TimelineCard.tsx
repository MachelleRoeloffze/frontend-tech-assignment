import React from "react";

type TimelineCardProps = {
    icon: string;
    label: string;
    time: string;
    direction: "up" | "down";
};

const TimelineCard: React.FC<TimelineCardProps> = ({ icon, label, time, direction }) => {
    return (
        <div className={`timeline__milestone timeline__milestone--${direction}`}>
            <div className="timeline__card">
                <span className="timeline__icon">{icon}</span>
                <span className="timeline__label">{label}</span>
                <span className="timeline__time">{time}</span>
            </div>
        </div>
    );
};

export default TimelineCard;
