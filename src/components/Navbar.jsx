import React, {useState} from 'react'
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaTwitter,FaInstagram, FaPinterest, FaYoutube} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo);
    }
  return (
      <div className='flex justify-between items-center h-20 px-4 absolute bg-transparent text-white z-10 w-full'>
          <div>
             <h1 onClick={handleNav} className= {logo ? "hidden md:block" : "block"}><a href='/'>BEACHES.</a></h1>
          </div>

          <ul className='hidden md:flex justify-between items-center'>
              <li><a className='hover:text-gray-300' href='/'>Home</a></li>
              <li><a  className='hover:text-gray-300' href='/'>Distinations</a></li>
              <li><a  className='hover:text-gray-300' href='/'>Travel</a></li>
              <li><a  className='hover:text-gray-300' href='/'>View</a></li>
              <li><a  className='hover:text-gray-300' href='/'>Book</a></li>
          </ul>
          <div className='hidden md:flex items-center space-x-2'>
              <BiSearch  className='mr-2 cursor-pointer hover:scale-105 transition-transform' size={20}/>
              <BsPerson  className='cursor-pointer hover:scale-105 transition-transform' size={20}/>
          </div>
          <div onClick={handleNav} className='md:hidden z-10'>
              {nav ? <AiOutlineClose className='text-black' size={20}/> : <HiOutlineMenuAlt4 size={20}/>}
              
              
          </div>

          {/* Mobile NavMenu */}
          <div onClick={handleNav} className={nav ? 'md:hidden absolute left-0 top-0 w-full text-black bg-gray-100/90 flex flex-col px-4 py-6' : "absolute left-[-100%]"}>
             
             <ul>
                <h1>BEACHES.</h1>
                <li className='border-b'>Home</li>
                <li className='border-b'>Distinations</li>
                <li className='border-b'>Travel</li>
                <li className='border-b'>View</li>
                  <li className='border-b'>Book</li> 
                <div className='flex flex-col'>
                    <button className='my-6'>Search</button>
                    <button>Account</button>
                  </div>
                  <div className='flex justify-between my-6'>
                      <FaFacebook className='icon' />
                      <FaTwitter className='icon' />
                      <FaInstagram className='icon' />
                      <FaPinterest className='icon' />
                      <FaYoutube className='icon'/>
                  </div>
              </ul>
             
          </div>
    </div>
  )
}


