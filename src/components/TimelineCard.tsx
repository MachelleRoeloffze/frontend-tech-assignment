import React from "react";

type TimelineCardProps = {
  image: string;
  label: string;
  direction: "up" | "down";
};

const TimelineCard: React.FC<TimelineCardProps> = ({
  image,
  label,
  direction,
}) => {
  return (
    <div className={`timeline__milestone timeline__milestone--${direction}`}>
      <div className="timeline__card">
        <div className="timeline__image">
          <img src={image} alt={label} />
        </div>

        <span className="timeline__label">{label}</span>
      </div>
    </div>
  );
};

export default TimelineCard;
