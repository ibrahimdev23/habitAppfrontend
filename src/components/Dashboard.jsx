import React, { useContext, useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import { differenceInDays } from "date-fns";
import { UserContext } from "../Context/UserContext";
import Calendar from "./Calendar/Calendar";
import { format } from "date-fns";
import ToDoList from "./ToDoList/ToDoList";
import Stats from "./Stats";

const Dashboard = () => {

    const [currentDate, setCurrentDate] = useState(new Date())
    const [clickedDate, setClickedDate] = useState(new Date())
    const [streakCount, setStreakCount] = useState(0)

    const {user, setUser} = useContext(UserContext)

    const setTodayDate = () => {
        setCurrentDate(new Date())
        
        
    }

   
        
    const  getStreaks = async () => {
		
        const userId = user["id"]
      
        let data = {userId}
  
      
        const res = await fetch(`https://habitapp-4b.onrender.com/api/streaks`, {
          
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json',
            
            },
            body: JSON.stringify(data),
          });
      
          const response = await res.json()
          
         
          let temp = []
         for(let i= 0; i< response.length; i++){
            temp.push(response[i].date)
            
         }
      
         //setStreakCount(temp.length)
        
       
    
        
      
       
        
          
        
          
      }
      
   useEffect(() => {
    getStreaks()
   })

    return (

        
  
    <div className="mt-12 flex justify-evenly content-center flex-row items-start">
   
    <div className="one mt-8">
    

    
        <Calendar value={currentDate} onChange={setCurrentDate} setTodayDate={setTodayDate} setStreakCount={setStreakCount}/>
</div>
        <div className="two">
        < Stats props={streakCount}/>
        <div className=" todolist rounded-lg shadow-lg">
      
       <ToDoList date={currentDate} />
       </div>
        </div>
       
    </div>
    )


    
}

export default Dashboard