import {useState} from 'react'
import SideMenu from '../components/MyPage/SideMenu'
import MyPageF2R from '../components/MyPage/MyPageF2R'
import JobHouse from '../components/MyPage/JobHouse'
import EventTable from '../components/MyPage/EventTable'

function MyPage() {

  const [selectedOption, setSelectedOption] = useState(0);
  const columns = ['Event', 'Departure', 'Arrival', 'Price'];
  const data = [
    { Event: 'Business Meeting', Departure: 'New York', Arrival: 'Los Angeles', Price: 500 },
    { Event: 'Vacation', Departure: 'London', Arrival: 'Paris', Price: 800 },
    { Event: 'Conference', Departure: 'Tokyo', Arrival: 'Seoul', Price: 600 },
    { Event: 'Family Reunion', Departure: 'Sydney', Arrival: 'Auckland', Price: 700 },
  ];

  return (
    <div className="my-8 px-12">
      <h1 className="py-12 font-bold text-[36px]">My Page</h1>
      <div className="flex">
        <div className="min-w-1/4">
          <SideMenu setSelectedOption={setSelectedOption} />
        </div>
        {
          selectedOption === 0 ?
          <MyPageF2R />
          :
          selectedOption === 1 ?
          <JobHouse />
          :
          <EventTable columns={columns} data={data} />
        }
      </div>
    </div>
  )
}

export default MyPage