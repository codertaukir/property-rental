import React from 'react'
import './ForestHouses.css'
import Card from '../Cards/Card';

const ForestHouses = () => {
    const forestHouseData = [
  {
    id: 1,
    img1: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=80",
    title: "Deep Woods Nature Hideaway In Wayanad Forest",
    price: "24,000"
  },
  {
    id: 2,
    img1: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=800&q=80",
    title: "Premium Eco Treehouse Resort In Coorg Jungle",
    price: "35,000"
  },
  {
    id: 3,
    img1: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1500627869374-13cd993b1115?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=80",
    title: "Wilderness Safari Lodge Near Jim Corbett Forest",
    price: "28,500"
  },
  {
    id: 4,
    img1: "https://images.unsplash.com/photo-1472214222541-d510753a4907?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    title: "Pine Forest Wooden Manor In Shimla Outskirts",
    price: "22,000"
  },
  {
    id: 5,
    img1: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80",
    title: "Mystic Rainforest Canopy Villa In Munnar",
    price: "26,500"
  },
  {
    id: 6,
    img1: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    title: "Glass Roof Woodland Cabin In Ooty Heights",
    price: "31,000"
  },
  {
    id: 7,
    img1: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?auto=format&fit=crop&w=800&q=80",
    title: "Rustic Teakwood Forest Retreat In Dandeli",
    price: "19,000"
  },
  {
    id: 8,
    img1: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=800&q=80",
    title: "Luxury Bamboo Forest Estate In Chikmagalur",
    price: "29,000"
  },
  {
    id: 9,
    img1: "https://images.unsplash.com/photo-1563299796-17596ed6b017?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80",
    title: "Secret Woods Basecamp Sanctuary In Manali",
    price: "17,500"
  },
  {
    id: 10,
    img1: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    title: "Oakwood High-Ridge Villa In Mukteshwar Forest",
    price: "27,000"
  },
  {
    id: 11,
    img1: "https://images.unsplash.com/photo-1549294413-26f195afcbce?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1613977257592-4871e5fbe76e?auto=format&fit=crop&w=800&q=80",
    title: "Dense Jungle Hideout Sanctuary In Periyar",
    price: "23,500"
  },
  {
    id: 12,
    img1: "https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80",
    title: "Alpine Timber House Deep In Kanatal Woods",
    price: "21,000"
  },
  {
    id: 13,
    img1: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80",
    title: "Ancient Deodar Grove Chalet In Dharamshala",
    price: "33,000"
  },
  {
    id: 14,
    img1: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&w=800&q=80",
    title: "Peaceful Forest Lake View Lodge In Kodaikanal",
    price: "25,000"
  },
  {
    id: 15,
    img1: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1505692795793-20f545786e30?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80",
    title: "Evergreen Forest Hill Farm In Vagamon Outskirts",
    price: "18,000"
  },
  {
    id: 16,
    img1: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    title: "Cliffside Forest Retreat In Lansdowne Woods",
    price: "20,500"
  },
  {
    id: 17,
    img1: "https://images.unsplash.com/photo-1413882353014-734ed8a0353e?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    title: "Sal Forest Eco Sanctuary In Dehradun Valley",
    price: "16,000"
  },
  {
    id: 18,
    img1: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80",
    title: "Premium Stream-Facing Wooden House In Kasol",
    price: "28,000"
  },
  {
    id: 19,
    img1: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
    title: "Modern Glass Woodland Villa In Mahabaleshwar",
    price: "34,500"
  },
  {
    id: 20,
    img1: "https://images.unsplash.com/photo-1434064511983-18c6dae20ed5?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1472214222541-d510753a4907?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    title: "Rustic Foothills Forest Mansion In Chamba",
    price: "22,500"
  }
];
  return (
    <div id='foresthouses'>
        {
        forestHouseData.map((item)=>{
            return (

                <Card image1={item.img1} image2={item.img2} image3={item.img3} title={item.title} price={item.price}/>
            )
        })
        }
        </div>
  )
}

export default ForestHouses