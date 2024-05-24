import React from 'react'
import { useNavigate } from "react-router-dom"

function subjectContainer(props) {
  const navigate = useNavigate()
      const handlePageNavigation = () => {
        navigate(`/admin-dashboard/subject/${encodeURIComponent(props.subject)}/${encodeURIComponent(props.weekNumber)}`);
      }
    return (
        
            <div className='bg-red-200 rounded-lg text-black'>
                <h1 className='text-center p-10 text-2xl font-mono' onClick={handlePageNavigation}> Week   {props.weekNumber} </h1>
            </div>
    )
}

export default subjectContainer
