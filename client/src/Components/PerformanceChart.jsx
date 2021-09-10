import React, { useRef } from 'react'
import { Line, Doughnut, Bubble, PolarArea, Radar, Scatter } from 'react-chartjs-2'
 
const PerformanceChart = () => {
  const ref = useRef();
  const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Expenses",
            data: [3, 2, 2, 1, 5, 3],
            fill: true,
            borderColor: ["rgb(241, 221, 229)"],
            backgroundColor: ["rgb(241, 221, 229)"],
            // pointBackgroundColor: ["rgb(255, 3, 6, 9)"],
            // pointBorderColor: ["rgb(255, 3, 6, 9)"]
          },
          {
            label: "Networth",
            data: [2, 3, 1, 2, 3, 7],
            fill: true,
            borderColor: ["rgb(221, 234, 241)"],
            backgroundColor: ["rgb(221, 234, 241)"]
            // pointBackgroundColor: ["rgb(255, 2, 1, 8)"],
            // pointBorderColor: ["rgb(255, 3, 6, 9)"]
          }
        ],
    }

  return (
      <div className="col">
        <div className="row mb-4">
          <b className="d-flex justify-content-start col-7">My Performance</b>
          <small className="d-flex col-1 justify-content-center border bg-perf-pill rounded-pill">Weekly</small>
          <small className="d-flex col-1 justify-content-center border bg-perf-pill rounded-pill">Monthly</small>
          <small className="d-flex col-1 justify-content-center border bg-perf-pill rounded-pill">Yearly</small>
          <small className="d-flex justify-content-center col-2 border bg-perf-pill rounded-pill">All Time</small>
        </div>
        <article className="canvas-container">
          <Line ref={ref} data={data} options={{ maintainAspectRatio: false }}/>
        </article>
      </div>
  )
}

export default PerformanceChart;