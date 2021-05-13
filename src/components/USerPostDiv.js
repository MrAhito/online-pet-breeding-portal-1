import React, { Component } from 'react'
import { auth } from '../firebase/firebase'
import './USerPostDiv.css'

class USerPostDiv extends Component {
    constructor() {
        super()
        this.state = {
            userName: '',
            userProfile: '',
            titleName: '',
            visibke: false,
            visibleM: false,
            visibleS: false
        }
    }
     getID () {
       auth.onAuthStateChanged(user => {
            console.log(user)
           this.setState({
            userName : user.displayName,
            userProfile : user.photoURL
           })
       });
    }
    
    componentWillMount(){
        this.getID();
    } 


    render() {
        return (
            <>
              <div className='New_post'>
              <div className='user_post'>
              <img src={this.state.userProfile} alt='icon' className='iconUserPost'/>
              <input type='text' name='textPost' className='inputUserPost' placeholder='Create a Post  here....'></input>
              </div>
              </div>
            </>
        )
    }
}

export default USerPostDiv
