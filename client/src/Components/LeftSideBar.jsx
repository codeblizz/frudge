import React from 'react';
import { Link } from 'react-router-dom';
import { MenuNames } from "./MenuNames";
import '../App.scss';
import { IconContext } from 'react-icons';
import fudge_logo from "../Assets/fudge_logo.png";

const LeftSideBar = (props) => {
  const { sidebar, showSidebar, navClick } = props;
  

  return (
    <div className="col-sm-12">
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className={sidebar ? "nav-menu active col" : "nav-menu col" }>
          <div className="col m-4">
            <div className="navbar-brand logo-bars" onClick={showSidebar}>
              <img 
                  src={fudge_logo} 
                  alt="fudge-logo"                             
                  height="25vh"
                  width="80vw"
                >
              </img>
            </div>
            {MenuNames.map((item, index) => {
              return (
                <div className="nav-menu-items col">
                  <ul key={index} className={`${item.cName} navbar-nav row`}>
                    <li className="nav-items col" >
                      <Link to="#" className="col" onClick={(e) => navClick(e, item)}>
                        <span className="nav-text col">{item.icon}</span>
                        <span className="nav-text col">{item.title}</span>
                        <span className="nav-text col">{item.anchor}</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default LeftSideBar;