import React from 'react';
import UseApp from '../Hooks/UseApp';
import AppsCard from './AppsCard';
import { Link } from 'react-router';
import Banner from '../assets/Component/Banner';
import Todo from '../assets/Component/Todo';
import Navbar from '../assets/Component/Navbar';
import Loading from './AppsDetail/Loading';
import { ClockLoader, MoonLoader } from 'react-spinners';

// import hero from "../img/hero.png"

const Home = () => {
   
    let { apps, loading, error} = UseApp()
    console.log(apps)

    let dataSlice = apps.slice(0,10)

    return (

       <>
        
   <Banner></Banner>
            <Todo></Todo>













        <div className='mt-10 '>
           <div className='text-center'>
             <h1 className='text-3xl font-semibold'>Trending Apps</h1>
            <p className='text-lg text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
           </div>

           <div className='mt-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
           {
            // dataSlice.map((prev,index) => <AppsCard key={index} prev={prev}></AppsCard> )
            loading? (    (  <div className='flex justify-center text-center items-center'><MoonLoader /> </div>
)
 ):
            (
              dataSlice.map((prev,index) => <AppsCard key={index} prev={prev}></AppsCard> )
            )


           }
           </div>
             <div className='mt-5 flex justify-center '>
                <Link to='/apps'><button class="btn btn-primary">Sell All</button></Link>

             </div>

        </div>
        </>
    );
};

export default Home;