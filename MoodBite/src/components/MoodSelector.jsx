import React from 'react'

const MoodSelector = ({moods,selectMood}) => {
  return (
    <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-3 gap-10'>
            {moods.map((mood)=>{
                //check if this mood is currently selected
                const isSelected=selectMood?.id === mood.id
                return(
                    <button key={mood.id} className='bg-neutral-800 text-2xl google font-bold text-white p-6 rounded-2xl'>
                        <div>{mood.emoji}</div>
                        <div>{mood.label}</div>
                    </button>
                )
            })}
        </div>
    </div>
  )
}

export default MoodSelector