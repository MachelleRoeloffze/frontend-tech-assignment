import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("renders the Timeline component", () => {
    render(<App />);
    expect(screen.getByText("You are here")).toBeInTheDocument();
  });
});
