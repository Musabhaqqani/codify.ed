import React, { useEffect } from 'react'
import {jwtDecode} from "jwt-decode"
import {Link, useNavigate} from "react-router-dom"

export default function login() {
  const navigate = useNavigate()
    const handleCallBack = (response) =>{
        // const userObject = jwtDecode(response.credential)
        // console.log("JWT token : "+ response.credential)
        localStorage.setItem("sessionToken" , response.credential)
        navigate("/dashboard")
    }
    useEffect(()=>{
        google.accounts.id.initialize({
            client_id : "1005546801545-7qgaeol1pbfg2bq29e1codg6bh96fq9p.apps.googleusercontent.com",
            callback : handleCallBack
        })
        google.accounts.id.renderButton(
            document.getElementById('signin'),
            { theme : 'Outline', size : 'large'}
        )
    },[])
  return (
    <div>
      login page
      <div id="signin"></div>
    </div>
  )
}
