import React from 'react'
import './rightbar.css'
import brday from '../../asset/brday.png'
// import dan from '../../asset/dan.jpg'
import work from '../../asset/work.png'
import win from '../../asset/win.png'
import dan from '../../asset/dan.jpg'
import sata from '../../asset/sata.png'
import hawi from '../../asset/hawi.png'
import funy from '../../asset/funy.png'
import wow from '../../asset/wow.png'
import ppp from '../../asset/ppp.png'
import nani from '../../asset/nani.png'
import ritt from '../../asset/ritt.png'
import sakita from '../../asset/sakita.png'
export default function Rightbar({profile}) {
  return (
    <div className='rightbar'>
       <div className="rightbarwrapper">
        <div className='birthdayContainer'>
          <img src={brday} alt="" className='brithdayImg' />
          <span className="birthdayText"><b>bni darge</b><br/> and 3 other friends have <br/><b>a brithday today</b>
          </span>
        </div>
        <img src={work} alt="" className='rightbarAd' />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightFriendList">
         <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src={win} alt="" 
            className='rightbarProfileImg' />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Win</span>
         </li>
         <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src={dan} alt="" 
            className='rightbarProfileImg' />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Dani</span>
         </li>
         <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src={sata} alt="" 
            className='rightbarProfileImg' />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Meri</span>
         </li>
         <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src={hawi} alt="" 
            className='rightbarProfileImg' />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Hewi</span>
         </li>
         <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src={funy} alt="" 
            className='rightbarProfileImg' />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Mulye</span>
         </li>
         <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src={wow} alt="" 
            className='rightbarProfileImg' />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Wonde Ghtr</span>
         </li> <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src={ppp} alt="" 
            className='rightbarProfileImg' />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Peri Keht</span>
         </li>
         <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src={nani} alt="" 
            className='rightbarProfileImg' />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Nani Magt</span>
         </li>
         <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src={ritt} alt="" 
            className='rightbarProfileImg' />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Rita mez</span>
         </li>
         <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src={sakita} alt="" 
            className='rightbarProfileImg' />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Sam Knfu</span>
         </li>
        </ul>
       </div>
    </div>
  )
}
