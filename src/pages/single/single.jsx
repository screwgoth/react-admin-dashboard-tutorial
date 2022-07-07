import React from 'react'
import './single.scss'
import Sidebar from '../../components/sidebar/sidebar'
import Navbar from '../../components/navbar/navbar'
import Chart from '../../components/chart/chart'
import BasicTable from '../../components/table/table'
const Single = () => {
  return (
	  <div className='single'>
      <Sidebar />
      <div className='singleContainer'>
        <Navbar />
        <div className='top'>
          <div className='left'>
            <div className='editButton'>Edit</div>
            <h1 className='title'>Information</h1>
            <div className='item'>
              <img
                src='https://yt3.ggpht.com/a/AGF-l79QBan6rRrlTQgZStENRhyS6mA7vMnB-oF29g=s900-mo-c-c0xffffffff-rj-k-no'
                alt=''
                className='itemImg'
              />
              <div className='details'>
                <h1 className='itemTitle'>John Snow</h1>
                <div className='detailItem'>
                  <span className='itemKey'>Email:</span>
                  <span className='itemValue'>john.snow@got.com</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Phone:</span>
                  <span className='itemValue'>+91 234234234</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Address:</span>
                  <span className='itemValue'>123, Black Castle, Border Wall</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Country:</span>
                  <span className='itemValue'>Westeros</span>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <Chart aspect={3 / 1} title="User Spending(Last 6 months)" />
          </div> 
        </div>
        <div className='bottom'>
        <h1 className='title'>Last Transactions</h1>
        <BasicTable />
        </div>
      </div>
    </div>
  )
}

export default Single