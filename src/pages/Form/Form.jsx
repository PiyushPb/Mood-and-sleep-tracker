import React, { useState, useEffect, useContext } from "react";
import "../../App.css";
import sadGif from "../../assets/sad.gif";
import happyGif from "../../assets/happy.gif";
import mediumGif from "../../assets/medium.gif";
import sleepyGif from "../../assets/sleepy.gif";

import { formContext } from "../../App";

const Form = (props) => {
  const { setIsFormTaken } = useContext(formContext);

  const [mood, setMood] = useState(2);
  const [day, setDay] = useState(1);
  const [sleepMood, setSleepMood] = useState(2);
  const [currentForm, setCurrentForm] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [formData, setFormData] = useState({
    // Include date in the initial state
    date: getCurrentDate(),
    mood: "",
    day: "",
    sleep: "",
  });

  const handleMoodChange = (e) => {
    setMood(Number(e.target.value));
  };

  const handleSleepChange = (e) => {
    setSleepMood(Number(e.target.value));
  };

  const handleDayChange = (e) => {
    const selectedValue = Number(e.target.value);
    setDay(selectedValue);
  };

  const handleNextQuestion = (e) => {
    e.preventDefault();
    setCurrentForm((prevForm) => prevForm + 1);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
      mood: mood.toString(),
      day: day.toString(),
      sleep: sleepMood.toString(),
    };
    let storedFormData = JSON.parse(localStorage.getItem("formData"));

    if (!Array.isArray(storedFormData)) {
      storedFormData = [];
    }

    storedFormData.push(updatedFormData);
    localStorage.setItem("formData", JSON.stringify(storedFormData));

    setFormSubmitted(true);
  };

  useEffect(() => {
    if (formSubmitted) {
      setIsFormTaken(true);
      props.setShowForm(false);
    }
  }, [formSubmitted, setIsFormTaken, props.setShowForm]);

  const renderCurrentForm = () => {
    switch (currentForm) {
      case 1:
        return (
          <form
            action=""
            className=" flex flex-col justify-between h-full mt-10"
          >
            <div>
              <p className="font-semibold text-[26px]">How is your mood?</p>
              <p className="text-[14px]">
                On a scale of 1 - 3 how are you feeling today?
              </p>
            </div>
            <div>
              <div className="flex justify-between py-7">
                <img src={sadGif} alt="" className="w-[70px]" title="sad" />
                <img
                  src={mediumGif}
                  alt=""
                  className="w-[70px]"
                  title="medium"
                />
                <img src={happyGif} alt="" className="w-[70px]" title="happy" />
              </div>
              <input
                type="range"
                min="1"
                max="3"
                value={mood}
                onChange={handleMoodChange}
                className="mood_slider"
              />
            </div>
            <button
              className="w-full py-4 px-5 bg-[#7666d7] text-white rounded-full"
              onClick={handleNextQuestion}
            >
              Next question
            </button>
          </form>
        );

      case 2:
        return (
          <form
            action=""
            className=" flex flex-col justify-between h-full mt-10"
          >
            <div>
              <p className="font-semibold text-[26px]">How was your day?</p>
              <p className="text-[14px]">
                Did you experience anything out of the ordinary today?
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex gap-2">
                <input
                  type="radio"
                  value={1}
                  id="incredible"
                  name="mood_data"
                  className="hidden-radio"
                  onClick={handleDayChange}
                />
                <label htmlFor="incredible" className="checkbox-label">
                  Incredible 😇
                </label>
              </div>
              <div className="flex gap-2">
                <input
                  type="radio"
                  value={2}
                  id="great"
                  name="mood_data"
                  className="hidden-radio"
                  onClick={handleDayChange}
                />
                <label htmlFor="great" className="checkbox-label">
                  Great 😃
                </label>
              </div>
              <div className="flex gap-2">
                <input
                  type="radio"
                  value={3}
                  id="good"
                  name="mood_data"
                  className="hidden-radio"
                  onClick={handleDayChange}
                />
                <label htmlFor="good" className="checkbox-label">
                  Good 😊
                </label>
              </div>
              <div className="flex gap-2">
                <input
                  type="radio"
                  value={4}
                  id="okay"
                  name="mood_data"
                  className="hidden-radio"
                  onClick={handleDayChange}
                />
                <label htmlFor="okay" className="checkbox-label">
                  Okay 😐
                </label>
              </div>
              <div className="flex gap-2">
                <input
                  type="radio"
                  value={5}
                  id="reallybad"
                  name="mood_data"
                  className="hidden-radio"
                  onClick={handleDayChange}
                />
                <label htmlFor="reallybad" className="checkbox-label">
                  Really bad 😔
                </label>
              </div>
            </div>

            <button
              className="w-full py-4 px-5 bg-[#7666d7] text-white rounded-full"
              onClick={handleNextQuestion}
            >
              Next question
            </button>
          </form>
        );
      case 3:
        return (
          <form
            action=""
            className="flex flex-col justify-between h-full mt-10"
          >
            <div>
              <p className="font-semibold text-[26px]">How was your sleep😴?</p>
              <p className="text-[14px]">
                On a scale of 1 - 3 how are you feeling today?
              </p>
            </div>
            <div>
              <div className="flex justify-between py-7">
                <img src={sleepyGif} alt="" className="w-[70px]" title="sad" />
                <img
                  src={mediumGif}
                  alt=""
                  className="w-[70px]"
                  title="medium"
                />
                <img src={happyGif} alt="" className="w-[70px]" title="happy" />
              </div>
              {/* Use the sleepMood state for the value of the slider */}
              <input
                type="range"
                min="1"
                max="3"
                value={sleepMood}
                onChange={handleSleepChange}
                className="mood_slider"
              />
            </div>
            <button
              className="w-full py-4 px-5 bg-[#7666d7] text-white rounded-full"
              onClick={submitForm}
            >
              End quiz
            </button>
          </form>
        );
    }
  };

  return (
    <div>
      <div className="h-[65vh]">
        <div className="progress mt-3">
          <p className="">Question {currentForm} / 3</p>
          <progress
            value={currentForm}
            max="3"
            className="progress_bar"
          ></progress>
        </div>
        {renderCurrentForm()}
      </div>
    </div>
  );
};

export default Form;
