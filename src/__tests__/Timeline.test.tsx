import { render, screen } from "@testing-library/react";
import Timeline from "../components/Timeline";

describe("Timeline", () => {
  test("renders all visible step labels (excluding final label)", () => {
    render(<Timeline />);

    const stepLabels = [
      "You are here",
      "In 1 year and 9 months",
      "In 3 years and 2 months",
      "In 4 years and 9 months",
      "In 8 years and 11 months",
    ];

    stepLabels.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  test("renders all milestone labels", () => {
    render(<Timeline />);

    const milestoneLabels = [
      "Baby’s birth",
      "Holiday",
      "New home",
      "Emergency fund",
      "Debt free",
      "Retire",
      "Make a contribution to my community through philanthropy",
    ];

    milestoneLabels.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  test("renders active step correctly", () => {
    render(<Timeline />);
    const activeStep = screen.getByText("You are here").parentElement;
    expect(activeStep?.className).toMatch(/active/);
  });

  test("renders final step with arrow", () => {
    render(<Timeline />);
    const finalStepArrow = screen.getByAltText("arrow");
    expect(finalStepArrow).toBeInTheDocument();
  });
});
