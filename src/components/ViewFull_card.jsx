import React from 'react'
import ImagesCarousel from './ImagesCarousel'
import { IndianRupee } from 'lucide-react'

// Helper function for Indian Number System formatting
const formatIndianNumber = (num) => {
  if (num === undefined || num === null || isNaN(num)) return num;
  return new Intl.NumberFormat('en-IN').format(num);
};

const ViewFull_card = (props) => {

  const img1 = props.img1 || props.image;
  const img2 = props.img2 || props.image;
  const img3 = props.img3 || props.image;

  return (
    <div>
      <div className='flex items-baseline gap-52 h-30 w-full p-5 bg-blue-950'>
        <h1 className='flex items-baseline'>
          <IndianRupee className='text-white' />
          <h1 className='font-bold text-3xl text-white'>
            {formatIndianNumber(props.price)}++
          </h1> 
          <small className='text-sm font-medium text-gray-300'>
            @{formatIndianNumber(props.price_sqft)}/sqft
          </small>
        </h1>
        <h2> 
          <div className='font-bold text-2xl text-gray-50 '>{props.bhk} bhk</div> 
          <small className="text-sm font-medium text-gray-400">
            flats/apartments for sale in {props.name}
          </small> 
        </h2>
      </div>

      <div className='flex min-h-screen bg-blue-50'>
        <div className='p-2'>
          <ImagesCarousel image={props.image} img1={img1} img2={img2} img3={img3} />
        </div>
        
        <div className='flex flex-col gap-10 ml-10 mt-10 bg-white/30 backdrop-blur-md shadow-md hover:shadow-lg rounded-3xl h-100 w-180 p-5 border-t-4 border-gray-700 mr-2 '>
          <div>
            <h1 className='font-extrabold font-serif text-5xl'>{props.name}</h1>
            <h1 className='font-medium text-gray-500'>
              Starting price: {formatIndianNumber(props.price)}++
            </h1>
          </div>
          <div className='flex flex-col gap-10 p-2 font-medium text-blue-950'>
            <h3>Carpet area: {formatIndianNumber(props.carpet_area)} sqft</h3>
            <h3>Price per sqft: ₹{formatIndianNumber(props.price_sqft)}</h3>
            <h3>Location: {props.city} {props.area}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewFull_card;