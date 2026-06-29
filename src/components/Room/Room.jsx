import React from 'react'
import './Room.css'
import Card from '../Cards/Card';

const Room = () => {
         
    const roomData = [
  {
    id: 1,
    img1: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    title: "Cozy Private Room In Delhi",
    price: "12,000"
  },
  {
    id: 2,
    img1: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1560185127-6a2806647f81?auto=format&fit=crop&w=800&q=80",
    title: "Modern Studio Room In Mumbai",
    price: "18,000"
  },
  {
    id: 3,
    img1: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80",
    title: "Elegant Bedroom In Bangalore",
    price: "15,000"
  },
  {
    id: 4,
    img1: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    title: "Luxury Suite In Goa",
    price: "25,000"
  },
  {
    id: 5,
    img1: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    title: "Minimalist Room In Pune",
    price: "10,500"
  },
  {
    id: 6,
    img1: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1597218868981-1b68e15f0065?auto=format&fit=crop&w=800&q=80",
    title: "Heritage Style Room In Jaipur",
    price: "14,000"
  },
  {
    id: 7,
    img1: "https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    title: "Nordic Private Room In Chandigarh",
    price: "11,000"
  },
  {
    id: 8,
    img1: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1505692795793-20f545786e30?auto=format&fit=crop&w=800&q=80",
    title: "Chic Penthouse Room In Kolkata",
    price: "16,500"
  },
  {
    id: 9,
    img1: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1560185893-a55cbc2c78a9?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1600566752229-127af21609b6?auto=format&fit=crop&w=800&q=80",
    title: "Vintage Wooden Room In Manali",
    price: "13,000"
  },
  {
    id: 10,
    img1: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
    title: "Bright Aesthetic Room In Hyderabad",
    price: "14,500"
  },
  {
    id: 11,
    img1: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    title: "Premium Family Room In Noida",
    price: "17,000"
  },
  {
    id: 12,
    img1: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=800&q=80",
    title: "Luxury King Room In Lucknow",
    price: "15,500"
  },
  {
    id: 13,
    img1: "https://unsplash.com/photos/3d-render-modern-building-exterior-2MA8dFvOMec",
    img2: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80",
    title: "Cozy Garden View Room In Shimla",
    price: "12,500"
  },
  {
    id: 14,
    img1: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&w=800&q=80",
    title: "Sunlit Rooftop Room In Indore",
    price: "9,500"
  },
  {
    id: 15,
    img1: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&fit=crop&w=800&q=80",
    title: "Classy Executive Room In Chennai",
    price: "19,000"
  },
  {
    id: 16,
    img1: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1560185893-a55cbc2c78a9?auto=format&fit=crop&w=800&q=80",
    title: "Traditional Wooden Loft In Dehradun",
    price: "11,500"
  },
  {
    id: 17,
    img1: "https://images.unsplash.com/photo-1597218868981-1b68e15f0065?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=800&q=80",
    title: "Elegant Minimalist Room In Jhansi",
    price: "10,000"
  },
  {
    id: 18,
    img1: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
    title: "Premium Smart Studio In Ahmedabad",
    price: "13,500"
  },
  {
    id: 19,
    img1: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
    title: "High-Tech Studio Room In Gurgaon",
    price: "22,000"
  },
  {
    id: 20,
    img1: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&fit=crop&w=800&q=80",
    title: "Peaceful Zen Room In Ooty",
    price: "12,000"
  }
];

  return (
    <div id='room'>
            {
                roomData.map((item)=>{
                    return (
                        <Card image1={item.img1} image2={item.img2} image3={item.img3} title={item.title} price={item.price}/>
                    )
                })
            }
    </div>
  )
}

export default Room