import React, { useRef } from 'react'
import { Scatter } from "react-chartjs-2";
import { monthWisePerfomance, months } from "../constants";
import { statsValues } from "../constants";

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
            <div className="row mb-2">
                <b className="col-8">My Financial Health</b>
                <small className="d-flex justify-content-end mx-1 col border bg-goal-pill rounded-pill">View Financial Health</small>
            </div>
            <div className="d-flex p-2 card-stats h-20">
                <div class="card-body">
                    {/* <Scatter ref={chartRef} data={data} /> */}
                    <div className="footer-goal">
                        <hr/>
                        <div className="row">
                            <small className="d-flex text-goal justify-content-center col">Yuor financial health status is {" "}<p className="text-success">Good</p></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GridFinancialHealth;
