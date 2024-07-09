import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode,
}

const HoverIcon = (props: Props) => {
  return (
    <div className='hover:drop-shadow-strong-w invert hover:scale-125 transition-all'>
        {props.children}
    </div>
  )
}

export default HoverIcon