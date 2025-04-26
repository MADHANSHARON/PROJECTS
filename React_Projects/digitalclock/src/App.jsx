import { useState ,useEffect} from 'react';

import './App.css';

function App() {
   const[currentTime,setCurrentTime]=useState(new Date())
  useEffect(()=> {
    const timer =setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return ()=>clearInterval(timer);
  },[])

  function addzero(num){
    return num<10 ?`0${num}`:num;
  }
  function formatehours(hours){
    return hours === 0 ? 12:hours>12 ? hours-12 : hours
  }
  const timetodate=(date1)=>{
    const option={weekday:"long",year:"numeric", month:"long",day:"numeric"}
    return date1.toLocaleDateString(undefined,option);
  }
  return (
    <>
    <div className="digital-clock">
      <h1>Digital clock</h1>
      <div className="time">{addzero(formatehours(currentTime.getHours()))}:{addzero(currentTime.getMinutes())}:{addzero(currentTime.getSeconds())}{currentTime.getHours() >=12 ? " PM":" AM"}</div>
      <div className="date">{timetodate(currentTime)}</div>
    </div>
    </>
  )
}

export default App;
