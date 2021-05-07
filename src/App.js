import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/HomePage';
import SideBar from './components/SideBar';
import AdminDash from './pages/Admin_Dash';
import AdmPost from './pages/Adm_post';
import AdmMessage from './pages/Adm_Message';
import AdmTeam from './pages/Adm_Team';
import AdmReport from './pages/Adm_Report';
function App() {

const routes =[
  {
    path: "/dashboard",
    exact: true,
    sidebar: () => <SideBar/>,
  },
  {
    path: "/post",
    exact: true,
    sidebar: () => <SideBar/>,
  },
  {
    path: "/messages",
    exact: true,
    sidebar: () => <SideBar/>,
  },
  {
    path: "/team",
    exact: true,
    sidebar: () => <SideBar/>,
  },
  {
    path: "/reports",
    exact: true,
    sidebar: () => <SideBar/>,
  },
]

  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
        </Switch>

       <Switch>
         {routes.map((route, index) => (
           <Route 
           key={index}
          path = {route.path}
          exact = {route.exact}
          children = {<route.sidebar/>}
          />
         ))}
       </Switch>
       <Switch>
                <Route path='/dashboard' exact component={AdminDash} />
            </Switch>
            <Switch>
                <Route path='/post' exact component={AdmPost} />
            </Switch>
            <Switch>
                <Route path='/messages' exact component={AdmMessage} />
            </Switch>
            <Switch>
                <Route path='/team' exact component={AdmTeam} />
            </Switch>
            <Switch>
                <Route path='/reports' exact component={AdmReport} />
            </Switch>
    </Router>
    </>
  );
}
export default App;
