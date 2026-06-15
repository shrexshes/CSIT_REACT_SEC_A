import React from 'react'

// camelCase = javascript
// snake_case = python

const ApiSetup = ({apiKeyInput,setApiKeyInput,onSubmit}) => {
    return (
        <div className='bg-neutral-600 flex items-center justify-center google h-screen'>
            <div className='max-w-6xl mx-auto text-white'>
                <h1 className='text-center text-3xl font-bold google'>Mood Bite</h1>
                <p className='text-center text-lg my-3'>AI Powered recipe for every feelings</p>

                <div className='text-center'>
                    <p>Get your free key at</p>
                    <a href='https://aistudio.google.com/app/apikey' target='_blank' >aistudio.google.com</a>
                </div>

                <form onSubmit={onSubmit}>
                    <input 
                    value={apiKeyInput}
                    onChange={(e)=>setApiKeyInput(e.target.value)}
                    type='text' placeholder='Enter your api key' className='bg-white m-4 text-black p-2 w-full rounded-full'></input>
                    <button type='submit' className='bg-white rounded-full px-4 py-2 text-black border border-blue-400'>Start Cooking</button>
                </form>
            </div>
        </div>
    )
}

export default ApiSetup