import React from 'react'
import './TentHouses.css'
import Card from '../Cards/Card';

const TentHouses = () => {
const tentHouseData = [
  {
    id: 1,
    img1: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?auto=format&fit=crop&w=800&q=80",
    title: "Luxury Glamping Tent In Jaisalmer Desert",
    price: "15,000"
  },
  {
    id: 2,
    img1: "https://images.unsplash.com/photo-1533873984035-25970ab07461?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=800&q=80",
    title: "Riverside Camping Tent In Rishikesh",
    price: "8,000"
  },
  {
    id: 3,
    img1: "https://images.unsplash.com/photo-1563299796-17596ed6b017?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1576176539998-0137f142a8de?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1515404929791-0d2df2a400a0?auto=format&fit=crop&w=800&q=80",
    title: "Premium Dome Tent In Manali Hills",
    price: "12,500"
  },
  {
    id: 4,
    img1: "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1496080174650-63793c6ff971?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1511993807578-701168605ad3?auto=format&fit=crop&w=800&q=80",
    title: "Wilderness Safari Tent In Ranthambore",
    price: "22,000"
  },
  {
    id: 5,
    img1: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80",
    title: "Eco-Friendly Nature Tent In Wayanad",
    price: "9,500"
  },
  {
    id: 6,
    img1: "https://images.unsplash.com/photo-1496080174650-63793c6ff971?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1533873984035-25970ab07461?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1563299796-17596ed6b017?auto=format&fit=crop&w=800&q=80",
    title: "Starlight Glamping Hub In Kasol",
    price: "11,000"
  },
  {
    id: 7,
    img1: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=80",
    title: "Forest Canopy Tent In Munnar",
    price: "14,000"
  },
  {
    id: 8,
    img1: "https://images.unsplash.com/photo-1508873696983-2df5199e4009?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1515404929791-0d2df2a400a0?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1576176539998-0137f142a8de?auto=format&fit=crop&w=800&q=80",
    title: "Mountain Ridge Camping Tent In Spiti",
    price: "7,500"
  },
  {
    id: 9,
    img1: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    title: "Lakeside Luxury Tent In Pawna",
    price: "10,000"
  },
  {
    id: 10,
    img1: "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?auto=format&fit=crop&w=800&q=80",
    title: "Scenic Valley Bell Tent In Ooty",
    price: "13,500"
  },
  {
    id: 11,
    img1: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1563299796-17596ed6b017?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80",
    title: "Woodland Adventure Tent In Dharamshala",
    price: "8,500"
  },
  {
    id: 12,
    img1: "https://images.unsplash.com/photo-1576176539998-0137f142a8de?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1508873696983-2df5199e4009?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1533873984035-25970ab07461?auto=format&fit=crop&w=800&q=80",
    title: "High-Altitude Basecamp Tent In Ladakh",
    price: "16,000"
  },
  {
    id: 13,
    img1: "https://images.unsplash.com/photo-1515404929791-0d2df2a400a0?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?auto=format&fit=crop&w=800&q=80",
    title: "Bohemian Glamping Suite In Pushkar",
    price: "11,500"
  },
  {
    id: 14,
    img1: "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=800&q=80",
    title: "Jungle Hideaway Tent In Corbett",
    price: "18,500"
  },
  {
    id: 15,
    img1: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80",
    title: "Riverside Meadow Tent In Coorg",
    price: "9,000"
  },
  {
    id: 16,
    img1: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1511993807578-701168605ad3?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?auto=format&fit=crop&w=800&q=80",
    title: "Hilltop Cloud View Tent In Mahabaleshwar",
    price: "14,500"
  },
  {
    id: 17,
    img1: "https://images.unsplash.com/photo-1511993807578-701168605ad3?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1576176539998-0137f142a8de?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1533873984035-25970ab07461?auto=format&fit=crop&w=800&q=80",
    title: "Premium Desert Resort Tent In Khuri",
    price: "13,000"
  },
  {
    id: 18,
    img1: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
    title: "Rustic Forest Basecamp In Shimla Outskirts",
    price: "10,500"
  },
  {
    id: 19,
    img1: "https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1515404929791-0d2df2a400a0?auto=format&fit=crop&w=800&q=80",
    title: "Peaceful Organic Farm Tent In Jhansi",
    price: "7,000"
  },
  {
    id: 20,
    img1: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1508873696983-2df5199e4009?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?auto=format&fit=crop&w=800&q=80",
    title: "Eco Valley Glamping Site In Chikmagalur",
    price: "16,500"
  }
];
  return (
    <div id='tenthouses'>
        {
            tentHouseData.map((item)=>(
                 <Card image1={item.img1} image2={item.img2} image3={item.img3} title={item.title} price={item.price}/>
                
            ))
        }
    </div>
  )
}

export default TentHouses