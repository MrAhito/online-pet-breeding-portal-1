import React, { Component } from 'react'
import icon from '../images/icon.png'
import * as aiIcons from 'react-icons/cg'
import '../components/NavUser.css'
import NotifDiv from './NotifDiv'
import fireBaseDB, { auth } from '../firebase/firebase';
import db from '../firebase/firebase'
import UserSetting from './UserSetting'


class NavUser extends Component {

    constructor() {
        super()
        this.state = {
            userName: '',
            titleName: '',
            visibke: false,
            visibleM: false,
            visibleS: false
        }
    }
    componentDidMount(){
        console.log('mounteda')
        // const username = fireBaseDB.collection('users/').get()
        this.setState({
            userName: auth.currentUser
        })
    }


    changeVieae(ComName, visiMe, visiNO, visiSE) {
        this.setState({
            titleName: ComName,
            visibke: visiMe,
            visibleM: visiNO,
            visibleS: visiSE

        })
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
                <div className='CgICons mainDiv'>
                <aiIcons.CgFeed className='userNavIcons'  alt='newsfeed' title='Home'/>
                </div>
                <div className='CgICons mainDiv'>
                <aiIcons.CgTimelapse className='userNavIcons'  alt='find' title='Find Breeder   '/>
                </div>
                </div>


                <div className='userIcons'>
                <div className='CgICons CProfile'>
                    <aiIcons.CgProfile className='userNavIcons' />
                    <span className='userNavname'>{this.state.userName}</span>
                </div>
                <div className='CgICons' onClick={(e) => this.changeVieae('Messages', false, !this.state.visibleM, false)}>
                    <aiIcons.CgMail className='userNavIcons'  />
                </div>
                <div  className={this.state.visibleM ? 'notif_div shiw' : 'notif_div' }>
                <NotifDiv titleName={this.state.titleName} />
                </div>
                <div  className='CgICons' onClick={(e) => this.changeVieae('Notifications', !this.state.visibke,false, false)} >
                    <aiIcons.CgNotifications className='userNavIcons' />
                </div>
                <div  className={this.state.visibke  ? 'notif_div shiw' : 'notif_div' }>
                <NotifDiv titleName={this.state.titleName} />
                </div>
                <div className='CgICons' onClick={(e) => this.changeVieae('Settings',false, false, !this.state.visibleS)} >
                    <aiIcons.CgMenu className='userNavIcons' />
                </div>
                <div  className={this.state.visibleS  ? 'notif_div shiw' : 'notif_div' }>
                <UserSetting titleName={this.state.titleName} />
                </div>

                </div>

            </div>
        )
    }
}

export default NavUser
