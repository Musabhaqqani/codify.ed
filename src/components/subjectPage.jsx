import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import WeekCard from "./navs-containers/weekContainer"
import Navbar from "./navs-containers/navbar"

function subjectPage() {
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
