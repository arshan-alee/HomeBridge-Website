import React from 'react'
import { useNavigate } from 'react-router-dom';
import TableComponent from '../Table'

function MyPageF2R() {
  const columns = ['Name', 'Gender', 'Country', 'City', 'Phone Number', 'E-mail', 'Message'];
  const data = [
    { Name: 'John Doe', Gender: 'Male', Country: 'USA', City: 'New York', 'Phone Number': '123-456-7890', 'E-mail': 'john@example.com', Message: 'Hello!' },
    { Name: 'Jane Smith', Gender: 'Female', Country: 'Canada', City: 'Toronto', 'Phone Number': '987-654-3210', 'E-mail': 'jane@example.com', Message: 'Hi there!' },
    { Name: 'Bob Johnson', Gender: 'Male', Country: 'UK', City: 'London', 'Phone Number': '456-789-0123', 'E-mail': 'bob@example.com', Message: 'Greetings!' },
    { Name: 'Alice Williams', Gender: 'Female', Country: 'Australia', City: 'Sydney', 'Phone Number': '789-012-3456', 'E-mail': 'alice@example.com', Message: 'Good day!' },
  ];

  const navigate = useNavigate();

  function handleClick() {
    navigate('/mypage/f2r-application')
  }

  return (
    <div className="flex-grow">
      <h1 className="text-[22px] font-semibold mb-6">F-2-R application</h1>
      <TableComponent columns={columns} data={data} handleClick={handleClick} />
    </div>
  )
}

export default MyPageF2R