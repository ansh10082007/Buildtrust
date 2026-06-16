import { React, useState, useEffect } from 'react'
import bgImage1 from "./HomeScreenAssets/img1.jpg"
import bgImage2 from "./HomeScreenAssets/img2.jpg"
import { useNavigate } from 'react-router-dom'


const Bg_image = () => {

    const [imgNumber, setImgNumber] = useState(0);
    const arrBgImages = [{
        id: 0,
        img: bgImage1
    },
    {
        id: 1,
        img: bgImage2
    },
    ];

    useEffect(() => {
        const interval = setInterval(() => { setImgNumber((prev) => (prev + 1) % arrBgImages.length) }, 5000)

        return () => clearInterval(interval)
    }, [])

    const navigate = useNavigate()

    return (
        <div>
            <img
                src={arrBgImages[imgNumber].img}
                className='h-[85vh] w-full object-cover'
            />
        </div>
    )
}

export default Bg_image
