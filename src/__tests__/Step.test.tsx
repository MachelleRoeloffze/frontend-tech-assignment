import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Step from "../components/Step";

describe("Step component", () => {
  test("renders label when not final", () => {
    render(<Step label="Step 1" />);
    expect(screen.getByText("Step 1")).toBeInTheDocument();
  });

  test("does not render label when final", () => {
    render(<Step label="Final Step" isFinal />);
    expect(screen.queryByText("Final Step")).not.toBeInTheDocument();
  });

  test("renders arrow image when final", () => {
    render(<Step label="Final Step" isFinal />);
    const arrow = screen.getByAltText("arrow") as HTMLImageElement;
    expect(arrow).toBeInTheDocument();
    expect(arrow.src).toContain("white-arrow.svg");
    expect(arrow.width).toBe(16);
    expect(arrow.height).toBe(16);
  });

  test("has 'active' class when isActive is true", () => {
    render(<Step label="Active Step" isActive />);
    const stepElement = screen.getByText("Active Step").parentElement;
    expect(stepElement?.className).toMatch(/active/);
  });

  test("has 'final' class when isFinal is true", () => {
    render(<Step label="Final Step" isFinal />);
    const stepElement = screen.getByAltText("arrow").parentElement;
    expect(stepElement?.className).toMatch(/final/);
  });

  test("renders line with correct width", () => {
    render(<Step label="Step" lineAfter={{ width: "100px" }} />);
    const line = screen.getByTestId("step-line");
    expect(line).toHaveStyle("width: 100px");
  });

  test("renders dotted line when lineAfter.dotted is true", () => {
    render(<Step label="Step" lineAfter={{ width: "80px", dotted: true }} />);
    const line = screen.getByTestId("step-line");
    expect(line.className).toMatch(/dotted/);
  });
});
