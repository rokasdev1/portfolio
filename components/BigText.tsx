import React from 'react'

type Props = {
    text: string,
    subtitleText: string,
    classNames?: string,
}

const BigText = (props: Props) => {
  return (
    <div className='flex flex-col'>
      <h2 className={`text-xl ${props.classNames}`}>{props.subtitleText}</h2>
      <h1 className={`hover:drop-shadow-strong-w transition-all md:text-7xl text-4xl hover:scale-110 `}>
    {props.text}
    </h1>
    </div>
  )
}

export default BigText