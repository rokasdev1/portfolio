import React from 'react'
import Icon from './Icon'

type Props = {
    title: string,
    desc: string,
    imgUrl: string,
    stack: string[],
    link: string,
}

const PortfolioItem = (props: Props) => {
  return (
    <a
    href={props.link}
    className='relative rounded-3xl overflow-hidden'
    >
        <img
        src={props.imgUrl}
        alt='img'
        className='w-full h-64 sm:h-80 z-0 object-cover'
        />

        <div className='opacity-0 hover:opacity-100 flex absolute inset-0 bg-black bg-opacity-50 z-10 justify-center transition-all'>
           <div className='flex flex-col text-center justify-center align-center gap-2 px-8'>
           <h1 className='text-lg'>{props.title}</h1>
           <h2 className='sm:text-md text-xs'>{props.desc}</h2>
           <div className='flex flex-row justify-center gap-4 z-10 pt-6'>
            {props.stack.map(lang => (
                <Icon
                name={lang}
                />
        ))}
        </div>
           </div>
        </div>

    </a>
  )
}

export default PortfolioItem