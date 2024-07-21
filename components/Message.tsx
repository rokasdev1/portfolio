import React from 'react'
import InvertingButton from './InvertingButton'
import { Sizes } from '@/enums/Size'

type Props = {}

const Message = (props: Props) => {
  return (
    <div className='w-[40vw] flex flex-col gap-4'>
        
        <div className='flex flex-row gap-4'>
            <form className='w-1/2 rounded-lg border-2 hover:border-blue-400 transition-all'>
                <input
                className='px-4 py-3 h-full w-full bg-transparent border-none focus:outline-none flex justify-start'
                placeholder='Name'
                 type="text" id="name" maxLength={30}
                />
            </form>
            <form className='w-1/2 rounded-lg border-2 hover:border-green-400 transition-all'>
                <input
                className='px-4 py-3 h-full w-full bg-transparent border-none focus:outline-none flex justify-start'
                placeholder='Email'
                 type="text" id="email" maxLength={30}
                />
            </form>
        </div>

        <form className='w-full rounded-lg border-2 hover:border-red-300 transition-all'>
                <input
                className='px-4 py-3 h-full w-full bg-transparent border-none focus:outline-none flex justify-start'
                placeholder='Subject'
                 type="text" id="subject" maxLength={30}
                />
            </form>

        <form className='w-full h-36 rounded-lg border-2 flex justify-start items-start hover:border-yellow-400 transition-all'>
                <textarea
                className='px-4 py-3 bg-transparent border-none focus:outline-none size-full'
                placeholder='Message'
                 id="message" maxLength={200}
                />
            </form>

       
       <div className='flex justify-end'>
       <InvertingButton
        text='Message'
        size={Sizes.sm}
        />
       </div>
       
    </div>
  )
}

export default Message