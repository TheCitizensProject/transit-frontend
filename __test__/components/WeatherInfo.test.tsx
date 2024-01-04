import WeatherInfo from "@/app/component/WeatherInfo";
import "@testing-library/react";
import { render, screen } from "@testing-library/react";

describe("Weather Info Component", () => {
  it("should have an weather icon with id: weatherIcon", () => {
    render(<WeatherInfo />);

    expect(screen.getByTestId("weatherIcon")).toBeInTheDocument();
  });

  it("should have a span that displays the weather info with Id: weatherInfo", () => {
    render(<WeatherInfo />);

    const weatherInfoComponent = screen.getByTestId("weatherInfo");
    expect(weatherInfoComponent).toBeInTheDocument();
    expect(weatherInfoComponent).toHaveTextContent(/.+/);
  });
});
