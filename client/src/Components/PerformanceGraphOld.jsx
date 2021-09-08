// import React, { Component } from 'react';
// // import { ReactComponent as Graph } from "../Assets/Group_1248.svg";
// // import { Line } from "react-chartjs-2";
// import { Chart } from "react-apexcharts";
// // import { random_rgba, monthWisePerfomance, months } from "../constants";

// class PerformanceGraph extends Component {
//     // const chartRef = useRef(null);
//   constructor(props){
//     super(props)
//     this.state = {
//       options: {
//         chart: {
//           id: "basic-bar"
//         },
//         xaxis: {
//           categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
//         }
//       },
//       series: [
//         {
//           name: "series-1",
//           data: [30, 40, 45, 50, 49, 60, 70, 91]
//         }
//       ]
//     };
//   }

//     // const lineData = {
//     //     labels: [...months],
//     //     datasets: Object.keys(monthWisePerfomance).map(pf => {
//     //       return {
//     //         label: pf,
//     //         borderColor: random_rgba(),
//     //         backgroundColor: "rgba(0,0,0,0)",
//     //         data: months.map(m => monthWisePerfomance[pf][m])
//     //       };
//     //     })
//     // };
// render() {
//     return (
//       <div className="col">
//           <b className="col" >My Performance</b>
//           {/* <Line ref={chartRef} data={lineData} /> */}
//           <div className="mixed-chart">
//             <Chart
//               options={this.state.options}
//               series={this.state.series}
//               type="bar"
//               width="500"
//             />
//           </div>
//       </div>
//     )}
// }
// export default PerformanceGraph;



