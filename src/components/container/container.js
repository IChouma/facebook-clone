import React, {Component, Fragment } from 'react';
import Main from '../main-content/main';

import "./container.css"
import news from '../../images/news.png'
import friends from '../../images/friends.png'
import group from '../../images/group.png'
import marketplace from '../../images/marketplace.png'
import watch from '../../images/watch.png'
import shortcut1 from '../../images/shortcut-1.png'
import shortcut2 from '../../images/shortcut-2.png'
import shortcut3 from '../../images/shortcut-3.png'
import shortcut4 from '../../images/shortcut-4.png'
import Advertisement from '../../images/advertisement.png'
import member1 from '../../images/member-1.png'
import member2 from '../../images/member-2.png'
import member3 from '../../images/member-3.png'



 class  Container  extends Component  {
    render(){
  return (
    <Fragment>
     <div id='container' className='container'>
         {/* ------------left-sidebar ---------------*/}
         <div className='left-sidebar'>
             <div className='imp-links'>
                 <a href={"#container"} > <img src={news} alt=""/><Latest News</a>
                 <a href={"#container"} > <img src={friends}alt=""/>Friends</a>
                 <a href={"#container"} > <img src={group} alt="">Group</a>
                 <a href={"#container"} > <img src={marketplace} alt=""/>Market Place</a>
                 <a href={"#container"} > <img src={watch} alt=""/>Watch</a>
                 <a href={"#container"} >See More</a>
             </div>
             <div className='shortcut-links'>
                 <p>Your Shortcuts</p>
                 <a href={"#container"}><img src={shortcut1} alt=""/>Web Developpers</a>
                 <a href={"#container"}><img src={shortcut2} alt=""/>Web Design course</a>
                 <a href={"#container"}><img src={shortcut3} alt=""/>Full stack Developpement</a>
                 <a href={"#container"}><img src={shortcut4} alt=""/>Website Experts</a>
             </div>
         </div>
         {/* ------------main-content ---------------*/}
      
            <Main/>
        
         {/* ------------right-sidebar ---------------*/}
         <div className='right-sidebar'>
             <div className="sidebar-title">
                <h4>Events</h4>
                <a href={"#container"}>See All</a>
             </div>
             <div className="event">
                    <div className="left-event">
                        <h3>18</h3>
                        <span>March</span>
                    </div>
                    <div className="rigth-event">
                        <h4>Social Media</h4>
                        <p><i className="fas fa-map-marker-alt"></i>Willson Tach Park</p>
                        <a href={"#container"}>More info</a>
                </div>
             </div>
             <div className="event">
                    <div className="left-event">
                        <h3>22</h3>
                        <span>June</span>
                    </div>
                    <div className="rigth-event">
                        <h4>Mobile Marketing</h4>
                        <p><i className="fas fa-map-marker-alt"></i>Willson Tach Park</p>
                        <a href={"#container"}>More info</a>
                </div>
             </div>
             <div className="sidebar-title">
                <h4>Advrtisement</h4>
                <a href={"#container"}>Close</a>
             </div>
             <img src={Advertisement} className="sidebar-ads" />
              <div className="sidebar-title">
                <h4>Conversation</h4>
                <a href={"#container"}>Hide Chat</a>
             </div>
             <div className="online-list">
                <div className="online">
                    <img src={member1} alt="" />
                </div>
                <p>Alison Mina</p>
             </div>
             <div className="online-list">
                <div className="online">
                    <img src={member2} alt="" />
                </div>
                <p>Jackson Aston</p>
             </div>
             <div className="online-list">
                <div className="online">
                    <img src={member3} alt="" />
                </div>
                <p>Samona Rose</p>
             </div>
         </div>
     </div>
     <div className="footer">Copyright 2022 - CHOUMA</div>
    </Fragment>
    
  )
}
 }
export default Container