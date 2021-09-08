import React, { useRef } from 'react'
import { Pie } from "react-chartjs-2";
import { datasetKeyProvider, statusColor, status } from "../constants";

const Goal = () => {
    const chartRef = useRef(null);

    const pieData = {
        labels: [...Object.keys(status)],
        datasets: [
          {
            backgroundColor: Object.keys(status).map(s => statusColor[s]),
            data: [...Object.values(status)]
          }
        ]
    };

    return (
        <div className="col">
            <b className="col">My Goals</b>
            <div className="d-flex flex-row row-col-1 p-3">
                <div class="card-body col-sm-4 goalCard p-2 border border-2 mx-20px">
                    <Pie width="10px" ref={chartRef} data={pieData} datasetKeyProvider={datasetKeyProvider} />
                </div>
                <div class="card-body col-sm-4 goalCard p-2 border border-2">
                    <Pie width="10px" ref={chartRef} data={pieData} datasetKeyProvider={datasetKeyProvider} />
                </div>
                <div class="card-body col-sm-4 goalCard p-2 border border-2">
                    <Pie width="10px" ref={chartRef} data={pieData} datasetKeyProvider={datasetKeyProvider} />
                </div>
            </div>
        </div>
    )
}
export default Goal;