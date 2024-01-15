import React from 'react'
import { useNavigate } from 'react-router-dom';
import TableComponent from './Table'

function JobHouse() {
  const columns = ['Job', 'Name', 'Accommodation', 'City', 'Salary', 'Rent'];
  const data = [
    { Job: 'Engineer', Name: 'John Doe', Accommodation: 'Apartment', City: 'New York', Salary: 80000, Rent: 1500 },
    { Job: 'Designer', Name: 'Jane Smith', Accommodation: 'House', City: 'Los Angeles', Salary: 75000, Rent: 2000 },
    { Job: 'Developer', Name: 'Bob Johnson', Accommodation: 'Condo', City: 'San Francisco', Salary: 90000, Rent: 1800 },
    { Job: 'Manager', Name: 'Alice Williams', Accommodation: 'Townhouse', City: 'Seattle', Salary: 95000, Rent: 1700 },
    { Job: 'Analyst', Name: 'Charlie Brown', Accommodation: 'Apartment', City: 'Chicago', Salary: 70000, Rent: 1600 },
    { Job: 'Architect', Name: 'Eva Davis', Accommodation: 'House', City: 'Boston', Salary: 85000, Rent: 2200 },
    { Job: 'Accountant', Name: 'Frank White', Accommodation: 'Condo', City: 'Austin', Salary: 80000, Rent: 2000 },
    { Job: 'Marketing', Name: 'Grace Miller', Accommodation: 'Townhouse', City: 'Denver', Salary: 90000, Rent: 1800 },
    { Job: 'Sales', Name: 'Harry Lee', Accommodation: 'Apartment', City: 'Miami', Salary: 75000, Rent: 1600 },
    { Job: 'HR', Name: 'Ivy Wang', Accommodation: 'House', City: 'Phoenix', Salary: 70000, Rent: 1700 },
    { Job: 'Engineer', Name: 'Jack Turner', Accommodation: 'Condo', City: 'Atlanta', Salary: 85000, Rent: 1900 },
    { Job: 'Designer', Name: 'Lily Chen', Accommodation: 'Townhouse', City: 'Dallas', Salary: 80000, Rent: 2000 },
    { Job: 'Developer', Name: 'Mark Davis', Accommodation: 'Apartment', City: 'Houston', Salary: 90000, Rent: 1800 },
  ];

  const navigate = useNavigate();

  function handleClick() {
    navigate('/job_house/123')
  }

  return (
    <div className="flex-grow">
      <h1 className="hidden lg:block text-[24px] font-semibold mb-12">Job & House</h1>
      <TableComponent columns={columns} data={data} handleClick={handleClick} />
    </div>
  )
}

export default JobHouse