import React from 'react';
import { NavLink,Link } from 'react-router';
import hero from '../img/logo.png';


const Navbar = () => {
    return (
              <div>
<div className="px-4 md:px-8 bg-base-100 shadow-sm">
  <div className="flex items-center justify-between h-16">
    
    {/* --- Left: Logo & Mobile Menu --- */}
    <div className="flex items-center gap-2">
      {/* Mobile dropdown */}
      <div className="dropdown lg:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/apps">Apps</NavLink></li>
          <li><NavLink to="/install">Install</NavLink></li>
        </ul>
      </div>

      {/* Logo */}
      <Link to="/home" className="flex items-center space-x-2 text-xl">
        <img src={hero} alt="Home Decor Logo" className="w-12 h-12 object-contain" />
        <span className="font-semibold">HERO.IO</span>
      </Link>
    </div>

    {/* --- Center: Main Menu (visible on large screens) --- */}
    <div className="hidden lg:flex">
      <ul className="menu menu-horizontal font-medium px-1 space-x-4">
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/apps">Apps</NavLink></li>
        <li><NavLink to="/install">Install</NavLink></li>
      </ul>
    </div>

    {/* --- Right: Button --- */}
    <div>
      <NavLink to="/products" className="btn">
        Contribute
      </NavLink>
    </div>
  </div>
</div>

            
        </div>
    );
};

export default Navbar;