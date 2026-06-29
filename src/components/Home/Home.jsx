import React, { useContext } from 'react'
import './Home.css'
import Card from '../Cards/Card'

import house from '../../assets/house.jpg'
import house1 from '../../assets/housekichen.jpg'
import house2 from '../../assets/houseliving.jpg'

import farmHouse1 from '../../assets/farmhouse.jpg'
import farmHouse2 from '../../assets/farmhouse1.jpg'
import farmHouse3 from '../../assets/farmhouse2.jpg'

import flat1 from '../../assets/roomhouse.avif'
import flat2 from '../../assets/roomhouse1.avif'
import flat3 from '../../assets/roomhouse2.avif'

import vila1 from '../../assets/villa.jpg'
import vila2 from '../../assets/villa1.jpg'
import vila3 from '../../assets/villa3.jpg'

import mountain from '../../assets/mountain.avif'
import mountain2 from '../../assets/mountain1.avif'
import mountain3 from '../../assets/mountain3.avif'

import hutHouse from '../../assets/huthouse.jpg'
import hutHouse1 from '../../assets/huthouse1.jpg'
import hutHouse2 from '../../assets/huthouse2.jpg'

import village from '../../assets/village1.avif'
import village1 from '../../assets/village2.avif'
import village2 from '../../assets/village3.avif'

import room from '../../assets/room.jpg'
import room1 from '../../assets/room1.jpg'
import room2 from '../../assets/room2.jpg'

import old from '../../assets/old.avif'
import old1 from '../../assets/old2.avif'
import old2 from '../../assets/old3.avif'

import roomnew from '../../assets/roomnew.avif'
import roomnew1 from '../../assets/roomnew1.avif'
import roomnew2 from '../../assets/roomnew2.avif'

import hut1 from '../../assets/hut1.avif'
import hut2 from '../../assets/hut2.avif'
import hut3 from '../../assets/hut3.avif'

import ski from '../../assets/ski.avif'
import ski2 from '../../assets/ski1.avif'
import ski3 from '../../assets/ski2.avif'
import { dataContext } from '../Context/UserContext'

const Home = () => {

   const {
           title,
          addListing, 
          addImage1, 
          addImage2,
          addImage3,
          price, 
  
      } = useContext(dataContext)

  const propertyData = [
    { id: 1, img1: house, img2: house1, img3: house2, title: "3BHK Villa In Jhansi", price: "20,000" },
    { id: 2, img1: farmHouse1, img2: farmHouse2, img3: farmHouse3, title: "1BHK Farmhouse In Lucknow", price: "24,000" },
    { id: 3, img1: flat1, img2: flat2, img3: flat3, title: "2BHK Flat In Noida", price: "45,000" },
    { id: 4, img1: vila1, img2: vila2, img3: vila3, title: "Luxury Villa In Goa", price: "85,000" },
    { id: 5, img1: mountain, img2: mountain2, img3: mountain3, title: "Mountain Cabin In Manali", price: "35,000" },
    { id: 6, img1: hutHouse, img2: hutHouse1, img3: hutHouse2, title: "Eco-Hut In Shimla", price: "18,000" },
    { id: 7, img1: village, img2: village1, img3: village2, title: "Traditional House In Punjab", price: "15,000" },
    { id: 8, img1: room, img2: room1, img3: room2, title: "Cozy Room In Delhi", price: "12,000" },
    { id: 9, img1: old, img2: old1, img3: old2, title: "Heritage Haveli In Jaipur", price: "60,000" },
    { id: 10, img1: roomnew, img2: roomnew1, img3: roomnew2, title: "Modern Studio In Mumbai", price: "30,000" },
    { id: 11, img1: hut1, img2: hut2, img3: hut3, title: "Nature Resort In Wayanad", price: "22,000" },
    { id: 12, img1: ski, img2: ski2, img3: ski3, title: "Ski Resort In Gulmarg", price: "50,000" }
  ];

  return (
    <div id='home'>
      {propertyData.map((item) => (
        <Card 
          key={item.id} // React ke liye unique identity
          image1={item.img1} 
          image2={item.img2} 
          image3={item.img3} 
          title={item.title} 
          price={item.price} 
        />

      
      ))}

      {  addListing && (
        <Card 
          kay="new-listing-card"
          image1={addImage1} 
          image2={addImage2} 
          image3={addImage3} 
          title={title} 
          price={price} 
        />
      )
      }
    </div>
  )
}

export default Home