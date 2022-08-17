import React from 'react'

function SelectCards(props) {
  return (
     <div className='relative transition-transform duration-100 hover:scale-105 cursor-pointer'>
              <img src={props.bg} alt="/" className='object-cover w-full h-full  rounded-md ' />
              <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full rounded-md '>
                  <p className='left-4 bottom-4 text-white text-2xl font-bold absolute'>{props.text}</p>
              </div>
          </div>
  )
}

export default SelectCards;