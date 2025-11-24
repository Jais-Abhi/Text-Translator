import React, { useState } from 'react'
import languages from './languagesData.js'
import {translateText,getLanguages} from "./Server.js"
import OutputBox from './Components/OutputBox.jsx'
const App = () => {
  const [sourceText, setSourceText] = useState('')
  const [translatedText, setTranslatedText] = useState('')
  const [sourceLanguage, setSourceLanguage] = useState('en')
  const [targetLanguage, setTargetLanguage] = useState('')


  const handleTranslate = async () => {
    if(targetLanguage==""){
      alert("Please select target language")
      return
    }
    console.log(targetLanguage,sourceText)
    const data = await translateText(sourceText,targetLanguage)
    console.log(data)
    setTranslatedText(data)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">Text Translator</h1>
          <p className="text-gray-400">Translate text between multiple languages</p>
        </div>

        {/* Main Container */}
        <div className="bg-gray-800 rounded-lg shadow-2xl p-8 border border-gray-700">
          {/* Language Selection Row */}
          <div className="flex gap-8 mb-8">
            {/* Source Language */}
            <div className="flex-1">
              <label className="block text-sm font-semibold text-white mb-2">From</label>
              <select
                value={sourceLanguage}
                onChange={(e) => setSourceLanguage(e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 bg-gray-700 text-white cursor-pointer hover:bg-gray-650 transition-colors"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code} style={{ backgroundColor: '#374151', color: '#ffffff' }}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>


            {/* Target Language */}
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-300 mb-2">To</label>
              <select
                value={targetLanguage}
                onChange={(e) => setTargetLanguage(e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 bg-gray-700 text-white cursor-pointer hover:bg-gray-650 transition-colors"
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
          <div className="flex gap-8 mb-8">
            {/* Source Text Area */}
            <div className="flex-1">
              <textarea
                value={sourceText}
                onChange={(e) => setSourceText(e.target.value)}
                placeholder="Enter text to translate..."
                className="w-full h-64 p-4 border-2 border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 bg-gray-700 text-white placeholder-gray-500 resize-none"
              />
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center">
              <div className="text-4xl text-cyan-500 font-bold">→</div>
            </div>

            {/* Translated Text Area */}
            <OutputBox translatedText={translatedText} />
          </div>

          {/* Translate Button */}
          <div className="flex justify-center">
            <button
              onClick={handleTranslate}
              className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Translate
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App