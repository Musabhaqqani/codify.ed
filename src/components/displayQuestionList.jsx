import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from "./navs-containers/navbar"


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
            {
                questionList.map((element, index) => (
                    <div key={index}>
                        <h1 >{element.questionTitle}</h1>
                    </div>

                ))
            }
        </div>
    )
}

export default displayQuestionList
