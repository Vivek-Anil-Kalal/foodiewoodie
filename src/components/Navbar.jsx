import React, { useState } from 'react'
import { FoodieeWoodiee, google, magnifying_glass, menuOpen, menuClose } from '../assets'
import './navbar.css'
import navLinks from '../constants'
import SellerButton from './SellerButton'

const Navbar = (props) => {

  const [toggle, setToggle] = useState(false);

  return (
    <div className={`sm:py-3 py-2 flex justfiy-around items-center sm:flex-row flex-col relative`}>
      <div className="flex flex-1 p-5 md:ml-8 sm:ml-5 ml-2">
        <img src={FoodieeWoodiee} alt="logo" className={`ml-2 h-[30px] cursor-pointer `} />
      </div>

      <div className="flex md:flex-row items-center sm:justify-between justify-around">
        {/* Search bar */}
        <div className="mr-8 relative">
          <img src={magnifying_glass} alt="search" className="absolute top-2.5 left-2" />
          <input type="text" name="search" className="md:min-w-[360px] w-[300px] h-[40px] bg-[#e1e1e1] rounded-[10px] pl-9 text-[18px] font-semibold " placeholder='Search' />
        </div>
        {/*  Button */}
        <div className="xl:block hidden flex justify-around items-center px-6">
          <button className="min-w-[300px] h-[40px] rounded-[15px] p-2 bg-black text-white flex flex-row justify-center box-shadow text-[#FFF500]"> <img src={google} alt="google" className="w-[20px] h-[20px] flex mt-1 mr-2 " /> Login/SignUp with google</button>
        </div>
        {/* Hamburger  sm:flex absolute top-[50px] right-1*/}
        <div className="xl:hidden  p-2 rounded-[8px] mr-6 justify-end items-center border-2 border-black">
          <img
            src={toggle ? menuClose : menuOpen}
            alt="Menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>
      </div>


      <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-[#FFFFFF] absolute sm:top-[95px] top-[135px] left-0 right-2 w-full border-2 border-black  rounded-[10px] justify-center items-center dropdown overflow-hidden`}
        onClick={() => setToggle((prev) => !prev)}
      >
        <div className="flex flex-column justify-center items-center text-center">
          <ul className='list:none'>
            {
              navLinks.map((link, index) => (
                <li key={index} className={`${index !== navLinks.length - 1 ? 'my-5' : 'my-5'} 
                                             border-2 border-black p-3 w-[220px] text-center navLinks duration-300 
                                             rounded-[15px] bg-[#D9D9D9] text-[1.2rem] font-semibold ${props.activeComponent === link.id ? "bg-[#000000] text-yellow-300" : "bg-[#e1e1e1] text-black"}`}

                  onClick={() => {
                    props.loadComponent(link.id)
                    props.showAsActive(link.id)
                  }}
                  activeClassName="active-class">
                  {link.title}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar