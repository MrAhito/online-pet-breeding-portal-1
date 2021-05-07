import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminDash from '../components/Admin_Dash';
import AdmPost from '../components/Adm_post';
import AdmMessage from '../components/Adm_Message';
import AdmTeam from '../components/Adm_Team';
import AdmReport from '../components/Adm_Report';

class Dashboard extends Component {
    render() {
        return (
    <>
    <Router>
        <Switch>
            <Route path='/dashboard' exact component={AdminDash} />
        </Switch>
        <Switch>
                <Route path='/post'  component={AdmPost} />
        </Switch>
        <Switch>
                <Route path='/messages'  component={AdmMessage} />
        </Switch>
        <Switch>
                <Route path='/team'  component={AdmTeam} />
        </Switch>
        <Switch>
                <Route path='/reports'  component={AdmReport} />
        </Switch>
    </Router>
    </>
        )
    }
}

export default Dashboard
