import React from 'react'
import { Chart } from 'react-charts'
 
const PerformanceChart = () => {
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
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
    maintainAspectRatio: false	// Don't maintain w/h ratio
    }
 
  const lineChart = (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
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
        <b className="col" >My Performance</b>
        {lineChart}
      </div>
  )
}

export default PerformanceChart;