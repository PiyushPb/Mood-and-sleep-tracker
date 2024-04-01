import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../Calendar.css";
import Navbar from "./Navbar";
import Swal from "sweetalert2";

const CalendarData = () => {
  const [formData, setFormData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    // Load data from localStorage
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const getPopupData = () => {
    const selectedData = formData.find(
      (data) => data.date === selectedDate.toISOString().split("T")[0]
    );
    if (selectedData) {
      return (
        <div>
          <p>Mood: {selectedData.mood}</p>
          <p>Day: {selectedData.day}</p>
          <p>Sleep: {selectedData.sleep}</p>
        </div>
      );
    }
    return <p>No data available for this date.</p>;
  };

  const showNotification = (title, text) => {
    Swal.fire({
      title: title,
      text: text,
      icon: "info",
    });
  };

  return (
    <>
      <div className="container">
        <h1 className="font-bold text-[30px] text-center mt-6">Calendar</h1>
        <div className="calendar-container">
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            className="react-calendar mt-5"
          />
        </div>

        {selectedDate && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={() => setSelectedDate(null)}>
                &times;
              </span>
              <h2>{selectedDate.toISOString().split("T")[0]}</h2>
              {getPopupData()}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mt-5 justify-center">
          <button
            className="bg-[#7666d7] rounded-md px-4 py-2 text-white"
            onClick={() => showNotification("Hello", "How are you?")}
          >
            Hi how are you
          </button>
          <button
            className="bg-blue-400 rounded-md px-4 py-2 text-white"
            onClick={() => showNotification("Good Morning", "Its morning time")}
          >
            Morning notification
          </button>
          <button
            className="bg-orange-400 rounded-md px-4 py-2 text-white"
            onClick={() => showNotification("Hello", "Hi how are you feeling?")}
          >
            Hi how are you feeling?
          </button>
          <button
            className="bg-red-400 rounded-md px-4 py-2 text-white"
            onClick={() => showNotification("Good Night", "Its sleep time")}
          >
            Its sleep time
          </button>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default CalendarData;
