import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const CategoryCard = ({ category }) => {
  return (
    <div
      className='relative bg-[#F4F4F4] md:border-l md:border-gray-300  overflow-hidden w-89.5 md:w-172.5 h-87.5 md:h-150 flex flex-col justify-between group cursor-pointer transition-all'
    >
      {/* Image Container - Fixed dimensions: 480x600 on desktop */}
      <div className='w-full h-full p-4 md:p-8 flex items-center justify-center'>
        <img
          src={category.image}
          alt={category.name}
          className='w-full py-4 h-full rounded-3xl object-contain md:object-cover md:w-120 md:h-150 group-hover:scale-105 transition-transform duration-500'
        />
      </div>

      {/* Bottom Label and Icon */}
      <div className='absolute bottom-0 left-0 w-full p-6 md:p-12 flex justify-between items-end'>
        <h3 className='text-2xl md:text-4xl font-black uppercase text-[#232321] leading-tight'>
          {category.name}
          {category.name.includes(' ') ? (
            <>
              <br />
              <span className='block -mt-2'>{category.name.split(' ')[1]}</span>
            </>
          ) : (
            <br />
          )}
        </h3>

        {/* Dark Arrow Icon */}
        <div className='bg-[#232321] text-white p-3 md:p-4 rounded-xl hover:bg-opacity-80 transition-colors'>
          <FiArrowUpRight size={24} className='md:w-8 md:h-8' />
        </div>
      </div>
    </div>
  )
}

export default CategoryCard
