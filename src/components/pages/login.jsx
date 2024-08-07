import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Toaster, toast } from "sonner"

export default function login() {
  const navigate = useNavigate()

  const handleLogin = async () => {
    const roll = document.getElementById("rollnumber").value
    const pass = document.getElementById("password").value
    if (roll !== '' && pass !== '') {
      let result = await fetch("http://localhost:5000/api/v1/user/", {
        method: "post",
        body: JSON.stringify({rollnumber :  roll,password : pass }),
        headers: {
          'Content-Type': "application/json",
        }
      })

      result = await result.json();
      if (result.result === "Login success.") {
        if (result.data.userType) {
          localStorage.setItem("userType", JSON.stringify(result.data.userType))
        }
        localStorage.setItem("rollnumber", JSON.stringify(result.data.rollnumber))
        localStorage.setItem("token", JSON.stringify(result.token))
        toast.success("Login success")

        if (result.data.usertype === "admin") {
          toast.success("Routing")
          navigate('/admin-dashboard')
        }
        else {
          toast.warning("user side under design..")
        }
      }
      else if (result["result"] === "Incorrect password.") {
        toast.error("Incorrect password")
      }
      else {
        toast.error("User not found.")
      }
    }

    else {
      toast.error("Please provide both Rollnumber and Password")
    }
  }
  return (
    <center>
      <Toaster richColors />
      <div className='pt-20'>
        <h1 className='text-3xl font-medium p-5 text-white'>Codify Ed</h1>
        <div className="w-2/4 bg-white-500 shadow-lg shadow-black-500/50 text-black p-10  rounded-lg backdrop-blur">
          <h2 className='text-white text-2xl flex-wrap font-light'>Login</h2>
          <div className='mt-10'>
            <input type="text" name="rollnumber" id="rollnumber" placeholder='Roll Number' className='bg-white p-3 m-3 block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
            <input type="password" name="password" id="password" placeholder='Password' className='bg-white p-3 m-3 block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
          </div>
          <button onClick={handleLogin} className='text-white mt-3 p-2 pl-8 pr-8 bg-violet-500 rounded hover:bg-indigo-900' >Login</button>
        </div>
        <p className='text-white'>Don't have an account? <Link to='/signup'><span className='underline'>Signup</span></Link></p>
      </div>
    </center>
  )
}
