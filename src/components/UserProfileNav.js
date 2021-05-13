import React, { useState }from 'react'
import './UserProfileNav.css'

function UserProfileNav() {
const [profilephoto, setprofilephoto] = useState('');

 const getID = () => {
    auth.onAuthStateChanged(user => {
        if(!( user === null)){
        setprofilephoto(user.photoURL)
     }else{

     }
    });
 }
 
 componentWillMount(){
     this.getID();
 } 

    return (
        <>
        <div className='userProfile_wrapper'>
        <img src={profilephoto}></img> 
        </div>
        </>
    )
}

export default UserProfileNav
