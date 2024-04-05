import {nextDay, subMonths, sub, add, differenceInCalendarDays, differenceInDays, compareAsc, endOfMinute, endOfMonth, formatDistance, startOfMonth, subDays, format, setDate, lastDayOfMonth } from "date-fns";
import UserContext from "../../Context/UserContext";
import { useContext } from "react";
import Cell from "./Cell";
import { useEffect, useState } from "react";

const daysWeek = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


const Calendar = ({value, onChange, onClick, setTodayDate, setStreakCount}) => {

  const {user, setUser} = useContext(UserContext)

    //date fns libary 
const startingDate = startOfMonth(value)

const endingDate = endOfMonth(value)
const numberOfDaysMonth = differenceInDays(endingDate, startingDate)+1


const prefix = startingDate.getDay()

const suffix = 6 - endingDate.getDay()

const endingDateLastMonth = endOfMonth(sub(value, {months: 1}))

const startingDateLastMonth = startOfMonth(sub(value, {months: 1}))
const numberOfDaysLastMonth = differenceInDays(endingDateLastMonth, startingDateLastMonth)+1
const prefixStart = numberOfDaysLastMonth - prefix



const [streaks, setStreaks] = useState([])

const handleNewDate = (index) => {
    const newDate = setDate(value, index)
    onClick(newDate)
   
}
let count = 0;
  


const perviousMonth = () => {
    onChange(sub(value, {months: 1}))
    getStreaks()
}
const perviousYear = () => {
    onChange(sub(value, {years: 1}))
    
}
const nextMonth = () => {
    onChange(add(value, {months: 1}))
    getStreaks()
}
const nextYear = () => {
    onChange(add(value, {years: 1}))
}



const  getStreaks = async () => {
		console.log("ehy")
  const userId = user["id"]

  let dataObj = {userId}
  // /api/streaks/<int:user_id>
  const res = await fetch(`https://habitapp-11.onrender.com/api/streaks/${userId}`)
    // method: "POST", 
    // headers: {
    //   "Content-Type": "application/json",
    //   'Accept': 'application/json',
      
    //   },
    //   body: JSON.stringify(dataObj),
    // });

  const data = await res.json()
 post(data)

   
    
}

const post = (response) => {
  let tempStreaks = []
 

      for(let i = 0; i < response.length; i++){
        console.log("hey")
        let resData = response[i].date
        if(resData !== null && resData !== undefined ) {
          let streak = resData.replace(/[^a-zA-Z0-9 ]/g, "")
          let dateToMark = new Date(streak)
          tempStreaks.push(dateToMark)
  
        }
  
      }

    setStreaks(tempStreaks)
    console.log(streaks)

}


setStreakCount(streaks.length)

const loadStreaks = () => {
  getStreaks()
  setStreakCount(streaks.length)



}

useEffect(() => {
  getStreaks()
  

},[])




  return (
    <>
    <div className=" flex gap-8 mb-5 ml-50 w-100 justify-center" >
    <button className="flex  gap-4 textlg bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
    onClick={setTodayDate}
    >Today
    </button>
    <button className="flex gap-4 textlg bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
    onClick={loadStreaks}
    >Add Streak
    </button>
    </div>
    

    <div className="w-[650px] border-t border-l bg-white rounded-lg shadow ">
    
      <div className=" grid grid-cols-7 items-center jusify-center text-center ">
        <Cell props={"<<"} onClick={perviousYear} isMenu={true}></Cell>
       
        <Cell props={"<"} onClick={perviousMonth} isMenu={true}> </Cell>
        <Cell className={"col-span-3"}
         props={format(value, "LLLLLL yyyy")} isMenu={true} ></Cell>

        <Cell props={">"} onClick={nextMonth} isMenu={true}></Cell>
        <Cell props={">>"} onClick={nextYear} isMenu={true}></Cell>
        {daysWeek.map((day, index) => {
          return (
            <Cell
              className={"text-sm font-bold uppercase"}
              key={index}
              props={day}
              isMenu={true}
            ></Cell>
          );
        })}

    

        {Array.from({ length: prefix }).map((_, index) => {
    
        const date = prefixStart + index + 1
       
       
        return (
          <Cell
            key={index}
            props={date}
            isNotCurrent={true}
            isDate={true}
          >
        
          </Cell>
        );
      })}
        {Array.from({ length: numberOfDaysMonth }).map((_, index) => {
        const date = index + 1;
        const isToday = date === value.getDate()
        let mark = false;
       
     
        let pos  = []
        
        
        for(let i = 0; i < streaks.length;i++){
          if(streaks[i].getMonth() === value.getMonth() && streaks[i].getYear() === value.getYear()){
              pos.push(streaks[i].getDate())
            
          }
        }
      
       


         
      
         
          
       
        return (
          <Cell
            key={date}
            props={date}
            onClick={() => handleNewDate(date)}
            isToday={isToday}
            isDate={true}
            pos={pos}
            mark={mark}
          
            

          >
        
          </Cell>
        );
      })}

      {Array.from({length: suffix}).map((_,index)=> {
       const date =  index + 1
       
        
            return <Cell key={index} 
            isNotCurrent={true}
            isDate={true}
            props={date}/>
        })}

      </div>
    </div>
    </>
  );
};

export default Calendar;
