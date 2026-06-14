import React from 'react'

const Header = ({onChangeApiKey}) => {
    return (
        <div className='bg-neutral-900 flex items-center justify-center p-6 w-full'>
            <div className='max-w-6xl mx-auto w-full'>
                <div className='flex items-center justify-between gap-10 w-full'>
                    <h1 className='text-white text-lg'>MoodBite</h1>
                    <button
                    onClick={onChangeApiKey}
                    className='bg-white px-4 py-2 rounded-full'>Change API key</button>
                </div>
            </div>
        </div>
    )
}

export default Header