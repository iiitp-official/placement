import React from "react";
import PageHeader from "../components/shared/PageHeader";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  IndianRupee,
  TrendingUp,
  Briefcase,
  BarChart3,
  Lightbulb,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels,
);

const chartDpr =
  typeof window !== "undefined"
    ? Math.min(3, Math.max(2, window.devicePixelRatio || 2))
    : 2;

const chartTheme = {
  axis: "#1B3A6B",
  axisMuted: "#334155",
  grid: "rgba(27, 58, 107, 0.14)",
  highest: "#2563EB",
  highestBorder: "#2563EB",
  average: "#1B3A6B",
  averageBorder: "#1B3A6B",
  placement: "#DC2626",
  placementBorder: "#DC2626",
  tooltipBg: "#1B3A6B",
  tooltipText: "#F8FAFC",
};

const AnimatedCount = ({
  value,
  duration = 1200,
  decimals = 0,
  prefix = "",
  suffix = "",
}) => {
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    let frameId;
    const start = performance.now();
    const target = Number(value) || 0;

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(target * easedProgress);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [value, duration]);

  const formatted = displayValue.toLocaleString("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <>
      {prefix}
      {formatted}
      {suffix}
    </>
  );
};

const CompensationChart = ({ labels, highest, average }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Highest CTC (LPA)",
        data: highest,
        backgroundColor: chartTheme.highest,
        borderColor: chartTheme.highestBorder,
        borderWidth: 1.25,
        borderSkipped: false,
        borderRadius: 8,
        maxBarThickness: 40,
        barPercentage: 0.62,
        categoryPercentage: 0.66,
      },
      {
        label: "Average CTC (LPA)",
        data: average,
        backgroundColor: chartTheme.average,
        borderColor: chartTheme.averageBorder,
        borderWidth: 1.25,
        borderSkipped: false,
        borderRadius: 8,
        maxBarThickness: 40,
        barPercentage: 0.62,
        categoryPercentage: 0.66,
      },
    ],
  };

  const options = {
    devicePixelRatio: chartDpr,
    responsive: true,
    maintainAspectRatio: false,
    layout: { padding: { top: 8, right: 6, left: 6 } },
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: chartTheme.axis,
          boxWidth: 14,
          boxHeight: 14,
          usePointStyle: true,
          pointStyle: "rectRounded",
        },
      },
      tooltip: {
        backgroundColor: chartTheme.tooltipBg,
        titleColor: chartTheme.tooltipText,
        bodyColor: chartTheme.tooltipText,
        borderColor: "rgba(96, 165, 250, 0.35)",
        borderWidth: 1,
        callbacks: {
          label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.y} LPA`,
        },
      },
      datalabels: {
        anchor: "end",
        align: "end",
        offset: 2,
        color: chartTheme.axis,
        font: { size: 10, weight: "600" },
        formatter: (value) => value,
        clamp: true,
      },
    },
    scales: {
      x: {
        ticks: {
          color: chartTheme.axisMuted,
          maxRotation: 0,
          minRotation: 0,
          autoSkip: false,
          font: { size: 11 },
        },
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        grace: "10%",
        ticks: { color: chartTheme.axisMuted, font: { size: 11 } },
        grid: { color: chartTheme.grid },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

const PlacementPercentChart = ({ labels, dataPercent }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Placement %",
        data: dataPercent,
        backgroundColor: chartTheme.placement,
        borderColor: chartTheme.placementBorder,
        borderWidth: 1.25,
        borderSkipped: false,
        borderRadius: 8,
        maxBarThickness: 48,
        barPercentage: 0.62,
        categoryPercentage: 0.66,
      },
    ],
  };

  const options = {
    devicePixelRatio: chartDpr,
    responsive: true,
    maintainAspectRatio: false,
    layout: { padding: { top: 8, right: 6, left: 6 } },
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: chartTheme.axis,
          boxWidth: 14,
          boxHeight: 14,
          usePointStyle: true,
          pointStyle: "rectRounded",
        },
      },
      tooltip: {
        backgroundColor: chartTheme.tooltipBg,
        titleColor: chartTheme.tooltipText,
        bodyColor: chartTheme.tooltipText,
        borderColor: "rgba(248, 113, 113, 0.35)",
        borderWidth: 1,
        callbacks: {
          label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.y}%`,
        },
      },
      datalabels: {
        anchor: "end",
        align: "end",
        offset: 2,
        color: chartTheme.axis,
        font: { size: 10, weight: "600" },
        formatter: (v) => v + "%",
        clamp: true,
      },
    },
    scales: {
      x: {
        ticks: {
          color: chartTheme.axisMuted,
          maxRotation: 0,
          minRotation: 0,
          autoSkip: false,
          font: { size: 11 },
        },
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        max: 100,
        ticks: { color: chartTheme.axisMuted, font: { size: 11 } },
        grid: { color: chartTheme.grid },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

const Placement = () => {
  const [openYear, setOpenYear] = React.useState("2025-26");

  const yearsData = [
    {
      year: "2025-26",
      compHighest: [45, 45, 13, 5.6],
      compAverage: [18.38, 21.56, 9.4, 5.6],
      placementPercent: [71.88, 57.58, 60.0, 33.33],
      labels: ["BTech (CSE)", "BTech (ECE)", "MTech (CSE)", "MTech (ECE)"],
    },
    {
      year: "2024-25",
      compHighest: [45, 28.99, 22],
      compAverage: [17.12, 14.8, 18.5],
      placementPercent: [75.7, 45.09, 72.73],
      labels: ["BTech (CSE)", "BTech (ECE)", "MTech (CSE/ECE)"],
    },
    {
      year: "2023-24",
      compHighest: [43, 21, 17.89],
      compAverage: [13.25, 11.84, 16.44],
      placementPercent: [75.14, 74.4, 88.9],
      labels: ["BTech (CSE)", "BTech (ECE)", "MTech (CSE/ECE)"],
    },
    {
      year: "2022-23",
      compHighest: [53, 53, 18],
      compAverage: [19, 16, 18],
      placementPercent: [75.21, 68.75, 55],
      labels: ["BTech (CSE)", "BTech (ECE)", "MTech (CSE/ECE)"],
    },
    
    
    
  ];

  const currentCycle = yearsData[0];
  const keyHighlights = [
    {
      label: "Highest CTC",
      value: 45,
      prefix: "₹",
      suffix: " LPA",
      decimals: 0,
      icon: IndianRupee,
      iconClass: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-300",
    },
    {
      label: "Average CTC",
      value: 17.85,
      prefix: "₹",
      suffix: " LPA",
      decimals: 2,
      icon: BarChart3,
      iconClass: "bg-blue-100 text-accent dark:bg-blue-900/30 dark:text-blue-300",
    },
    {
      label: "Median CTC",
      value: 14.45,
      prefix: "₹",
      suffix: " LPA",
      decimals: 2,
      icon: Lightbulb,
      iconClass: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-300",
    },
    {
      label: "Total Offers",
      value: 145,
      suffix: "+",
      decimals: 0,
      icon: Briefcase,
      iconClass: "bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-300",
    },
    {
      label: "Placement %",
      value: 71,
      suffix: "%",
      decimals: 0,
      icon: TrendingUp,
      iconClass: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-300",
    },
  ];

  return (
    <main className="min-h-screen">
      <PageHeader
        title="Placement Statistics"
        subtitle="Explore our comprehensive placement records over the years, showcasing the success of our students and the trust of our recruiters."
      />
      <div className="bg-bg dark:bg-bg-dark bg-grid-pattern min-h-screen py-12 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-center text-xl md:text-2xl font-bold font-serif text-primary dark:text-white mb-4">
              Key Highlights
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              {keyHighlights.map(({ label, value, icon: Icon, iconClass, prefix, suffix, decimals }) => (
                <div key={label} className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-surface-dark/95 p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${iconClass}`}>
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-xl font-bold font-serif text-primary dark:text-white leading-none">
                        <AnimatedCount
                          value={value}
                          prefix={prefix}
                          suffix={suffix}
                          decimals={decimals}
                        />
                      </p>
                      <p className="mt-1 text-[11px] text-gray-500 dark:text-gray-400">
                        {label}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {yearsData.map((data) => {
              const isOpen = openYear === data.year;

              return (
                <div
                  key={data.year}
                  className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-surface-dark/95 shadow-sm overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenYear(isOpen ? "" : data.year)}
                    className="w-full flex items-center justify-between gap-4 px-4 md:px-6 py-4 text-left"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <h3 className="text-base md:text-lg font-bold font-serif text-primary dark:text-white">
                        Academic Year {data.year}
                      </h3>
                      {data.year === "2025-26" && (
                        <span className="inline-flex items-center rounded-full border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                          Ongoing
                        </span>
                      )}
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-gray-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-500 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 md:px-6 pb-5">
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                        <div className="rounded-lg border border-blue-200/70 dark:border-blue-900/50 bg-blue-50/60 dark:bg-blue-900/20 p-3">
                          <p className="text-[10px] uppercase tracking-wide text-gray-500 dark:text-gray-400">Highest CTC</p>
                          <p className="text-lg font-bold text-primary dark:text-white mt-1">₹{data.compHighest[0]} LPA</p>
                        </div>
                        <div className="rounded-lg border border-cyan-200/70 dark:border-cyan-900/50 bg-cyan-50/60 dark:bg-cyan-900/20 p-3">
                          <p className="text-[10px] uppercase tracking-wide text-gray-500 dark:text-gray-400">Average CTC</p>
                          <p className="text-lg font-bold text-primary dark:text-white mt-1">₹{data.compAverage[0]} LPA</p>
                        </div>
                        <div className="rounded-lg border border-orange-200/70 dark:border-orange-900/50 bg-orange-50/60 dark:bg-orange-900/20 p-3">
                          <p className="text-[10px] uppercase tracking-wide text-gray-500 dark:text-gray-400">Placement %</p>
                          <p className="text-lg font-bold text-primary dark:text-white mt-1">{data.placementPercent[0]}%</p>
                        </div>
                        <div className="rounded-lg border border-violet-200/70 dark:border-violet-900/50 bg-violet-50/60 dark:bg-violet-900/20 p-3">
                          <p className="text-[10px] uppercase tracking-wide text-gray-500 dark:text-gray-400">Programs</p>
                          <p className="text-lg font-bold text-primary dark:text-white mt-1">{data.labels.length}</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-surface/40 dark:bg-gray-900/40 p-4">
                          <h4 className="text-sm font-semibold text-primary dark:text-white mb-2">
                            Compensation Analysis
                          </h4>
                          <div className="h-[18rem] md:h-72 w-full">
                            <CompensationChart
                              labels={data.labels}
                              highest={data.compHighest}
                              average={data.compAverage}
                            />
                          </div>
                        </div>
                        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-surface/40 dark:bg-gray-900/40 p-4">
                          <h4 className="text-sm font-semibold text-primary dark:text-white mb-2">
                            Placement Analysis
                          </h4>
                          <div className="h-[18rem] md:h-72 w-full">
                            <PlacementPercentChart
                              labels={data.labels}
                              dataPercent={data.placementPercent}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Placement;
