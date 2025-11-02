import React from 'react'
import InteractiveGridPattern from '../InteractiveGridPattern/InteractiveGridPattern'
import Navbar from '../Navbar/Navbar'
import HeroSection from '../HeroSection/HeroSection'

const HomePage = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#121212]">
      <Navbar />

      <div className="relative h-[calc(100vh-73px)] w-full">
        {/* Background Grid Pattern */}
        <InteractiveGridPattern
          className="absolute -inset-[20%] h-[90%] z-10 w-[90%] -left-[20%] -top-[20%] skew-y-12 mask-[radial-gradient(500px_circle_at_center,white,transparent)]"
        />
        <InteractiveGridPattern
          className="absolute -bottom-[50%] -right-[50%] h-[90%] z-10 w-[90%]  skew-y-12 mask-[radial-gradient(500px_circle_at_center,white,transparent)]"
        />

        {/* Hero Section */}
        <HeroSection />
      </div>
    </div>
  )
}

export default HomePage
