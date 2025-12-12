import React from 'react'
import hero from '../assets/hero.jpg'
import Pill from './Pill'

export default function HeroSection() {
  return (
    <section className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          <span className="text-blue-600">RUANG EKSPRESI</span> : Wadah kreatif & Kompetitif Mahasiswa
        </h1>
        <p className="mt-6 text-gray-500 max-w-xl">
          Program komprehensif yang dirancang untuk mengembangkan potensi kreatif mahasiswa melalui pendekatan holistik.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Pill text="Ideation" color="bg-yellow-200" />
          <Pill text="Creation" color="bg-green-200" />
          <Pill text="Collaboration" color="bg-blue-100" />
          <Pill text="Guidance & Support" color="bg-pink-200" />
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <img src={hero} alt="group" className="w-80 md:w-[420px] rounded-2xl shadow-lg object-cover" />
      </div>
    </section>
  )
}
