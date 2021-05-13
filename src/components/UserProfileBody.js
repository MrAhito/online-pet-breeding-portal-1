import React, { Component } from 'react'
import db, { auth } from '../firebase/firebase';
import * as aiIcons from 'react-icons/cg'
import './UserProfileBody.css'
 class UserProfileBody extends Component {
   
    constructor() {
        super()
        this.state = {
            UserFName: '',
            UserLName: '',
            ProfilePic: '',
            UserID: '',
            Gender: '',
            Address: '',
            Email: '',
            Birthdate: '',
            Password: '',
            ContactNum: '',
            Timestamp: '',
            PetData: [],

        }
    }

    async  getDoc(db, id) {
        const cityRef = db.collection('users').doc(id);
        const doc = await cityRef.get();
        try{
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          const datas =  doc.data();
        this.setState({
            UserFName : datas.Firstname,
            UserLName : datas.Lastname,
            ProfilePic : datas.photoURL,
            UserID : datas.uid,
            Gender : datas.Gender,
            Address : datas.Address,
            Email : datas.email,
            Password : datas.Pasword,
            ContactNum : datas.phoneNum,
            Timestamp : datas.Timestamp,
                });
            }
        }catch(error){
            console.error(error)
        }
      }

      getIDuser () {
          try{
       auth.onAuthStateChanged(user => {
           if(!( user === null)){
            const ids = user.uid
           this.getDoc(db, ids);
                }
            }) 
        }catch(error){
            console.error(error);
        }
    }
    
    componentDidMount(){
        this.getIDuser();
    } 
    render() {
        return (
            <>
            <div className='userProfile_wrapper'>
                <div className='coverPic'/>
                <img src={this.state.ProfilePic} alt='Profile' className='profilePicture'></img>
                 <p className='usernames'>{this.state.UserFName}  {this.state.UserLName}</p>
            </div>
            </>
        )
    }
}

export default UserProfileBody
// 