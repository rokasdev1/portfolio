import React from 'react'

type Props = {
    text: string,
}

const BigText = (props: Props) => {
  return (
    <h1 className={`hover:drop-shadow-strong-w transition-all text-7xl hover:text-8xl`}>
    {props.text}
    </h1>
  )
}

export default BigText