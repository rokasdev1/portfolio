import React from 'react'

type Props = {
    text: string,
    classNames: string,
}

const HoverText = (props: Props) => {
  return (
    <h1 className={`hover:drop-shadow-strong-w transition-all ${props.classNames}`}>
    {props.text}
    </h1>
  )
}

export default HoverText