import React from 'react'

type Props = {
    text: string,
    classNames: string,
    href: string,
}

const HoverText = (props: Props) => {
  return (
    <a className={`hover:drop-shadow-strong-w transition-all ${props.classNames}`} href={props.href} >
    {props.text}
    </a>
  )
}

export default HoverText