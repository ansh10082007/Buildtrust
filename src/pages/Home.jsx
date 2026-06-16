import React from 'react'
import Navbar from '../components/Navbar'
import Bg_image from "../components/Bg_image"
import HomepgCTA from '../components/HomepgCTA'


const Home = () => {
    return (
        <div className='bg-blue-50 min-h-screen'>
            <div className='relative'>
                <Bg_image />
                <div className='absolute top-0 left-0  w-full z-10 bg-white/10 backdrop-blur-md'>
                    <Navbar />
                </div>
                <div className='absolute top-[50vh] left-[1vw] w-[97vw] z-10 bg-white rounded-2xl '>
                    <HomepgCTA />
                </div>
            </div>
        </div>
    )
}

export default Home
