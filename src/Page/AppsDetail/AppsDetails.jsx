import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router';
import UseApp from '../../Hooks/UseApp';
import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";

import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { toast, ToastContainer } from 'react-toastify';

const AppsDetails = () => {
  let { id } = useParams();
  let { apps, loading, error } = UseApp();
  let parseId = parseInt(id);
  
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const existingList = JSON.parse(localStorage.getItem('install')) || [];
    const isAlreadyInstalled = existingList.some(p => p.id === parseId);
    setIsInstalled(isAlreadyInstalled);
  }, [parseId]);

  let handleInstall = () => {
    let existingList = JSON.parse(localStorage.getItem('install')) || [];
    
    let isDuplicate = existingList.some(p => p.id === singleData.id);
    
    if (isDuplicate) {
      alert('This app is already installed!');
      setIsInstalled(true);
      return;
    }
    
    // First time installation
    let updateList = [...existingList, singleData];
    localStorage.setItem('install', JSON.stringify(updateList));
    toast("App Install Successfully");
    setIsInstalled(true);
  };

  let singleData = apps.find(p => p.id === parseId);
console.log(singleData)
  // Dynamic chart data from singleData ratings - ordered from 5 star to 1 star
  const chartData = singleData?.ratings
    ?.map(rating => ({
      name: rating.name,
      count: rating.count,
      percentage: ((rating.count / singleData.reviews) * 100).toFixed(1)
    }))
    ?.reverse() || [];

  if (loading) return <p>loading.....</p>;
  if (!singleData) return <p>No data found</p>;

  return (
    <>
      {/* App Details Section */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 shadow-sm bg-gray-50 p-4 md:p-6 rounded-lg">
        <figure className='bg-white flex justify-center md:justify-start p-4 md:p-6 rounded-lg'>
          <img
            className='h-48 md:h-64 w-auto object-contain'
            src={singleData.image}
            alt={singleData.title}
          />
        </figure>
        
        <div className="flex flex-col flex-1">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">{singleData.companyName}</h2>
          <p className="text-gray-600 mt-1">{singleData.title}</p>
          
          <hr className="w-full border-t border-gray-300 my-4" />
          
          <div className='flex justify-around md:justify-start md:gap-8 lg:gap-12 pt-2'>
            <div className='flex flex-col items-center'>
              <span className='text-2xl md:text-3xl text-blue-600'><FaDownload /></span>
              <p className="text-xs md:text-sm text-gray-600 mt-1">Download</p>
              <h3 className='text-lg md:text-xl font-semibold text-gray-800'>{singleData.downloads}</h3>
            </div>
            
            <div className='flex flex-col items-center'>
              <span className='text-2xl md:text-3xl text-yellow-500'><FaStar /></span>
              <p className="text-xs md:text-sm text-gray-600 mt-1">Average Ratings</p>
              <h3 className='text-lg md:text-xl font-semibold text-gray-800'>{singleData.ratingAvg}</h3>
            </div>
            
            <div className='flex flex-col items-center'>
              <span className='text-2xl md:text-3xl text-green-500'><AiOutlineLike /></span>
              <p className="text-xs md:text-sm text-gray-600 mt-1">Liked</p>
              <h3 className='text-lg md:text-xl font-semibold text-gray-800'>{singleData.reviews?.toLocaleString()}</h3>
            </div>
          </div>
          
          <div className='pt-6'>
            <button 
              onClick={handleInstall} 
              className={`w-full md:w-auto px-8 py-3 rounded-lg font-semibold transition-all ${
                isInstalled 
                  ? 'bg-gray-400 cursor-not-allowed text-gray-200' 
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
              disabled={isInstalled}
            >
              {isInstalled ? 'Already Installed' : `Install (${singleData.size}MB)`}
            </button>
          </div>
        </div>
      </div>

      <ToastContainer />

    
      <div className="mt-8 p-4 bg-white rounded-lg shadow-sm">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-4 md:mb-6">
          Ratings 
        </h3>
        
     
        <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              layout="vertical"
              data={chartData}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis 
                type="number" 
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => value.toLocaleString()}
              />
              <YAxis 
                dataKey="name" 
                type="category" 
                scale="band" 
                tick={{ fontSize: 12 }}
                width={60}
              />
              <Tooltip 
                formatter={(value, name) => [
                  name === 'count' ? value.toLocaleString() : `${value}%`,
                  name === 'count' ? 'Rating Count' : 'Percentage'
                ]}
                contentStyle={{ 
                  fontSize: '14px',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0'
                }}
              />
              <Legend 
                wrapperStyle={{
                  fontSize: '14px',
                  paddingTop: '10px'
                }}
              />
              <Bar 
                dataKey="count" 
                barSize={20} 
                fill="#413ea0" 
                name="Rating Count" 
                radius={[0, 4, 4, 0]}
              />
              <Line 
                dataKey="percentage" 
                stroke="#ff7300" 
                name="Percentage (%)" 
                strokeWidth={2}
                dot={{ fill: '#ff7300', strokeWidth: 2, r: 4 }}
                strokeDasharray="3 3"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

       
      </div>

      <hr className='w-full mt-8 border-gray-300' />

      <div className='mt-5'>
        <h4 className='text-2xl font-semibold'>Description:  </h4>
        
          <p className='pt-6 text-xl text-[##627382]'>{singleData.description}</p>
        
      </div>
    </>
  );
};

export default AppsDetails;