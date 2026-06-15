import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import ApiSetup from './components/ApiSetup'

function App() {
  const [showApiKey, setShowApiKey] = useState(false)
  const [apiKeyInput, setApiKeyInput] = useState("")
  //to save in localstorage
  const [apiKey,setApiKey]=useState("")

  const handleApiKeySubmit = (e) => { // e helps to trigger an event
    e.preventDefault() // stops the webpage to reload
    if (apiKeyInput) { // if user types anything in the input box then its stored in apiKeyInput
      setApiKey(apiKeyInput) // store the apiKeyInput in setApiKey
      setShowApiKey(false) // hide the component ApiSetup
    }
  }

  useEffect(()=>{
    if(apiKey){
      localStorage.setItem("apiKey",apiKey)
    }
  },[apiKey])

  { console.log(apiKeyInput) }

  if (showApiKey) {
    return (
      <ApiSetup onSubmit={handleApiKeySubmit} setApiKeyInput={setApiKeyInput} apiKeyInput={apiKeyInput} />
    )
  }
  return (
    <>
      <Header onChangeApiKey={() => setShowApiKey(true)} />
    </>
  )
}

export default App
