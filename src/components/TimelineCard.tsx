import React from "react";

type ArrowPosition = "left" | "center" | "right";

type TimelineCardProps = {
  image?: string;
  label: string;
  direction: "up" | "down";
  position: string;
  arrowPosition?: ArrowPosition;
  bgColor?: string;
  arrowColor?: string;
};

const TimelineCard: React.FC<TimelineCardProps> = ({
  image,
  label,
  direction,
  position,
  arrowPosition = "center",
  bgColor,
  arrowColor,
}) => {
  return (
    <div
      className={`timeline__milestone timeline__milestone--${direction}`}
      style={{ left: position }}
    >
      <div
        className={`timeline__card timeline__card--arrow-${arrowPosition}`}
        style={{
          backgroundColor: bgColor,
          ["--arrow-color" as any]: arrowColor,
        }}
      >
        {image && (
          <div className="timeline__image">
            <img src={image} alt={label} />
          </div>
        )}
        <span className="timeline__label">{label}</span>
      </div>
    </div>
  );
};

export default TimelineCard;
