import React from 'react'
import Image from 'next/image'
import HoverIcon from './HoverIcon'

type Props = {
  row: boolean,
  withText: boolean
}

const Medias = (props: Props) => {
  return (
    <div className={`flex gap-6 ${props.row ? `flex-row` : `flex-col`}`}>
       {props.withText ? <>
        <div className='flex flex-row gap-4'>
          <HoverIcon>
          <Image
          alt='github'
          src='github.svg'
          height={50}
          width={50}
          />
          </HoverIcon>

          <div className='py-4 text-gray-400'>rokasdev1</div>
          </div>

          <div className='flex flex-row gap-4'>
          <HoverIcon>
          <Image
          alt='linkedin'
          src='linkedin.svg'
          height={50}
          width={50}
          />
          </HoverIcon>

          <div className='py-4 text-gray-400'>Rokas Povilaitis</div>
          </div>

          <div className='flex flex-row gap-4'>
          <HoverIcon>
          <Image
          alt='facebook'
          src='facebook.svg'
          height={50}
          width={50}
          />
          </HoverIcon>

          <div className='py-4 text-gray-400'>Rokas Povilaitis</div>
          </div>
          </>

          :
          
          <>
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
          </>}
    </div>
  )
}

export default Medias