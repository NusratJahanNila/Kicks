import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Components/Home/Navbar/Navbar';
import Footer from '../../Components/Home/Footer/Footer';

const HomeLayout = () => {
    return (
        <div className='bg-[#E7E7E3]'>
            <header>
                <Navbar/>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default HomeLayout;