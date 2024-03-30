import React from 'react'
import { Outlet , Navigate } from 'react-router-dom'

const isAuth = () => {
    // take the jwt token and return either true or false
    const token = localStorage.getItem("sessionToken")
    if (token) 
        return true
    else
        return false
}
export default function protectedRoutes() {
    // store the value of isAuth() in a local variable
    const Auth = isAuth()
    return Auth ? <Outlet /> : <Navigate to = "/" />
}
