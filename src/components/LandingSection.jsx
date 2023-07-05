import React, { useRef } from 'react'
import Lottie from 'lottie-react'
import animationData from '../assets/landing-page.json'

const greeting = 'Hello, I am Bolaxd!'
const bio1 =
  'A frontend developer and backend developer. I like to learn new things, and always try it with practice'

function LandingSection() {
	const animRef = useRef()
  return (
    <div className="text-center flex flex-col items-center justify-center gap-4 min-h-screen">
      <img
        className=" object-cover my-8 w-48 h-48"
        src="/Proyek Baru 259 [B315287].png"
        alt="Bolaxd"
      />
      <h1 className="my-2 text-5xl font-serif">{greeting}</h1>
      <p className="text-xl">{bio1}</p>
      { /* <Lottie animationData={animationData} className="relative md:w-1/3" /> */ }
    </div>
  )
}

export default LandingSection