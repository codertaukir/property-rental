import React from 'react'
import './cabins.css'
import Card from '../Cards/Card';

const Cabins = () => {

    const cabinData = [
  {
    id: 1,
    img1: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80",
    title: "A-Frame Wooden Cabin In Manali Hills",
    price: "18,000"
  },
  {
    id: 2,
    img1: "https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    title: "Luxury Pine Wood Cabin In Shimla",
    price: "22,000"
  },
  {
    id: 3,
    img1: "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=80",
    title: "Rustic Forest Log Cabin In Wayanad",
    price: "14,500"
  },
  {
    id: 4,
    img1: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80",
    title: "Lakefront Glass Cabin In Ooty",
    price: "25,000"
  },
  {
    id: 5,
    img1: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=800&q=80",
    title: "Eco-Green Meadow Cabin In Munnar",
    price: "16,000"
  },
  {
    id: 6,
    img1: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=800&q=80",
    title: "Nordic Style Hideaway Cabin In Kasol",
    price: "19,500"
  },
  {
    id: 7,
    img1: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    title: "Mountain Cliff Cabin In Mussoorie",
    price: "21,000"
  },
  {
    id: 8,
    img1: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=800&q=80",
    title: "Modern Minimalist Cabin In Lonavala Outskirts",
    price: "28,000"
  },
  {
    id: 9,
    img1: "https://images.unsplash.com/photo-1434064511983-18c6dae20ed5?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1472214222541-d510753a4907?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    title: "Riverside Wooden Cottage In Rishikesh",
    price: "13,000"
  },
  {
    id: 10,
    img1: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1505692795793-20f545786e30?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80",
    title: "Premium Cozy Log Cabin In Coorg",
    price: "17,500"
  },
  {
    id: 11,
    img1: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1560185893-a55cbc2c78a9?auto=format&fit=crop&w=800&q=80",
    title: "Chic Wooden Sanctuary In Mount Abu",
    price: "15,000"
  },
  {
    id: 12,
    img1: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80",
    title: "High-End Glass Treehouse Cabin In Dharamshala",
    price: "32,000"
  },
  {
    id: 13,
    img1: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1597218868981-1b68e15f0065?auto=format&fit=crop&w=800&q=80",
    title: "Sunset Ridge Cabin In Mahabaleshwar",
    price: "20,000"
  },
  {
    id: 14,
    img1: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&w=800&q=80",
    title: "Lakefront Cabin Retreat In Kodaikanal",
    price: "24,500"
  },
  {
    id: 15,
    img1: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
    title: "Vintage Luxury Woods Cabin In Mukteshwar",
    price: "26,000"
  },
  {
    id: 16,
    img1: "https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80",
    title: "Chic Timberland Cabin In Lansdowne",
    price: "18,500"
  },
  {
    id: 17,
    img1: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1600566752229-127af21609b6?auto=format&fit=crop&w=800&q=80",
    title: "Peaceful Forest Log Stay In Almora",
    price: "15,500"
  },
  {
    id: 18,
    img1: "https://images.unsplash.com/photo-1549294413-26f195afcbce?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1613977257592-4871e5fbe76e?auto=format&fit=crop&w=800&q=80",
    title: "Nordic Peak Cabin In Kanatal",
    price: "23,000"
  },
  {
    id: 19,
    img1: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
    title: "Modern Alpine Cabin In Chamba",
    price: "21,500"
  },
  {
    id: 20,
    img1: "https://images.unsplash.com/photo-1413882353014-734ed8a0353e?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    title: "Eco Valley Wooden Cabin In Vagamon",
    price: "17,000"
  }
];

  return (
    <div id='cabin'>
        {
            cabinData.map((item)=>(
                <Card image1={item.img1} image2={item.img2} image3={item.img3} title={item.title} price={item.price}/>
            ))
        }
    </div>
  )
}

export default Cabins