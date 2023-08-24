import './post.css'
import likee from '../../asset/likee.png'
import heart from '../../asset/heart.jpg'
import {Users} from "../../dummyData";
import {MdMoreVert} from 'react-icons/md'
import { useState } from 'react';
export default function Post({Posts}) {
  const usernames = Users.filter(u=>u.id === Posts.id)
  const [like, setLike] =useState(Posts.like)
  const [isLiked, setIsLiked] =useState(false)

  const likeHandler =()=>{
    setLike(isLiked ? like : like+1)
    setIsLiked(!isLiked)
  }
  return (
   <div className= 'post'>
      <div className="postwrapper">
        <div className="postTop">
          <div className="postTopLeft">
            < img src={usernames[0].profilePicture} alt="" className='postProfileImg' />
            <span className="postUsername">{Users.filter(u=>u.id ===Posts?.id)[0].username}</span>
            <span className="postDate">{Posts?.date}</span>
          </div>
          <div className="postTopRigth">
            <MdMoreVert/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{Posts?.desc}</span>
          <img src={Posts?.photo} alt="" className='postImg' />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src={likee} alt=""   className='likeIcon' onClick={likeHandler}/>
            <img src={heart} alt="" className='likeIcon' onClick={likeHandler} />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="posetcCmentText">{Posts?.comment} coments </span>
          </div>
        </div>
      </div>
   </div>
  )
}
