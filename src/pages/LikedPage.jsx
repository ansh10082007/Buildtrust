import {useContext, useEffect, useState} from 'react'
import Navbar from "../components/Navbar"
import api from "../api/api"
import { LikeContext } from '../context/LikeContext'
import { AuthContext } from '../context/AuthContext'
import Card from "../components/Card"
import { useNavigate } from 'react-router-dom'

const About = () => {

  const navigate = useNavigate();

  const {likedBuildingsIds} = useContext(LikeContext);
  const [likedBuildings,setLikedBuildings] = useState([]);

  const {isLoggedIn} = useContext(AuthContext);

  useEffect(()=>{
    if(!isLoggedIn){
      navigate("/login");
      return;
    }
    const fetchLikedBuildings = async()=>{
      try{
        const response = await api.get("/users/getlikedBuildingsArray");
        setLikedBuildings(response.data);
      }catch(err){
        console.log(err);
      }
      
    }
    fetchLikedBuildings();
  },[isLoggedIn])

  if(!isLoggedIn){
    return null;
  }
  return (
    <div>
      <Navbar />
        <h1 className='text-slate-500'>Propertie you liked ❤️</h1>
        <div className='w-full flex justify-center'>
          <div className='flex flex-wrap gap-10  justify-start '>
            {
              likedBuildings.map((bldg) => (
                <Card
                  key={bldg._id}
                  // bldg_img={bldg.img} alt={bldg.alt}
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

export default About
