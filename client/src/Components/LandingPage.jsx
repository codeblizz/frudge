import React, { useState, Fragment } from "react";
import { useHistory, Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import '../App.scss';
// import { config } from "../config";
// import { ReactComponent as Logo } from "../Assets/fudge_logo.svg";
import fudge_logo from "../Assets/fudge_logo.png";
import bg_fudge from "../Assets/bg-fudge.png";
import * as HiIcons from "react-icons/hi";
import ShowInfo from "./ShowInfo";

const LandingPage = () => {
    const history = useHistory();
    const [ show, setShow ] = useState(false);
    const [ anime, setAnime ] = useState(false);
    const onClick = () => {
        history.push("/dashboard");
    }

    const displayItem = () => {
        setShow(true);
        setAnime(true);
    }
    
    return (
        <div className="d-flex flex-column justify-content-center landingPageBG">
            <span className="arrowPos1"></span>
            <div className="d-flex align-items-center justify-content-center arrowPos2">
                <div className="d-flex accordion flex-column mt-1">
                    <div className="d-flex justify-content-center mb-5">
                        {show ? 
                            <img
                                src={fudge_logo}
                                alt="Fudge_logo"
                                height="40%"
                                width="20%"
                                className="imgLogo"
                            /> : 
                            <img
                                src={fudge_logo}
                                alt="Fudge_logo"
                                height="70%"
                                width="50%"
                            />
                        } 
                    </div>
                    {show && 
                    // <CSSTransition in={anime} appear={true} timeout={1500} classNames="slide">
                        <ShowInfo onClick={onClick}/>
                    // </CSSTransition>
                    }
                </div>
            </div>
            {!show && 
                <div className="d-flex align-items-end justify-content-center">
                    <Link to='#' style={{color: "#FFFAFF"}} onClick={displayItem}>
                        <HiIcons.HiOutlineArrowNarrowDown />
                    </Link>
                </div>
            }
        </div>
    )
}
export default LandingPage;