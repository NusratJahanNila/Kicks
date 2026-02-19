import React from 'react'

const Hero = () => {
  return (
    <section className='relative w-full max-w-330 mx-auto px-4 overflow-hidden'>
      {/* heading */}
      <div className='absolute inset-x-0 top-0 flex justify-center pointer-events-none select-none z-0'>
        <h1 className='flex gap-3 md:gap-8 font-bold leading-none tracking-tight text-[clamp(48px,12vw,220px)]'>
          <span className='text-secondary'>DO IT</span>
          <span className='text-primary'>RIGHT</span>
        </h1>
      </div>

      {/* banner */}
      <div className='relative z-10 pt-24 md:pt-48'>
        <div className='relative rounded-4xl md:rounded-[64px] overflow-hidden min-h-105 md:h-175'>
          {/* bg image */}
          <img
            src='/src/assets/image 14.png'
            alt='Nike Air Max'
            className='absolute inset-0 w-full h-full object-cover'
          />

          {/* left lebel */}
          <div className=' absolute left-0 top-6 md:top-16 bg-[#232321] text-white py-2 md:p-6 px-1  rounded-r-xl z-20'>
            <p className='[writing-mode:sideways-rl] rotate-180  text-xs tracking-widest'>
              Nike product of the year
            </p>
          </div>

          {/* content  */}
          <div className='absolute bottom-0 left-0 z-20 w-full p-6 md:p-16'>
            <div className='max-w-58 md:max-w-140'>
              <h2 className='text-white text-xl md:text-6xl font-bold uppercase leading-none mb-4'>
                Nike Air Max
              </h2>

              <p className='text-white text-sm md:text-lg mb-6 md:mb-8'>
                Nike introducing the new air max for everyone's comfort
              </p>

              <button className='bg-[#4A69E2] text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg uppercase hover:bg-secondary transition w-fit'>
                Shop Now
              </button>
            </div>
          </div>

          {/* right images */}
          <div className=' md:flex absolute right-3 md:right-8 bottom-8 flex-col flex gap-2 md:gap-4 z-20'>
            <div className='w-20 h-20 md:w-40 md:h-40 rounded-2xl md:rounded-3xl overflow-hidden'>
              <img
                src='/src/assets/Rectangle 1.png'
                alt='thumb1'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='w-20 h-20 md:w-40 md:h-40 rounded-2xl md:rounded-3xl  overflow-hidden'>
              <img
                src='/src/assets/Rectangle 2.png'
                alt='thumb2'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero