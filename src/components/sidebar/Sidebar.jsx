import React from 'react'
import './sidebar.css'
import dani from '../../asset/dani.jpg'
import funy from '../../asset/funy.png'
import stand from '../../asset/stand.png'
import sata from '../../asset/sata.png'
import ritt from '../../asset/ritt.png'
import sakita from '../../asset/sakita.png'
import win from '../../asset/win.png'
import {MdRssFeed} from 'react-icons/md'
import {BsFillChatLeftTextFill} from 'react-icons/bs'
import {BiSolidVideos} from 'react-icons/bi'
import {MdGroups} from 'react-icons/md'
import {BsFillBookmarkFill} from 'react-icons/bs'
import {BsQuestionCircle} from 'react-icons/bs'
import {MdWorkOutline} from 'react-icons/md'
import {BiCalendarEvent} from 'react-icons/bi'
import {MdSchool} from 'react-icons/md'
export default function Sidebar() {
  return (
  <div className='sidebar'>
    <div className="sidebarwrappe">
      <ul className="sidebarList">
        <li className="sidebarListItem">
       <MdRssFeed className='sidebarIcon'/>
       <span className="sidebarListItemText">feed</span>
        </li>
        <li className="sidebarListItem">
       <BsFillChatLeftTextFill className='sidebarIcon'/>
       <span className="sidebarListItemText">Chats</span>
        </li>
        <li className="sidebarListItem">
        <BiSolidVideos className='sidebarIcon'/>
        <span className="sidebarListItemText">Videos</span>
        </li>
        <li className="sidebarListItem">
        <MdGroups className='sidebarIcon'/>
        <span className="sidebarListItemText">Groups</span>
        </li>
        <li className="sidebarListItem">
        <BsFillBookmarkFill className='sidebarIcon'/>
        <span className="sidebarListItemText">Bookmarket</span>
        </li>
        <li className="sidebarListItem">
        <BsQuestionCircle className='sidebarIcon'/>
        <span className="sidebarListItemText">Questions</span>
        </li>
        <li className="sidebarListItem">
         <MdWorkOutline className='sidebarIcon'/>
         <span className="sidebarListItemText">Jobs</span>
        </li>
        <li className="sidebarListItem">
         <BiCalendarEvent className='sidebarIcon'/>
         <span className="sidebarListItemText">Events</span>
        </li>
        <li className="sidebarListItem">
          <MdSchool className='sidebarIcon'/>
          <span className="sidebarListItemText">Courses</span>
        </li>
      </ul>
      <button className="sidebarButton">Show More</button>
      <hr className='sidebarhr'/>
      <ul className="sidebarfriendList">
        <li className="sidebarfriend">
         <img src={dani} alt="" className='sidebarFriendImg' />
         <span className="sidebarFriendName">Dani G/libanos</span>
        </li>
        <li className="sidebarfriend">
          <img src={funy} alt="" className='sidebarFriendImg' />
          <span className="sidebarFriendName">Jane Doe</span>
        </li>
        <li className="sidebarfriend">
         <img src={stand} alt="" className='sidebarFriendImg' />
         <span className="sidebarFriendName">stand kofg</span>
        </li>
        <li className="sidebarfriend">
         <img src={sata} alt="" className='sidebarFriendImg' />
         <span className="sidebarFriendName">Sata djyv</span>
        </li>
        <li className="sidebarfriend">
         <img src={ritt} alt="" className='sidebarFriendImg' />
         <span className="sidebarFriendName">Ritt mgun</span>
        </li>
        <li className="sidebarfriend">
          <img src={sakita} alt="" className='sidebarFriendImg' />
          <span className="sidebarFriendName">saki rewan</span>
        </li>
        <li className="sidebarfriend">
         <img src={win} alt="" className='sidebarFriendImg' />
         <span className="sidebarFriendName">wina  beagt</span>
        </li>
      </ul>
    </div>
  </div>
  )
}
