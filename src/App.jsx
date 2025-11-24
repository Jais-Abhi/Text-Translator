import React, { useState } from 'react'
import languages from './languagesData.js'
import {translateText,getLanguages} from "./Server.js"
import OutputBox from './Components/OutputBox.jsx'
import InputBox from './Components/InputBox.jsx'
const App = () => {
  const [sourceText, setSourceText] = useState('')
  const [translatedText, setTranslatedText] = useState('')
  const [sourceLanguage, setSourceLanguage] = useState('en')
  const [targetLanguage, setTargetLanguage] = useState('en')
  const [loading,setLoading] = useState(false)

  console.log("hyy app")
  const handleTranslate = async () => {
    setLoading(true)
    
    if(sourceText == ""){
      alert("Enter text for translate")
      setLoading(false)
      return
    }
    console.log(sourceText,sourceLanguage,targetLanguage)
    const data = await translateText(sourceText,sourceLanguage,targetLanguage)
    console.log(data)
    setTranslatedText(data)
    setLoading(false)
  }

  const handleSwapLanguages = async()=>{
    setSourceLanguage(targetLanguage)
    setTargetLanguage(sourceLanguage)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">Text Translator</h1>
          <p className="text-sm md:text-base text-gray-400">Translate text between multiple languages</p>
        </div>

        {/* Main Container */}
        <div className="bg-gray-800 rounded-lg shadow-2xl p-4 md:p-8 border border-gray-700">
          {/* Language Selection Row */}
          <div className="flex flex-row gap-2 md:gap-8 mb-6 md:mb-8 items-end">
            {/* Source Language */}
            <div className="flex-1">
              <label className="block text-xs md:text-sm font-semibold text-white mb-2">From</label>
              <select
                value={sourceLanguage}
                onChange={(e) => setSourceLanguage(e.target.value)}
                className="w-full px-2 md:px-4 py-2 border-2 border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 bg-gray-700 text-white cursor-pointer hover:bg-gray-650 transition-colors text-xs md:text-base"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code} className='bg-[#374151] text-[#ffffff] '>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Swap Button */}
            <div className="flex items-end pb-0">
              <button
                onClick={handleSwapLanguages}
                className="px-3 md:px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center text-base md:text-lg whitespace-nowrap"
                title="Swap languages"
              >
                ⇄
              </button>
            </div>

            {/* Target Language */}
            <div className="flex-1">
              <label className="block text-xs md:text-sm font-semibold text-gray-300 mb-2">To</label>
              <select
                value={targetLanguage}
                onChange={(e) => setTargetLanguage(e.target.value)}
                className="w-full px-2 md:px-4 py-2 border-2 border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 bg-gray-700 text-white cursor-pointer hover:bg-gray-650 transition-colors text-xs md:text-base"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code} style={{ backgroundColor: '#374151', color: '#ffffff' }}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Text Areas Row */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-6 md:mb-8">
            {/* Source Text Area */}
            <InputBox sourceText={sourceText} setSourceText={setSourceText}/>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <div className="text-4xl text-cyan-500 font-bold">→</div>
            </div>

            {/* Arrow for Mobile */}
            <div className="flex md:hidden items-center justify-center">
              <div className="text-2xl text-cyan-500 font-bold">↓</div>
            </div>

            {/* Translated Text Area */}
            <OutputBox translatedText={translatedText} />
          </div>

          {/* Translate Button */}
          <div className="flex justify-center">
            <button
            disabled={loading}
              onClick={handleTranslate}
              className={`px-6 md:px-8 py-2 md:py-3 disabled:bg-cyan-800 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-sm md:text-base`}
            >
              {loading ? "Translating....": "Translate"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App