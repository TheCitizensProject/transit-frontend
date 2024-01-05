"use client";
import React, { useEffect, useState } from "react";
import TransitCard from "./TransitCard";

function Ferry() {
  /*
    The Ferry Module.

    This interface is responsible for displaying all ferry times by querying
    the MTA server side endpoints.
    */
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://x776xfsi68.execute-api.us-east-1.amazonaws.com/api/get-ferry-time"
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
        ? data.data.ferry_times.map((items: any) => (
            <TransitCard time={items[3]} direction={items[1]} train="ferry" />
          ))
        : ""}
    </div>
  );
}

export default Ferry;
