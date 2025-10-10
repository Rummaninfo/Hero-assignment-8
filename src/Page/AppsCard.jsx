import React from 'react';
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";


const AppsCard = ({prev}) => {
   

    
    return (
       <div className="card w-full bg-white  p-3 hover:scale-110 transition ease-in-out  shadow-xl">
  <figure className=''>
    <img className='aspect-w-16   h-72 aspect-h-9 rounded-3xl p-10 '
      src={prev.image}
      alt="Shoes" />
  </figure>
  <div className="pt-2">
    <h2 className=" text-center text-xl font-semibold">{prev.title}</h2>



    <div className='flex justify-between mt-2'>
       <div className='flex gap-2 bg-green-200 p-2 items-center rounded-xl'>
       <FaDownload />


        <h4>{prev.downloads}</h4>
       </div>
       <div className=' gap-2 p-2 bg-[#ff88114f] rounded-xl items-center'>
        {/* card */}
        <div className='flex gap-2 items-center'>
          <FaStar />
        <h4>{prev.ratingAvg}</h4>

        
        </div>


          

       </div>
    </div>
    
  </div>
</div>
    );
};

export default AppsCard;