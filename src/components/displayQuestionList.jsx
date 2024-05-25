import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from "./navs-containers/navbar"
import QuestionCard from './navs-containers/questionCard';


function displayQuestionList() {
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
            <h1 className='m-10 p-5 text-3xl font-mono'>Tasks</h1>
            {
                questionList.map((element, index) => (
                    <QuestionCard key={index} title={element.questionTitle} week = {weekNumber} />

                ))
            }
        </div>
    )
}

export default displayQuestionList
