import React from 'react'
import Signup from './components/Signup/Signup'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../src/components/Navbar/Navbar'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Houses from './components/Houses/Houses'
import Room from './components/Room/Room'
import Farmhouses from './components/Farm-houses/Farmhouses'
import PoolHouses from './components/PoolHouses/PoolHouses'
import TentHouses from './components/Tent-houses/TentHouses'
import Cabins from './components/Cabins/Cabins'
import Shopes from './components/Shopes/Shopes'
import ForestHouses from './components/Forest-Houses/ForestHouses'
import Listing from './components/Listing/Listing'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'


const App = () => {

  

  return (
    <div>
      <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/Login' element={<Login/>}/>
       <Route path='/Signup' element={<Signup/>}/>
       <Route path='/Houses' element={<Houses/>}/>
       <Route path='/Room' element={<Room/>}/>
       <Route path='/Farm-Houses' element={<Farmhouses/>}/>
       <Route path='/Pool-Houses' element={<PoolHouses/>}/>
       <Route path='/Tent-Houses' element={<TentHouses/>}/>
       <Route path='/Cabins' element={<Cabins/>}/>
       <Route path='/Shopes' element={<Shopes/>}/>
       <Route path='/Forest-houses' element={<ForestHouses/>}/>
       <Route path='/Listing' element={<Listing/>}/>
       <Route path='/Help-center' element={<Contact/>}/>

    
       
     </Routes>

      
    
    <Footer/>
    </div>
  )
}

export default App