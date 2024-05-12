import React, { useEffect } from 'react'
import { jwtDecode } from "jwt-decode"
import { Link, useNavigate } from "react-router-dom"
// import { background } from '@chakra-ui/react'

export default function login() {
  const navigate = useNavigate()
  const handleCallBack = (response) => {
    // const userObject = jwtDecode(response.credential)
    // console.log("JWT token : "+ response.credential)
    const token = response.credential
    localStorage.setItem("sessionToken", token)
    if (token) {
      navigate("/dashboard")
    }
  }
  useEffect(() => {
    google.accounts.id.initialize({
      client_id: "1005546801545-7qgaeol1pbfg2bq29e1codg6bh96fq9p.apps.googleusercontent.com",
      callback: handleCallBack
    })
    google.accounts.id.renderButton(
      document.getElementById('signin'),
      { theme: 'Outline', size: 'large' }
    )
  }, [])


  return (
    <center>
      <div>
        <h1 className='text-3xl font-medium p-5 text-white'>Codify Ed</h1>
        <div className="w-2/4 bg-white-500 shadow-lg shadow-black-500/50 text-black p-10  rounded-lg backdrop-blur">
          <h2 className='text-white text-2xl flex-wrap font-light'>Signup</h2>
          <div className='mt-10'>
            <input type="text" name="username" placeholder='Username' className='p-3 m-3 block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
            <input type="text" name="rollnumber" placeholder='Roll Number' className='p-3 m-3 block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
            <input type="text" name="mail" placeholder='Mail Id' className='p-3 m-3 block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
            <input type="password" name="password" placeholder='Password' className='p-3 m-3 block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
          </div>
          <button className='text-white mt-3 p-2 pl-8 pr-8 bg-violet-500 rounded hover:bg-indigo-900'>Signup</button>
        </div>
        <p className='text-white'>Have an account? <Link to='/'><span className='underline'>Login</span></Link></p>
        <div id="signin" className='rounded p-10'>
        </div>
      </div>
    </center>
  )
}
