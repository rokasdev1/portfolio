import BigText from '@/components/BigText'
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className="w-full h-[100vh] bg-black relative" id='About'>

    <img
    alt="bg2"
    src="forest2.jpg"
    className="absolute inset-0 w-full h-full object-cover z-0 "
    />
    
    <div className="z-10 backdrop-blur-md h-full flex justify-center items-center shadow-bg-inner border-t-4 border-black">

    <div className='flex md:flex-row flex-col items-center'>
    <div className='flex flex-col max-h-[450px] md:w-[350px] w-[80vw]'>
    
        <BigText text='About me' subtitleText='Who am I?' classNames='text-black' />
        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
    </div>
    <div className='px-4 py-4' />
    <img 
        alt='me'
        src="/me.jpg"
        className='max-w-full md:h-[450px] h-[300px] rounded rounded-full border border-2'
    />
    </div>

    </div>
  </div>
  )
}

export default About