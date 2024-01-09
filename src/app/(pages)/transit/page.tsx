"use client";

import React from "react";
import Header from "./component/Header";
import Ferry from "./component/Ferry";
import Trains from "./component/Trains";
import Tram from "./component/Tram";

const Page = () => {
  return (
    <div className="mx-4 mt-10">
      <Header />
      <Ferry />
      <Trains />
      <Tram />
    </div>
  );
};

export default Page;
