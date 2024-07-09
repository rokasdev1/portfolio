import React from 'react'

type Props = {
    text: string,
}

const InvertingButton = (props: Props) => {
  return (
    <div className='
    h-24 w-48 rounded rounded-full bg-black text-white text-2xl flex items-center justify-center
    hover:invert hover:drop-shadow-strong-w transition-all
    '>
        {props.text}
    </div>
  )
}

export default InvertingButton