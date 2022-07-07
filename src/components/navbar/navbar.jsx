import React from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
	<div className='navbar'>
    <div className='wrapper'>
      <div className='search'>
        <input type='text' placeholder='Search...' />
        <SearchIcon />
      </div>
      <div className='items'>
        <div className='item'>
          <LanguageIcon className='icon' />
          English
        </div>
        <div className='item'>
          <DarkModeIcon className='icon'/>
          
        </div>
        <div className='item'>
          <FullscreenExitIcon className='icon'/>
          
        </div>
        <div className='item'>
          <NotificationsNoneIcon className='icon'/>
          <div className='counter'>
            1
          </div>
        </div>
        <div className='item'>
          <ChatBubbleOutlineIcon className='icon'/>
          <div className='counter'>
            2
          </div>
        </div>
        <div className='item'>
          <ListIcon className='icon'/>
          
        </div>
        <div className='item'>
          <Link to='/login' style={{textDecoration: "none"}}>
          <img 
            src='https://media.gettyimages.com/photos/beauty-portrait-of-young-woman-picture-id1309405076?s=612x612'
            alt='random'
            className='avatar'/>
            </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar