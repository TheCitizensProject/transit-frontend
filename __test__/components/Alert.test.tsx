import Alert from "@/app/component/Alert";
import "@testing-library/react";
import { render, screen } from "@testing-library/react";

describe("Alert Component", () => {
  it("should have an alert icon with id: alertIcon", () => {
    render(<Alert />);

    expect(screen.getByTestId("alertIcon")).toBeInTheDocument();
  });

  it("should have a div that displays the number of alerts with Id: numberOfAlerts", () => {
    render(<Alert />);

    expect(screen.getByTestId("numberOfAlerts")).toBeInTheDocument();
  });
  it("should have the span that display number of alerts to have a class: number-of-alerts", () => {
    render(<Alert />);

    expect(screen.getByTestId("numberOfAlerts")).toBeInTheDocument();
  });

  it("should have a text: RIOC Alerts", () => {
    render(<Alert />);

    expect(screen.getByText("RIOC Alerts")).toBeInTheDocument();
  });
});
