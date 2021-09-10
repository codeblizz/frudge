import React, { useRef } from 'react'
import { Line, Doughnut, Bubble, PolarArea, Radar, Scatter } from 'react-chartjs-2'
 
const PerformanceChart = () => {
  const ref = useRef();
  const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "Expenses",
            data: [3, 2, 2, 1, 5, 3, 7],
            fill: true,
            borderColor: ["rgb(245, 202, 211)"],
            backgroundColor: ["rgb(241, 221, 229)"],
          },
          {
            label: "Networth",
            data: [2, 3, 1, 2, 3, 7, 1],
            fill: true,
            borderColor: ["rgb(205, 213, 245)"],
            backgroundColor: ["rgb(221, 234, 241)"]
          }
        ],
    }
  const options = {
    maintainAspectRatio: false, 	
    elements: {
      line: {
        tension: 0.48 
      }
    }
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
        <article className="row canvas-container">
          <Line ref={ref} data={data} options={options}/>
        </article>
      </div>
  )
}

export default PerformanceChart;