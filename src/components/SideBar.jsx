import React, { useState } from 'react'

const SideBar = ({activeCategory, setActiveCategory}) => {
  

  const categories = ['General', 'Business', 'Technology', 'Sports', 'Entertainment', 'Health']

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold text-teal-500">NewsApp</span>
        </div>
        <nav className="flex items-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category.toLowerCase())}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeCategory.toLowerCase() === category.toLowerCase()
                ? 'bg-teal-500 text-white'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
            >
              {category}
            </button>
          ))}
        </nav>
        <div className=" gap-4">
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-300 overflow-hidden cursor-pointer hover:ring-2 hover:ring-teal-500 transition-all">
            <span className='text-gray-600'>IN</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default SideBar;
