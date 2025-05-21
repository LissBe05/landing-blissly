'use client'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'Services', href: '#services' },
    
  ]

  return (
    <nav className="flex items-center bg-pink-50 justify-between px-10 py-6 fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="flex gap-4">
        <div className="w-4 h-4 mb-8 rounded-full bg-red-500"></div>
        <div className="w-4 h-4 mb-8 rounded-full bg-blue-500"></div>
        <div className="w-4 h-4 mb-8 rounded-full bg-green-500"></div>
      </div>

      <div className="text-2xl font-bold">Blissly</div>

      {/* Menu Desktop */}
      <ul className="hidden md:flex space-x-8 font-medium text-lg">
        {navLinks.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="hover:text-red-400 transition-colors duration-200"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button className="text-xl">🛍️</button>
          <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white w-4 h-4 flex items-center justify-center rounded-full">0</span>
        </div>
        <button className="bg-red-400 text-white px-4 py-2 rounded-full text-sm">
          Sign in
        </button>

        {/* Burger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-md mt-2 py-4 z-50 md:hidden">
          <ul className="flex flex-col items-center gap-4 font-medium text-lg">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hover:text-red-400 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <button
                className="bg-red-400 text-white px-4 py-2 rounded-full text-sm"
                onClick={() => setIsOpen(false)}
              >
                Sign in
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
