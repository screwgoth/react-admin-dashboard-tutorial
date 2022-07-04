import React from 'react'
import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Featured = () => {
  return (
	<div className='featured'>
    <div className='top'>
      <h1 className='title'>Total Revenue</h1>
      <MoreVertIcon fontSize='small' className='icons'/>
    </div>
    <div className='bottom'>
      <div className='featuredChart'>
        <CircularProgressbar value={70} text={'70%'} strokeWidth={5}/>
      </div>
      <p className='title'>Total sales made today</p>
      <p className='amount'>$1,000</p>
      <p className='desc'>
        Previous transaction processing. Last payment may not be included.
      </p>
      <div className='summary'>
        <div className='item'>
          <div className='itemTitle'>Target
            <div className='itemResult positive'>
              <KeyboardArrowUpOutlinedIcon fontSize='small' className='icons'/>
              <div className='resultAmount'>$15,000</div>
            </div>
          </div>
        </div>
        <div className='item'>
          <div className='itemTitle'>Last Week
            <div className='itemResult negative'>
              <KeyboardArrowDownIcon fontSize='small' className='icons'/>
              <div className='resultAmount'>$15,000</div>
            </div>
          </div>
        </div>
        <div className='item'>
          <div className='itemTitle'>Last Month
            <div className='itemResult negative'>
              <KeyboardArrowDownIcon fontSize='small' className='icons'/>
              <div className='resultAmount'>$15,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Featured