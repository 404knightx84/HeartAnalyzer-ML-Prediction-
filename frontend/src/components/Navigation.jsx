import React from 'react'

export default function Navigation() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <i className="fas fa-heartbeat text-2xl text-red-500"></i>
            <span className="text-xl font-bold text-gray-800">HeartAnalyzer</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-red-500 transition duration-300 font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-red-500 transition duration-300 font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-red-500 transition duration-300 font-medium">Contact</a>
          </div>

          <button className="md:hidden text-gray-700">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </nav>
  )
}
