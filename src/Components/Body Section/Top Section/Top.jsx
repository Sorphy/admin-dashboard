import React from 'react';
import './top.scss'

import {BiSearchAlt} from 'react-icons/bi'
import {TbMessageCircle} from 'react-icons/Tb'
import {IoMdNotificationsOutline} from 'react-icons/io'

import img from '../../../Assets/admin.png';

const Top = () => {
  return (
    <div className="topSect">
      <div className="headerSect">
        <div className="title ">
          <h1>Welcome to Craft-Connect</h1>
          <p>Hi, Welcome back</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder='Search Dashboard' />
          <BiSearchAlt className='icon'/>
        </div>
        <div className="adminDiv flex">
          <TbMessageCircle className='icon'/>
          <IoMdNotificationsOutline className='icon'/>
          <div className="adminImage">
            <img src={img} alt="Admin Image" />
          </div>
        </div>

      </div>

      {/* <div className="cardSect flex">
        <div className="righCard flex">
          <h1>Create and Provide Amazing Services</h1>
          <p>Making the need for quick fixes simpler, and easily met</p>

          <div className="buttons flex">
            <button className='btn'>Explore More</button>
            <button className='btn transparent'>Top Artisans</button>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>Stats</h1>

              <div className="flex">
                <span>
                  Today <br /> <small>11 Orders</small>
                </span>
                <span>
                  This Month  <br /> <small>281 Orders</small>
                </span>
              </div>

                <span className='flex link'>

                </span>

            </div>
          </div>
        </div>

      </div> */}
    </div>
  );
}

export default Top;
