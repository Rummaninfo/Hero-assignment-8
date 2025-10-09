import React from 'react';
import { Link, useParams } from 'react-router';
import UseApp from '../../Hooks/UseApp';
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";

const AppsDetails = () => {

  
    let {id} = useParams()
   let  { apps, loading, error} = UseApp()
     let parseId = parseInt(id)



      let handleInstall = ()=>{
        let existingList = JSON.parse(localStorage.getItem('install'))
        let updateList = []
        if(existingList){
          let isDuplicate = existingList.some(p=> p.id ===singleData.id )
          if(isDuplicate) return alert('already added')
            updateList = [...existingList,singleData]
        }else{
          updateList.push(singleData)
        }
        localStorage.setItem('install', JSON.stringify(updateList))
      }





     let singleData = apps.find(p=> p.id === parseId)
     console.log(singleData)
   
    if(loading) return <p>loading.....</p>

    return (
      <>
      <div className=" md:flex gap-8 bg-base-100 shadow-sm">
  <figure>
    <img className='h-62'
      src={singleData.image}
      alt="Movie" />
  </figure>
  <div className="flex flex-col   flex-1">
    <h2 className="card-title">{singleData.companyName}</h2>
    <p>{singleData.title}</p> 
    
    <hr className="w-full border-t border-gray-300 my-2 " />
      
    <div className='flex gap-5 pt-4'>
        {/* 1 */}
         <div className='flex flex-col items-center'>
            <span className='text-2xl'><FaDownload /></span>
               <p>Download</p>
               <h3 className='text-xl font-semibold'>{singleData.downloads}</h3>
         </div>
        {/* 2 */}
         <div className='flex flex-col items-center'>
           <span className='text-2xl'><FaStar /></span> 
           <p>Average Ratings</p>
           <h3 className='text-xl font-semibold'>{singleData.ratingAvg}</h3>
         </div>
        {/* 2 */}
         <div className='flex flex-col items-center'>
            <span className='text-2xl'><AiOutlineLike /></span> 
            <p>Liked</p>
            <h3 className='text-xl font-semibold'>{singleData.reviews}</h3>
         </div>
   </div>  
    <div className='pt-4'>
        <button onClick={()=>handleInstall()} className="btn btn-success text-white">Install ({singleData.size}MB)</button>

    </div>
  </div>
  
</div>







</>
    );
};

export default AppsDetails;