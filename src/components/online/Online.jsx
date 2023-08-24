import './online.css'
import {Users} from "../../dummyData";
export default function Online(Posts) {
    const usernames = Users.filter(u=>u.id === Posts.id)
  return (
    <li className='rightbarFriend'>
        <div className="rightbarProfileImgContainer">
            <img src={usernames[0].profilePicture} alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{Posts.filter(u=>u.id ===Posts?.id)[0].username}</span>
    </li>
  )
}
