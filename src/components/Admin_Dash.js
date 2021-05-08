import React, { Component } from 'react'
import LogoSide from '../images/logo.png'
import './SideBar.css'
import * as faIcons from 'react-icons/fa'
import * as FiIcons from 'react-icons/fi'
import * as aiIcons from 'react-icons/cg'
import { SideBarData } from './SideBarData'
import { Link } from "react-router-dom";
import { auth } from '../firebase/firebase';
export class Admin_Dash extends Component {

    constructor() {
        super();
        this.state = {
            sidebar: false
        };
        this.showSideBar = this.showSideBar.bind(this);
    }
    showSideBar() {
        this.setState({
            sidebar: !this.state.sidebar
        })
    }

    render() {
        return (
            <>
                <div className="sidebar">
                    <Link to='#' className='side-menuBars'>
                        <faIcons.FaBars onClick={this.showSideBar} />
                    </Link>
                    <img alt="logo" src={LogoSide} className="nav-logo" />
                    <div className="userLogIn">
                        <Link to='/' className='side-menuBars'><FiIcons.FiLogOut onClick={() => {
                            auth.signOut();
                        }} /></Link>
                    </div>
                </div>
                <nav className={this.state.sidebar ? 'nav-menu active' : 'nav-menu'}>

                    <ul className="nav-menu-items">
                        <li className="navbar-toogle">
                            <Link to='#' className='side-menuBars' >
                                <aiIcons.CgClose onClick={this.showSideBar} />
                            </Link>
                        </li>
                        {SideBarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link onClick={this.showSideBar} to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <div>
                    Hi Im Home
            </div>
            </>
        )
    }
}

export default Admin_Dash
