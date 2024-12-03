'use client';

import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaSearch,
  FaRegHeart,
  FaRegUserCircle,
} from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Hook to get the current route

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getLinkClass = (href) => {
    return `navLink ${pathname === href ? 'active' : ''}`;
  };

  return (
    <div className="navbarMain">
      <div className="navbarContainer">
        <nav className="navbar">
          {/* Logo Section */}
          <div className="navIcons">
            <div className="logo">
              <Link href="/">
                <img
                  src="/image/KustomteeLogo.png"
                  alt="Logo"
                   
                />
              </Link>
            </div>

            {/* Hamburger and Close Icons */}
            <div className="menuToggle" onClick={toggleMenu}>
              {!isMenuOpen ? (
                <FaBars className="icon" />
              ) : (
                <FaTimes className="icon" />
              )}
            </div>

            {/* Navigation Items */}
            <ul className={`navItems ${isMenuOpen ? 'active' : ''}`}>
              <li>
                <Link href="/" className={getLinkClass('/pages/Homepage')}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/pages/Aboutpage" className={getLinkClass('/pages/Aboutpage')}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/pages/Design" className={getLinkClass('/pages/Design')}>
                  Design a Tee
                </Link>
              </li>
              <li>
                <Link href="/pages/Templates" className={getLinkClass('/pages/Templates')}>
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/pages/Help" className={getLinkClass('/pages/Help')}>
                  Help
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Side Icons and Text */}
          {/* <div className="rightMenu">
            <Link href="/pages/Search" className="iconLink">
              <FaSearch className="icon" />
            </Link>
            <Link href="/pages/Cardpage" className="iconLink">
              <FaRegHeart className="icon" />
            </Link>
            <Link href="/component/Login" className="iconLink">
              <FaRegUserCircle className="icon" />
            </Link>

            <span className="helloText">Sign In</span>
           
          </div> */}
            {/* <div className="rightMenu">
              <Link href="/pages/Login" className="iconLink">
               <span className="helloText">Sign In</span>
              </Link> 
            </div> */}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
