import React from 'react';
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
const AllCard = ({prev}) => {
   
    return (
               <div className="card w-full  bg-gray-100 p-5 hover:scale-110 transition ease-in-out  shadow-xs">
          <figure className='shadow-xl'>
            <img className='h-96 object-fill w-full rounded-3xl '
              src={prev.image}
              alt="Shoes" />
          </figure>
          <div className="pt-2">
            <h2 className=" text-center text-xl font-semibold">{prev.title}</h2>
        
        
        
            <div className='flex justify-between mt-2'>
               <div className='flex gap-2 items-center'>
               <FaDownload />
        
        
                <h4>{prev.downloads}</h4>
               </div>
               <div className=' gap-2 items-center'>
                {/* card */}
                <div>
                  <FaStar />
                <h4>{prev.ratingAvg}</h4>
        
                
                </div>
        
        
                  
        
               </div>
            </div>
            
          </div>
        </div>
    );
};

export default AllCard;