import React from 'react'
import { useNavigate } from "react-router-dom"

function subjectContainer(props) {
  const navigate = useNavigate()

  const handlePageNavigation = () => {
    navigate(`/admin-dashboard/subject/${encodeURIComponent(props.subjectName)}`);
  }
  return (
    <div onClick={handlePageNavigation} className='bg-red-200 rounded-lg text-black'>
      <h1 className='text-center p-10 text-2xl font-mono'> Subject :  {props.subjectName} </h1>
    </div>
  )
}

export default subjectContainer
