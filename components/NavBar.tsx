import React from 'react'
import HoverText from './HoverText'
import Image from 'next/image'

const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full p-5">
    <div className="flex-1 flex justify-center">
      <div className="hidden sm:flex flex-row gap-12">
        <HoverText classNames="text-3xl hover:scale-125 transition-transform" text="Home" href="#Home" />
        <HoverText classNames="text-3xl hover:scale-125 transition-transform" text="About" href="#About" />
        <HoverText classNames="text-3xl hover:scale-125 transition-transform" text="Projects" href="#Projects" />
        <HoverText classNames="text-3xl hover:scale-125 transition-transform" text="Contact" href="#Contact" />
      </div>
    </div>
    <div className="sm:hidden">
      <button>
        <Image
        alt="menu"
        src="/menu.svg"
        height={50}
        width={50}
        className='invert'
      />
      </button>
    </div>
  </div>
  )
}

export default NavBar