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
  // for mood selector
  const [selectedMood, setSelectedMood] = useState(null)
  const [customMood, setCustomMood] = useState("")

  // for recipes
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(false)


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

  //to fetch from gemini api 
  const fetchRecipes = async (moodLabel) => {
    const prompt = `YOu are a creative culinary expert . Based on someone feeling ${moodLabel} . right now suggest 2 recipe ideas that match the mood
    For Each recipe , return a json object with : 
    - name:string( creative name with nepali background)
    - description : string (1-2 sentences about why this recipes fits the mood)
    - difficulty : string ("EASY","MEDIUM","HARD")
    - cookTime:string eg(20mins)
    - steps:array of string(5-7 clear cooking steps)

    Return only valid json array of 2 recipes, no markdown, no extra text`

    try {
      const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent", {
        method: "POST",
        headers: { "Content-Type": "application/json", 'X-goog-api-key': apiKey },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.9, maxOutputTokens: 8192
          }
        }),
      })

      //if kei garera error ayo bhanne
      if (!response.ok) {
        const err = await response.json()
        console.log(err)
        throw new Error(err.error.message || "API REQUEST FAILED")
      }

      // if hamro response success bho bhanne
      const data = await response.json()
      const text = data.candidates[0]?.content?.parts[0]?.text;
      console.log(text)

      //if text variable is empty
      if (!text) {
        throw new Error("No response from Gemini")
      }

      //cleaning part
      const cleaned = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim()
      const parsed = JSON.parse(cleaned)
      setRecipes(parsed)

    } catch (error) {
      console.log(error || "Something went wrong!")
    }
  }

  console.log("recipe",recipes)

  const handleMoodSelect = (mood) => {
    //this function is used to select tbe mood from the MOOD json data and if there is anything typed in custom mood then it makes it empty
    setSelectedMood(mood)
    setCustomMood("")
    console.log(mood.label)
    fetchRecipes(mood.label)
  }

  const handleCustomMoodSubmit = (e) => {
    e.preventDefault()
    if (customMood) {
      setSelectedMood({ id: 'custom', emoji: 'custom', label: customMood.trim() })
      fetchRecipes(customMood)
    }
  }

  return (
    <>
      <Header onChangeApiKey={() => setShowApiKey(true)} />
      <HeroText />
      <MoodSelector moods={MOODS} customMood={customMood} onMoodSelect={handleMoodSelect} selectMood={selectedMood} setCustomMood={setCustomMood}
        onCustomSubmit={handleCustomMoodSubmit}
      />
      <div className='max-w-6xl mx-auto pt-10'>
        {recipes.map((recipe) => (
          <div className='bg-neutral-900 text-white p-6 rounded-4xl my-6'>
            <p className='text-2xl google font-bold py-10'>{recipe.name}</p>
            <p className='text-lg google py-4'>{recipe.description}</p>
            <p className='text-sm w-fit bg-white text-black rounded-full px-4 pyt-2'>{recipe.cookTime}</p>

            <p className='text-2xl pt-10 font-bold'>Steps</p>
            {recipe.steps.map((step) => (
              <li className='google text-lg'>{step}</li>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default App
