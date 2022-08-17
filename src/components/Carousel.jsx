import React, {useState} from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [
  {
    url: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
];

const Carousel = () => {
    const [slide, setSlide] = useState(0);

    const length = sliderData.length
  const prevSlide = (e) => {
      e.preventDefault();
         setSlide(slide === length - 1 ? 0 : slide + 1);
        
    }
  const nextSlide = (e) => {
      e.preventDefault();
        setSlide(slide === 0 ? length - 1: slide - 1);
    }
  return (
      <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center '>
          <BsArrowLeftSquareFill onClick={prevSlide} className='absolute top-[50%] text-3xl text-white left-8 cursor-pointer transition-all duration-500 ease-in-out' />
          <BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[50%] text-3xl text-white right-8 cursor-pointer transition-all duration-500 ease-in-out' />
          {sliderData.map((item, index) => {
            return <div className={index === slide ? "opacity-100" : "opacity-0"}>
                     {index === slide && (<img src={item.url} alt="/"  className='w-full h-full object-cover rounded-md transition-all delay-800 '/>)}
                  </div>
          })}
    </div>
  )
}

export default Carousel