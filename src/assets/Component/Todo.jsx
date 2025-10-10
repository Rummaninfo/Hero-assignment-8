import React from 'react';
import hero from "../img/hero.png"
const Todo = () => {
    return (
        <div className='w-full'>
           <div className='flex justify-center mt-10 '>
            <img src={hero} alt="" /> 
           </div>
           <div className='bg-gradient-to-r from-blue-500 to-purple-500 py-14 text-white b'>
             <h1 className='text-center text-4xl'>Trusted by Millions, Built for You</h1>
             <div className='grid grid-cols-1   md:grid-cols-3 text-center justify-around pt-8'>
                <div className='space-y-2'>
                    <p>Total Downloads</p>
                    <h1 className=' text-3xl md:text-5xl font-bold'>29.6M</h1>
                    <p>21% more than last month</p>
                </div>
                <div className='space-y-2'>
                    <p>Total Downloads</p>
                    <h1 className='text-3xl md:text-5xl font-bold'>29.6M</h1>
                    <p>21% more than last month</p>
                </div>
                <div className='space-y-2'>
                    <p>Total Downloads</p>
                    <h1 className='text-3xl md:text-5xl font-bold'>29.6M</h1>
                    <p>21% more than last month</p>
                </div>
             </div>
           </div>
        </div>
    );
};

export default Todo;