import React from 'react'
import { statsValues } from "../constants";

const GridStatistics = () => {
    return (
        <div className="allParagraph col">
            <b className="col">Quick Stats</b>
            <div className="card-group row g-4">
                <div className="col w-45 p-2 border border-2">
                    <div class="card-body">
                        <h6 class="card-title">{statsValues["netValue"].value}</h6>
                        <p class="card-subtitle mb-2 text-muted">{statsValues["netValue"].title}</p> 
                    </div>
                </div>
                <div className="col w-27 p-2 border border-2">
                    <div class="card-body">
                        <h6 class="card-title">{statsValues["cashFlow"].value}</h6>
                        <p class="card-subtitle mb-2 text-muted">{statsValues["cashFlow"].title}</p> 
                    </div>
                </div>
                <div className="col w-27 p-2 border border-2">
                    <div class="card-body">
                        <h6 class="card-title">{statsValues["liability"].value}</h6>
                        <p class="card-subtitle mb-2 text-muted">{statsValues["liability"].title}</p> 
                    </div>
                </div>
            </div>
    </div>
    )
}
export default GridStatistics;