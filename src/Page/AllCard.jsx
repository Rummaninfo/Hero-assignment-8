import React from 'react';
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';
const AllCard = ({prev}) => {
   
    return (
               <Link to={`/appsDetails/${prev.id}`}>
               
               <div className="card w-full bg-gray-100 border-1   p-3 hover:scale-110 transition ease-in-out  shadow-xs">
          <figure className='bg-white'>
            <img className='aspect-w-16   h-72 aspect-h-9 rounded-3xl p-10 '
              src={prev.image}
              alt="Shoes" />
          </figure>
          <div className="pt-2">
            <h2 className=" text-center text-xl font-semibold">{prev.title}</h2>
        
        
         <div className='flex justify-between mt-2'>
               <div className='flex gap-2 bg-green-50  p-2 items-center rounded-xl'>
               <FaDownload />
        
        
                <h4 className='text-[#00D390] font-semibold'>{prev.downloads}</h4>
               </div>
               <div className=' gap-2 p-2 bg-[#FFE8CC] rounded-xl items-center'>
                {/* card */}
                <div className='flex text-[#FF8811] gap-2 items-center'>
                  <FaStar />
                <h4 className='font-semibold'>{prev.ratingAvg}</h4>
        
                
                </div>
        
        
                  
        
               </div>
            </div>
            
          </div>
        </div>
               </Link>
    );
};

export default AllCard;