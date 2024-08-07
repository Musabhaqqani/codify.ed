import { React } from 'react'

function modal(props) {
    const handleAddSubject = async () => {
        let subName = document.getElementById("subject").value
        subName = subName.toLowerCase()
        await fetch("http://localhost:5000/api/v1/user/subject-details", {
            method: "post",
            body: JSON.stringify({ subject: subName}),
            headers: {
                'Content-Type': "application/json",
            }
        })
        props.close(false)
        window.location.reload()
    }
    return (
        <div className='w-screen h-screen backdrop-blur-xl fixed flex justify-center'>
            <div className="w-fit h-fit shadow-md shadow-indigo-500/50 rounded-lg">
                <div className="title"><h1 className='text-4xl p-5'>Enter the {props.create}</h1></div>
                <div className="p-5"><input className='bg-white p-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' type="text" id="subject" placeholder='Subject name' /></div>
                <div className="p-5">
                    <button onClick={() => props.close(false)} className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Cancel</button>
                    <button onClick={handleAddSubject} className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default modal
