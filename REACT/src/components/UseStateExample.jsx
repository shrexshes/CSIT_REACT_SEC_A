import React, { useState } from 'react'

const UseStateExample = () => {
    const [count,setCount]=useState(0)
  return (
    <div>Use state belongs to react's state management, In react state management 
        <p>Count : {count}</p> 
        <button 
        style={{backgroundColor:"red"}}
        onClick={()=>setCount(count+1)}>Increment +</button> 

        <button 
        style={{backgroundColor:"red"}}
        onClick={()=>setCount(count-1)}>Decrement -</button> 
    </div>  )
}

export default UseStateExample