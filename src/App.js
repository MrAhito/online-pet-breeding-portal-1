import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import AdmPost from './pages/Adm_post';
import AdmMessage from './pages/Adm_Message';
import AdmTeam from './pages/Adm_Team';
import AdmReport from './pages/Adm_Report';
function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
        </Switch>
            <Switch>
                <Route path='/dashboard' exact component={Dashboard} />
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
