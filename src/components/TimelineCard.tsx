import { TimelineCardProps, ArrowPlacement } from "../../types/types";

const TimelineCard: React.FC<TimelineCardProps> = ({
  image,
  label,
  direction,
  position,
  arrowPosition = "center",
  arrowPlacement,
  bgColor,
  arrowColor,
  labelMaxWidth,
}) => {
  const inferredPlacement: ArrowPlacement =
    arrowPlacement ?? (direction === "up" ? "bottom" : "top");

  return (
    <div
      className={`timeline__milestone timeline__milestone--${direction}`}
      style={{ left: position }}
    >
      <div
        className={`timeline__line timeline__line--${direction} timeline__line--arrow-${arrowPosition}`}
        style={{ background: arrowColor || "#3c7f90" }}
      />
      <div
        className={`
          timeline__card
          timeline__card--arrow-${arrowPosition}
          timeline__card--placement-${inferredPlacement}
        `}
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
        {label && (
          <span
            className="timeline__label"
            style={labelMaxWidth ? { maxWidth: labelMaxWidth } : undefined}
          >
            {label}
          </span>
        )}
      </div>
    </div>
  );
};

export default TimelineCard;
