import React from 'react'
import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const BasicTable = () => {
  const rows = [
	{
		id: 1231232,
		product: 'Nitor v200',
		img: 'https://www.rollingstone.com/wp-content/uploads/2021/04/best-handheld-vacuum.jpg?resize=1800,1200&w=450',
		customer: 'John Snow',
		date: '1 March 2019',
		amount: 785,
		method: 'Cash on Delivery',
		status: 'Approved',
	},
	{
		id: 455656,
		product: 'Playstation 5',
		img: 'https://i0.wp.com/www.alphr.com/wp-content/uploads/2017/10/tiny_ps4_pad_for_children_-_1.png?resize=500%2C217&ssl=1',
		customer: 'Michael Smith',
		date: '7 May 2019',
		amount: 1500,
		method: 'Paypal',
		status: 'Pending',

	}
  ];
  return (
	<TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
			<TableCell className='tableCell'>Customer</TableCell>
			<TableCell className='tableCell'>Date</TableCell>
			<TableCell className='tableCell'>Amount</TableCell>
			<TableCell className='tableCell'>Payment Method</TableCell>
			<TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className='tableCell'>{row.id}</TableCell>
              <TableCell className='tableCell'>
				<div className='cellWrapper'>
				<img src={row.img} alt='product' className='image'/>
				{row.product}
				</div>
			  </TableCell>
              <TableCell className='tableCell'>{row.customer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
			  <TableCell className='tableCell'>{row.method}</TableCell>
			  <TableCell className='tableCell'>
				<span className={`status ${row.status}`}>{row.status}</span>
			  </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BasicTable