import React from 'react'

const LineSlider = () => {
    return (
        <div className="progress" style={{height: "5px"}}>
            <div 
                className="progress-bar bg-success progress-bar-animated" 
                role="progressbar" 
                aria-valuenow="0" 
                aria-valuemin="0" 
                aria-valuemax="100"
            >
            </div>
        </div>

    )
}
export default LineSlider;
