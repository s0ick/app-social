import React from 'react';
import style from'./ProfileInfo.module.css';
import ProfileDescp from './ProfileDescp';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import defaultUserImg from '../../../assets/images/user_null.png';

import FaceBook from '../../../assets/images/contacts/facebook.svg';
import VK from '../../../assets/images/contacts/vk.svg';
import YouTube from '../../../assets/images/contacts/youtube.svg';
import GitHub from '../../../assets/images/contacts/github.svg';
import Instagram from '../../../assets/images/contacts/inst.svg';
import WebSite from '../../../assets/images/contacts/website.svg';
import Twitter from '../../../assets/images/contacts/twitter.svg';

const ProfileInfo = (props) => {
  let statusJob = '';
  if(props.profile.lookingForAJob) {
    statusJob = props.profile.lookingForAJobDescription;
  }

  const Links = [];
  if(!!props.profile.contacts.facebook) 
    Links.push(<a href={`https://${props.profile.contacts.facebook}`} className={style.link}><img src={FaceBook} alt="FaceBook"/></a>)
  if(!!props.profile.contacts.website) 
    Links.push(<a href={`https://${props.profile.contacts.website}`} className={style.link}><img src={WebSite} alt="WebSite"/></a>)
  if(!!props.profile.contacts.vk) 
    Links.push(<a href={`https://${props.profile.contacts.vk}`} className={style.link}><img src={VK} alt="VK"/></a>)
  if(!!props.profile.contacts.twitter) 
    Links.push(<a href={`https://${props.profile.contacts.twitter}`} className={style.link}><img src={Twitter} alt="Twitter"/></a>)
  if(!!props.profile.contacts.instagram) 
    Links.push(<a href={`https://${props.profile.contacts.instagram}`} className={style.link}><img src={Instagram} alt="Instagram"/></a>)
  if(!!props.profile.contacts.youtube) 
    Links.push(<a href={`https://${props.profile.contacts.youtube}`} className={style.link}><img src={YouTube} alt="YouTube"/></a>)
  if(!!props.profile.contacts.github) 
    Links.push(<a href={`https://${props.profile.contacts.github}`} className={style.link}><img src={GitHub} alt="GitHub"/></a>)

  let AboutMe = <></>;
  if(!!props.profile.aboutMe) {
    AboutMe = <ProfileDescp subtitle="About me:" info={props.profile.aboutMe} />;
  } 
  
  let Job = <></>;
  if(props.profile.lookingForAJob && !!props.profile.lookingForAJobDescription) {
    Job = <ProfileDescp subtitle="Job:" info={statusJob} />
  }
  
  let ava = '';
  if(!!props.profile.photos.large) {
    ava = props.profile.photos.large;
  } else ava = defaultUserImg;

  return (
    <div className={style.info}>
      <div className={style.block}>
        <div className={style.description}>
          {AboutMe}
        </div>
        <div className={style.mainColumn}>
          <div className={style.avatar__image}>
            <img className={style.avatar} src={ava} alt="ava"/>
          </div>
          <h2 className={style.fullName}>{props.profile.fullName}</h2>
          <div className={style.locations}>
            <span>Russian</span>
            <span>, </span>
            <span>Moscow</span>
          </div>
          <div className={style.contacts}>
            {Links}
          </div>
        </div>
        <div className={style.description}>
          {Job}
          <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        </div>
      </div>
      <div className={style.background__image}>
        <img className={style.image} src="https://s1.1zoom.ru/big0/596/Evening_Forests_Mountains_Firewatch_Campo_Santo_549147_1280x720.jpg"/>
      </div>
    </div>
  );
}

export default ProfileInfo;