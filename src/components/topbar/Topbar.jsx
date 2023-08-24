import React from 'react'
import "./topbar.css"
import dan from '../../asset/dan.jpg'
import {BsSearch} from 'react-icons/bs'
import {BsFillPersonFill} from 'react-icons/bs'
import {BsFillChatLeftTextFill} from 'react-icons/bs'
import {IoIosNotifications} from 'react-icons/io'
export default function Topbar() {
  return (
    <div className='tobarcontainer'> 

        <div className="topbarLeft">
          <span className='logo'>Dani Social media</span>
        </div>

        <div className="topbarCenter">
          <div className="searchbar">
            <BsSearch className='searchIcon'/>
            <input type="text"  placeholder='search for frind, post or video' className='searchInput'/>
          </div>
        </div>

        <div className="topbarRight">
           <span className="topbarLink">Homepage</span>
           <span className="topbarLink">Timeline</span>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <BsFillPersonFill size={20}/>
               <span className='topbarIconBadge'>1</span>
            </div>

            <div className="topbarIconItem">
              <BsFillChatLeftTextFill size={20}/>
              <span className='topbarIconBadge'>2</span>
            </div>

            <div  className="topbarIconItem">
              <IoIosNotifications size={20}/>
              <span className='topbarIconBadge'>1</span>
            </div>
          </div>

          <img src={dan} alt="" className="topbarImg" />
        </div>

    </div>
  )
}
