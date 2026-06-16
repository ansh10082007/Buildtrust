import React from 'react'
import { useNavigate } from 'react-router-dom'


const MostBuyed_card = (props) => {

  const navigate = useNavigate();



  return (
    <div className='w-64 p-3 flex gap-5 '>
      <div className='border border-gray-200 bg-white shadow-md hover:shadow-lg p-2 rounded-2xl'>
        <img src={props.bldg_img} alt={props.alt} className='h-56 w-full rounded-2xl' />
        <div className='flex flex-col gap-1'>
          <h1 className='text-lg text-gray-800 font-bold'>{props.bldg_name}</h1>
          <h3 className='text-sm font-medium text-slate-500 '>Price sqft:{props.price_sqft}</h3>
          <h2 className='font-serif text-gray-600'>Location:{props.location}</h2>
        <button className='p-2 bg-blue-800 text-white border border-blue-700 rounded-2xl font-medium text-sm ' onClick={()=>(navigate(`/MostBuyed/${props.bldg_id}`))}>View</button>
        </div>
      </div>
    </div>
  )
}

export default MostBuyed_card
