import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideBar from '../components/SideBar'
import AdminDash from './pages/Admin_Dash';
import AdmPost from './pages/Adm_post';
import AdmMessage from './pages/Adm_Message';
import AdmTeam from './pages/Adm_Team';
import AdmReport from './pages/Adm_Report';
class Dashboard extends Component {
    render() {
        return (
    <>
    <SideBar/>
       <Router>
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
        )
    }
}

export default Dashboard
