import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
























const Install = () => {
  const [install, setInstall] = useState([]);
  const [sortOrder, setSortOrder] = useState(""); // track selected sort

  useEffect(() => {
    let saveList = JSON.parse(localStorage.getItem('install'));
    if (saveList) setInstall(saveList);
  }, []);


 let handleRemove = (id)=>{
         let existingList = JSON.parse(localStorage.getItem('install'))
         let updateList = existingList.filter(p=> p.id !== id)
         setInstall(updateList)
         localStorage.setItem('install', JSON.stringify(updateList))
 }



  // Function to handle sorting
  const handleSort = (e) => {
    const value = e.target.value;
    setSortOrder(value);

    let sortedList = [...install];
    if (value === "High size") {
      sortedList.sort((a, b) => b.size - a.size); // des
    } else if (value === "Low size") {
      sortedList.sort((a, b) => a.size - b.size); // asc
    }
    setInstall(sortedList);
  };

  return (
    <>
      <div>
        <div className='flex justify-between font-bold text-3xl'>
          <h1>Install {install.length}</h1>
          <select
            value={sortOrder}
            onChange={handleSort}
            className="select appearance-none"
          >
            <option disabled value="">Sort by size</option>
            <option>High size</option>
            <option>Low size</option>
          </select>
        </div>
      </div>

      <div>
        {install.map(p => (
          <div key={p.id} className="bg-white mt-4 rounded-lg border border-gray-300 w-full">
            <div className="flex items-center justify-between p-4">
              {/* Left side - App Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                  <img 
                    src={p.image}
                    alt={p.title}
                    className="w-12 h-12 rounded-lg object-cover"
                    // onError={(e) => {
                    //   e.target.style.display = 'none';
                    //   e.target.nextSibling.style.display = 'flex';
                    // }}
                  />
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center hidden">
                    <span className="text-white font-bold text-xl">🌲</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-sm text-[#00D390] flex items-center gap-1">
                      <FaDownload /> {p.downloads}
                    </span>
                    <span className="text-sm flex gap-1 items-center text-[#FF8811]">
                      <FaStar /> {p.ratings.length}
                    </span>
                    <span className="text-sm text-gray-600">{p.size}MB</span>
                  </div>
                </div>
              </div>

             <button onClick={()=> handleRemove(p.id)} className="btn text-white btn-success">Unstall</button>

            </div>
          </div>
        ))}
      </div>

       
    </>
  );
};

export default Install;
