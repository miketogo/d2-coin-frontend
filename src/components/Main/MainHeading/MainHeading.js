import React from "react";

import video from '../../../assets/video/main-heading-video.mp4';

import './MainHeading.css';

function MainHeading() {


  return (
    <section className="main-heading">
      <div className="main-heading__video-darcker">

      </div>
      <video className='main-heading__video' autoPlay loop muted>
        <source src={video} type='video/mp4' />
      </video>

      <div className="main-heading__content">
        <h2 className="main-heading__title">Diamond market reimagined.</h2>
        <p className="main-heading__text">Through simple, secure, and scalable technology, DRC empowers millions to invent and explore new experiences.Business, creativity, and community are being reimagined for a more sustainable and inclusive future.</p>
        {/* <div className="main-heading__links">
          <a target="_blank" rel="noreferrer" href="/#" className="main-heading__link">
            Build on DRC network
          </a>
          <div className="main-heading__second-links">
            <a target="_blank" rel="noreferrer" href="/#" className="main-heading__link main-heading__link_gray">
              buy with Euros
            </a>
            <a target="_blank" rel="noreferrer" href="/#" className="main-heading__link main-heading__link_gray">
              buy with crypto
            </a>
          </div>

        </div> */}
      </div>

    </section>
  );
}

export default MainHeading;
