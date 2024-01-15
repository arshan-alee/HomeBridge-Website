import {useState} from 'react'
import SideMenu from '../components/MyPage/SideMenu'
import MyPageF2R from '../components/MyPage/F2R/MyPageF2R'
import JobHouse from '../components/MyPage/JobHouse'
import EventTable from '../components/MyPage/Event/EventTable'
import Header from '../components/Shared/Header'

function MyPage() {

  const [selectedOption, setSelectedOption] = useState(0);
  const columns = ['Event', 'Departure', 'Arrival', 'Price'];
  const data = [
    { Event: 'Business Meeting', Departure: 'New York', Arrival: 'Los Angeles', Price: 500, Payment: '결제취소' },
    { Event: 'Vacation', Departure: 'London', Arrival: 'Paris', Price: 800, Payment: '결제취소' },
    { Event: 'Conference', Departure: 'Tokyo', Arrival: 'Seoul', Price: 600, Payment: '결제취소' },
    { Event: 'Family Reunion', Departure: 'Sydney', Arrival: 'Auckland', Price: 700, Payment: '완료' },
  ];

  return (
    <>
      <Header />
      <div className="my-8 lg:px-12">
        <h1 className="hidden md:block py-12 font-bold text-[38px] pl-8">My Page</h1>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/4">
            <SideMenu selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
          </div>
          {
            selectedOption === 0 ?
            <MyPageF2R />
            :
            selectedOption === 1 ?
            <JobHouse />
            :
            <div className="w-full lg:w-3/4">
              <EventTable columns={columns} data={data} />
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default MyPage