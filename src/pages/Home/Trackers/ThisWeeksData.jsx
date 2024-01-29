import React from "react";
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

const labels = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"];

export const data = {
  labels,
  datasets: [
    {
      label: "Mood",
      data: [1, 2, 1, 3, 2, 1],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Sleep",
      data: [1, 2, 3, 3, 2, 1.2],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

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
