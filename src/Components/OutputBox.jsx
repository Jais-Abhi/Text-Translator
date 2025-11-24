import React from 'react'

const OutputBox = ({translatedText}) => {
  console.log(translatedText)
  return (
    <div className="flex-1">
              <textarea
                value={translatedText}
                readOnly
                placeholder="Translation will appear here..."
                className="w-full h-40 md:h-64 p-3 md:p-4 border-2 border-gray-600 rounded-lg bg-gray-900 text-gray-300 placeholder-gray-600 resize-none cursor-copy text-sm md:text-base"
              />
            </div>
  )
}

export default OutputBox