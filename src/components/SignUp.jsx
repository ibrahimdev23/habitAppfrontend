import { useState } from "react";

const SignUp = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const registerUser = async (e) => {

        e.preventDefault()
            const user = {
                username, email, password
            }
            const res = await fetch(`https://habitapp-11.onrender.com/api/register`, {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json'
                  },
                  body: JSON.stringify(user),
                });
            
    
          
           return <Login/>
        
            
                
        }
 

    return (
        <>



    <div className="bg-white p-8 rounded shadow-md max-w-md w-full mx-auto mt-40">
        <h2 className="font-bold text-2xl mb-10 text-center">Join HabitApp </h2>

        <form onsubmit={(event) => event.preventDefault()} return false>
        <div className="mt-4">
                <label for="email" className="font-semibold text-xs0">Email address: </label>
                <input 
                type="email" 
                name="email" 
                className="flex items-center h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" 
                autoComplete="on"
                onChange={(e) => setEmail(e.target.value)}
                />
                {/* <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Alright!</span> Username available!</p>
                <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oops!</span> Username already taken!</p> */}

            </div>

            <div className="mt-4">
                <label for="usernmae" className="font-semibold text-xs0">Pick a username: </label>
                <input type="username"  name="username" className="flex items-center h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" 
                autoComplete="on"
                     onChange={(e) => setUsername(e.target.value)}
                />
            </div>
           
            <div className="mt-4">
                <label for="password" className="font-semibold text-xs0">Password: </label>
                <input type="password" name="password" className="flex items-center h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" 
                autoComplete="on"
                     onChange={(e) => setPassword(e.target.value)}
                />
            </div>
         
            <div className="mt-6">
                <button 
                onClick={ e => registerUser(e)}
                className="flex w-full items-center justify-center h-12 px-6 w-64 bg-red-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700 hover:bg-blue-700">
                Sign up</button>
            </div>
        </form>
    </div>
        </>
    )
}

export default SignUp