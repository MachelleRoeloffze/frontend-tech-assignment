import whiteArrow from "../assets/white-arrow.svg";

type StepProps = {
  label: string;
  isActive?: boolean;
  isFinal?: boolean;
  lineAfter?: { width: string; dotted?: boolean };
};

const Step: React.FC<StepProps> = ({
  label,
  isActive = false,
  isFinal = false,
  lineAfter,
}) => {
  return (
    <>
      <div
        className={`step ${isActive ? "active" : ""} ${isFinal ? "final" : ""}`}
      >
        {isFinal ? (
          <img
            className="arrow"
            src={whiteArrow}
            alt="arrow"
            width={16}
            height={16}
          />
        ) : null}
        {!isFinal && <span>{label}</span>}
      </div>

      {lineAfter && (
        <div
          data-testid="step-line"
          className={`line ${lineAfter.dotted ? "dotted" : ""}`}
          style={{ width: lineAfter.width }}
        />
      )}
    </>
  );
};

export default Step;
