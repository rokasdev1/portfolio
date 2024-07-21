import { Sizes } from '@/enums/Size'
import React from 'react'

type Props = {
    text: string,
    size: Sizes,
}


const InvertingButton = (props: Props) => {
  return (
    <div className={`${props.size === Sizes.md ? `h-24 w-48 text-2xl` : `h-12 w-24 text-sm`} rounded-full bg-black text-white flex items-center justify-center
    hover:invert hover:drop-shadow-strong-w transition-all`}>
        {props.text}
    </div>
  )
}

export default InvertingButton