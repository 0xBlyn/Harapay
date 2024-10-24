import React from 'react'
import Image from 'next/image'
import Particles from '@/components/ui/particles'

type Props = {}

function Mission({}: Props) {
  return (
    <div className="relative overflow-hidden min-h-screen bg-white text-black">
      <Particles
        className="absolute inset-0"
        quantity={500}
        ease={100}
        refresh
        color="#000000"
      />
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center px-[5%] py-9 min-h-screen">
        <div className="relative w-full md:w-1/2 h-[300px] md:h-[500px]">
          <Image
            src="/images/mockup.png" 
            alt="Harapay" 
            fill
            style={{ objectFit: "contain" }}
            className="transform scale-x-[-1]"
          />
        </div>
        <div className='md:w-1/2 md:pl-[5%] mt-8 md:mt-0'>
          <h1 className='text-2xl font-semibold mb-4'>Our Mission</h1>
          <p className='text-gray-700 mb-6'>Our mission is to close the gap between blockchain and traditional financial services across Africa by leveraging cutting-edge technology to provide secure, efficient, and accessible financial solutions for all.</p>
          <h1 className='text-2xl font-semibold mb-4'>Our Vision</h1>
          <p className='text-gray-700'>At HaraPay, we envision a more inclusive and accessible financial ecosystem, where everyone, regardless of location or connectivity, can access modern financial tools. Our goal is to empower individuals and businesses across Africa through innovative blockchain technology and user-friendly interfaces like USSD, ensuring financial inclusion and stability for all</p>
        </div>
      </div>
    </div>
  )
}

export default Mission
