import {useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Heart} from "lucide-react"
import { LikeContext } from '../context/LikeContext';
import api from '../api/api';


const MostBuyed_card = (props) => {

  const navigate = useNavigate();
  const {addLike,removeLike} = useContext(LikeContext)

  const handleLike = async()=>{
    try{
      addLike(props.bldg_id)
      await api.patch(`/buildings/${props.bldg_id}/like`)
    }catch(error){
      console.log(error); 
      removeLike(props.bldg_id)

    }
  }
  const handleUnlike = async()=>{
    try{
      removeLike(props.bldg_id)
      await api.patch(`/buildings/${props.bldg_id}/unlike`);
    }catch(error){
      console.log(error);   
      addLike(props.bldg_id)  
    }
  }

  return (
    <div className='w-64 p-3 shrink-0'>
      <div className='border border-gray-200 bg-white shadow-md hover:shadow-lg p-2 rounded-2xl'>
        <img src={props.bldg_img} alt={props.alt} className='h-56 w-full rounded-2xl' />
        <div className='flex flex-col gap-1'>
          <h1 className='text-lg text-gray-800 font-bold'>{props.bldg_name}</h1>
          <h3 className='text-sm font-medium text-slate-500 '>Price sqft:{props.price}</h3>
          <h2 className='font-serif text-gray-600'>Location:{props.city},{props.area}</h2>
          <div className='flex w-full h-full gap-2 p-1'>
            <div className='w-1/4'>
              {props.isLiked?<button onClick={handleUnlike} ><Heart color='red' fill='red' /></button>:<button onClick={handleLike}><Heart color='gray' /></button>}
            </div>
            <button className='w-full  bg-blue-800 text-white border border-blue-700 rounded-2xl font-medium text-sm ' onClick={() => (navigate(`/MostBuyed/${props.bldg_id}`))}>View</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MostBuyed_card
