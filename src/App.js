import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage';
import AdminDash from './components/Admin_Dash';
import AdmPost from './components/Adm_post';
import AdmMessage from './components/Adm_Message';
import AdmTeam from './components/Adm_Team';
import AdmReport from './components/Adm_Report';
import Dashboard from './pages/Dashboard';
function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
        </Switch> 
        <Switch>
              <Route path='/admin' exact component={AdminDash} />
                <Route path='/admin/post'  component={AdmPost} />
                <Route path='/admin/messages'  component={AdmMessage} />
                <Route path='/admin/team'  component={AdmTeam} />
                <Route path='/admin/reports'  component={AdmReport} />
        </Switch>
        <Switch>
          <Route path='/dashboard' exact component={Dashboard}/>
        </Switch>
    </Router>
    </>
  );
}
export default App;
