import BigText from '@/components/BigText'
import InvertingButton from '@/components/InvertingButton'
import Medias from '@/components/Medias'
import NavBar from '@/components/NavBar'
import React from 'react'

const Home = () => {
  return (
    <div className="w-full h-[100vh] bg-black relative" id='Home'>

    <img
    alt="bg"
    src="forest.jpg"
    className="absolute inset-0 w-full h-full object-cover z-0"
    />

    <div className="z-10 backdrop-blur-md shadow-bg-inner">
      <NavBar />
      <div className="py-10" />


    <div className='flex flex-col pl-24 pb-48 md:w-[60vw] w-[80vw] h-[100vh] justify-center '>
        <BigText text="Hey, I'm Rokas" subtitleText='Web / app developer' classNames='text-gray-400'/>

        <div className='pt-14 pb-8'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </div>

        <div className='flex flex-col gap-8 md:pr-24 items-center'>
        <Medias />
        <InvertingButton text="Let's talk" />
        </div>
    </div>

    </div>
  </div>
  )
}

export default Home