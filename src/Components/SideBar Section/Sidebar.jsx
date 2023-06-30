import React from 'react'
import './sidebar.scss'
import logo from '../../Assets/hor.png'
import {IoMdSpeedometer} from 'react-icons/io';
import {HiOutlineUsers} from 'react-icons/hi';
import {GrUserWorker} from 'react-icons/gr';
import {BsTrophy} from 'react-icons/bs';
import {AiOutlinePieChart} from 'react-icons/ai';
import {BiTrendingUp} from 'react-icons/bi';
import {MdOutlinePermContactCalendar} from 'react-icons/md';
import {BsCreditCard2Front} from 'react-icons/bs';
import {BsQuestionCircle} from 'react-icons/bs';



const Sidebar = () => {
  return (
    <div className='sideBar grid'>

      <div className='logoDiv flex'>
        <img src={logo} alt="Image Name" />
        <h2>Craft-Connect</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          QUICK MENU
        </h3>
        <ul className="menuLists grid">

          <li className="listItem">
            <a href="dashboard" className="menuLink flex">
              <GrUserWorker className='icon'/> 
              <span className='smallText'>
                Artisans
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="products" className="menuLink flex">
              <BsTrophy className='icon'/> 
              <span className='smallText'>
                Products
              </span>
            </a>
          </li>

        </ul>
      </div>

      {/* <div className="settingsDiv">
        <h3 className="divTitle">
          SETTINGS
        </h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <AiOutlinePieChart className='icon'/> 
              <span className='smallText'>
                Charts
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BiTrendingUp className='icon'/> 
              <span className='smallText'>
                Trends
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlinePermContactCalendar className='icon'/> 
              <span className='smallText'>
                Contact
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BsCreditCard2Front className='icon'/> 
              <span className='smallText'>
                Billing
              </span>
            </a>
          </li>

        </ul>
      </div> */}

      <div className="sideBarCard">
        <BsQuestionCircle className="icon"/>
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Help Center</h3>
          <p>Having trouble using CraftConnect, please reach out to us for more answers to your questions.</p>
          <button className='btn'>Go to help center</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar