import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: false,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

const labels = ["Day 7", "Day 6", "Day 5", "Day 4", "Day 3", "Day 2", "Day 1"];

const mood_data = [];
const sleep_data = [];

export const data = {
  labels,
  datasets: [
    {
      label: "Mood",
      data: mood_data,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Sleep",
      data: sleep_data,
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const loadData = () => {
  const storedFormData = JSON.parse(localStorage.getItem("formData")) || [];

  // Get the recent seven days' data
  const recentSevenDaysData = storedFormData.slice(0, 7).reverse();

  // Populate mood_data and sleep_data arrays
  recentSevenDaysData.forEach((entry) => {
    mood_data.push(parseInt(entry.mood));
    sleep_data.push(parseInt(entry.sleep));
  });

  // Update the data object
  data.datasets[0].data = mood_data;
  data.datasets[1].data = sleep_data;
};

loadData();

const ThisWeeksData = () => {
  return (
    <div className="card flex justify-between gap-6">
      <h2 className="font-bold text-xl">This week's Data</h2>
      <div className="data">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default ThisWeeksData;
