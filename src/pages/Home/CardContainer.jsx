import React from "react";
import DateTimeCard from "./Trackers/DateTimeCard";
import ThisWeeksData from "./Trackers/ThisWeeksData";
import TakeQuiz from "./Trackers/TakeQuiz";
import TodaysMood from "./Trackers/TodaysMood";
import AvgTracker from "./Trackers/AvgTracker";

const CardContainer = (props) => {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-2 gap-5">
        <DateTimeCard />
        <TodaysMood />
      </div>
      <div className="flex flex-col gap-5 mt-5">
        <ThisWeeksData />
      </div>
      <div className="flex flex-col gap-5 mt-5">
        <AvgTracker />
      </div>
      <TakeQuiz setShowForm={props.setShowForm} />
    </div>
  );
};

export default CardContainer;
