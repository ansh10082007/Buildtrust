import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/MostBuyed_card'

import { buildings } from '../Buildings/Mumbai_Bldgs/Suburban_bldgs'

const MostBuyed = () => {
  return (
    <div>
      <Navbar />
      <h1 className='text-slate-500'>Most buyed section</h1>
      <div className='flex gap-2'>
        {
          buildings.map((bldg) => (
            <Card key={bldg.id} bldg_img={bldg.img} alt={bldg.alt} bldg_name={bldg.name} price_sqft={bldg.price_sqft} location={bldg.location} bldg_id={bldg.id} />
          ))
        }
      </div>
    </div>
  )
}

export default MostBuyed
