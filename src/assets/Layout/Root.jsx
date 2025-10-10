import React from 'react';
import Home from '../../Page/Home';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';
import Banner from '../Component/Banner';
import Todo from '../Component/Todo';
import UseApp from '../../Hooks/UseApp';
import { BeatLoader } from 'react-spinners';

const Root = () => {

    let data = UseApp([])
    let { apps, loading, error} = data
    return (
        <div className='flex flex-col min-h-screen'>
           
            <Navbar></Navbar>
            {
              loading? (<div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-gray-700 mx-auto mb-3"></div>
                            <BeatLoader />
                        </div>):
              <div className='flex-1 w-[90%] mx-auto   my-10 '>
                <Outlet></Outlet>
            </div> 
            }
            <Footer></Footer>
        </div>
    );
};

export default Root;