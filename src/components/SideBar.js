import React, { useState } from 'react'
import LogoSide from '../images/logo.png'
import './SideBar.css'
import * as faIcons from 'react-icons/fa'
import * as FiIcons from 'react-icons/fi'
import * as cgIcons from 'react-icons/cg'
import * as ioIcons from 'react-icons/io'
import * as bsIcons from 'react-icons/bs'
import * as aiIcons from 'react-icons/ai'
import { Link } from "react-router-dom";

function SideBar() {
    const [sidebar, setSidebar] = useState(false);
    const showSideBar = () => setSidebar(!sidebar);
    return (
        <>
                <div className="sidebar">
                    <Link to='#' className='side-menuBars'>
                        <faIcons.FaBars onClick={showSideBar} />
                    </Link>
                    <img alt="logo" src={LogoSide} className="nav-logo" />
                    <div className="userLogIn">
                        <Link to='/' className='side-menuBars'><FiIcons.FiLogOut onClick={() =>{
                        }} /></Link>
                    </div>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>

                    <ul className="nav-menu-items">
                        <li className="navbar-toogle">
                            <Link to='#' className='side-menuBars' >
                                <cgIcons.CgClose onClick={showSideBar} />
                            </Link>
                        </li>
                        <li  className= 'nav-text'>
                            <Link onClick={showSideBar} to='/dashboard'>
                            <aiIcons.AiFillHome /> <span>Home</span>
                            </Link>
                        </li>
                        <li  className= 'nav-text'>
                            <Link onClick={showSideBar} to='/post'>
                            <bsIcons.BsFilePost /><span>Post</span>
                            </Link>
                        </li>
                        <li  className= 'nav-text'>
                            <Link onClick={showSideBar} to='/messages'>
                            <aiIcons.AiFillMessage /> <span>Messages</span>
                            </Link>
                        </li>
                        <li  className= 'nav-text'>
                            <Link onClick={showSideBar} to='/team'>
                            <ioIcons.IoMdPeople /><span>Team</span>
                            </Link>
                        </li>
                        <li  className= 'nav-text'>
                            <Link onClick={showSideBar} to='/reports'>
                            <ioIcons.IoIosPaper /> <span>Reports</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
        </>
    )
}

export default SideBar
