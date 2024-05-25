import React from 'react'

function questionDetailsCard(props) {

    const initialTestCase = props.testCases[0];

    const slicedTestCases = props.testCases.slice(1);

    return (
        <div className='m-10 p-10 bg-slate-800 font-mono rounded-lg text-xl' >
            <p className='pb-5'>Title : {props.title}</p>
            <p className='pb-5'>Description : {props.description}</p>
            <p className='pb-5'>Test Cases : {initialTestCase}</p>
            {slicedTestCases.map((testCase, index) => (
                <div className='pb-5' key={index}>
                    <p>Input {index + 1}: {testCase.slice(0, -1).join(', ')}</p>
                    <p>Output: {testCase[testCase.length - 1]}</p>
                </div>
            ))}
        </div>
    )
}

export default questionDetailsCard
