import { MdCloud } from "react-icons/md";

export default function WeatherInfo() {
  return (
    <div data-testid="weatherInfoComponent" className="flex items-center">
      <MdCloud data-testid="weatherIcon" className="w-8 h-8 mr-2" />
      <span data-testid="weatherInfo">82, Party Sunny</span>
    </div>
  );
}
