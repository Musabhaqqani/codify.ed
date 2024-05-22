import React from 'react'
import { useLocation } from 'react-router-dom';

function subjectPage() {
    const location = useLocation();
    const { subjectName } = location.state || {}
  return (
    <div className='text-white'>
        Subject page : {subjectName}
    </div>
  )
}

export default subjectPage
