import React, { useState, useContext } from "react";
import { formContext } from "../../Layout";

const TodaysMood = () => {
  const { isFormTaken, setIsFormTaken } = useContext(formContext);
  return (
    <div className="card bg-green-500 flex justify-between text-white">
      <p className="font-semibold ">Today's Data</p>
      {isFormTaken ? (
        <div>
          <div className="flex justify-between items-center">
            <p className="font-semibold">Sleep</p>
            <p>😴</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-semibold">Mood</p>
            <p>😃</p>
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
