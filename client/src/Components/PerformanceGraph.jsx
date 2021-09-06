import React, { useRef } from 'react';
// import { ReactComponent as Graph } from "../Assets/Group_1248.svg";
import { Line } from "react-chartjs-2";
import { random_rgba, monthWisePerfomance, months } from "../constants";

const PerformanceGraph = () => {
    const chartRef = useRef(null);

    const lineData = {
        labels: [...months],
        datasets: Object.keys(monthWisePerfomance).map(pf => {
          return {
            label: pf,
            borderColor: random_rgba(),
            backgroundColor: "rgba(0,0,0,0)",
            data: months.map(m => monthWisePerfomance[pf][m])
          };
        })
    };

    return (
        <div className="allParagraph col">
            <b className="col" >My Performance</b>
            <Line ref={chartRef} data={lineData} />
        </div>
    )
}
export default PerformanceGraph;
