import React, { Component,Fragment } from 'react';

import "./nav.css"
import logo from '../../images/logo.png'
import notification from '../../images/notification.png'
import inbox from '../../images/inbox.png'
import video from '../../images/video.png'
import search from '../../images/search.png'
import profilepic from '../../images/profile-pic.png'
import feedbackimg from '../../images/feedback.png'
import arrow from '../../images/arrow.png'
import setting from '../../images/setting.png'
import help from '../../images/help.png'
import display from '../../images/display.png'
import logout from '../../images/logout.png'


class  Nav extends Component {
  
  modeTheme(){
    const dark=document.querySelector('#dark-btn')
    dark.classList.toggle('dark-btn-on')
    document.body.classList.toggle('dark-theme')
      if (localStorage.getItem("theme")=='light'){
      localStorage.setItem("theme","dark")
    }else{
      localStorage.setItem("theme","light")
    }
    
  }
  handlclick(){
    // const nui=document.querySelector('.nav-user-icon')
    const nuii=document.querySelector('.sttings-menu')
    nuii.classList.toggle('sttingshhh')
  }
  render(){
  

    return (
    <Fragment>
   <nav id='nav'>
      <div className='nav-left'>
        <img src={logo} className='logo'></img>
        <ul>
          <li><img src={notification} alt=""/></li>
          <li><img src={inbox} alt=""/></li>
          <li><img src={video} alt=""/></li>
        </ul>
      </div>
      <div className='nav-right'>
        <div className='search-box'>
          <img src={search} ></img>
          <input type='text' placeholder='Search'></input>
        </div>
        <div className='nav-user-icon online' onClick={this.handlclick.bind(this)} >
          <img src={profilepic} alt=""/>
        </div>
      </div>
{/*---------- settings-menu-------- */}

      <div className="sttings-menu  " >
        <div id="dark-btn" onClick={this.modeTheme.bind(this)} >
          <span></span>
        </div>


        <div className="settings-menu-inner">
            <div className="user-profile">
                <img src={profilepic} alt="" />
                <div>
                    <p>Jhon Nicholson</p>
                    <a href={"#nav"}>See your profile</a>
                </div>
            </div>
            <hr />
         <div className="user-profile">
                <img src={feedbackimg} alt="" />
                <div>
                    <p>Give Feedback</p>
                    <a href={"#nav"}>Help us to improve the new design</a>
                </div>
            </div>
            <hr />
            <div className="settings-links">
              <img src={setting} className='settings-icon' alt="" />
              <a href={"#nav"}>Settings & Privacy <img src={arrow} width="10px" alt="" /></a>
            </div>
            <div className="settings-links">
              <img src={help} className='settings-icon' alt="" />
              <a href={"#nav"}>Help & Support <img src={arrow} width="10px" alt="" /></a>
            </div>
            <div className="settings-links">
              <img src={display} className='settings-icon'  alt=""/>
              <a href={"#nav"}>Display & Accessibility <img src={arrow} width="10px" alt="" /></a>
            </div>
            <div className="settings-links">
              <img src={logout} className='settings-icon' alt=""/>
              <a href={"#nav"}>Lougout <img src={arrow} width="10px" alt="" /></a>
            </div>
        </div>
       
      </div>
</nav>
    </Fragment>
    
  )
}

}

export default Nav
