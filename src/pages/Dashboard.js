import React, { Component } from 'react';
import AdminDash from './Admin_Dash';
import SideBar from '../components/SideBar'

class Dashboard extends Component {
    render() {
        return (
    <>
    <SideBar/>
    <AdminDash />
    </>
        )
    }
}

export default Dashboard
