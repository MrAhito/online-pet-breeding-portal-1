import React, { Component } from 'react'
import { auth } from '../firebase/firebase'
import './USerPostDiv.css'

class USerPostDiv extends Component {
    constructor() {
        super()
        this.state = {
            userName: '',
            userProfile: ''
        }
    }
     getID () {
       auth.onAuthStateChanged(user => {
        if(!( user === null)){
            this.setState({
             userName : user.displayName,
             userProfile : user.photoURL
            })
         }else{
            
         }
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
                    <div className='buttonsPost'>
                        
                    </div>
                </div>
              </div>
            </>
        )
    }
}

export default USerPostDiv
