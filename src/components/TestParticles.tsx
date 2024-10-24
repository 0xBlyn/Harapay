import React from 'react'
import Particles from '@/components/ui/particles'

function TestParticles() {
  return (
    <div className="relative h-screen w-full bg-black">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        refresh
      />
      <h1 className="relative z-10 text-white text-4xl font-bold text-center pt-20">
        Test Particles
      </h1>
    </div>
  )
}

export default TestParticles
