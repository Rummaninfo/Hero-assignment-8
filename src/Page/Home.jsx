import React from 'react';
import UseApp from '../Hooks/UseApp';
import AppsCard from './AppsCard';
import { Link } from 'react-router';
import Banner from '../assets/Component/Banner';
import Todo from '../assets/Component/Todo';
import Navbar from '../assets/Component/Navbar';
import Loading from './AppsDetail/Loading';
import { BeatLoader, ClockLoader, MoonLoader } from 'react-spinners';

// import hero from "../img/hero.png"

const Home = () => {
   
    let { apps, loading, error} = UseApp()
    console.log(apps)

    let dataSlice = apps.slice(0,8)

    return (

       <>
        
   <Banner></Banner>
            <Todo></Todo>













        <div className='mt-10 '>
           <div className='text-center space-y-2'>
             <h1 className='text-3xl font-semibold'>Trending Apps</h1>
            <p className='text-lg text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
           </div>

           <div className='mt-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
           {
            // dataSlice.map((prev,index) => <AppsCard key={index} prev={prev}></AppsCard> )
            loading? (    (  <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-gray-700 mx-auto mb-3"></div>
                            <BeatLoader />
                        </div>
)
 ):
            (
              dataSlice.map((prev,index) => <AppsCard key={index} prev={prev}></AppsCard> )
            )


           }
           </div>
             <div className='mt-5 flex justify-center '>
                <Link to='/apps'><button class="btn border-0 btn-primary bg-gradient-to-r from-blue-500 to-purple-500">Show All</button></Link>

             </div>

        </div>
        </>
    );
};

export default Home;