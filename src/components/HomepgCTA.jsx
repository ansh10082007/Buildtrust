import React, { useState } from 'react'
import Select from 'react-select'
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useSearchParams } from 'react-router-dom';

const HomepgCTA = () => {
    
    const cities = [
        { value: "mumbai", label: "Mumbai" },
        { value: "pune", label: "Pune" },
        { value: "delhi", label: "Delhi" }
    ];

    const propertyTypes = [
        { label: "Flat", value: "flat" },
        { label: "Villa", value: "villa" },
        { label: "Plot", value: "plot" }
    ];

    const areas = {
        mumbai: [
            { value: "bandra", label: "Bandra" },
            { value: "andheri", label: "Andheri" },
            { value: "kandivali", label: "Kandivali" },
            { value: "borivali", label: "Borivali" },
            { value: "malad", label: "Malad" }
        ],

        pune: [
            { value: "koregaon-park", label: "Koregaon Park" },
            { value: "kothrud", label: "Kothrud" },
            { value: "viman-nagar", label: "Viman Nagar" },
            { value: "baner", label: "Baner" },
            { value: "hinjawadi", label: "Hinjawadi" }
        ],

        delhi: [
            { value: "connaught-place", label: "Connaught Place" },
            { value: "hauz-khas", label: "Hauz Khas" },
            { value: "rajouri-garden", label: "Rajouri Garden" },
            { value: "karol-bagh", label: "Karol Bagh" },
            { value: "saket", label: "Saket" }
        ]
    };


    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedArea, setSelectedArea] = useState(null);
    const [budget, setBudget] = useState(1000000);
    
    const areaOptions = selectedCity ? areas[selectedCity.value] : [];

    return (
        <div className='flex flex-col gap-5 p-3 '>
            <h1>What you are looking for?</h1>
            <div>
                <label>Select City:</label>
                <Select options={cities} value={selectedCity} onChange={(option) => {
                    setSelectedCity(option)
                    setSelectedArea(null)
                }} />
            </div>
            <div>
                <label>Area:</label>
                <Select options={areaOptions} value={selectedArea} onChange={(area) => setSelectedArea(area)} isDisabled={!selectedCity} />
            </div>
            <div>
                <label>Select Type:</label>
                <Select options={propertyTypes} />
            </div>
            <div className='w-full'>
                <label>Budget:₹{budget.toLocaleString("en-IN")}</label>
                <Slider min={1000000} max={50000000} value={budget} onChange={(newValue) => setBudget(newValue)} />
                <div className='flex justify-between'>
                    <span>₹10L</span>
                    <span>₹5Cr</span>
                </div>
            </div>
            <span><button className='text-black bg-blue-300'>Search</button></span>
        </div>
    )
}

export default HomepgCTA
