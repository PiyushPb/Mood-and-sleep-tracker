import React, { useState, useEffect } from "react";

const AvgTracker = () => {
  const [weekData, setWeekData] = useState([]);

  const getWeekData = () => {
    const formData = JSON.parse(localStorage.getItem("formData"));
    let n = formData.length;
    let mood = 0,
      sleep = 0;

    for (let i = n - 1; i >= Math.max(n - 7, 0); i--) {
      mood += parseInt(formData[i].mood);
      sleep += parseInt(formData[i].sleep);
    }

    setWeekData({ mood: Math.round(mood / 7), sleep: Math.round(sleep / 7) });
  };

  useEffect(() => {
    getWeekData();
  }, []);

  useEffect(() => {
    console.log("weekdata :", weekData);
  }, [weekData]); // Log weekData whenever it changes

  return (
    <div className="card bg-orange-400 text-white">
      <h1>Last 7 days average</h1>
      <div className="flex justify-between gap-5 mt-5">
        <div className="w-full text-center">
          <p className="font-semibold">Mood Avg</p>
          <p className="text-sm">{weekData.mood}</p>
        </div>
        <div className="w-full text-center">
          <p className="font-semibold">Sleep Avg</p>
          <p className="text-sm">{weekData.sleep}</p>
        </div>
      </div>
    </div>
  );
};

export default AvgTracker;
