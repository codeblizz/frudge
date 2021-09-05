import React from 'react';
import { Link } from 'react-router-dom';
import { MenuNames } from "./MenuNames";
import '../App.scss';
import { IconContext } from 'react-icons';
import fudge_logo from "../Assets/fudge_logo.png";

const LeftSideBar = (props) => {
  const { sidebar, showSidebar, navClick } = props;

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            <li className='navbar-logo' onClick={showSidebar}>
              <Link to='#' className='logo-bars'>
                <img 
                    src={fudge_logo} 
                    alt="fudge-logo"                             
                    height="25vh"
                    width="80vw">
                </img>
              </Link>
            </li>
            {MenuNames.map((item, index) => {
              return (
                <li key={index} className={item.cName} onClick={() => navClick(item)}>
                  <Link to={item.path} className="nav-text">
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default LeftSideBar;