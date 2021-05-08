import React from 'react'
import LogoNav from '../images/logo.png'
import * as aiIcons from 'react-icons/cg'
import './AdminNav.css'

function AdminNav() {
    return (
        <>
           <div className='nav adminNav'>
                <aiIcons.CgMenuGridR className='userNavIcons' />
                <img alt="logo" src={LogoNav} className="nav-logo" />
                <aiIcons.CgLogOut className='userNavIcons' title='LogOut' />
            </div>
            
        </>
    )
}

export default AdminNav
