import BigText from '@/components/BigText'
import InvertingButton from '@/components/InvertingButton'
import Medias from '@/components/Medias'
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col pl-12 pb-48 w-[60vw] h-[100vh] justify-center '>
        <h2 className='text-xl text-gray-400'>
        Web / app developer
        </h2>

        <BigText text="Hey, I'm Rokas"/>

        <div className='pt-14 pb-8'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </div>

        <div className='pl-48 flex flex-col gap-8'>
        <Medias />
        <InvertingButton text="Let's talk" />
        </div>
    </div>
  )
}

export default Home