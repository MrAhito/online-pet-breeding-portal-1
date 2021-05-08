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
            <div className="nav">
                <div className='navlogo-con'>
                    <img className='nav-logo navuslo' src={icon} alt="icon" />
                    <div className='search_div'>
                        <aiIcons.CgSearch className='search_icon' />
                        <input placeholder='Search Here...' />
                    </div>
                </div>
                <div className='cs_div'>
                </div>
                <div className='userIcons'>
                    <aiIcons.CgProfile />
                    <p className="userName">{this.state.userName}</p>
                </div>
            </div>
        )
    }
}

export default NavUser
