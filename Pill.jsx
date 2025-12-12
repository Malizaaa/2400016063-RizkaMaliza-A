import React from 'react'

export default function Pill({ text, color = 'bg-gray-200' }) {
  return (
    <span className={`px-4 py-1 rounded-full text-sm ${color}`}>
      {text}
    </span>
  )
}

