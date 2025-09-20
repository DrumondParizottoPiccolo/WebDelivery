import React from 'react'


function AvaliationCard({title, description, rating, date, user}) {
  
  return (
    <div className='flex flex-col w-1/3 h-60 rounded-md shadow-sm bg-white gap-4 p-4'>
      <p className='flex gap-1'>
         {Array.from({ length: Math.floor(rating) }).map((_, i) => (
            <span key={i}>⭐</span>
          ))}
      </p>
      <h3 className=' font-bold text-lg text-gray-950'>{title}</h3>
      <p className='text-xs font-medium text-gray-900'>{description}</p>
      <span>{user}, {date}</span>
    </div>
  )
}

export default AvaliationCard