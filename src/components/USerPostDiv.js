import React, { Component } from 'react'
import Ivon from '../images/icon.png'
import './USerPostDiv.css'
import PostedData from './Posted_Data'

 class USerPostDiv extends Component {
  
    render() {
        return (
            <>
              <div className='New_post'>
              <div className='user_post'>
              <img src={Ivon} alt='icon' className='iconUserPost'/>
              <input type='text' name='textPost' className='inputUserPost' placeholder='Create a Post  here....'></input>
              </div>
              <div className='btton_post'>
              <input type='file'/>
                </div>
              </div>
            <div className='PostedDataa'>
            <PostedData />
            </div>
            </>
        )
    }
}

export default USerPostDiv
