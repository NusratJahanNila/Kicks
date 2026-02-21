import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import CategoryCard from '../../Card/CategoryCard'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const Category = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const scrollRef = useRef(null)

  useEffect(() => {
    const getCategories = async () => {
      try {
        setLoading(true)
        const response = await axios.get(
          'https://api.escuelajs.co/api/v1/categories'
        )
        setCategories(response.data.slice(0, 5))
        setError(null)
      } catch (err) {
        setError('Failed to load categories. Please try again later.')
        console.error('API Error:', err)
      } finally {
        setLoading(false)
      }
    }

    getCategories()
  }, [])

  const checkScrollButtons = () => {
    const { current } = scrollRef
    if (current) {
      setShowLeftArrow(current.scrollLeft > 0)
      setShowRightArrow(
        current.scrollLeft < current.scrollWidth - current.clientWidth - 10
      )
    }
  }

  useEffect(() => {
    const { current } = scrollRef
    if (current) {
      current.addEventListener('scroll', checkScrollButtons)
      checkScrollButtons()

      window.addEventListener('resize', checkScrollButtons)

      return () => {
        current.removeEventListener('scroll', checkScrollButtons)
        window.removeEventListener('resize', checkScrollButtons)
      }
    }
  }, [categories])

  const scroll = direction => {
    const { current } = scrollRef
    if (current) {
      const cardWidth = current.querySelector('div > div')?.offsetWidth || 300
      const gap = 32
      const scrollAmount = (cardWidth + gap) * (direction === 'left' ? -1 : 1)

      current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  if (loading) {
    return (
      <section className='bg-[#232321] w-full py-12 md:py-24'>
        <div className='max-w-[1320px] mx-auto px-4'>
          <div className='flex justify-center items-center h-64'>
            <div className='w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin'></div>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className='bg-[#232321] w-full py-12 md:py-24'>
        <div className='max-w-[1320px] mx-auto px-4'>
          <div className='text-center py-16'>
            <p className='text-red-400 mb-6'>{error}</p>
            <button
              onClick={() => window.location.reload()}
              className='bg-white text-black px-8 py-3 rounded-lg font-bold uppercase hover:bg-gray-200 transition-colors'
            >
              Retry
            </button>
          </div>
        </div>
      </section>
    )
  }

  const groupedCategories = []
  for (let i = 0; i < categories.length; i += 2) {
    groupedCategories.push(categories.slice(i, i + 2))
  }
  return (
    <section className='bg-[#232321] w-full pt-12 md:pt-24 overflow-hidden'>
      <div className='max-w-330 mx-auto '>
        <div className='flex justify-between items-center mb-8 md:mb-16 px-4 md:px-4'>
          <h2 className='text-white text-3xl md:text-7xl font-bold uppercase'>
            Categories
          </h2>
          <div className='flex gap-2'>
            <button
              onClick={() => scroll('left')}
              className={`p-3 rounded-lg transition-all ${
                showLeftArrow
                  ? 'bg-white text-black hover:bg-gray-200'
                  : 'bg-white/10 text-white/50 cursor-not-allowed'
              }`}
              disabled={!showLeftArrow}
            >
              <IoIosArrowBack size={24} />
            </button>
            <button
              onClick={() => scroll('right')}
              className={`p-3 rounded-lg transition-all ${
                showRightArrow
                  ? 'bg-white text-black hover:bg-gray-200'
                  : 'bg-white/10 text-white/50 cursor-not-allowed'
              }`}
              disabled={!showRightArrow}
            >
              <IoIosArrowForward size={24} />
            </button>
          </div>
        </div>

        {categories.length === 0 ? (
          <div className='text-white/50 py-20 text-center w-full text-lg'>
            No categories available at the moment.
          </div>
        ) : (
          <div
            ref={scrollRef}
            className='flex bg-white max-w-330 mx-auto pl-4 ml-4 rounded-tl-4xl overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth'
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {groupedCategories.map((group, index) => (
              <div
                key={index}
                className="snap-start shrink-0 flex flex-col md:flex-row gap-4 mr-4"
              >
                {group.map(cat => (
                  <CategoryCard key={cat.id} category={cat} />
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default Category
