"use client";

import React, { useState } from 'react'
import HoverText from './HoverText'
import Image from 'next/image'

const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
      <button onClick={toggleMenu}>
        <Image
        alt="menu"
        src="/menu.svg"
        height={50}
        width={50}
        className='invert'
      />
      </button>
      {menuOpen && (
          <div className="absolute right-4 mt-2 w-48 bg-gray-600 bg-opacity-75 shadow-lg rounded-lg transition-all">
            <a href="#Home" className="block px-4 py-2 hover:bg-gray-200">Home</a>
            <a href="#About" className="block px-4 py-2 hover:bg-gray-200">About</a>
            <a href="#Projects" className="block px-4 py-2 hover:bg-gray-200">Projects</a>
            <a href="#Contact" className="block px-4 py-2 hover:bg-gray-200">Contact</a>
          </div>
        )}
    </div>
  </div>
  )
}

export default NavBar