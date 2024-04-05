import { useContext, useEffect, useState } from "react"
import {Link, Navigate} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import { UserContext } from "../Context/UserContext";



function Login(props,) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [logInError, setLogInError] = useState(false)

    

    function handleLogin(e) {
        e.preventDefault()

        
    }

   
       
    const {user, setUser} = useContext(UserContext)

    const loginUser =  async (e) => {
        e.preventDefault();
        const account = {
            username, password
        }
        const res = await fetch(`https://habitapp-11.onrender.com/api/login`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
              },
              body: JSON.stringify(account),
            });
       
         const data = await res.json()
         let size = Object.keys(data).length;
         if(size < 1){
            setLogInError(true)
            
         }else {
            setLogInError(false)
            setUser(data)
         
        
     
         }
         
      
    }

    


   
   

return (
    <>
  
  {user ? <Navigate to="/dashboard"/> : null }
  <div className="flex flex-col items-center justify-center w-screen mt-40 text-gray-700o">

    <form onSubmit={loginUser} className="flex flex-col bg-white rounded shadow-lg p-12 mt-12z" action="">
    <h2 className="font-bold text-2xl mb-10 text-center">Welcome back </h2>

    <label className="font-semibold text-xs" for="usernameField">Username</label>
    <input 
    className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" 
    type="text"
    name="username"
    onChange={(e) => setUsername(e.target.value)}
    />
    <label className="font-semibold text-xs mt-3" for="passwordField">Password</label>
    <input 
    className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
    type="password"
    name="password"
    onChange={(e) => setPassword(e.target.value)}

    />

       
  {logInError ? <p  className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Error!</span> Username or password not valid</p> 
  : null }
        <div className="mt-6">
            <button  type={"submit"} className="flex items-center justify-center h-12 px-6 w-64 bg-red-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Log in</button>
        </div>
        </form>
    </div>



   


      
       
       </>
    )
}

export default Login