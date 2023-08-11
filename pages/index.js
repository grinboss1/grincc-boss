import React from 'react';
import RightArrow from "../assets/icons/rightArrow";
import Check from "../assets/icons/check";
import Link from 'next/link';
import UserIcon from "../assets/icons/userIcon";
import UserIcon2 from "../assets/icons/userIcon2";
import Icon3 from '../assets/icons/Icon3'; // Adjust the path to the location of Icon3
import Icon4 from '../assets/icons/Icon4';
import Icon5 from '../assets/icons/Icon5';
import Icon6 from '../assets/icons/Icon6';

function Index(props) {
  return (
    <section className="text-gray-600 dark:bg-text-300 body-font">
      <div className="my-container">
        <h1 className="header-1">Grin Community Council</h1>
        <p>Grin Community Council is <a className="text-primary" href="https://forum.grin.mw/t/call-for-grin-community-candidates-for-additional-fund-granting-control/8521/13">formed</a> from valued community members with remarkable contributions to Grin in 2021 May.
          Council's main task is to control and direct <i>Grin Community Fund </i> to support grin projects, bounties and community activities. Current council members are:</p>

           <div className="py-4">
  <div className="icons-container">
  <ul className="pl-4 pb-4" style={{ margin: '0px', padding: '0px' }}>
  
  <li className="icon-container">
  <div className="icon-wrapper">
    <Icon3 className="icon-class" />
    <span className="icon-label">anynomous <span></span></span>
  </div>
</li>

  
   <li className="icon-container">
  <div className="icon-wrapper">
    <Icon4 className="icon-class" />
    <span className="icon-label">mcmmike <span></span></span>
  </div>
</li>

 <li className="icon-container">
  <div className="icon-wrapper">
    <Icon5 className="icon-class" />
    <span className="icon-label">future3000 <span></span></span>
  </div>
</li>

   <li className="icon-container">
  <div className="icon-wrapper">
    <Icon6 className="icon-class" />
    <span className="icon-label">mwgrin_fr <span></span></span>
  </div>
</li>

  
    


     




            </div>
        </section>

    );
}

export default Index;
