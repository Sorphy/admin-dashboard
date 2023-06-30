import React from 'react'
import './body.scss'
import Top from './Top Section/Top';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className='mainContent'>
      <Top/>
      <div className='bottom flex'>
        {/* <Activity/> */}
        <Outlet/>
      </div>
    </div>
  )
}

export default Body