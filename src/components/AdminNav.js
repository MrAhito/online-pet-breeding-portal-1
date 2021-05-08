import React, {useState} from 'react'
import LogoNav from '../images/logo.png'
import * as aiIcons from 'react-icons/cg'
import Dp from '../images/icon.png'
import './AdminNav.css'
import './SideBar.css'
import { Link } from 'react-router-dom'
import { SideBarData } from './SideBarData'
function AdminNav() {
    
    const [sidebar, setSidebar] = useState(false);
    const showSideBar = () => setSidebar(!sidebar);
    return (
        <>
           <div className='nav adminNav'>
                <aiIcons.CgMenuGridR className='userNavIcons' onClick={showSideBar} />
                <img alt="logo" src={LogoNav} className="nav-logo" />
                <img alt='Profile' src={Dp} className='iconAdmin'/>
                <aiIcons.CgLogOut className='userNavIcons' title='LogOut' />
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>

                    <ul className="nav-menu-items">
                        <li className="navbar-toogle">
                            <Link to='#' className='side-menuBars' >
                                <aiIcons.CgClose onClick={showSideBar} />
                            </Link>
                        </li>
                        <br />
                        {SideBarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link onClick={showSideBar} to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

        </>
    )
}

export default AdminNav
