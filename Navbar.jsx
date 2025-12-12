import React from 'react'
import logo from '../assets/logo.svg'

export default function Navbar() {
  return (
    <nav className="py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-8" />
          <span className="font-semibold text-blue-600">Ruang Ekspresi</span>
        </div>
        <ul className="hidden md:flex gap-6 text-sm">
          <li>Home</li>
          <li>About</li>
          <li>Program</li>
          <li>Project</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  )
}
