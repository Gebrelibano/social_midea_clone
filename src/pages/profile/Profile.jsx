import './profile.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import dani from '../../asset/dani.jpg'
import dan from '../../asset/dan.jpg'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
export default function Profile() {
  return (
    <>
      <Topbar/>
      <div className="profile">
        <Sidebar/>
        <div className="profileRight">
          <div className="profileRightTop">
           <div className="profileCover">
             <img 
             src={dani} alt="" className='profileCoverImg' />
             <img 
             src={dan} alt="" className='profileUserImg' />
            </div>
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">Dani Gg</h4>
            <span className="profileInfoDesc">
              hello my friends!
            </span>
          </div>
          <div className="profileRightBottom">
            <Feed/>
            <Rightbar/>
          </div>
       </div>
      </div>
    </>
  )
}
