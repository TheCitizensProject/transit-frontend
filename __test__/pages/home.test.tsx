import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Landing Page", () => {
  it("should have a component with id: 'islandActivities'", () => {
    render(<Home />);

    const islandActivities = screen.getByTestId("islandActivities");

    expect(islandActivities).toBeInTheDocument();
  });

  it("should have a component with id: 'appQR'", () => {
    render(<Home />);

    const getIslandApp = screen.getByTestId("appQR");

    expect(getIslandApp).toBeInTheDocument();
  });
});
