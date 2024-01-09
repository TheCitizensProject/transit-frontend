"use client";

import React, { useEffect, useState } from "react";
import TransitCard from "./TransitCard";

function Tram() {
  /*
    The Train Module.

    This interface is responsible for displaying all tram times by querying
    the server side endpoints.

    */
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  let pageLoadCount = 0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://x776xfsi68.execute-api.us-east-1.amazonaws.com/api/get-tram-time");
        if (!response.ok) {
          throw new Error();
        }
        const responseData = await response.json();
        setData(responseData);
        setError("");
      } catch (error) {
        setError("An error occurred while fetching data");
        setData(null);
      }
    };

    const min = 60;
    const refreshWindow = (1 / 2) * min;
    const interval = refreshWindow * 1000; //1000 is the constant
    const intervalId = setInterval(fetchData, interval);

    fetchData();

    // Cleanup to clear interval when component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      {error ? <p>Error: {error}</p> : ""}
      {data
        ? data.data.tram_times.map((items: any, index: number) => (
            <TransitCard key={index} time={items[1]} direction={items[0]} train="tram" />
          ))
        : null}
    </div>
  );
}

export default Tram;
