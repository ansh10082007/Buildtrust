import { Link } from 'react-router-dom'
import { React, useState } from 'react'
// import { ChevronUp, ChevronDown } from 'lucide-react';

const Navbar = () => {

  return (
    <div>
      <div className='flex relative justify-between mt-3 mb-2'>

        {/* icon section */}
        <h1 className='ml-5 text-slate-900 text-xl font-bold tracking-wide '>BuildTrust</h1>


        {/* this is navbar links */}
        <div className='flex gap-10 mr-10 text-base text-slate-700 font-medium tracking-tight'>
          <Link to='/'>Home</Link>
          <Link to='/liked'>Liked</Link>
          <Link to='/mostbuyed'>Most Buyed</Link>
        </div>

      </div>
      <hr></hr>
    </div>
  )
}

export default Navbar
