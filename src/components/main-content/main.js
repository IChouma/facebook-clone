import React, {Component, Fragment } from 'react';
import "./main.css"
import upload from '../../images/upload.png'
import member1 from '../../images/member-1.png'
import member2 from '../../images/member-2.png'
import member3 from '../../images/member-3.png'
import member4 from '../../images/member-4.png'
import profilepic from '../../images/profile-pic.png'
import video from '../../images/live-video.png'
import photo from '../../images/photo.png'
import feeling from '../../images/feeling.png'
import feedimage1 from '../../images/feed-image-1.png'
import feedimage2 from '../../images/feed-image-2.png'
import feedimage3 from '../../images/feed-image-3.png'
import feedimage4 from '../../images/feed-image-4.png'
import feedimage5 from '../../images/feed-image-5.png'
import likeblue from '../../images/like-blue.png'
import like from '../../images/like.png'
import comment from '../../images/comments.png'
import share from '../../images/share.png'




class  Main extends Component  {
    render(){
  return (
    <Fragment>
         <div id='main' className='main-content'>
           <div className="story-gallery">
            <div className="story story1">
                <img src={upload} alt="" />
                <p>Post Story</p>
            </div>
            <div className="story story2">
                <img src={member1} alt="" />
                <p>Alison</p>
            </div>
            <div className="story story3">
                <img src={member2} alt="" />
                <p>Jackson</p>
            </div>
            <div className="story story4">
                <img src={member3} alt="" />
                <p>Samona</p>
            </div>
            <div className="story story5">
                <img src={member4} alt="" />
                <p>Jhon Done</p>
            </div>
           
           </div>
           <div className="write-post-container">
            <div className="user-profile">
                <img src={profilepic} alt="" />
                <div>
                    <p>Jhon Nicholson</p>
                    <small>Public <i className='fas fa-caret-down'></i></small>
                </div>
            </div>
            
            <div className="post-input-container">
                <textarea  rows="3" placeholder="what's your mind, Jhon?"></textarea>
                <div className="add-post-links">
                    <a href={"#main"}><img src={video} />Live Video</a>
                    <a href={"#main"}><img src={photo} />Photo/Video</a>
                    <a href={"#main"}><img src={feeling} />Feeling/Activities</a>
                </div>
            </div>

           </div>
           <div className="post-container">
            <div className='post-row'>
                 <div className="user-profile">
                <img src={profilepic} />
                <div>
                    <p>Jhon Nicholson</p>
                    <span>June 24 2022, 08:30</span>
                </div>
            </div>
            <a href={"#main"}><i className='fas fa-caret-down'></i></a>
            </div>
            
            <p className='post-text'>Subscribe <span>@Easy Tutorials</span> Youtube Channel to watch more videos
                 on websites devleppement and UI design.
                 <a href={"#main"}>#EasyTutorials</a> <a href=""> #YoutubeChannel</a></p>
                 <img src={feedimage1} className='post-img' alt=""/>
                 <div className="post-row">
                    <div className="acitity-icons">
                      <div><img src={likeblue} alt="" />120</div>
                      <div><img src={comment} alt=""/>43</div>
                      <div><img src={share} alt=""/>25</div>
                    </div>
                    <div className="post-profile-icon">
                        <img src={profilepic} /><i className='fas fa-ellipsis'></i>
                    </div>
                 </div>
           </div>
           <div className="post-container">
            <div className='post-row'>
                 <div className="user-profile">
                <img src={profilepic} alt="" />
                <div>
                    <p>Jhon Nicholson</p>
                    <span>June 24 2022, 08:30</span>
                </div>
            </div>
            <a href={"#main"}><i className='fas fa-caret-down'></i></a>
            </div>
            
            <p className='post-text'>Subscribe <span>@Easy Tutorials</span> Youtube Channel to watch more videos
                 on websites devleppement and UI design.
                 <a href={"#main"}>#EasyTutorials</a> <a href="#main"> #YoutubeChannel</a></p>
                 <img src={feedimage2} className='post-img' />
                 <div className="post-row">
                    <div className="acitity-icons">
                      <div><img src={like} alt="" />120</div>
                      <div><img src={comment} alt="" />43</div>
                      <div><img src={share} alt="" />25</div>
                    </div>
                    <div className="post-profile-icon">
                        <img src={profilepic} alt="" /><i className='fas fa-ellipsis'></i>
                    </div>
                 </div>
           </div>
           <div className="post-container">
            <div className='post-row'>
                 <div className="user-profile">
                <img src={profilepic} alt="" />
                <div>
                    <p>Jhon Nicholson</p>
                    <span>June 24 2022, 08:30</span>
                </div>
            </div>
            <a href={"#main"}><i className='fas fa-caret-down'></i></a>
            </div>
            
            <p className='post-text'>Subscribe <span>@Easy Tutorials</span> Youtube Channel to watch more videos
                 on websites devleppement and UI design.
                 <a href={"#main"}>#EasyTutorials</a> <a href=""> #YoutubeChannel</a></p>
                 <img src={feedimage3} className='post-img' alt="" />
                 <div className="post-row">
                    <div className="acitity-icons">
                      <div><img src={likeblue} alt="" />120</div>
                      <div><img src={comment} alt="" />43</div>
                      <div><img src={share} alt="" />25</div>
                    </div>
                    <div className="post-profile-icon">
                        <img src={profilepic} alt="" /><i className='fas fa-ellipsis'></i>
                    </div>
                 </div>
           </div>
           <div className="post-container">
            <div className='post-row'>
                 <div className="user-profile">
                <img src={profilepic} alt="" />
                <div>
                    <p>Jhon Nicholson</p>
                    <span>June 24 2022, 08:30</span>
                </div>
            </div>
            <a href={"#main"}><i className='fas fa-caret-down'></i></a>
            </div>
            
            <p className='post-text'>Subscribe <span>@Easy Tutorials</span> Youtube Channel to watch more videos
                 on websites devleppement and UI design.
                 <a href={"#main"}>#EasyTutorials</a> <a href="#main"> #YoutubeChannel</a></p>
                 <img src={feedimage4} className='post-img' alt="" />
                 <div className="post-row">
                    <div className="acitity-icons">
                      <div><img src={likeblue} alt="" />120</div>
                      <div><img src={comment}  alt="" />43</div>
                      <div><img src={share} alt="" />25</div>
                    </div>
                    <div className="post-profile-icon">
                        <img src={profilepic} alt="" /><i className='fas fa-ellipsis'></i>
                    </div>
                 </div>
           </div>
           <div className="post-container">
            <div className='post-row'>
                 <div className="user-profile">
                <img src={profilepic} alt=""/>
                <div>
                    <p>Jhon Nicholson</p>
                    <span>June 24 2022, 08:30</span>
                </div>
            </div>
            <a href=""><i className='fas fa-caret-down'></i></a>
            </div>
            
            <p className='post-text'>Subscribe <span>@Easy Tutorials</span> Youtube Channel to watch more videos
                 on websites devleppement and UI design.
                 <a href={"#main"}>#EasyTutorials</a> <a href="#main"> #YoutubeChannel</a></p>
                 <img src={feedimage5} className='post-img' />
                 <div className="post-row">
                    <div className="acitity-icons">
                      <div><img src={likeblue} alt="" />120</div>
                      <div><img src={comment} alt="" />43</div>
                      <div><img src={share} alt="" />25</div>
                    </div>
                    <div className="post-profile-icon">
                        <img src={profilepic} alt="" /><i className='fas fa-ellipsis'></i>
                    </div>
                 </div>
           </div>
           <button type='button' className='load-more-btn'>Load More</button>
         </div>
    </Fragment>
  )
}
}
export default Main