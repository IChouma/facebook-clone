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
     <div className='container'>
         {/* ------------left-sidebar ---------------*/}
         <div className='left-sidebar'>
             <div className='imp-links'>
                 <a href="#" > <img src={news}></img>Latest News</a>
                 <a href="#" > <img src={friends}></img>Friends</a>
                 <a href="#" > <img src={group}></img>Group</a>
                 <a href="#" > <img src={marketplace}></img>Market Place</a>
                 <a href="#" > <img src={watch}></img>Watch</a>
                 <a href="#" >See More</a>
             </div>
             <div className='shortcut-links'>
                 <p>Your Shortcuts</p>
                 <a><img src={shortcut1}></img>Web Developpers</a>
                 <a><img src={shortcut2}></img>Web Design course</a>
                 <a><img src={shortcut3}></img>Full stack Developpement</a>
                 <a><img src={shortcut4}></img>Website Experts</a>
             </div>
         </div>
         {/* ------------main-content ---------------*/}
      
            <Main/>
        
         {/* ------------right-sidebar ---------------*/}
         <div className='right-sidebar'>
             <div className="sidebar-title">
                <h4>Events</h4>
                <a href="">See All</a>
             </div>
             <div className="event">
                    <div className="left-event">
                        <h3>18</h3>
                        <span>March</span>
                    </div>
                    <div className="rigth-event">
                        <h4>Social Media</h4>
                        <p><i className="fas fa-map-marker-alt"></i>Willson Tach Park</p>
                        <a href="">More info</a>
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
                        <a href="">More info</a>
                </div>
             </div>
             <div className="sidebar-title">
                <h4>Advrtisement</h4>
                <a href="">Close</a>
             </div>
             <img src={Advertisement} className="sidebar-ads" />
              <div className="sidebar-title">
                <h4>Conversation</h4>
                <a href="">Hide Chat</a>
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
     <div className="footer">Copyright 2022 - Ilhamati Choumati</div>
    </Fragment>
    
  )
}
 }
export default Container