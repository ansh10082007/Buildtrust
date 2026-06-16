import React from 'react'
import { buildings } from '../Buildings/Mumbai_Bldgs/Suburban_bldgs'
import ViewFull_card from '../components/ViewFull_card'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'

const DetailPage = () => {
  const { BuildingId } = useParams();

  const building = buildings.find(
    (b) => (b.id == Number(BuildingId))
  )

  return (
    <div className='flex flex-col '>
      <Navbar />
      <div className="h-1 bg-linear-to-b from-white/10 to-blue-950" />
      <ViewFull_card img={building.img} img1={building.img1} img2={building.img2} img3={building.img3} alt={building.alt} name={building.name}
        total_price={building.total_price} bhk={building.bhk} price_sqft={building.price_sqft} Carpet_area={building.Carpet_area} location={building.location}
      />
    </div>
  )
}

export default DetailPage
