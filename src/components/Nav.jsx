import React from "react";
import {Link} from 'react-router-dom'
import { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";

import Login from "./Login";
const Navbar = () => {

    const [isLoggedIn, setLoggedIn] = useState(false)
    const [loginView, setLoginView] = useState(false)
    const [signUpView, setSignUpView] = useState(false)

    const [logginForm, setLogginForm] = useState("logIn")
    const [signUpFormView, setSignUpFormView] = useState("signUp")

    const {user, setUser} = useContext(UserContext)


    const logOut = async () => {
      setUser(null)
      const res = await fetch(`https://habitapp-8-ld2o.onrender.com/logout`)
			const response = res.json()
			
    
    }

  

    return (
     

<div class="flex flex-col w-screen overflow-auto text-gray-700">
	<div class="flex items-center flex-shrink-0 w-full h-16 px-10 bg-white bg-opacity-75">
  <img src="https://em-content.zobj.net/source/facebook/355/cross-mark-button_274e.png" width="50px" height={"50px"}></img>
  <h2 className="text-black no-underline hover:no-underline font-bold text-2xl">HabitApp</h2>
		<div class="ml-10">
			<a class="mx-2 text-sm font-semibold text-indigo-700" href="#"> {user ? <Link to="/dashboard" >Dashboard</Link>: <Link to="/" >Home</Link>}</a>
		</div >

	

    <buton class="flex items-center justify-center ml-auto ">
			{user ? <button onClick={logOut}> <logOut /> Log out
      </button>
      
       :
      <a className="mx-2 text-sm font-semibold text-indigo-700"><Link to='/signup'   > Create Account</Link></a>  }
		</buton>
      		
    <buton class="flex items-center justify-center ">
			{user ? null :
      <a className="mx-2 text-sm font-semibold text-indigo-700"><Link to="/login" >Sign In</Link> </a>  }
		</buton>

	</div>



</div>

  
    )

    
}



export default Navbar