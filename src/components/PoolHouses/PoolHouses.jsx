import React from 'react'
import Card from '../Cards/Card';
import './PoolHouses.css'

const PoolHouses = () => {

    const poolHouseData = [
  {
    id: 1,
    img1: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    title: "Luxury Infinity Pool Villa In Goa",
    price: "70,000"
  },
  {
    id: 2,
    img1: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    title: "Modern Mansion with Private Pool In Mumbai",
    price: "95,000"
  },
  {
    id: 3,
    img1: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=800&q=80",
    title: "Premium Pool Side Oasis In Bangalore",
    price: "80,000"
  },
  {
    id: 4,
    img1: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    title: "Exotic Beachfront Pool Resort In Alibaug",
    price: "65,000"
  },
  {
    id: 5,
    img1: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    title: "Tropical Lagoon Pool House In Karjat",
    price: "55,000"
  },
  {
    id: 6,
    img1: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    title: "Sleek Minimalist Pool Villa In Delhi NCR",
    price: "90,000"
  },
  {
    id: 7,
    img1: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    title: "Royal Palace Pool Suite In Udaipur",
    price: "1,20,000"
  },
  {
    id: 8,
    img1: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
    title: "Elite Penthouse with Plunge Pool In Pune",
    price: "60,000"
  },
  {
    id: 9,
    img1: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1613977257592-4871e5fbe76e?auto=format&fit=crop&w=800&q=80",
    title: "Aesthetic Luxury Pool Stay In Hyderabad",
    price: "75,000"
  },
  {
    id: 10,
    img1: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80",
    title: "Contemporary Pool House In Chandigarh",
    price: "50,000"
  },
  {
    id: 11,
    img1: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
    title: "Cozy Backyard Pool Villa In Chennai",
    price: "48,000"
  },
  {
    id: 12,
    img1: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
    title: "Scenic Cliffside Pool Estate In Kerala",
    price: "85,000"
  },
  {
    id: 13,
    img1: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
    title: "High-End Pool Sanctuary In Lucknow",
    price: "58,000"
  },
  {
    id: 14,
    img1: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
    title: "Stunning Courtyard Pool Villa In Jaipur",
    price: "62,000"
  },
  {
    id: 15,
    img1: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1600566752229-127af21609b6?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80",
    title: "Ultra Luxury Pool Lounge In Surat",
    price: "72,000"
  },
  {
    id: 16,
    img1: "https://images.unsplash.com/photo-1549294413-26f195afcbce?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=800&q=80",
    title: "Chic Private Pool Retreat In Indore",
    price: "43,000"
  },
  {
    id: 17,
    img1: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    title: "Premium Stay with Pool In Jhansi",
    price: "40,000"
  },
  {
    id: 18,
    img1: "https://images.unsplash.com/photo-1512916194211-3f2b7f5f7de3?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80",
    title: "Grand Pool Villa In Visakhapatnam",
    price: "68,000"
  },
  {
    id: 19,
    img1: "https://images.unsplash.com/photo-1562790351-d273a961e0e9?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&fit=crop&w=800&q=80",
    title: "Peaceful Poolside Farm Stay In Nashik",
    price: "47,000"
  },
  {
    id: 20,
    img1: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80",
    title: "Vibrant Exotic Pool House In Pondicherry",
    price: "52,000"
  }
];

  return (
    <div id='poolhouses'>
        {
            poolHouseData.map((item)=>{
                return (
                    <Card image1={item.img1} image2={item.img2} image3={item.img3} title={item.title} price={item.price}/>
                )
            })
        }
    </div>
  )
}

export default PoolHouses