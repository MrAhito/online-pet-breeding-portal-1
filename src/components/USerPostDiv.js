import React, { useState } from 'react'
import Ivon from '../images/icon.png'
import * as aiIcons from 'react-icons/fi'
import './USerPostDiv.css'
import PostedData from './Posted_Data'

function USerPostDiv() {
  const [addPostDiv, setaddPostDiv] = useState(false);
  const showPosting = () => setaddPostDiv(!addPostDiv);

  return (

            <>
              <div className='New_post'>
              <div className='user_post'>
                <img src={Ivon} alt='icon' className='iconUserPost' />
          <input type='text' name='textPost' onClick={showPosting} className='inputUserPost' placeholder='Create a Post  here....'></input>
              </div>

              <div className='btton_post'>
                <div className='ImageAdd' title='Add Image'><aiIcons.FiImage className='iconimg' /><span>Add Image</span></div>
                <div className='TagAdd' title='Add Tag'><aiIcons.FiTag className='icontag' /><span>Add Tag</span></div>
              </div>
            </div>

      <div className={addPostDiv ? 'posting_div shaw' : 'posting_div'} >
        <div className='blocker' onClick={showPosting} />
              <div className='AddPostCon'>
        </div>

              </div>
            <div className='PostedDataa'>
            <PostedData />
            </div>
            </>
        )
}

export default USerPostDiv
