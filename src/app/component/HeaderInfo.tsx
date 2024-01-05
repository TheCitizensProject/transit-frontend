import React from "react";

import Alert from "./Alert";
import WeatherInfo from "./WeatherInfo";

const HeaderInfo = () => {
  return (
    <div
      data-testid="headerInfo"
      className="flex justify-between my-2 py-3
      border-b border-stone-400"
    >
      <Alert />
      <div
        data-testid="divider"
        className="border-r-2 border-r-stone-500"
      ></div>
      <WeatherInfo />
    </div>
  );
};

export default HeaderInfo;
