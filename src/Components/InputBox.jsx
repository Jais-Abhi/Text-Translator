import React from 'react'

const InputBox = ({sourceText,setSourceText}) => {
    console.log("hello")
  return (
    <div className="flex-1">
              <textarea
                value={sourceText}
                onChange={(e) => setSourceText(e.target.value)}
                placeholder="Enter text to translate..."
                className="w-full h-64 p-4 border-2 border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 bg-gray-700 text-white placeholder-gray-500 resize-none"
              />
            </div>
  )
}

export default InputBox