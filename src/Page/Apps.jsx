import React, { useState } from 'react';
import UseApp from '../Hooks/UseApp';
import AllCard from './AllCard';
// import { data } from 'react-router';

const Apps = () => {
    let allData = UseApp()
    
    let  { apps, loading, error} = allData
    console.log(allData)
    let [search,setSearch] = useState('')
     let term = search.trim().toLocaleLowerCase()
   //   Searching

   let searching = term?
                apps.filter(data => data.title.toLocaleLowerCase().includes(term)) :
                 apps

                 console.log(searching)

  
    return (
         <>
         {/* head */}
         <div className=''>
            <div className='text-center space-y-2'>
            <h1 className='text-3xl font-semibold'>Our All Applications</h1>
         <p className='text-[##627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
         </div>


            {/* searching */}
         <div className='flex justify-between mt-8'>
            <h1 className='text-xl font-bold'>({apps.length}) Apps Founded</h1>
              {/* search */}
         <label className="input validator join-item">
      
      <input
       value={search}
       onChange={(e)=> setSearch(e.target.value)} type='search'
        placeholder="All Products" required />
    </label>
         </div>








         {/* map */}
         <div className='grid grid-cols-1 md:grid-cols-3 gap-5 lg:grid-cols-4 mt-6'>
            {
              searching.map(prev=> <AllCard prev={prev}></AllCard> )
            }
         </div>
         </div>
         
         </>
        
    );
};

export default Apps;