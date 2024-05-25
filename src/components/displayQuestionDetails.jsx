import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from "./navs-containers/navbar"
import QuestionDetailsCard from './navs-containers/questionDetailsCard'

export default function displayQuestionDetails() {
    const { subjectName, weekNumber, title } = useParams()
    const [questionDetails, setQuestionDetails] = useState([]);
    const [testCases, setTestCases] = useState({})

    useEffect(() => {
        fetchDetails()

    }, [])

    const fetchDetails = async () => {
        let result = await fetch(`http://localhost:5000/api/v1/user/week-question-details?subject=${subjectName}&week=${weekNumber}&title=${title}`, {
            method: "get",
            headers: {
                'Content-Type': "application/json",
            }
        })
        let data = await result.json()
        setQuestionDetails(data)
    }

    return (
        <div className='text-white'>
            <Navbar className="mb-5" />
            <h1 className='m-10 p-5 text-3xl font-mono '>Task Details </h1>
            {
                questionDetails.map((task, index) => (
                    <QuestionDetailsCard key={index} title={task.questionTitle} description={task.questionDescription} testCases={task.testCases} />
                ))
            }
        </div>
    )
}

