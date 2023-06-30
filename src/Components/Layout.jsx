import SideBar from "./SideBar Section/Sidebar";
import Body from "./Body Section/Body";
import React from 'react';

const Layout = () => {
  return (
    <div className='container'>
      <SideBar/>
      <Body/>
    </div>
  );
}

export default Layout;