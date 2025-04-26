import { useState } from 'react'

import './App.css'


const daysofWeek=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const daysInMonth = () =>{
    const daysArray=[];
    const firstDay=new Date(selectedDate.getFullYear(),selectedDate.getMonth(),1);
    const lastDay=new Date(selectedDate.getFullYear(),selectedDate.getMonth()+1,0);

    
    return daysArray;
  }
  return (
    <>
       <div className="calendar">
        <div className="header">
          <button>left</button>
          <select value={selectedDate.getMonth()}>
            {
              months.map((data,index)=>(
                <option key={index} value={index}>{data}</option>
              ))
            }
          </select>
          <select value={selectedDate.getFullYear()}>
            {
              Array.from({length: 10},(_,i) => selectedDate.getFullYear() - 5 + i).map((data) => (
                <option key={data} value={data}>{data}</option>
              ))
            }
          </select>
          <button>right</button>
        </div>
        <div className="daysofweek">
          {
            daysofWeek.map((data)=>(
              <div key={data}>{data}</div>
            ))
          }
        </div>
       </div>
    </>
  )
}

export default App
