import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Toaster, toast } from "sonner"
// import { background } from '@chakra-ui/react'

export default function login() {
  const navigate = useNavigate()

  const handleSubmit = async () => {
    const user = document.getElementById("username").value;
    const roll = document.getElementById("rollnumber").value
    const mailId = document.getElementById("mail").value
    const pass = document.getElementById("password").value
    const repass = document.getElementById("repassword").value
    if (user == "" || roll == "" || mailId == "" || pass == "" || repass == "") {
      toast.error("Please enter all Fields")
    }
    else {
      if (repass === pass) {
        let result = await fetch('http://localhost:5000/api/v1/user/signup', {
          method: 'post',
          body: JSON.stringify(
            {
              username: user,
              rollnumber: roll,
              mail: mailId,
              password: pass
            }
          ),
          headers: {
            'Content-Type': 'application/json'
          },
        })
        result = await result.json();
        if (result.msg == "User created") {
          toast.success("User Created, Please log in...")
          setTimeout(() => {
            navigate('/')
          }, 2000);
        }
        else {
          toast.success("User already registered...")
          setTimeout(() => {
            navigate('/')
          }, 2000);
        }
      }
      else {
        toast.error("Passwords do not match!")
      }

    }
  }


  return (
    <center>
      <Toaster richColors />
      <div className='pt-20'>
        <h1 className='text-3xl font-medium p-5 text-white'>Codify Ed</h1>
        <div className="w-2/4 bg-white-500 shadow-lg shadow-black-500/50 text-black p-10  rounded-lg backdrop-blur">
          <h2 className='text-white text-2xl flex-wrap font-light'>Signup</h2>
          <div className='mt-10'>
            <input type="text" id='username' name="username" placeholder='Username' className='bg-white p-3 m-3 block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
            <input type="text" id='rollnumber' name="rollnumber" placeholder='Roll Number' className='bg-white p-3 m-3 block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
            <input type="text" id='mail' name="mail" placeholder='Mail Id' className='bg-white p-3 m-3 block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
            <input type="password" id='password' name="password" placeholder='Password' className='bg-white p-3 m-3 block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
            <input type="password" id='repassword' name="repassword" placeholder='Confirm Password' className='bg-white p-3 m-3 block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
          </div>
          <button className='text-white mt-3 p-2 pl-8 pr-8 bg-violet-500 rounded hover:bg-indigo-900' onClick={handleSubmit}>Signup</button>
        </div>
        <p className='text-white'>Have an account? <Link to='/'><span className='underline'>Login</span></Link></p>
      </div>
    </center>
  )
}
