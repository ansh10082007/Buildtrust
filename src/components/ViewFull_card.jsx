import React from 'react'
import ImagesCarousel from './ImagesCarousel'
import { IndianRupee } from 'lucide-react'

const viewFull_card = (props) => {
  return (
    <div>
      <div className='flex items-baseline gap-52 h-30 w-full p-5 bg-blue-950'>
        <h1 className='flex items-baseline'><IndianRupee className='text-white' /><h1 className='font-bold text-3xl text-white'>{props.price}</h1> <small className='text-sm font-medium text-gray-300'>@{props.price}++</small></h1>
        <h2> <div className='font-bold text-2xl text-gray-50 '>{props.bhk}</div> <smalll className="text-sm font-medium text-gray-400" >flats/apartments for sale in {props.name}</smalll> </h2>
      </div>
      <div className='flex min-h-screen bg-blue-50'>
        <div className='p-2'>
          <ImagesCarousel img={props.img} img1={props.img1} img2={props.img2} img3={props.img3} />
        </div>
        <div className='flex flex-col gap-10 ml-10 mt-10  bg-white/30 backdrop-blur-md shadow-md hover:shaow-lg rounded-3xl h-100 w-180 p-5 border-t-4 border-gray-700 mr-2 '>
          <div>
            <h1 className='font-extrabold font-serif text-5xl'>{props.name}</h1>
            <h1 className='font-medium text-gray-500'>Starting price:{props.price}++</h1>
          </div>
          <div className='flex flex-col gap-10 p-2 font-medium text-blue-950'>
            <h3>Carpet area:{props.Carpet_area}sqft</h3>
            <h3>Price per sqft:{props.sqft}</h3>
            <h3>Location:{props.city},{props.area}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default viewFull_card
