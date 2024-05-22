import { React, useState, useEffect } from 'react'
import Navbar from "./navs-containers/navbar"
import Modal from "./navs-containers/modal"
import SubjectContainer from './navs-containers/subjectContainer'

function dashboard() {

    const [isOpen, setIsOpen] = useState(false)
    const [subjectList, setSubjectList] = useState([]);
    useEffect(() => {
        fetchSubjects()
    }, [])

    const fetchSubjects = async () => {
        let result = await fetch("http://localhost:5000/api/v1/user/subject-details", {
            method: "get",
            headers: {
                'Content-Type': "application/json",
            }
        })
        let data = await result.json()
        setSubjectList(data)
    }

    return (
        <div className='text-white'>
            <Navbar className="mb-5" />
            {isOpen && <Modal close={setIsOpen} />}
            <div className="p-5 ">
                <div className='flex justify-between'>
                    <h1 className='text-3xl'>Subjects</h1>
                    <button onClick={() => setIsOpen(true)} className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>➕</button>
                </div>
                <div className="grid grid-cols-3 gap-5 p-5 md:grid-cols-4">
                    {
                        subjectList.length > 0 ? (
                            subjectList.map((subject, index) => (
                                <SubjectContainer key={index} subjectName={subject} />
                            ))
                        ) : (
                            <h1 className='text-3xl'>No Subjects found!!</h1>
                        )}
                </div>
            </div>
        </div>
    )
}

export default dashboard
