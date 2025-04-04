export type ArrowPosition = "left" | "center" | "right";
export type ArrowPlacement = "top" | "bottom";

export type StepData = {
  label: string;
  isActive?: boolean;
  lineAfter?: { width: string; dotted?: boolean };
};

export type Milestone = {
  label: string;
  direction: "up" | "down";
  position: string;
  image?: string;
  arrowPosition?: ArrowPosition;
  arrowPlacement?: ArrowPlacement;
  bgColor?: string;
  arrowColor?: string;
  labelMaxWidth?: string;
};

export type TimelineCardProps = Milestone;
