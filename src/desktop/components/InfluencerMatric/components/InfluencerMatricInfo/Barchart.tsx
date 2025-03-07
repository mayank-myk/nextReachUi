import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  // Data for the chart
  const data = {
    labels: ["January", "February", "March", "April", "May"], // Labels on the x-axis
    datasets: [
      {
        label: "Sales in 2023",
        data: [30, 50, 70, 90, 100], // Corresponding data points for each label
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Color of the bars
        borderColor: "rgba(75, 192, 192, 1)", // Border color of the bars
        borderWidth: 1, // Width of the border
      },
    ],
  };

  // Options for the chart (optional but useful)
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Monthly Sales Data (2023)",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `Sales: $${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        title: {
          display: true,
          text: "Sales ($)",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Bar Chart Example</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
