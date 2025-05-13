import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar key={dataPoint.label} barItems={{ ...dataPoint, maxValue }} />
      ))}
    </div>
  );
};

export default Chart;
