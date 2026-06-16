import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import ApiSetup from './components/ApiSetup'
import HeroText from './components/HeroText'
import MoodSelector from './components/MoodSelector'

function App() {
  const [showApiKey, setShowApiKey] = useState(false)
  const [apiKeyInput, setApiKeyInput] = useState("")
  //to save in localstorage
  const [apiKey, setApiKey] = useState("")

  const handleApiKeySubmit = (e) => { // e helps to trigger an event
    e.preventDefault() // stops the webpage to reload
    if (apiKeyInput) { // if user types anything in the input box then its stored in apiKeyInput
      setApiKey(apiKeyInput) // store the apiKeyInput in setApiKey
      setShowApiKey(false) // hide the component ApiSetup
    }
  }

  useEffect(() => {
    if (apiKey) {
      localStorage.setItem("apiKey", apiKey)
    }
  }, [apiKey])

  { console.log(apiKeyInput) }

  if (showApiKey) {
    return (
      <ApiSetup onSubmit={handleApiKeySubmit} setApiKeyInput={setApiKeyInput} apiKeyInput={apiKeyInput} />
    )
  }

// shrexshes
  const MOODS = [
    { id: "happy", emoji: "😄", label: "Happy", color: "from-yellow-400 to-orange-400", bg: "bg-yellow-50", border: "border-yellow-300" },
    { id: "cozy", emoji: "🧸", label: "Cozy", color: "from-amber-400 to-brown-400", bg: "bg-amber-50", border: "border-amber-300" },
    { id: "adventurous", emoji: "🌍", label: "Adventurous", color: "from-green-400 to-teal-500", bg: "bg-green-50", border: "border-green-300" },
    { id: "romantic", emoji: "💕", label: "Romantic", color: "from-pink-400 to-rose-500", bg: "bg-pink-50", border: "border-pink-300" },
    { id: "stressed", emoji: "😤", label: "Stressed", color: "from-purple-400 to-indigo-500", bg: "bg-purple-50", border: "border-purple-300" },
    { id: "sad", emoji: "😔", label: "Sad", color: "from-blue-400 to-cyan-500", bg: "bg-blue-50", border: "border-blue-300" },
    { id: "energetic", emoji: "⚡", label: "Energetic", color: "from-red-400 to-orange-500", bg: "bg-red-50", border: "border-red-300" },
    { id: "lazy", emoji: "🛋️", label: "Lazy", color: "from-slate-400 to-gray-500", bg: "bg-slate-50", border: "border-slate-300" },
  ];

  return (
    <>
      <Header onChangeApiKey={() => setShowApiKey(true)} />
      <HeroText />
      <MoodSelector moods={MOODS}/>
    </>
  )
}

export default App
