import { TiWeatherPartlySunny } from "react-icons/ti";

export default function WeatherInfo() {
  return (
    <div data-testid="weatherInfoComponent" className="mr-4 flex items-center">
      <TiWeatherPartlySunny data-testid="weatherIcon" className="w-8 h-8 mr-2" />
      <span data-testid="weatherInfo">82, Party Sunny</span>
    </div>
  );
}
