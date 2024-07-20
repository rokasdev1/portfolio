import React from 'react'

type Props = {
    name: string
}

const Icon = (props: Props) => {
    const render = () => {
        switch (props.name) {
            case 'Flutter':
                return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" className='w-full h-8 hover:scale-125 hover:drop-shadow-strong-w transition-all'/>;
            case 'Dart':
                return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" className='w-full h-8 hover:scale-125 hover:drop-shadow-strong-w transition-all'/>
            case 'React':
                return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className='w-full h-8 hover:scale-125 hover:drop-shadow-strong-w transition-all'/>
            case 'NextJS':
                return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" className='w-full h-8 hover:scale-125 hover:drop-shadow-strong-w transition-all'/>
        }
    }

  return (
   <div>{render()}</div>
  )
}

export default Icon