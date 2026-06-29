import React from 'react'
import './Houses.css'
import Card from '../Cards/Card';

const Houses = () => {

   const propertyData = [
  {
    id: 1,
    img1: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    title: "Modern Luxury Villa In Jhansi",
    price: "45,000"
  },
  {
    id: 2,
    img1: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=800&q=80",
    title: "Premium Beachfront House In Goa",
    price: "65,000"
  },
  {
    id: 3,
    img1: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80",
    title: "Contemporary Family Villa In Noida",
    price: "35,000"
  },
  {
    id: 4,
    img1: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
    title: "Luxury Mansion In Lucknow",
    price: "85,000"
  },
  {
    id: 5,
    img1: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1560185127-6a2806647f81?auto=format&fit=crop&w=800&q=80",
    title: "Elegant Glass House In Manali",
    price: "55,000"
  },
  {
    id: 6,
    img1: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
    title: "Minimalist Smart Villa In Shimla",
    price: "42,000"
  },
  {
    id: 7,
    img1: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    title: "Exclusive Royal Estate In Jaipur",
    price: "90,000"
  },
  {
    id: 8,
    img1: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1527030280862-64139fbe04ca?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
    title: "Wooden Mountain Cabin In Wayanad",
    price: "28,000"
  },
  {
    id: 9,
    img1: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1502005229762-fc1b2b812ca5?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80",
    title: "Urban Luxury Penthouse In Mumbai",
    price: "75,000"
  },
  {
    id: 10,
    img1: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=800&q=80",
    title: "Modern Suburban Cottage In Delhi",
    price: "32,000"
  },
  {
    id: 11,
    img1: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1501183007986-d0d080b147f9?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1597218868981-1b68e15f0065?auto=format&fit=crop&w=800&q=80",
    title: "Sunset View Elite Villa In Gulmarg",
    price: "95,000"
  },
  {
    id: 12,
    img1: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    title: "High-Tech Smart Mansion In Bangalore",
    price: "1,10,000"
  },
  {
    id: 13,
    img1: "https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    title: "Traditional Brick House In Punjab",
    price: "25,000"
  },
  {
    id: 14,
    img1: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1560185893-a55cbc2c78a9?auto=format&fit=crop&w=800&q=80",
    title: "Cozy Countryside Home In Dehradun",
    price: "22,000"
  },
  {
    id: 15,
    img1: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1505692795793-20f545786e30?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80",
    title: "Sleek Architectural Studio In Pune",
    price: "38,000"
  },
  {
    id: 16,
    img1: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
    title: "Paradise Infinity Villa In Kerala",
    price: "1,20,000"
  },
  {
    id: 17,
    img1: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&w=800&q=80",
    title: "Beautiful Lakefront Cottage In Udaipur",
    price: "40,000"
  },
  {
    id: 18,
    img1: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
    title: "Vintage Luxury Estate In Hyderabad",
    price: "80,000"
  },
  {
    id: 19,
    img1: "https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80",
    title: "Chic Modern Residence In Kolkata",
    price: "48,000"
  },
  {
    id: 20,
    img1: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1600566752229-127af21609b6?auto=format&fit=crop&w=800&q=80",
    title: "Peaceful Nature Retreat In Ooty",
    price: "30,000"
  }
];

  return (
    <div id="houses">
        {
          propertyData.map((item)=>(
            <Card key={item.id}
              image1={item.img1}
              image2={item.img2}
              image3={item.img3}
              price={item.price}
              title={item.title}
            />
           ) )
        }
    </div>
  )
}

export default Houses;