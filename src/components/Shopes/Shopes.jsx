import React from 'react'
import Card from '../Cards/Card';
import './shopes.css'

const Shopes = () => {

    const shopData = [
  {
    id: 1,
    img1: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
    title: "Premium Mobile & Gadget Zone In Delhi NCR",
    price: "45,000"
  },
  {
    id: 2,
    img1: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
    title: "Modern Digital Service Center In Jhansi",
    price: "25,000"
  },
  {
    id: 3,
    img1: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=800&q=80",
    title: "Elite Cyber Cafe & Tech Hub In Bangalore",
    price: "35,000"
  },
  {
    id: 4,
    img1: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=800&q=80",
    title: "Boutique Storefront Space In Mumbai",
    price: "60,000"
  },
  {
    id: 5,
    img1: "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
    title: "High-Tech Commercial Service Hub In Pune",
    price: "40,000"
  },
  {
    id: 6,
    img1: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=800&q=80",
    title: "Aesthetic Food & Cafe Junction In Goa",
    price: "50,000"
  },
  {
    id: 7,
    img1: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80",
    title: "Retail Marketplace Showroom In Jaipur",
    price: "30,000"
  },
  {
    id: 8,
    img1: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
    title: "Premium Mobile Repair & Accessory Hub In Surat",
    price: "28,000"
  },
  {
    id: 9,
    img1: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&w=800&q=80",
    title: "Corner Market Shop In Lucknow",
    price: "22,000"
  },
  {
    id: 10,
    img1: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
    title: "Smart Digital Service Lounge In Hyderabad",
    price: "42,000"
  },
  {
    id: 11,
    img1: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
    title: "Chic Apparel & Lifestyle Studio In Indore",
    price: "32,000"
  },
  {
    id: 12,
    img1: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&w=800&q=80",
    title: "Wholesale Electronics Counter In Chandigarh",
    price: "38,000"
  },
  {
    id: 13,
    img1: "https://images.unsplash.com/photo-1601599561262-f9b4943f5265?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80",
    title: "Modern Telecom & Solution Point In Chennai",
    price: "44,000"
  },
  {
    id: 14,
    img1: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1601599561262-f9b4943f5265?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80",
    title: "Fintech & CSC Services Outlet In Kanpur",
    price: "20,000"
  },
  {
    id: 15,
    img1: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    title: "Premium Commercial Cabin Space In Noida",
    price: "48,000"
  },
  {
    id: 16,
    img1: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80",
    title: "Luxe Decor & Design Boutique In Ahmedabad",
    price: "55,000"
  },
  {
    id: 17,
    img1: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1601599561262-f9b4943f5265?auto=format&fit=crop&w=800&q=80",
    title: "Digital Documentation Store In Gwalior",
    price: "18,000"
  },
  {
    id: 18,
    img1: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    title: "High Street Fashion Corner In Kolkata",
    price: "65,000"
  },
  {
    id: 19,
    img1: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
    title: "Artisanal Heritage Craft Shop In Udaipur",
    price: "36,000"
  },
  {
    id: 20,
    img1: "https://images.unsplash.com/photo-1562790351-d273a961e0e9?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    img3: "https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&fit=crop&w=800&q=80",
    title: "Wellness & Organic Retail Space In Bhopal",
    price: "27,000"
  }
];

  return (
    <div id='shopes'>
        {
            shopData.map((item)=>{
              return(

                <Card image1={item.img1} image2={item.img2} image3={item.img3} title={item.title} price={item.price}/>
              )
            })
        }
    </div>
  )
}

export default Shopes