import BigText from '@/components/BigText'
import Medias from '@/components/Medias'
import Message from '@/components/Message'
import React from 'react'

const Contact = () => {
    return (
        <div className="w-full min-h-screen bg-black relative" id='Contact'>
    
        <img
        alt="contactbg"
        src="contact_bg.jpg"
        className="absolute inset-0 w-full h-full object-cover z-0 "
        />
        
        <div className="z-10 backdrop-blur-md min-h-screen flex flex-col gap-8 justify-center shadow-bg-inner border-t-4 border-black py-16">
    
        <div className='flex flex-col text-center items-center w-full'>
            <BigText
            classNames='sm:text-md text-base'
            subtitleText='Get in contact'
            text='Contact me'
            />
            <div className='py-4 px-4 text-gray-400 px-3'>I'm interested in freelance projects making apps and websites for your liking.</div>
        </div>

        <div className='flex md:flex-row md:gap-0 flex-col md:justify-between md:items-start items-center md:px-24 px-12 gap-6'>
                <Medias
                row={false}
                withText={true}
                />

                <Message
                />
            </div>
    
        </div>
      </div>
      )
}

export default Contact