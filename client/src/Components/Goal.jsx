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
            <div className="card-group row g-4">
                <div className="col p-2">
                    <div className="card-body goalCard">
                        <Pie width="10px" ref={chartRef} data={pieData} datasetKeyProvider={datasetKeyProvider} />
                    </div>
                </div>
                <div className="col p-2">
                    <div className="card-body goalCard">
                        <Pie width="10px" ref={chartRef} data={pieData} datasetKeyProvider={datasetKeyProvider} />
                    </div>
                </div>
                <div className="col p-2">
                    <div className="card-body goalCard">
                        <Pie width="10px" ref={chartRef} data={pieData} datasetKeyProvider={datasetKeyProvider} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Goal;