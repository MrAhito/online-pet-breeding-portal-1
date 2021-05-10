import React, { Component } from 'react'
import Ivon from '../images/icon.png'
import * as  fiIlCons from 'react-icons/fi'
import './USerPostDiv.css'
import PostedData from './Posted_Data'

class USerPostDiv extends Component {
   constructor() {
     super()
     this.state = {
       addPostDi: false
     }
   }
   viewPosting(valua) {
     this.setState({
       addPostDiv: valua
     })
   }

    render() {
        return (
            <>
              <div className='New_post'>
              <div className='user_post'>
              <img src={Ivon} alt='icon' className='iconUserPost'/>
              <input type='text' name='textPost' className='inputUserPost' placeholder='Create a Post  here....'></input>
              </div>

              <div className='btton_post'>
                <div className='ImageAdd' title='Add Image'><fiIlCons.FiImage className='iconimg' /><span>Add Image</span></div>
                <div className='TagAdd' title='Add Tag'><fiIlCons.FiTag className='icontag' /><span>Add Tag</span></div>
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
