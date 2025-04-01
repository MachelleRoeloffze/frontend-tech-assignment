import React from "react";

type StepProps = {
  label: string;
  isActive?: boolean;
  lineAfter?: { width: string; dotted?: boolean };
};

const Step: React.FC<StepProps> = ({ label, isActive = false, lineAfter }) => {
  return (
    <>
      <div className={`step ${isActive ? "active" : ""}`}>
        <span>{label}</span>
      </div>
      {lineAfter && (
        <div
          className={`line ${lineAfter.dotted ? "dotted" : ""}`}
          style={{ width: lineAfter.width }}
        />
      )}
    </>
  );
};

export default Step;
