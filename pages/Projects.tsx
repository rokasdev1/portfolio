import BigText from '@/components/BigText'
import Portfolio from '@/components/Portfolio'
import React from 'react'

const Projects = () => {
  return (
    <div className="w-full bg-black relative" id='Projects'>

    <img
    alt="bg3"
    src="bg.jpg"
    className="absolute inset-0 w-full h-full object-cover z-0 "
    />
    
    <div className="z-10 backdrop-blur-md h-full flex justify-center shadow-bg-inner border-t-4 border-black py-16">

    <div className='flex flex-col items-center'>
    <BigText text='My portfolio' subtitleText='Projects' classNames='text-gray-300'/>
    <div className='py-4 px-4 text-gray-400 text-center'>A collection of the more interesting projects I have worked on</div>
    <Portfolio/>
    </div>

    </div>
  </div>
  )
}

export default Projects