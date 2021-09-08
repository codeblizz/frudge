import React from 'react'
import { Chart } from 'react-charts'
 
const PerformanceChart = () => {
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]],
      },
      {
        label: 'Series 2',
        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      }
    ],
    []
  )
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )
  const options = {
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        gridLines: {
          color: 'green'
        }
      }],
      xAxes: [{
        gridLines: {
        color: 'red'
        }
      }]
    }
  }
 
  const lineChart = (
    <article
        className="canvas-container col"
        style={{
            width: '400px',
            height: '300px'
        }}
    >
      <Chart data={data} axes={axes} options={options}/>
    </article>
  )
  return (
      <div className="col">
        <div className="row mb-4">
          <b className="d-flex justify-content-start col-7">My Performance</b>
          <small className="d-flex col-1 justify-content-center border bg-perf-pill rounded-pill">Weekly</small>
          <small className="d-flex col-1 justify-content-center border bg-perf-pill rounded-pill">Monthly</small>
          <small className="d-flex col-1 justify-content-center border bg-perf-pill rounded-pill">Yearly</small>
          <small className="d-flex justify-content-center col-2 border bg-perf-pill rounded-pill">All Time</small>
        </div>
        {lineChart}
      </div>
  )
}

export default PerformanceChart;