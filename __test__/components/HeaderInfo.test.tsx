import HeaderInfo from "@/app/component/HeaderInfo";
import "@testing-library/react";
import { render, screen } from "@testing-library/react";

describe("Header Info Component", () => {
  it("should have an alert component with ID: alertComponent", () => {
    render(<HeaderInfo />);

    const alertComponent = screen.getByTestId("alertComponent");

    expect(alertComponent).toBeInTheDocument();
  });

  it("should have a divider with ID: divider", () => {
    render(<HeaderInfo />);

    const divider = screen.getByTestId("divider");

    expect(divider).toBeInTheDocument();
  });

  it("should have an weather info component with ID: weatherInfoComponent", () => {
    render(<HeaderInfo />);

    const weatherInfoComponent = screen.getByTestId("weatherInfoComponent");

    expect(weatherInfoComponent).toBeInTheDocument();
  });
});
