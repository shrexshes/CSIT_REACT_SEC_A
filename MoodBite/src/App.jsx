import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import ApiSetup from './components/ApiSetup'

function App() {
const [showApiKey,setShowApiKey]=useState(true)

if(showApiKey){
  return(
    <ApiSetup/>
  )
}
  return (
    <>
    <Header/>
    </>
  )
}

export default App
