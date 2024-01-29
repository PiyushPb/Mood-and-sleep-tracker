import React, { useEffect, useState } from "react";

const DateTimeCard = () => {
  const date = new Date();
  const months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };

  const todaysDate = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div className="card bg-blue-500 text-white">
      <h2 className="font-bold">Day</h2>
      <p className="text-[12px] text-gray-200">{months[month] + " " + year}</p>
      <p className="text-[6rem] text-center font-semibold">{todaysDate}</p>
      <p className="text-[12px] text-gray-200">Time</p>
      <p className="font-bold">{formattedTime}</p>
    </div>
  );
};

export default DateTimeCard;
