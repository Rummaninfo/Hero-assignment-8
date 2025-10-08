import React from 'react';
import hero from "../img/hero.png"
const Todo = () => {
    return (
        <div className=''>
           <div className='flex justify-center mt-10 '>
            <img src={hero} alt="" /> 
           </div>
           <div className='bg-[#632EE3] py-14 text-white b'>
             <h1 className='text-center text-4xl'>Trusted by Millions, Built for You</h1>
             <div className='grid grid-cols-1   md:grid-cols-3 text-center justify-around pt-5'>
                <div>
                    <p>Total Downloads</p>
                    <h1 className='text-3xl font-semibold'>29.6M</h1>
                    <p>21% more than last month</p>
                </div>
                <div>
                    <p>Total Downloads</p>
                    <h1 className='text-3xl font-semibold'>29.6M</h1>
                    <p>21% more than last month</p>
                </div>
                <div>
                    <p>Total Downloads</p>
                    <h1 className='text-3xl font-semibold'>29.6M</h1>
                    <p>21% more than last month</p>
                </div>
             </div>
           </div>
        </div>
    );
};

export default Todo;