import whiteArrow from "../assets/white-arrow.svg";
import { StepData } from "../../types/types";

type StepProps = StepData & { isFinal?: boolean };

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
        ) : (
          <span>{label}</span>
        )}
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
