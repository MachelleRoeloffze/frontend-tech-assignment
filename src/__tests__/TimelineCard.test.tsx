import { render, screen } from "@testing-library/react";
import TimelineCard from "../components/TimelineCard";

const baseProps: {
  label: string;
  direction: "up" | "down";
  position: string;
} = {
  label: "Test Label",
  direction: "up",
  position: "100px",
};

describe("TimelineCard", () => {
  test("renders label", () => {
    render(<TimelineCard {...baseProps} />);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  test("renders image if provided", () => {
    render(
      <TimelineCard
        {...baseProps}
        image="test-image.svg"
      />
    );

    const img = screen.getByAltText("Test Label") as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain("test-image.svg");
  });

  test("sets correct direction and inferred arrow placement", () => {
    render(<TimelineCard {...baseProps} />);
    
    const milestone = screen.getByText("Test Label").closest(".timeline__milestone");
    const line = milestone?.querySelector(".timeline__line");
    const card = milestone?.querySelector(".timeline__card");

    expect(milestone?.className).toContain("timeline__milestone--up");
    expect(line?.className).toContain("timeline__line--up");
    expect(line?.className).toContain("timeline__line--arrow-center");
    expect(card?.className).toContain("timeline__card--placement-bottom");
  });

  test("respects passed arrowPosition and arrowPlacement", () => {
    render(
      <TimelineCard
        {...baseProps}
        arrowPosition="right"
        arrowPlacement="top"
      />
    );

    const card = screen.getByText("Test Label").closest(".timeline__card");
    const line = card?.parentElement?.querySelector(".timeline__line");

    expect(card?.className).toContain("timeline__card--arrow-right");
    expect(card?.className).toContain("timeline__card--placement-top");
    expect(line?.className).toContain("timeline__line--arrow-right");
  });

  test("applies background color and arrow color", () => {
    render(
      <TimelineCard
        {...baseProps}
        bgColor="#3c7f90"
        arrowColor="#3c7f90"
      />
    );

    const card = screen.getByText("Test Label").closest(".timeline__card");
    const line = card?.parentElement?.querySelector(".timeline__line");

    expect(card).toHaveStyle("background-color: #3c7f90");
    expect(line).toHaveStyle("background: #3c7f90");
  });

  test("applies label max width if provided", () => {
    render(
      <TimelineCard
        {...baseProps}
        labelMaxWidth="80px"
      />
    );

    const label = screen.getByText("Test Label");
    expect(label).toHaveStyle("max-width: 80px");
  });
});
