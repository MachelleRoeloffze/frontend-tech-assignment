import React from "react";

type TimelineCardProps = {
  image: string;
  label: string;
  direction: "up" | "down";
  position: string;
  arrowPosition?: "left" | "center" | "right";
};

const TimelineCard: React.FC<TimelineCardProps> = ({
  image,
  label,
  direction,
  position,
  arrowPosition = "center",
}) => {
  return (
    <div
      className={`timeline__milestone timeline__milestone--${direction}`}
      style={{ left: position }}
    >
      <div className={`timeline__card timeline__card--arrow-${arrowPosition}`}>
        <div className="timeline__image">
          <img src={image} alt={label} />
        </div>
        <span className="timeline__label">{label}</span>
      </div>
    </div>
  );
};

export default TimelineCard;
