import React, { Component } from 'react'
import icon from '../images/icon.png'
import * as aiIcons from 'react-icons/cg'
import '../components/NavUser.css'
// import fireBaseDB, { auth } from '../firebase/firebase';


class NavUser extends Component {

    constructor(props) {
        super(props)
        // const uid = auth.currentUser.uid.toString() ;
        // const usernameRef = fireBaseDB.doc("users/"+uid)
        // const snaps = usernameRef.get();


        this.state = {

        }
    }


    render() {
        return (
            <div className="nav userNavCon">
                <div className='navlogo-con'>
                    <img className='nav-logo navuslo' src={icon} alt="icon" />
                    <div className='search_div'>
                        <aiIcons.CgSearch className='search_icon' alt='Search_logo' title='Search'/>
                        <input placeholder='Search Here...' />
                    </div>
                </div>
                <div className='cs_div'>
                <aiIcons.CgFeed className='userNavIcons'  alt='newsfeed' title='Home'/>
                <aiIcons.CgTimelapse className='userNavIcons'  alt='find' title='Find Breeder   '/>
                </div>
                <div className='userIcons'>
                    <aiIcons.CgProfile className='userNavIcons' /><span className='userNavname'>Username</span>
                    <aiIcons.CgMail className='userNavIcons' />
                    <aiIcons.CgNotifications className='userNavIcons' />
                    <aiIcons.CgMenu className='userNavIcons' />
                </div>
            </div>
        )
    }
}

export default NavUser
