import React from 'react';
import error from "../assets/img/error-404.png"
import { Link } from 'react-router';
const Error = () => {
    return (
        <div  >
            <div className='flex justify-center items-center '>
                <img  src={error} alt="" />
            </div>
            <div className='text-center mt-5 space-y-5'> 
                <h1 className='text-5xl font-bold'>Oops, page not found!</h1>
            <p className='text-[#627382] text-xl'>The page you are looking for is not available.</p>
            <Link to='/home'><button className="btn btn-active btn-success text-white">Go back</button>
</Link>
            </div>
        </div>
    );
};

export default Error;