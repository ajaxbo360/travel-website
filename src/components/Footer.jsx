import React from 'react'
import { FaFacebook, FaTwitter,FaInstagram, FaPinterest, FaYoutube} from "react-icons/fa";

function Footer() {
  return (
      <div className='bg-gray-100 w-full py-16'>
          <div className='max-w-[1240px] mx-auto flex flex-col justify-between sm:flex-row px-4'>
              <div className='sm:flex text-center justify-between items-center'>
                  <h1><a href='/'>BEACHES.</a></h1>
              </div>
              <div className='flex justify-between w-full sm:max-w-[280px]  my-4'>
                     <FaFacebook className='icon' />
                      <FaTwitter className='icon' />
                      <FaInstagram className='icon' />
                      <FaPinterest className='icon' />
                      <FaYoutube className='icon'/>
              </div>
              
          </div>
          <div className='flex justify-between max-w-[1240px] mx-auto'>
          <ul className='lg:flex'>
            <li><a href='/' className='hover:text-gray-300'>About</a></li>
            <li> <a href='/' className='hover:text-gray-300'>Partnerships</a></li>
            <li> <a href='/' className='hover:text-gray-300'>Careers</a></li>
            <li> <a href='/' className='hover:text-gray-300'>Newsroom</a></li>
            <li> <a href='/' className='hover:text-gray-300'>Advertising</a></li>
          </ul>
          <ul className='text-right lg:flex'>
            <li> <a href='/' className='hover:text-gray-300'>Home</a></li>
            <li> <a href='/' className='hover:text-gray-300'>Destinations</a></li>
            <li> <a href='/' className='hover:text-gray-300'>Travel</a></li>
            <li> <a href='/' className='hover:text-gray-300'>View</a></li>
            <li> <a href='/' className='hover:text-gray-300'>Book</a></li>
          </ul>
        </div>
    </div>
  )
}

export default Footer