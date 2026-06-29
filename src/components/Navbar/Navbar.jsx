import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/p.jpg'
import { Link, NavLink } from 'react-router-dom';

import { CiSearch } from "react-icons/ci";
import { GiFamilyHouse, GiHamburgerMenu, GiWoodCabin } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdBedroomBaby, MdBedroomParent, MdOutlinePool, MdOutlineWhatshot } from "react-icons/md";
import { PiFarm } from 'react-icons/pi';
import { LuTentTree } from 'react-icons/lu';
import { SiHomeassistantcommunitystore } from 'react-icons/si';
import { FaTreeCity } from 'react-icons/fa6';

const Navbar = () => {
  let [hamActive, setHamActive] = useState(false)
  return (
    <div id='nav'>



      <div className="nav1">

        {hamActive && (
          <div className="hamburger">
            <Link to={'/Login'}> <div className="ham1">Login</div></Link>
            <Link to={'/Signup'}> <div className="ham1">Sign Up</div></Link>
            <Link to={'/Listing'}> <div className="ham1">List Your Home</div></Link>
            <Link to={'/Help-center'}> <div className="ham1">Help Center</div></Link>
          </div> )}

        <div className='logo'>
          <img src={logo} alt="" />
          <h1>Private Property Rental</h1>
        </div>
        <div className="searchbar">
          <input type="text" placeholder='Search Destination' maxLength={15} />
          <button><CiSearch /><span>Search</span></button>
        </div>
Help-center
        <div className="ham">
          <button id='btn1'>List Your Home</button>
          <button id='btn2' onClick={() => {
            setHamActive(prev => !prev)
          }}
          >{hamActive ? <IoMdClose /> : <GiHamburgerMenu />} < span><CgProfile /></span> </button>
        </div>

      </div>
      <div className="nav2">
        <NavLink to={"/"}><div className="svg-bar"><MdOutlineWhatshot /> <h3>Trending</h3>
        </div>
        </NavLink>
        <NavLink to={'/Houses'}>
          <div className="svg-bar"><GiFamilyHouse /><h3>Houses</h3></div>
          </NavLink>
        <NavLink to={'/Room'}>
          <div className="svg-bar"><MdBedroomParent /><h3>Room</h3></div>
        </NavLink>
        <NavLink to={'/Farm-Houses'}>
          <div className="svg-bar"><PiFarm /><h3>Farm Houses</h3></div>
        </NavLink>

        <NavLink to={'/Pool-Houses'}>
        <div className="svg-bar"><MdOutlinePool /><h3>Pool House</h3></div>
        </NavLink>
          
        <NavLink to={"/Tent-Houses"}>
        <div className="svg-bar"><LuTentTree /><h3>Tent House</h3></div>
        </NavLink>

        <NavLink to={'Cabins'}>
        <div className="svg-bar"><GiWoodCabin /><h3>Cabins</h3></div>
         </NavLink>

         <NavLink to={'/Shopes'}>
        <div className="svg-bar"><SiHomeassistantcommunitystore /><h3>Shopes</h3></div>
          </NavLink>

          <NavLink to={'/Forest-houses'}>

        <div className="svg-bar"><FaTreeCity /><h3>Forest Houses</h3></div>
          </NavLink>
      </div>
    </div>
  )
}

export default Navbar