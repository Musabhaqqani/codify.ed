import React from 'react'
import { Link, useNavigate } from "react-router-dom"

function subjectContainer(props) {
  const navigate = useNavigate()

  const handlePageNavigation = () => {
    navigate("/admin-dashboard/subject", {
      state: { subjectName: props.subjectName }
    });
  }
  return (
    <div onClick={handlePageNavigation} className='bg-white rounded-lg text-black'>
      <h1 className='text-center p-10 text-lg'> Subject :  {props.subjectName} </h1>
    </div>
  )
}

export default subjectContainer
