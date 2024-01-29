import React, { useState, useContext } from "react";
import { TiArrowForward } from "react-icons/ti";
import { formContext } from "../../Layout";

const TakeQuiz = (props) => {
  const { isFormTaken, setIsFormTaken } = useContext(formContext);
  const handleClick = () => {
    props.setShowForm(true);
  };
  return (
    <>
      {isFormTaken ? (
        <div className="card mt-5 bg-gray-600 text-white cursor-not-allowed">
          <h2 className="font-semibold text-xl">Daily Quiz</h2>
          <p className="text-[12px] text-gray-200">
            The quiz has been taken and will now unlock on the next day.
          </p>
          <div className="flex  justify-between items-center mt-5">
            <p className="font-semibold">
              Today's quiz is allready been taken!
            </p>
          </div>
        </div>
      ) : (
        <div
          className="card mt-5 bg-[#7666d7] text-white cursor-pointer"
          onClick={handleClick}
        >
          <h2 className="font-semibold text-xl">Daily Quiz</h2>
          <p className="text-[12px] text-gray-200">
            Take your daily quiz to keep track of your progress.
          </p>
          <div className="flex  justify-between items-center mt-5">
            <p className="font-semibold">Take Quiz Now</p>
            <TiArrowForward className="text-[20px]" />
          </div>
        </div>
      )}
    </>
  );
};

export default TakeQuiz;
