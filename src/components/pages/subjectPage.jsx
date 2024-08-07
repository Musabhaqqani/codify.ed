import { React, useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import WeekCard from "../navs-containers/weekContainer"
import Navbar from "../navs-containers/navbar"

function subjectPage() {
  const navigate = useNavigate()
  const { subjectName } = useParams()
  const [weekList, setWeekList] = useState([])

  useEffect(() => {
    fetchWeeks()
  }, [])

  const fetchWeeks = async () => {
    let result = await fetch(`http://localhost:5000/api/v1/user/subject-weeks?subject=${subjectName}`, {
      method: "get",
      headers: {
        'Content-Type': "application/json",
      }
    })
    let data = await result.json()
    console.log(data)
    setWeekList(data)
  }
  return (
    <div className='text-white'>
      <Navbar className="mb-5" />
      <div className='flex justify-between p-5'>
        <h1 className='text-3xl'>Week List</h1>
        <button onClick={()=>navigate(`/admin-dashboard/create-week/${encodeURIComponent(subjectName)}`)} className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>➕</button>

      </div>
      <div className="grid grid-cols-3 gap-5 p-5 md:grid-cols-4 cursor-pointer">
        {
          weekList.length > 0 ? (
            weekList.map((week, index) => (
              <WeekCard  key={index} weekNumber={week} subject = {subjectName} />
            ))
          ) : (
            <h1 className='text-3xl'>No week programs created!!</h1>
          )}
      </div>
    </div>
  )
}

export default subjectPage
