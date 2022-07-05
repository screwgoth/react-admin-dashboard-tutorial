export const userColumns = [
	{ field: 'id', headerName: 'ID', width: 70 },
	{ field: 'user', headerName: 'User', width: 230, renderCell: (params) => {
		return (
			<div className="cellWithImg">
				<img className="cellImg" src={params.row.img} alt="avatar" />
				{params.row.user}
			</div>
		)
	 }},
	 { field: 'email', headerName: 'Email', width: 230 },
	 { field: 'age', headerName: 'Age', width: 100 },
	 { field: 'status', headerName: 'Status', width: 160, renderCell: (params) => {
		return (
			<div className={`cellWithStatus ${params.row.status}`}>{params.row.status}
			</div>
		)
	  }
	},
]

//temporary data
export const userRows = [
	{
		id: 1,
		username: "John Snow",
		img:'https://yt3.ggpht.com/a/AGF-l79QBan6rRrlTQgZStENRhyS6mA7vMnB-oF29g=s900-mo-c-c0xffffffff-rj-k-no',
		status: "active",
		email: "john.snow@got.com",
		age: 35

	},
	{
		id: 2,
		username: "Cersei Lannister",
		img:'https://yt3.ggpht.com/a/AGF-l79QBan6rRrlTQgZStENRhyS6mA7vMnB-oF29g=s900-mo-c-c0xffffffff-rj-k-no',
		status: "passive",
		email: "cersei.lannister@got.com",
		age: 42

	},
	{
		id: 3,
		username: "Arya Stark",
		img:'https://yt3.ggpht.com/a/AGF-l79QBan6rRrlTQgZStENRhyS6mA7vMnB-oF29g=s900-mo-c-c0xffffffff-rj-k-no',
		status: "pending",
		email: "arya.stark@got.com",
		age: 19

	},
	{
		id: 4,
		username: "Arya Stark",
		img:'https://yt3.ggpht.com/a/AGF-l79QBan6rRrlTQgZStENRhyS6mA7vMnB-oF29g=s900-mo-c-c0xffffffff-rj-k-no',
		status: "pending",
		email: "arya.stark@got.com",
		age: 19

	},
	{
		id: 5,
		username: "Arya Stark",
		img:'https://yt3.ggpht.com/a/AGF-l79QBan6rRrlTQgZStENRhyS6mA7vMnB-oF29g=s900-mo-c-c0xffffffff-rj-k-no',
		status: "active",
		email: "arya.stark@got.com",
		age: 19

	},
	{
		id: 6,
		username: "Arya Stark",
		img:'https://yt3.ggpht.com/a/AGF-l79QBan6rRrlTQgZStENRhyS6mA7vMnB-oF29g=s900-mo-c-c0xffffffff-rj-k-no',
		status: "passive",
		email: "arya.stark@got.com",
		age: 19

	},
	{
		id: 7,
		username: "Arya Stark",
		img:'https://yt3.ggpht.com/a/AGF-l79QBan6rRrlTQgZStENRhyS6mA7vMnB-oF29g=s900-mo-c-c0xffffffff-rj-k-no',
		status: "pending",
		email: "arya.stark@got.com",
		age: 19

	},
	
]