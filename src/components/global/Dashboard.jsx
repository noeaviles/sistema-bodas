import React from 'react'
import { Outlet } from 'react-router-dom'
import AsideMenu from './AsideMenu'
import HeaderDashboard from './HeaderDashboard'

const Dashboard = ( props ) => {
  return (
    <div className='Dashboard'>
      <HeaderDashboard/>
      <Outlet />
      <AsideMenu/>
    </div>
  )
}

export default Dashboard