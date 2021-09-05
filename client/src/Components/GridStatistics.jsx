import React from 'react'
import { statsValues } from "../constants";

const GridStatistics = () => {
    return (
        <div className="allParagraph row row-col-1">
            <h5 className="allParagraph mb-1">Quick Stats</h5>
            <div className="allParagraph d-flex flex-row p-3">
                <span class="card-body w-45 p-2 border border-2 mx-20px">
                    <h6 class="card-title">{statsValues["netValue"].value}</h6>
                    <p class="card-subtitle mb-2 text-muted">{statsValues["netValue"].title}</p> 
                </span>
                <span class="card-body w-27 p-2 border border-2">
                    <h6 class="card-title">{statsValues["cashFlow"].value}</h6>
                    <p class="card-subtitle mb-2 text-muted">{statsValues["cashFlow"].title}</p> 
                </span>
                <span class="card-body w-27 p-2 border border-2">
                    <h6 class="card-title">{statsValues["liability"].value}</h6>
                    <p class="card-subtitle mb-2 text-muted">{statsValues["liability"].title}</p> 
                </span>
            </div>
    </div>
    )
}
export default GridStatistics;