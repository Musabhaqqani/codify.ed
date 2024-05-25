import React from 'react'
import Navbar from "./navs-containers/navbar"
import { useNavigate, useParams } from 'react-router-dom'

function createWeek() {
    const navigate = useNavigate()
    const { subjectName } = useParams()

    const handleWeekCreation = async () => {
        const weekNum = document.getElementById("weekNumber").value
        const title = document.getElementById("title").value
        const desc = document.getElementById("description").value
        const lang = document.getElementById("language").value
        const tests = document.getElementById("testCases").value
        console.log(weekNum, title, desc, lang, tests)

        await fetch("http://localhost:5000/api/v1/user/questions", {
            method: "post",
            body: JSON.stringify({
                subject: subjectName,
                week: weekNum,
                questionTitle: title,
                questionDescription: desc,
                language: lang,
                testCases: tests
            }),
            headers: {
                'Content-Type': "application/json",
            }
        })
        navigate(`/admin-dashboard/subject/${encodeURIComponent(subjectName)}`)

    }
    return (
        <div className=' text-white'>
            <Navbar className="mb-5" />
            <h1 className='text-3xl font-mono p-5'>Create your program</h1>
            <div className='font-mono p-5 bg-slate-800 rounded-lg '>
                <input type="number" id="weekNumber" placeholder='Week*' className=' bg-white p-3 m-3 block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                <input type="text" id="title" placeholder='Question Title*' className=' bg-white p-3 m-3 block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                <input type="text" id="description" placeholder='Question Description*' className=' bg-white p-3 m-3 block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                <input type="text" id="language" placeholder="language's file extention*" className=' bg-white p-3 m-3 block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                <input type="text" id="testCases" placeholder='TestCases *' className=' bg-white p-3 m-3 block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                <p>Demo for code snippet and testCases to be created</p>
                <button onClick={() => navigate(`/admin-dashboard/subject/${encodeURIComponent(subjectName)}`)} className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Cancel</button>
                <button onClick={handleWeekCreation} className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Continue</button>

            </div>
        </div>
    )
}

export default createWeek