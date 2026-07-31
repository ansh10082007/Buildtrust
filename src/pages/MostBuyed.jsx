import Navbar from '../components/Navbar'
import Card from '../components/Card'
import {useEffect,useState,useContext} from 'react';
import {LikeContext} from "../context/LikeContext"

import api from '../api/api';

const MostBuyed = () => {

  const [buildings, setBuildings] = useState([]);
  const {likedBuildingsIds} = useContext(LikeContext)

  useEffect(() => {
    const fetchBuildings = async () => {
      try{
        const response = await api.get("/buildings");
        setBuildings(response.data)
      }catch(error){
        console.log(error);
      }
    }
    fetchBuildings();
  }, [])   



  return (
    <div>
      <Navbar />
      <h1 className='text-slate-500'>Most buyed section</h1>
      <div className='w-full flex justify-center'>
        <div className='flex flex-wrap gap-10  justify-start '>
          {
            buildings.map((bldg) => (
              <Card
                key={bldg._id}
                bldg_img={bldg.image} 
                bldg_name={bldg.name}
                price={bldg.price}
                city={bldg.city} area={bldg.area}
                bldg_id={bldg._id}
                isLiked={likedBuildingsIds.includes(bldg._id)}
                />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default MostBuyed
