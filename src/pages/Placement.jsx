import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const CompensationChart = ({ highest, average }) => {
  const data = {
    labels: ['BTech (CSE)', 'BTech (ECE)', 'MTech (CSE/ECE)'],
    datasets: [
      {
        label: 'Highest CTC (LPA)',
        data: highest,
        backgroundColor: 'rgba(37, 99, 235, 0.85)', // accent
        borderRadius: 6,
      },
      {
        label: 'Average CTC (LPA)',
        data: average,
        backgroundColor: 'rgba(27, 58, 107, 0.85)', // primary
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
        font: { size: 10 },
      },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return <Bar data={data} options={options} />;
};

const PlacementPercentChart = ({ dataPercent }) => {
  const data = {
    labels: ['BTech (CSE)', 'BTech (ECE)', 'MTech (CSE/ECE)'],
    datasets: [
      {
        label: 'Placement %',
        data: dataPercent,
        backgroundColor: 'rgba(220, 38, 38, 0.85)', // brand-red
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      datalabels: {
        anchor: 'end',
        align: 'end',
        formatter: (v) => v + '%',
      },
    },
    scales: {
      y: { beginAtZero: true, max: 100 },
    },
  };

  return <Bar data={data} options={options} />;
};

const Placement = () => {
  const yearsData = [
    {
      year: '2022-23',
      compHighest: [53, 53, 18],
      compAverage: [19, 16, 18],
      placementPercent: [75.21, 68.75, 55],
    },
    {
      year: '2023-24',
      compHighest: [43, 21, 17.89],
      compAverage: [13.25, 11.84, 16.44],
      placementPercent: [75.14, 74.4, 88.9],
    },
    {
      year: '2024-25',
      compHighest: [45, 28.99, 22],
      compAverage: [17.12, 14.8, 18.5],
      placementPercent: [75.7, 45.09, 72.73],
    },
    {
      year: '2025-26',
      // Note: 2025-26 has 4 values in original HTML, adding a custom label or mapping them to first 3 for simplicity, but let's keep array length 4
      compHighest: [45, 45, 13, 5.6],
      compAverage: [18.38, 21.56, 9.4, 5.6],
      placementPercent: [71.88, 57.58, 60.00, 33.33],
      labels: ['BTech (CSE)', 'BTech (ECE)', 'MTech (CSE)', 'MTech (ECE)'], // Guessing the 4 labels based on data length
    },
  ];

  return (
    <main className="bg-bg min-h-screen py-12">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-serif text-primary mb-4">Placement Statistics</h1>
          <p className="text-text max-w-2xl mx-auto">
            Explore our comprehensive placement records over the years, showcasing the success of our students and the trust of our recruiters.
          </p>
        </div>

        {yearsData.map((data, index) => (
          <div key={index} className="bg-white rounded-xl shadow border border-gray-200 p-8 mb-10 hover:shadow-md transition">
            <h2 className="text-2xl font-bold text-accent font-serif mb-8 border-b pb-4 text-center">Academic Year {data.year}</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-lg font-semibold text-center mb-4 text-text">Compensation (LPA)</h3>
                <div className="h-80 w-full">
                  <CompensationChart highest={data.compHighest} average={data.compAverage} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-center mb-4 text-text">Placement Percentage</h3>
                <div className="h-80 w-full">
                  <PlacementPercentChart dataPercent={data.placementPercent} />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* 2025-26 Highlights Section */}
        <div className="bg-surface rounded-xl shadow border border-gray-200 p-8">
          <h2 className="text-3xl font-bold font-serif text-center text-primary mb-6">2025-26 Placement Highlights</h2>
          
          <div className="bg-white p-6 rounded-lg mb-8 shadow-sm border border-gray-100">
            <ul className="list-disc list-inside space-y-2 text-lg text-text font-medium">
              <li>Around 75+ recruiters participated.</li>
              <li>Hiring process is still ongoing.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-accent font-serif mb-4 flex items-center gap-2">
              <i className="fas fa-star text-brand-red"></i> Major Recruiters
            </h3>
            <div className="grid md:grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <ul className="space-y-3">
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-accent"></i> Amazon</li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-accent"></i> Walmart</li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-accent"></i> Abacus Insights</li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-accent"></i> ThoughtSpot</li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-accent"></i> ION Group</li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-accent"></i> Salesforce</li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-accent"></i> Tarana Wireless</li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-accent"></i> IBM</li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-accent"></i> Deloitte</li>
                <li className="flex items-center gap-2"><i className="fas fa-check-circle text-accent"></i> GoDaddy</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Placement;
