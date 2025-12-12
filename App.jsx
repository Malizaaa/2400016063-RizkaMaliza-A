import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FourPillars from './components/FourPillars'
import Schedule from './components/Schedule'
import ProjectShowcase from './components/ProjectShowcase'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6">
        <HeroSection />
        <FourPillars />
        <Schedule />
        <ProjectShowcase />
      </main>
      <Footer />
    </div>
  )
}

