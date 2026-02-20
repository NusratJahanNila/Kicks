// ProductCard.jsx
import React from 'react'

const ProductCard = ({ product }) => {
  const { title, price, category, images } = product

  return (
    <div className='w-full max-w-[318px] mx-auto font-sans flex flex-col'>
      {/* Image Section */}
      <div className='relative aspect-square w-full bg-[#f3f4f6] rounded-3xl overflow-hidden flex items-center justify-center p-2'>
        {/* "New" Badge */}
        <div className='absolute top-0 left-0 bg-[#5c7cf2] text-white text-[10px] font-bold px-4 py-2 rounded-br-2xl uppercase'>
          New
        </div>

        <img
          src={images[0]}
          alt={title}
          className='w-full h-full object-contain mix-blend-multiply'
        />
      </div>

      {/* Content Section */}
      <div className='mt-4 flex flex-col flex-1 px-1'>
        <h2 className='text-base md:text-lg font-black text-gray-800 leading-tight uppercase line-clamp-2'>
          {title}
        </h2>
        <p className='text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1'>
          {category.name}
        </p>

        {/* Action Button */}
        <div className='mt-auto mb-1'>
          <button className='w-full bg-[#222222] hover:bg-black text-white font-bold py-3 px-4 md:py-3.5 md:px-6 rounded-lg transition-colors duration-200 flex justify-center items-center gap-1 group'>
            <span className='uppercase text-[10px] md:text-[11px] tracking-tighter'>
              View Product -
            </span>
            <span className='text-[#f7a439] group-hover:text-[#ffb85c] text-sm md:text-base'>
              ${price}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard