import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className="absolute top-3 left-0 right-0 z-[11] items-center bg-opacity-50 w-11/12 flex justify-between shadow-lg rounded-lg border border-gray-200 mx-auto">
      <div>

      <ul className="flex items-center bg-white z-10 gap-10 pl-10">
        <li>
          <Link 
            to="home" 
            smooth={true} 
            duration={200} 
            className="cursor-pointer hover:text-purple-500"
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            className="cursor-pointer hover:text-purple-500"
            >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="teams" 
            smooth={true} 
            duration={1000} 
            className="cursor-pointer hover:text-purple-500"
            >
            Teams
          </Link>
        </li>
        <li>
          <Link 
            to="contact" 
            smooth={true} 
            duration={1000} 
            className="cursor-pointer hover:text-purple-500"
            >
            Contact
          </Link>
        </li>
      </ul>
      </div>
      <div>

      <img src="/cinchalogo.png" className="object-cover h-20 w-40 object-left-bottom rounded-r-lg" alt="logo"/>
      </div>
    </nav>
  );
}

export default Navbar;
