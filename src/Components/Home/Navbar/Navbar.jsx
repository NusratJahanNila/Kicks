import React from 'react';

const Navbar = () => {
  // Navigation items shared between mobile and desktop
  const NavItems = (
    <>
      <li className="font-bold uppercase cursor-pointer hover:opacity-70 transition-opacity whitespace-nowrap">
        New Drops 🔥
      </li>
      <li className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="font-bold uppercase flex items-center gap-1 cursor-pointer">
          Men <span className="text-[10px]">▼</span>
        </div>
        <ul tabIndex={0} className="dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-52 mt-4">
          <li><a>Lifestyle</a></li>
          <li><a>Running</a></li>
          <li><a>Basketball</a></li>
        </ul>
      </li>
      <li className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="font-bold uppercase flex items-center gap-1 cursor-pointer">
          Women <span className="text-[10px]">▼</span>
        </div>
        <ul tabIndex={0} className="dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-52 mt-4">
          <li><a>Lifestyle</a></li>
          <li><a>Training</a></li>
          <li><a>Accessories</a></li>
        </ul>
      </li>
    </>
  );

  return (
    <nav className="w-full px-4 py-4 md:py-8 bg-[#E7E7E3]">
      <div className="grid grid-cols-3 items-center bg-white rounded-2xl md:rounded-3xl h-24 max-w-330 mx-auto text-[#232321] relative">
        
        {/* links */}
        <div className="flex items-center pl-8 py-[38.5px]">
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost p-0 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded-box w-52">
              {NavItems}
            </ul>
          </div>
          
          {/* Desktop Links */}
          <ul className="hidden lg:flex gap-8 text-sm list-none items-center">
            {NavItems}
          </ul>
        </div>

        {/* logo */}
        <div className="flex justify-center items-center py-8">
          <a className="text-2xl md:text-4xl font-black tracking-tighter cursor-pointer leading-none">
            KICKS
          </a>
        </div>

        {/* buttons */}
        <div className="flex justify-end items-center pr-8 py-8 gap-2 md:gap-6">
          <button className="hidden md:flex btn btn-ghost btn-circle btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          <button className="btn btn-ghost btn-circle btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>

          {/* Cart Badg */}
          <div className="flex items-center justify-center bg-[#FFA52F] text-black font-bold rounded-full h-8 w-8 text-xs cursor-pointer hover:scale-105 transition-transform">
            0
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;