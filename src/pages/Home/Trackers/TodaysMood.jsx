import React, { useState, useContext } from "react";
import { formContext } from "../../../App";

const TodaysMood = () => {
  const formdata = JSON.parse(localStorage.getItem("formData"));
  const formlength = formdata.length - 1;

  const [todaysData, setTodaysData] = useState(formdata[formlength]);

  console.log(todaysData);

  const { isFormTaken, setIsFormTaken } = useContext(formContext);
  return (
    <div className="card bg-green-500 flex justify-between text-white">
      <p className="font-semibold ">Today's Data</p>
      {isFormTaken ? (
        <div>
          <div className="flex justify-between items-center">
            <p className="font-semibold">Sleep</p>
            <p>
              {todaysData.sleep === 1
                ? "😴"
                : todaysData.sleep === 2
                ? "😀"
                : "😊"}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-semibold">Mood</p>
            <p>
              {todaysData.mood === 1
                ? "😞"
                : todaysData.mood === 2
                ? "😀"
                : "😊"}
            </p>
          </div>
        </div>
      ) : (
        <div>
          <p>Today's quiz is ready please click below to take todays quiz.</p>
        </div>
      )}
    </div>
  );
};

export default TodaysMood;
