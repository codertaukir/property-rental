import React from 'react'
import Card from '../Cards/Card';
import './Farmhouses.css'

const Farmhouses = () => {

    const farmHouseData = [
  {
    id: 1,
    img1: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    title: "Luxury Green Farm House In Lonavala",
    price: "45,000"
  },
  {
    id: 2,
    img1: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
    title: "Royal Heritage Farm Villa In Udaipur",
    price: "60,000"
  },
  {
    id: 3,
    img1: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80",
    title: "Rustic Woodland Estate In Manali",
    price: "35,000"
  },
  {
    id: 4,
    img1: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    title: "Nature's Nest Farm Stay In Wayanad",
    price: "28,000"
  },
  {
    id: 5,
    img1: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1413882353014-734ed8a0353e?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    title: "Modern Barn Farmhouse In Alibaug",
    price: "55,000"
  },
  {
    id: 6,
    img1: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80",
    title: "Traditional Brick Farmhouse In Punjab",
    price: "32,000"
  },
  {
    id: 7,
    img1: "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80",
    title: "Exclusive Meadows Retreat In Ooty",
    price: "42,000"
  },
  {
    id: 8,
    img1: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1597218868981-1b68e15f0065?auto=format&fit=crop&w=800&q=80",
    title: "Sunset View Ranch In Karjat",
    price: "50,000"
  },
  {
    id: 9,
    img1: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    title: "High-Tech Smart Farmhouse In Bangalore",
    price: "75,000"
  },
  {
    id: 10,
    img1: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
    title: "Elegant Farm Sanctuary In Noida",
    price: "38,000"
  },
  {
    id: 11,
    img1: "https://images.unsplash.com/photo-1472214222541-d510753a4907?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1434064511983-18c6dae20ed5?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    title: "Serene Riverside Farm In Rishikesh",
    price: "48,000"
  },
  {
    id: 12,
    img1: "https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1505692795793-20f545786e30?auto=format&fit=crop&w=800&q=80",
    title: "Country Living Villa In Chandigarh",
    price: "40,000"
  },
  {
    id: 13,
    img1: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1560185893-a55cbc2c78a9?auto=format&fit=crop&w=800&q=80",
    title: "Cozy Farmhouse In Dehradun Hills",
    price: "34,000"
  },
  {
    id: 14,
    img1: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1505692795793-20f545786e30?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80",
    title: "Sleek Modern Ranch In Pune Outskirts",
    price: "44,000"
  },
  {
    id: 15,
    img1: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
    title: "Infinity Pool Farmhouse In Hyderabad",
    price: "85,000"
  },
  {
    id: 16,
    img1: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&w=800&q=80",
    title: "Lakefront Farm Cottage In Bhopal",
    price: "36,000"
  },
  {
    id: 17,
    img1: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
    title: "Vintage Luxury Farm In Lucknow",
    price: "68,000"
  },
  {
    id: 18,
    img1: "https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80",
    title: "Chic Modern Farmstead In Ranchi",
    price: "39,000"
  },
  {
    id: 19,
    img1: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1600566752229-127af21609b6?auto=format&fit=crop&w=800&q=80",
    title: "Peaceful Organic Farm In Jhansi",
    price: "31,000"
  },
  {
    id: 20,
    img1: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    title: "Eco Green Valley Farm In Nashik",
    price: "46,000"
  }
];


  return (
    <div id='farmhouses'>

            {farmHouseData.map((item)=>{
                return (
                    <Card key={item.id} image1={item.img1} image2={item.img2} image3={item.img3} title={item.title} price={item.price}/>
                )
            })}

    </div>
  )
}

export default Farmhouses