import React, { useContext } from 'react'
import './Listing.css'
import { dataContext } from '../Context/UserContext'

const Listing = () => {

    const {
         title,
         setTitle,
         setAddlisting,
         setAddImage1,
         setAddImage2,
         setAddImage3,
         price,
         setPrice

    } = useContext(dataContext)
  return (
    <div id='listing'>
            <form onSubmit={(e)=>{
                e.preventDefault()
                alert("Add listing Sucessfuly...");
                setAddlisting(true);
            }}>
            <span className='listingtitle'>Add Your Listing</span>
                <div className="list">
                    <label htmlFor="title">Title</label>
                    <input type="text" onChange={(e)=> setTitle(e.target.value) } value={title } name="title" id="title" />
                </div>
                <div className="list">
                    <label htmlFor="discription">Discription</label>
                    <textarea name="discription" id="discription"></textarea>
                </div>
                <div className="list">
                    <label htmlFor="image1">Image 1</label>
                    <input type="file" onChange={(e)=> setAddImage1(URL.createObjectURL(e.target.files[0]))}  name="image1" id="image1" />
                </div>
                <div className="list">
                    <label htmlFor="image2">Image 2</label>
                    <input type="file" onChange={(e)=> setAddImage2(URL.createObjectURL(e.target.files[0]))}  name="image2" id="image2" />
                </div>
                <div className="list">
                    <label htmlFor="image3">Image 3</label>
                    <input type="file" onChange={(e)=> setAddImage3(URL.createObjectURL(e.target.files[0]))}  name="image3" id="image3" />
                </div>
                 
                <div className="list">
                    <label htmlFor="price">Price</label>
                    <input type="text" name="" id="price" onChange={(e)=> setPrice(e.target.value)} value={price} />
                </div>
                <div className="list">
                    <label htmlFor="location">Location</label>
                    <input type="text" name="" id="location"  />
                </div>
                <button id='list-btn'>Add</button>
            </form>

    </div>
  )
}

export default Listing