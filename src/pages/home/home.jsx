import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Sidebar from '../../components/sidebar/sidebar'
import Widget from '../../components/widgets/widget'
import Featured from '../../components/featured/featured'
import Chart from '../../components/chart/chart'
import BasicTable from '../../components/table/table'
import "./home.scss"

const Home = () => {
  return (
	<div className="home">
		<Sidebar />
		<div className='homeContainer'>
			<Navbar/>
			<div className='widgets'>
				<Widget type='user' />
				<Widget type='order'/>
				<Widget type='earning'/>
				<Widget type='balance'/>
			</div>
			<div className='charts'>
				<Featured />
				<Chart />
			</div>
			<div className='listContainer'>
				<div className='listTitle'>Latest Transactions</div>
				<BasicTable />
			</div>
		</div>
	</div>
  )
}

export default Home