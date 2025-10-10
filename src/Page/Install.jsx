import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { toast, ToastContainer } from 'react-toastify';

const Install = () => {
  const [install, setInstall] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem('install'));
    if (saveList) setInstall(saveList);
  }, []);

  const handleRemove = (id) => {
    toast("Unstall from your device");
    const existingList = JSON.parse(localStorage.getItem('install')) || [];
    const updateList = existingList.filter(p => p.id !== id);
    setInstall(updateList);
    localStorage.setItem('install', JSON.stringify(updateList));
  };

  
  const parseDownloads = (str) => {
    if (!str) return 0;
    let multiplier = 1;
    str = str.toUpperCase().trim();
    if (str.endsWith("B")) multiplier = 1_000_000_000;
    else if (str.endsWith("M")) multiplier = 1_000_000;
    else if (str.endsWith("K")) multiplier = 1_000;

    return parseFloat(str) * multiplier;
  };

  const handleSort = (e) => {
    const value = e.target.value;
    setSortOrder(value);

    const sortedList = [...install];
    if (value === "High size") {
      sortedList.sort((a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads));
    } else if (value === "Low size") {
      sortedList.sort((a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads));
    }
    setInstall(sortedList);
  };

  return (
    <>
      <div className='text-center space-y-2'>
        <h1 className='text-4xl font-bold'>Your Installed Apps</h1>
        <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className='mt-5'>
        <div className='flex justify-between font-bold items-center  '>
         <div>
           <h4 className='text-xl'>{install.length} Apps Found</h4>
          <hr />
         </div>
          <select
            value={sortOrder}
            onChange={handleSort}
            
            className="select appearance-none  w-auto"
          >
            <option disabled value="">Sort by size</option>
            <option>High size</option>
            <option>Low size</option>
          </select>
        </div>
      </div>

      <div>
        <ToastContainer />
        {install.map(p => (
          <div key={p.id} className="bg-white mt-4 rounded-lg border border-gray-300 w-full">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                  <img 
                    src={p.image}
                    alt={p.title}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
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
              <button onClick={() => handleRemove(p.id)} className="btn text-white btn-success">Unstall</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Install;
