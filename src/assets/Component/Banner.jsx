import React from 'react';
import apple from '../img/apple.png'
import playstore from "../img/playstore.png"

const Banner = () => {
    return (
        <div className='mt-8 '>
           <div className='text-center space-y-5'>
             <h1 className='text-6xl font-bold'>We Build <br />
<span className='text-[#9F62F2]'>Productive</span> Apps
</h1>
<p className='text-[#627382] text-base'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
           </div>
           <div className='flex justify-center gap-5 mt-6'>
<button 
  className='btn font-bold text-xl' 
  onClick={() => window.open("https://play.google.com/store/games?device=windows", "_blank")}
>
  <img src={playstore} alt="" /> Google Play
</button>
            <button className='btn  font-bold text-xl' onClick={()=> window.open('https://www.apple.com/store')} ><img src={apple} alt="" />App Store</button>


           </div>
        </div>
    );
};

export default Banner;