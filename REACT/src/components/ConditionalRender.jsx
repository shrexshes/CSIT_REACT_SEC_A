import React, { useState } from 'react'

const ConditionalRender = () => {
    const [isLogIn,setIsLogIn]=useState(false)
    const [hasNotification,setHasNotification]=useState(false)

  return (
    <div>ConditionalRender has two types: 
<br/>
        1.Ternary operation (if-else)

        {isLogIn ? "Welcome user": "Nah get out"}
        
        <button onClick={()=>setIsLogIn(!isLogIn)}>
            {isLogIn ? "logout":"login"}
        </button>
<br/>

        2. Short Circuit Evaluation
        SHort Circuit Evaluation involves using logical operators like && or || to render elements conditionally
<br/>
<br/>

        {hasNotification && <p>You have a notification</p>}
        <button onClick={()=>setHasNotification(!hasNotification)}>Click me to get notification</button>

        
    </div>
  )
}

export default ConditionalRender