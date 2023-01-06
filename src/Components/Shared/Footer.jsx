import React from 'react'

export const Footer = () => {
  return (
   <ul className='container grid md:grid-cols-4 font-bold'>
    <li className='p-4 hover:cursor-pointer'>standared delivery</li>
    <li className='p-4 hover:cursor-pointer'>next day delivery</li>
    <li className='p-4 hover:cursor-pointer'>description</li>
    <li className='p-4 bg-gray-100 hover:cursor-pointer'>returns</li>

   </ul>
  )
}
