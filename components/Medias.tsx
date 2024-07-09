import React from 'react'
import Image from 'next/image'
import HoverIcon from './HoverIcon'

const Medias = () => {
  return (
    <div className='flex flex-row gap-6'>
       <HoverIcon>
       <Image
        alt='github'
        src='github.svg'
        height={50}
        width={50}
        />
       </HoverIcon>

       <HoverIcon>
       <Image
        alt='linkedin'
        src='linkedin.svg'
        height={50}
        width={50}
        />
       </HoverIcon>

        <HoverIcon>
        <Image
        alt='facebook'
        src='facebook.svg'
        height={50}
        width={50}
        />
        </HoverIcon>
    </div>
  )
}

export default Medias