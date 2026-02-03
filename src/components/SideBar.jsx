import React, { useState } from 'react'
import Switch from './TogglrSwitcher';

const SideBar = ({ activeCategory, setActiveCategory, theme, toggleTheme }) => {


  const categories = ['General', 'Business', 'Technology', 'Sports', 'Entertainment', 'Health']

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold text-teal-500 dark:text-white">NewsApp</span>
        </div>
        <nav className="flex items-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category.toLowerCase())}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeCategory.toLowerCase() === category.toLowerCase()
                ? 'bg-teal-500 text-white'
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
            >
              {category}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-300 dark:bg-gray-700 overflow-hidden cursor-pointer hover:ring-2 hover:ring-teal-500 transition-all">
            <span className='text-gray-600 dark:text-gray-300'>IN</span>
          </div>
          <Switch theme={theme} toggleTheme={toggleTheme} />
        </div>

      </div>
    </header>
  )
}

export default SideBar;
