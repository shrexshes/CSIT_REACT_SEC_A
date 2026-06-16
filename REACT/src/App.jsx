import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import JsxExample from './components/JsxExample'
import PropsExample from './components/PropsExample'
import GreetProps from './components/GreetProps'
import UseStateExample from './components/UseStateExample'
import ConditionalRender from './components/ConditionalRender'
import UseEffectExample from './components/UseEffectExample'

function App() {

  return (
    <>
      <h1>
        HELLO WORLD
        <JsxExample/>
        <PropsExample title="Click me"/>
        <PropsExample title="Go to this link "/>
        <PropsExample title="Dont click "/>

        {/* task1 : make an component (Greet) which takes your name and greets you  */}
        <GreetProps name="AYush SHrestha"/>
        <UseStateExample/>
        <ConditionalRender/>

        <br/>
        <UseEffectExample/>
      </h1>
    </>
  )
}

export default App
