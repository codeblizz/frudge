import React, { useState } from "react";
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory
} from "react-router-dom";
import LandingPage from './Components/LandingPage.jsx';
import Dashboard from "./Components/Dashboard.jsx";
import AdvisoryPage from "./Components/AdvisorsPage";
import DocumentPage from "./Components/DocumentPage";
import NewsFeedPage from "./Components/NewsFeedPage";
import SupportPage from "./Components/SupportPage";
import LeftSideBar  from "./Components/LeftSideBar";

const MainContent = () => {
  const [ sidebar, setSidebar ] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  const history = useHistory();
  const navClick = (item) => {
    if(item){
      history.push(item.path);
    } else {
      history.push("/")
    }
  }
  return (
    <div className="parentDiv container-fluid">
        <div className="parentDiv row-fluid">
          <LeftSideBar navClick={navClick}/>
          <div className="parentDiv">
            <Switch>
              <Route exact path="/dashboard" render={()=><Dashboard sidebar={sidebar} showSidebar={showSidebar} navClick={navClick}/>}/>
              <Route exact path="/advisors" render={()=><AdvisoryPage />}/>
              <Route exact path="/documents" render={()=><DocumentPage />}/>
              <Route exact path="/feed" render={()=><NewsFeedPage />}/>
              <Route exact path="/support" render={()=>(<SupportPage />)} />  
            </Switch>
          </div>
        </div>
    </div>
  )
}

function App() {
  return (
    <Router>         
        <div className="parentDiv">
          <Switch>  
            <Route exact path="/" render={()=><LandingPage />}/>
            <Route component={MainContent}/>
          </Switch>         
        </div>  
    </Router> 
  );
}

export default App;
