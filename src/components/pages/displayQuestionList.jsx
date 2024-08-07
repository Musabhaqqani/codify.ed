import { React, useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import Navbar from "../navs-containers/navbar"
import QuestionCard from '../navs-containers/questionCard';


function displayQuestionList() {
    const navigate = useNavigate()
    const { weekNumber, subjectName } = useParams()
    const [questionList, setQuestionList] = useState([]);
    useEffect(() => {
        fetchDetails()
    }, [])

    const fetchDetails = async () => {
        let result = await fetch(`http://localhost:5000/api/v1/user/subject-week-details?subject=${subjectName}&week=${weekNumber}`, {
            method: "get",
            headers: {
                'Content-Type': "application/json",
            }
        })
        let data = await result.json()
        setQuestionList(data)
    }

    return (
        <div className='text-white'>
            <Navbar />
            <div className='flex justify-between p-5'>
                <h1 className='text-3xl font-mono'>Tasks</h1>
                <button onClick={() => navigate(`/admin-dashboard/create-task/${encodeURIComponent(subjectName)}/${encodeURIComponent(weekNumber)}`)} className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>➕</button>
            </div>
            {
                questionList.map((element, index) => (
                    <QuestionCard key={index} title={element.questionTitle} week={weekNumber} />

                ))
            }
        </div>
    )
}

export default displayQuestionList
