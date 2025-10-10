import React from 'react';
import Home from '../../Page/Home';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';
import Banner from '../Component/Banner';
import Todo from '../Component/Todo';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen'>
           
            <Navbar></Navbar>
            <div className='flex-1 w-[90%] mx-auto   my-10 '>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;