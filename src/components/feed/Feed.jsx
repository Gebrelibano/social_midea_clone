import React from 'react'
import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
import {Posts} from "../../dummyData";
export default function Feed() {
  return (
    <div className='feed'>
    <div className="feedwrapper">
      <Share/>
      {Posts.map(p=>(
        <Post key={p.id} Posts={p}/>
      ))}
      
    </div>
    </div>
  )
}
