import React from 'react'
import Bhoomi_bldgImg from '../../assets/Mum_bldg/Bhoomi_bldg.jpg'
import Mahesh_bldgImg from "../../assets/Mum_bldg/Mahesh_bldg.png";
import Bhoomi_img1 from "./assets/Bhoomi/img1.jpg"
import Bhoomi_img2 from "./assets/Bhoomi/img2.jpg"
import Bhoomi_img3 from "./assets/Bhoomi/img3.jpg"
import Mahesh_img1 from "./assets/Mahesh/img1.jpg"
import Mahesh_img2 from "./assets/Mahesh/img2.jpg"
import Mahesh_img3 from "./assets/Mahesh/img3.jpg"




const bhoomi_bldg = {
  id:1,
  name:"Bhoomi Building",
  img : Bhoomi_bldgImg,
  img1: Bhoomi_img1,
  img2: Bhoomi_img2,
  img3: Bhoomi_img3,
  alt : "image of bhoomi building",
  bhk:"3bhk",
  Carpet_area:"800",
  price_sqft : "22,400" ,
  total_price: "1.79Cr",
  location : "Jankalyan nagar, malad west, Mumbai"
};

const mahesh_bldg = {
  id:2,
  name:"Mahesh Building",
  img : Mahesh_bldgImg,
  img1: Mahesh_img1,
  img2: Mahesh_img2,
  img3: Mahesh_img3, 
  alt : "image of Mahesh building",
  bhk:"2bhk",
  Carpet_area:"650",
  price_sqft : "22,300" ,
  total_price: "1.45Cr",
  location : "Anand Nagar, Kandivali west, Mumbai"
}

export const buildings = [
  bhoomi_bldg,
  mahesh_bldg
]