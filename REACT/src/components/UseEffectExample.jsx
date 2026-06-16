import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {
    const [showAyush, setShowAyush] = useState(false)
    const [results, setResults] = useState([])

    useEffect(() => {
        console.log("THis effect has runned, AYUSH")
    }, [showAyush])

    useEffect(() => {
        const jsonPlaceHolderFetch = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/")
            const data = await response.json()
            console.log(data)
            setResults(data)
        }
        jsonPlaceHolderFetch()
    }, [])
    console.log("data has arrived", results)
    return (
        <div>
            UseEffectExample
            <p>In React event handling is how you make your components respond to user interactions like clicks,form submission or keyboard input.

                UseEffect: THis hook performs side effects in a function components. Side Effects are operation that interact with the outside world like fetching data, setting up subscription.

                In Simple Terms : It means Do this When something Happens

                Syntax:

                useEffect(effect,[dependencies])

            </p>
            <button onClick={() => setShowAyush(!showAyush)}>Toggle</button>
            {
                results.map((item) => (
                    <div key={item.id}>
                        <p>{item.title}</p>
                        <p>{item.completed ? "task completed" : "no completed"}</p>
                    </div>

                ))
            }
        </div>
    )
}

export default UseEffectExample