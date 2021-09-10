import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { statsValues } from "../constants";

const Goal = () => {
    const percentage1 = 66;
    const percentage2 = 78;
    const percentage3 = 46;

    return (
        <div className="col">
            <div className="row mb-3">
                <b className="col-9">My Goals</b>
                <small className="d-flex justify-content-end col mx-1 border bg-goal-pill rounded-pill">View All Goals</small>
            </div>
            <div className="card-group row g-4">
                <div className="col p-2">
                    <div className="card-body goal-card mb-0">
                        <p className="col d-flex justify-content-center">Retirement</p>
                        <CircularProgressbar 
                            width="10px" 
                            value={percentage1} 
                            text={`${percentage1}%`} 
                            strokeWidth={3}
                            className="c_progress mb-6"
                            styles={buildStyles({ 
                                pathColor: `rgba(138, 165, 62, ${percentage1 / 100})`,
                                textColor: '#333330',
                                trailColor: '#d6d6d6',
                            })}
                        />
                        <div className="footer-goal">
                            <hr className="mt-6"/>
                            <div className="row">
                                <small className="col text-goal">{statsValues["netValue"].value}</small>
                                <small className="d-flex text-goal justify-content-end col">{statsValues["cashFlow"].value}</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col p-2">
                    <div className="card-body goal-card mb-0">
                        <p className="col d-flex justify-content-center">Vacation Home</p>
                        <CircularProgressbar 
                            width="10px" 
                            value={percentage2} 
                            text={`${percentage2}%`} 
                            strokeWidth={3}
                            className="c_progress"
                            styles={buildStyles({ 
                                pathColor: `rgba(138, 165, 62, ${percentage2 / 100})`,
                                textColor: '#333330',
                                trailColor: '#d6d6d6',
                            })}
                        />
                        <div className="footer-goal">
                            <hr/>
                            <div className="row">
                                <small className="col text-goal">{statsValues["netValue"].value}</small>
                                <small className="d-flex text-goal justify-content-end col">{statsValues["cashFlow"].value}</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col p-2">
                    <div className="card-body goal-card mb-0">
                        <p className="col d-flex justify-content-center">Travel</p>
                        <CircularProgressbar 
                            width="10px" 
                            value={percentage3} 
                            text={`${percentage3}%`} 
                            strokeWidth={3}
                            className="c_progress"
                            styles={buildStyles({ 
                                pathColor: `rgba(138, 165, 62, ${percentage3 / 100})`,
                                textColor: '#333330',
                                trailColor: '#d6d6d6',
                            })}
                        />
                        <div className="footer-goal">
                            <hr className="mt-6"/>
                            <div className="row">
                                <small className="col text-goal">{statsValues["netValue"].value}</small>
                                <small className="d-flex text-goal justify-content-end col">{statsValues["cashFlow"].value}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Goal;