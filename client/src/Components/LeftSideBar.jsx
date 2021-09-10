import React from 'react';
import { Link } from 'react-router-dom';
import { MenuNames } from "./MenuNames";
import '../App.scss';
import { IconContext } from 'react-icons';
import fudge_logo from "../Assets/fudge_logo.png";

const LeftSideBar = (props) => {
  const { navClick, dimensions } = props;

  console.log("dimensions", dimensions);
  return (
    <div className="col-sm-12">
       <IconContext.Provider value={{ color: "#fff" }}>
        <nav className={"nav-menu col"}>
          <ul className="nav-menu-items col">
            <li className="navbar-logo col">
              <Link to="#" className="logo-bars">
                <img 
                    src={fudge_logo} 
                    alt="fudge-logo"                             
                    height="25vh"
                    width="80vw"
                />
              </Link>
            </li>
            {MenuNames.map((item, index) => {
              return (
                <li key={index} className={`${item.cText} row`}>
                  <Link to="#" className={`${item.cText} col`} onClick={(e) => navClick(e, item)}>
                    <span className="col">{item.icon}</span>
                    <span className="col">{item.title}</span>
                    <span className="p-0 col">{item.anchor}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default LeftSideBar;