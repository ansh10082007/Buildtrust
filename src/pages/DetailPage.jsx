import { useEffect, useState } from 'react'
import ViewFull_card from '../components/ViewFull_card'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import api from '../api/api'

const DetailPage = () => {
  const { BuildingId } = useParams();

  const [building,setBuilding] = useState({})

  useEffect(()=>{
    const fetchBuilding = async ()=>{
      const response = await api.get(`/buildings/${BuildingId}`)
      setBuilding(response.data)
    }
    fetchBuilding()
  },[BuildingId])

  return (
    <div className='flex flex-col '>
      <Navbar />
      <div className="h-1 bg-linear-to-b from-white/10 to-blue-950" />
      <ViewFull_card image={building.image} img1={building.img1} img2={building.img2} img3={building.img3} alt={building.alt} name={building.name}
        price={building.price} price_sqft={building.price_sqft} bhk={building.bhk} carpet_area={building.carpet_area} city={building.city} area={building.area}
      />
    </div>
  )
}

export default DetailPage
