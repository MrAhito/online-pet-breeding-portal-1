import React, { Component } from 'react'
import Login from '../components/Login'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'
class HomePage extends Component {
    render() {

        return (
            <>
            <SideBar />
            <Login />
            <Footer />
            </>
        )
    }
}

export default HomePage
