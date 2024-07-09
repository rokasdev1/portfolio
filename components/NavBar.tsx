import React from 'react'
import HoverText from './HoverText'

const NavBar = () => {
  return (
    <div className='justify-center flex flex-row gap-12 pt-5'>
       <HoverText classNames='text-3xl hover:text-4xl' text='Home'/>
       <HoverText classNames='text-3xl hover:text-4xl' text='About'/>
       <HoverText classNames='text-3xl hover:text-4xl' text='Projects'/>
       <HoverText classNames='text-3xl hover:text-4xl' text='Contact'/>
    </div>
  )
}

export default NavBar