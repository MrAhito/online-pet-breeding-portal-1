import React, { Component } from 'react';
import { Route } from "react-router-dom";
import AdminDash from '../components/Admin_Dash';
import AdmPost from '../components/Adm_post';
import AdmMessage from '../components/Adm_Message';
import AdmTeam from '../components/Adm_Team';
import AdmReport from '../components/Adm_Report';
import SideBar from '../components/SideBar';

class Dashboard extends Component {
    render() {
        return (
    <>
         <SideBar/>
            <Route path='/admin' component={AdminDash} />
                <Route path='/admin/post' exact component={AdmPost} />
                <Route path='/admin/messages' exact component={AdmMessage} />
                <Route path='/admin/team' exact component={AdmTeam} />
                <Route path='/admin/reports' exact component={AdmReport} />
       
    </>
        )
    }
}

export default Dashboard
