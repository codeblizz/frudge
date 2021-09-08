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

const MainContent = () => {
  const [ sidebar, setSidebar ] = useState(true);
  const history = useHistory();

  const showSidebar = () => {
    let winWidth = window.innerWidth;
    let visualViewport = window.visualViewport.width;
    if( visualViewport < winWidth ) {
      setSidebar(!sidebar);
    }
  }

  useEffect(() => {
    showSidebar();
  }, []) 

  console.log("visualViewport", window.visualViewport);

  const navClick = (e, item) => {
    if(item){
      history.push(item.path);
    } else {
      history.push("/")
    }
  }

  return (
    <div className="col app-main">
      { sidebar ?
        ( <div className="row">
            <LeftSideBar className="col" navClick={navClick}/> 
            <div className="col">
              <Switch>
                <Route exact path="/dashboard" render={()=><Dashboard sidebar={sidebar} showSidebar={showSidebar} navClick={navClick}/>}/>
                <Route exact path="/advisors" render={()=><AdvisoryPage sidebar={sidebar} showSidebar={showSidebar} navClick={navClick}/>}/>
                <Route exact path="/documents" render={()=><DocumentPage sidebar={sidebar} showSidebar={showSidebar} navClick={navClick}/>}/>
                <Route exact path="/feed" render={()=><NewsFeedPage sidebar={sidebar} showSidebar={showSidebar} navClick={navClick}/>}/>
                <Route exact path="/support" render={()=><SupportPage sidebar={sidebar} showSidebar={showSidebar} navClick={navClick}/>}/>  
              </Switch>
            </div>
          </div> ) : (
          <div className="col">
            <Switch>
              <Route exact path="/dashboard" render={()=><Dashboard />}/>
              <Route exact path="/advisors" render={()=><AdvisoryPage />}/>
              <Route exact path="/documents" render={()=><DocumentPage />}/>
              <Route exact path="/feed" render={()=><NewsFeedPage />}/>
              <Route exact path="/support" render={()=>(<SupportPage />)} />  
            </Switch>
          </div>
        )}
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
