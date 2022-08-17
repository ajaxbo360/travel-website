import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import beachVideo from "../assets/beachVid.mp4";

const Hero = () => {
  return (
      <div className='relative w-full h-screen'>
          <video src={beachVideo} className="w-full h-full object-cover" autoPlay muted loop />
          <div className='absolute w-full h-full bg-gray-900/30 top-0 left-0'></div>
          <div className='w-full h-full top-0 absolute flex flex-col items-center justify-center text-white p-4'>
              <h1 className='mb-3'>First Class Travel</h1>
              <h2>Top 1% Locations Worldwide</h2>
              <form className='my-8 flex justify-between max-w-[700px] w-full border p-1 mx-auto rounded-md bg-gray-100/90'>
                  <input type="text" placeholder='Search Distinations' className='bg-transparent w-[300px] sm:w-[400px] focus:outline-none font-[Poppins]' />
                  
                  <div>
                      <button className='hover:-translate-x-1 transition-all'><AiOutlineSearch size={20} className="icon " style={{color:"#fff"}}/></button>
                  </div>
              </form>
          </div>
          
    </div>
  )
}

export default Hero;