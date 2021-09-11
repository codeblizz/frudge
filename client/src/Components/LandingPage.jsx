import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import '../App.scss';
// import { config } from "../config";
// import { ReactComponent as Logo } from "../Assets/fudge_logo.svg";
import fudge_logo from "../Assets/fudge_logo.png";
import bg_fudge from "../Assets/bg-fudge.png";
import * as HiIcons from "react-icons/hi";
import ShowInfo from "./ShowInfo";
import LineSlider from "./LineSlider.jsx"

const LandingPage = () => {
    const history = useHistory();
    const [ show, setShow ] = useState(false);
    const [ timeFrame, setTimeFrame ] = useState(false);

    const onClick = () => {
        setShow(false);
        setTimeFrame(true);
        setInterval(() => {
            history.push("/dashboard");
        }, 2500)
    }

    const displayItem = () => {
        setShow(true);
    }
    
    return (
        <div className={`before-${show}`}>
        <div className={`d-flex flex-column justify-content-center landingPageBG-${show}`}>
            <span className="arrowPos1"></span>
            {timeFrame && <div className="comtainer-slider"> <LineSlider className=""/></div>}
            <div className="d-flex align-items-center justify-content-center arrowPos2">
                <div className="d-flex flex-column mt-1">
                    <div className="d-flex justify-content-center fudgeLogo mb-4">
                        {
                            show ? 
                                <img
                                    src={fudge_logo}
                                    alt="Fudge_logo"
                                    height="40%"
                                    width="20%"
                                    className="imgLogo"
                                /> : 
                            !show && !timeFrame ?
                                <img
                                    src={fudge_logo}
                                    alt="Fudge_logo"
                                    height="70%"
                                    width="50%"
                                /> : 
                            ""
                        } 
                    </div>
                    {show &&
                    // <CSSTransition in={anime} appear={true} timeout={1500} classNames="slide">
                        <ShowInfo show={show} onClick={onClick}/>
                    // </CSSTransition>
                    }
                </div>
            </div>
            {(!show && !timeFrame) &&
                <div className="d-flex align-items-end justify-content-center">
                    <Link to='#' style={{color: "#FFFAFF"}} onClick={displayItem}>
                        <HiIcons.HiOutlineArrowNarrowDown/>
                    </Link>
                </div>
            }
        </div>
        </div>
    )
}
export default LandingPage;