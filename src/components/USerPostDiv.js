import React, { Component } from 'react'
import Ivon from '../images/icon.png'
import './USerPostDiv.css'
import * as aiIcons from 'react-icons/fi'
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
                <img src={Ivon} alt='icon' className='iconUserPost' />
                <input type='text' name='textPost' onClick={(e) => this.viewPosting(!this.state.addPostDi)} className='inputUserPost' placeholder='Create a Post  here....'></input>
              </div>
              <div className='btton_post'>
                <div className='ImageAdd' title='Add Image'><aiIcons.FiImage className='iconimg' /><span>Add Image</span></div>
                <div className='TagAdd' title='Add Tag'><aiIcons.FiTag className='icontag' /><span>Add Tag</span></div>
              </div>
              </div>

            <div className={this.state.addPostDiv ? 'posting_div shaw' : 'posting_div'} >
              <div className='AddPostCon'>
                awdawdawd
              </div>
              <div className='blocker' onClick={(e) => this.viewPosting(false)} />
            </div>

            <div className='PostedDataa'>
            <PostedData />
            </div>
            </>
        )
    }
}

export default USerPostDiv
