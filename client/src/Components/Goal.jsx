import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Goal = () => {
    const percentage1 = 66;
    const percentage2 = 78;
    const percentage3 = 46;

    return (
        <div className="col">
            <b className="col">My Goals</b>
            <div className="card-group row g-4">
                <div className="col p-2">
                    <div className="card-body goalCard">
                        <p className="col d-flex justify-content-center">Retirement</p>
                        <CircularProgressbar 
                            width="10px" 
                            value={percentage1} 
                            text={`${percentage1}%`} 
                            className="c_progress"
                            styles={buildStyles({ 
                                pathColor: `rgba(138, 165, 62, ${percentage1 / 100})`,
                                textColor: '#333330',
                                trailColor: '#d6d6d6',
                            })}
                        />
                    </div>
                </div>
                <div className="col p-2">
                    <div className="card-body goalCard">
                        <p className="col d-flex justify-content-center">Vacation Home</p>
                        <CircularProgressbar 
                            width="10px" 
                            value={percentage2} 
                            text={`${percentage2}%`} 
                            className="c_progress"
                            styles={buildStyles({ 
                                pathColor: `rgba(138, 165, 62, ${percentage2 / 100})`,
                                textColor: '#333330',
                                trailColor: '#d6d6d6',
                            })}
                        />
                    </div>
                </div>
                <div className="col p-2">
                    <div className="card-body goalCard">
                        <p className="col d-flex justify-content-center">Travel</p>
                        <CircularProgressbar 
                            width="10px" 
                            value={percentage3} 
                            text={`${percentage3}%`} 
                            className="c_progress"
                            styles={buildStyles({ 
                                pathColor: `rgba(138, 165, 62, ${percentage3 / 100})`,
                                textColor: '#333330',
                                trailColor: '#d6d6d6',
                            })}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Goal;