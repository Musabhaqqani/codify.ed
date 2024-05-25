import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'

function questionCard(props) {
    const navigate = useNavigate()
    const { weekNumber, subjectName } = useParams()

    const handleNavigation = () => {
        navigate(`/admin-dashboard/subject/${encodeURIComponent(subjectName)}/${encodeURIComponent(weekNumber)}/${encodeURIComponent(props.title)}`)
    }

  return (
    <div className='m-10 p-10 bg-slate-800 font-mono rounded-lg text-xl cursor-pointer' onClick={handleNavigation}>
      {props.title}
    </div>
  )
}

export default questionCard
