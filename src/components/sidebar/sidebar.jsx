import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PsychologyIcon from '@mui/icons-material/Psychology';

const Sidebar = () => {
  return (
	<div className='sidebar'>
    <div className='top'>
      <span className='logo'>lamaadmin</span>
    </div>
    <hr />
    <div className='center'>
      <ul>
        <p className='title'>MAIN</p>
        <li>
          <DashboardIcon className='icons'/>
          <span>Dashboard</span>
        </li>
        <p className='title'>LISTS</p>
        <li>
          <PersonOutlineIcon className='icons'/>
          <span>Users</span>
        </li>
        <li>
          <StoreIcon className='icons'/>
          <span>Products</span>
        </li>
        <li>
          <CreditCardIcon className='icons'/>
          <span>Orders</span>
        </li>
        <li>
          <LocalShippingIcon className='icons'/>
          <span>Delivery</span>
        </li>
        <p className='title'>USEFUL</p>
        <li>
          <InsertChartIcon className='icons'/>
          <span>Stats</span>
        </li>
        <li>
          <NotificationsNoneIcon className='icons'/>
          <span>Notifications</span>
        </li>
        <p className='title'>SERVICE</p>
        <li>
          <SettingsApplicationsIcon className='icons'/>
          <span>System Health</span>
        </li>
        <li>
          <PsychologyIcon className='icons'/>
          <span>Logs</span>
        </li>
        <li>
          <SettingsSystemDaydreamIcon className='icons'/>
          <span>Settings</span>
        </li>
        <p className='title'>USER</p>
        <li>
          <AccountCircleIcon className='icons'/>
          <span>Profile</span>
        </li>
        <li>
          <LogoutIcon className='icons'/>
          <span>Logout</span>
        </li>
      </ul>
    </div>
    <div className='bottom'>
      <div className='colorOption'></div>
      <div className='colorOption'></div>
    </div>
  </div>
  )
}

export default Sidebar