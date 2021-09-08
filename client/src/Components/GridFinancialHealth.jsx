import React, { useRef } from 'react'
import { Scatter } from "react-chartjs-2";
import { monthWisePerfomance, months } from "../constants";

const GridFinancialHealth = () => {
    const chartRef = useRef(null);

    const data = {
        labels: [...months],
        datasets: [
          {
            label: "Financial Health",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 3,
            pointHitRadius: 10,
            data: [...months].map(m => monthWisePerfomance[m])
          }
        ]
    };

    return (
        <div className="col">
            <b className="col">My Financial Health</b>
            <span className="d-flex p-2 card-stats h-20">
                <span class="card-body p-2">
                    <Scatter ref={chartRef} data={data} />
                </span>
            </span>
        </div>
    )
}
export default GridFinancialHealth;
