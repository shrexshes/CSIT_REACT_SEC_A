import React from 'react'

const MoodSelector = ({ moods, selectMood,customMood,setCustomMood,onMoodSelect,onCustomSubmit }) => {
    return (
        <div className='max-w-6xl mx-auto'>
            <div className='grid grid-cols-3 gap-10'>
                {moods.map((mood) => {
                    //check if this mood is currently selected
                    const isSelected = selectMood?.id === mood.id
                    return (
                        <button
                        onClick={()=>onMoodSelect(mood)}
                        key={mood.id} className='bg-neutral-800 text-2xl google font-bold text-white p-6 rounded-2xl'>
                            <div>{mood.emoji}</div>
                            <div>{mood.label}</div>
                        </button>
                    )
                })}
            </div>
            <div className='my-5'>
                <hr />
                <form onSubmit={onCustomSubmit}>
                    <input 
                    value={customMood}
                    onChange={(e)=>setCustomMood(e.target.value)}
                    type='text' className='bg-neutral-100 w-full p-4 google rounded-full border mt-4 text-black' placeholder='i am happ, sad, nostalgic, etc etc'/>

                    <button className='my-6 px-4 py-2 bg-neutral-900 text-white google rounded-full' type='submit'>
                        GET RECIPE
                    </button>
                </form>
            </div>
        </div>
    )
}

export default MoodSelector