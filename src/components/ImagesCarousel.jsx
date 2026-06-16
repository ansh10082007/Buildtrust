import React, { useState } from 'react'
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';


const imagesCarousel = (props) => {
    const [imgNumber, setImgNumber] = useState(0);

    const imgArray = [
        {
            id: 0,
            src: props.img
        },
        {
            id: 1,
            src: props.img1
        },
        {
            id: 2,
            src: props.img2
        },
        {
            id: 3,
            src: props.img3
        }
    ];

    return (
        <div className='relative'>
            
            <img src={imgArray[imgNumber].src} className='h-150 w-150 border-8 border-white rounded shadow-md hover:shadow-lg ' />
            <div className='absolute top-85 w-full'>
                <div className='flex justify-between '>
                    <button onClick={() => (setImgNumber((prev) => (prev - 1 + imgArray.length) % imgArray.length))} className='bg-white/30 backdrop-blur-md p-0.5 rounded-full'><ChevronLeft strokeWidth={2.5} className='text-black'/></button>
                    <button onClick={() => (setImgNumber((prev) => (prev + 1) % imgArray.length))} className='bg-white/10 backdrop-blur-md p-0.5 rounded-full'><ChevronRight strokeWidth={2.5} className='text-black' /></button>
                </div>
            </div>
        </div>
    )
}

export default imagesCarousel
