import Navbar from "./navs-containers/navbar"
import { useParams,useNavigate } from 'react-router-dom'
import { React, useState, useRef } from 'react'
import Editor from '@monaco-editor/react'
import { Box, HStack } from '@chakra-ui/react';

function createTask() {
    const {subjectName,weekNumber} = useParams()
    const [codeEditor, setCodeEditor] = useState("");
    const editorRef = useRef();
    const navigate = useNavigate();

    const onMount = (ref) => {
        editorRef.current = ref;
        ref.focus();
    }
    const handleTaskCreation = async () => {
        const title = document.getElementById("title").value
        const desc = document.getElementById("description").value
        const lang = document.getElementById("language").value
        const tests = document.getElementById("testCases").value
        let parsedTests = JSON.parse(tests);
        parsedTests = parsedTests.map(arr => arr.map(Number));
        // console.log(parsedTests)
        // console.log(weekNumber, title, desc, lang, tests,subjectName)

        await fetch("http://localhost:5000/api/v1/user/questions", {
            method: "post",
            body: JSON.stringify({
                subject: subjectName,
                week: weekNumber,
                questionTitle: title,
                questionDescription: desc,
                language: lang,
                testCases: parsedTests,
                codeSnippet : codeEditor
            }),
            headers: {
                'Content-Type': "application/json",
            }
        })
        navigate(`/admin-dashboard/subject/${encodeURIComponent(subjectName)}/${encodeURIComponent(weekNumber)}`)

    }

    return (
        <div>
        <Navbar className = "mb-5" />
            <h1 className='text-3xl font-mono p-5 text-white'>Create Task</h1>
            <div className='text-white font-mono p-5 bg-slate-800 rounded-lg '>
                <input type="text" id="title" placeholder='Question Title*' className=' bg-white p-3 m-3 block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                <input type="text" id="description" placeholder='Question Description*' className=' bg-white p-3 m-3 block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                <input type="text" id="language" placeholder="language's file extention*" className=' bg-white p-3 m-3 block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                <input type="text" id="testCases" placeholder='TestCases *' className=' bg-white p-3 m-3 block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                <p>Demo for code snippet and testCases to be created</p>

                <HStack spacing={4}>
                    <Box w='50%'>
                        <Box>
                            <Editor height="50vh"
                                theme='vs-dark'
                                language={subjectName}
                                value={codeEditor}
                                onChange={(value) => setCodeEditor(value)}
                                onMount={onMount} />
                        </Box>
                    </Box>
                </HStack>
                
                <button onClick={() => navigate(`/admin-dashboard/subject/${encodeURIComponent(subjectName)}/${encodeURIComponent(weekNumber)}`)} className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Cancel</button>
                <button onClick={handleTaskCreation} className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Continue</button>
            </div>
        </div>
    )
}

export default createTask
