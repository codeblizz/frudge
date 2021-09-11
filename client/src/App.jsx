import React, { useState, useEffect } from "react";
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory
} from "react-router-dom";
import LandingPage from './Components/LandingPage.jsx';
import Dashboard from "./Components/Dashboard.jsx";
import AdvisoryPage from "./Components/AdvisorsPage.jsx";
import DocumentPage from "./Components/DocumentPage.jsx";
import NewsFeedPage from "./Components/NewsFeedPage.jsx";
import SupportPage from "./Components/SupportPage.jsx";
import LeftSideBar  from "./Components/LeftSideBar";
import { useMediaQueryHook, deviceHeight, deviceWidth } from "./hookHelper";

const MainContent = () => {
  const history = useHistory();
  const [dimensions, setDimensions] = useState({ 
    height: deviceHeight,
    width: deviceWidth
  })

  const debounce = (fn, ms) => {
    let timer
    return _ => {
      clearTimeout(timer)
      timer = setTimeout(_ => {
        timer = null
        fn.apply(this)
      }, ms)
    };
  }

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: deviceHeight,
        width: deviceWidth
      })
    }, 1000)
    window.addEventListener('resize', debouncedHandleResize);
    return _ => window.removeEventListener('resize', debouncedHandleResize);
  }) 

  const navClick = (e, item) => {
    if(item){
      history.push(item.path);
    } else {
      history.push("/")
    }
  }

  console.log("dimensions", dimensions.width);

  return (
    <div className="col app-main">
      <div className="row">
        <LeftSideBar className="col" dimensions={dimensions} navClick={navClick}
        /> 
        <div className="col">
          <Switch>
            <Route exact path="/dashboard" render={()=><Dashboard navClick={navClick}/>}/>
            <Route exact path="/advisors" render={()=><AdvisoryPage navClick={navClick}/>}/>
            <Route exact path="/documents" render={()=><DocumentPage navClick={navClick}/>}/>
            <Route exact path="/feed" render={()=><NewsFeedPage navClick={navClick}/>}/>
            <Route exact path="/support" render={()=><SupportPage navClick={navClick}/>}/>  
          </Switch>
        </div>
      </div> 
    </div>
  )
}

function App() {
  return (
    <Router>         
        <div className="">
          <Switch>  
            <Route exact path="/" render={()=><LandingPage />}/>
            <Route component={MainContent}/>
          </Switch>         
        </div>  
    </Router> 
  );
}

export default App;
