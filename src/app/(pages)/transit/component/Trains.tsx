"use client";
import React, { useEffect, useState } from "react";
import TransitCard from "./TransitCard";

function Trains() {
  /*
    The Train Module.

    This interface is responsible for displaying all train times by querying
    the MTA server side endpoints.

        -------------------------------------------------------
        |  Station Name                                        |
        |                          |                           |
        |  F  NorthBound   2 mins  |   F  SouthBound   2 mins  |
        |  F  NorthBound   12 mins |   F  SouthBound   20 mins |
        |  F  NorthBound   23 mins |   F  SouthBound   25 mins |
        |                          |                           |
        -------------------------------------------------------
    */
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  let pageLoadCount = 0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const endpoint = serverEndpoint + "/api/get-station-time-unified/B06";
        const response = await fetch(
          "https://x776xfsi68.execute-api.us-east-1.amazonaws.com/api/get-station-time-unified/B06"
        );
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
        ? data.data.both_directions.map((items: any) => (
            <TransitCard
              train={items[0]}
              time={items[1]}
              direction={items[2]}
            />
          ))
        : ""}
    </div>
  );
}

export default Trains;
