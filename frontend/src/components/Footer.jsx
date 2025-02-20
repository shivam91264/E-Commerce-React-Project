import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import new_logo from "../assets/logo_n.png";
import { ShopContext } from '../context/ShopContext';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const {navigate} = useContext(ShopContext);
  return (
    <div>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] flex flex-col lg:flex-row justify-between items-start gap-14 my-10 mt-24 text-sm">
        
        {/* Logo Section - Increased width */}
        <div className="flex flex-col w-full lg:w-1/2 xl:w-2/5"> {/* Increased the width */}
          <img src={new_logo} className="mb-5 w-40 h-14" alt="logo" /> {/* Adjusted logo size */}
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum in hic corrupti illo dicta! Incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptatibus possimus consequuntur eum ducimus beatae!
          </p>
        </div>
        
        {/* Company Section */}
        <div className="flex flex-col w-full lg:w-1/4">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <NavLink to={'/'} >HOME</NavLink>
            <NavLink to={'/sale'} >SALE</NavLink>
            <NavLink to={'/men'} >MEN</NavLink>
            <NavLink to={'/women'}>WOMEN</NavLink>   
            <NavLink to={'/kids'}>KIDS</NavLink>   
            <NavLink to={'/about'}>ABOUT US</NavLink>   
            <NavLink to={'/contact'}>CONTACT</NavLink>   
          </ul>
        </div>
        
        {/* Get in Touch Section */}
        <div className="flex flex-col w-full lg:w-1/4">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 7028570285</li>
            <li>contact@clothify.com</li>
          </ul>
        </div>
        
        {/* Follow Us Section */}
        <div className="flex flex-col w-full lg:w-1/4">
          <p className="text-xl font-medium mb-5">FOLLOW US</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024@ clothify.com - All Right Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
