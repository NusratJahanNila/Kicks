import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa'

const Footer = () => {
  return (
    <section className='w-full max-w-330 mx-auto px-4 md:px-4 mt-20'>
      {/* Main container with rounded borders */}
      <div className='rounded-4xl md:rounded-[48px] overflow-hidden'>
        {/* 1. Blue Newsletter Section */}
        <div className='bg-[#4A69E2] p-8 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8'>
          <div className='max-w-xl'>
            <h2 className='text-white text-3xl md:text-5xl font-bold uppercase leading-tight'>
              Join our KicksPlus <br /> Club & get 15% off
            </h2>
            <p className='text-white/80 mt-4 font-medium'>
              Sign up for free! Join the community.
            </p>
            <div className='mt-8 flex flex-col sm:flex-row gap-2'>
              <input
                type='email'
                placeholder='Email address'
                className='bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white placeholder:text-white/60 focus:outline-none w-full sm:w-80'
              />
              <button className='bg-[#232321] text-white px-8 py-3 rounded-lg font-bold uppercase hover:opacity-90 transition-all'>
                Submit
              </button>
            </div>
          </div>

          {/* Large KICKS Logo for Newsletter Section */}
          <div className='hidden md:block'>
            <h2 className='text-white text-8xl font-black tracking-tighter opacity-90 relative'>
              KICKS
              <span className='text-[#FFA52F] text-2xl absolute top-4 -right-6'>
                ⊕
              </span>
            </h2>
          </div>
        </div>

        {/* 2. Dark Information Section */}
        <div className='bg-[#232321] p-8 md:p-16 mb-70 text-white relative overflow-hidden rounded-4xl'>
          <div className='grid grid-cols-1 md:grid-cols-4 mb-50 gap-12 relative z-10'>
            {/* Column 1: About */}
            <div className='flex flex-col gap-4'>
              <h3 className='text-[#FFA52F] text-xl font-bold'>About us</h3>
              <p className='text-white text-sm leading-relaxed'>
                We are the biggest hyperstore in the universe. We got you all
                covered with our exclusive collections and latest drops.
              </p>
            </div>

            {/* Column 2: Categories */}
            <div className='flex flex-col gap-4'>
              <h3 className='text-[#FFA52F] text-xl font-bold'>Categories</h3>
              <ul className='text-sm font-medium flex flex-col gap-2'>
                <li>
                  <a href='#' className='hover:text-[#FFA52F]'>
                    Runners
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-[#FFA52F]'>
                    Sneakers
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-[#FFA52F]'>
                    Basketball
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-[#FFA52F]'>
                    Outdoor
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-[#FFA52F]'>
                    Golf
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-[#FFA52F]'>
                    Hiking
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className='flex flex-col gap-4'>
              <h3 className='text-[#FFA52F] text-xl font-bold'>Company</h3>
              <ul className='text-sm font-medium flex flex-col gap-2'>
                <li>
                  <a href='#' className='hover:text-[#FFA52F]'>
                    About
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-[#FFA52F]'>
                    Contact
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-[#FFA52F]'>
                    Blogs
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Follow Us */}
            <div className='flex flex-col gap-4'>
              <h3 className='text-[#FFA52F] text-xl font-bold'>Follow us</h3>
              <div className='flex gap-4 text-white'>
                <FaFacebookF className='cursor-pointer hover:text-[#4A69E2] text-xl' />
                <FaInstagram className='cursor-pointer hover:text-[#4A69E2] text-xl' />
                <FaTwitter className='cursor-pointer hover:text-[#4A69E2] text-xl' />
                <FaTiktok className='cursor-pointer hover:text-[#4A69E2] text-xl' />
              </div>
            </div>
          </div>

          {/* Massive KICKS Word - Positioned to overlap both sections */}
            <div className='relative w-full max-w-330 mx-auto pointer-events-none select-none'>
              <h2 className='absolute -top-48 md:-top-40 left-0 w-full text-white text-[150px] md:text-[400px] font-black tracking-tighter leading-none text-center opacity-20 z-20'>
                KICKS
              </h2>
            </div>
        </div>
      </div>

      {/* 3. Footer Copyright - Separate with its own rounded bottom */}
      <div className='py-2 text-center  text-gray-500 text-sm font-medium rounded-b-4xl md:rounded-b-[48px]'>
        <p>© All rights reserved</p>
      </div>
    </section>
  )
}

export default Footer
