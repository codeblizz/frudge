import React, { useRef } from 'react'

const GridFinancialHealth = () => {
    return (
        <div className="col">
            <div className="row mb-2">
                <b className="col-8">My Financial Health</b>
                <small className="d-flex justify-content-end mx-1 col bg-goal-pill border rounded-pill">View Financial Health</small>
            </div>
            <div className="d-flex p-2 card-stats col justify-content-center align-item-end">
                <div className="card-body col">
                    <div className="row">
                        <div className="progress" style={{height: "5px"}}>
                            <div className="progress-bar bg-danger" role="progressbar" style={{width: "40%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="30"></div>
                            <div className="progress-bar bg-warning" role="progressbar" style={{width: "70%"}} aria-valuenow="30" aria-valuemin="30" aria-valuemax="60"></div>
                            <div className="progress-bar bg-success" role="progressbar" style={{width: "100%"}} aria-valuenow="60" aria-valuemin="60" aria-valuemax="100"></div>
                        </div>
                        <span className="row justify-content-start">
                            <small className="d-flex col justify-content-start text-danger text-goal">POOR</small>
                            <small className="d-flex col justify-content-center text-warning text-goal ">AVERAGE</small>
                            <small className="d-flex col justify-content-end text-success text-goal">GOOD</small>
                        </span>
                    </div>
                    <div className="footer-goal row mt-4">
                        <hr/>
                        <div className="col">
                            <small className="health-goal col">Yuor financial health status is 
                                <span className="text-success good-health">Good.</span>
                                However there's still room for improvement.
                                <span className="good-health text-primary">See how you can improve</span>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GridFinancialHealth;
