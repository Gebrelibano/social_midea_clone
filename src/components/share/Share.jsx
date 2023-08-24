import './share.css'
import {MdPermMedia} from 'react-icons/md'
import {MdLabel} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'
import {MdEmojiEmotions} from 'react-icons/md'
import dan from '../../asset/dan.jpg'

export default function Share() {
  return (
    <div className='share'>
      <div className='shareWrapper'>
        <div className="shareTop">
          <img src={dan} alt="" className='shareprofieleImag' />
          <input type="text"  placeholder="what's in your mind think?" className='shareInput' />
        </div>
         <hr className='sharehr'/>
        <div className="shareBottom">
        <div className="shareOptions">
            <div className="shareOption">
                <MdPermMedia 
                 style={{color:"tomato"}}
                className='shareIcon'/>
                <span className='shareOptionText'>photo or video</span>
            </div>
            <div className="shareOption">
                <MdLabel 
                
                className='shareIcon'
                style={{color:"blue"}}
                />
                <span className='shareOptionText'>Tag</span>
            </div>
            <div className="shareOption">
                <MdLocationOn
                className='shareIcon'
                style={{color:"green"}}/>
                <span className='shareOptionText'>location</span>
            </div>
            <div className="shareOption">
                <MdEmojiEmotions 
                className='shareIcon'
                style={{color:"golgen"}}
                />
                <span className='shareOptionText'>Feelings</span>
            </div>
        </div>
        <button className='shareButton'>share</button>
      </div>
    </div>
</div>
  )
}
