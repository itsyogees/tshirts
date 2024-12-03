import React from "react";

//import Link from "next/link"; 
import Image from "next/image"; 

import { RiWhatsappFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
    return(
        <>
     
        <div className="footerContainer">
            <div className="contactDetails">
                <div className="footerLogo">    
                    <img src="/image/footer-logo.png" alt="Logo"  />
                </div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed eiusmod tempor incididunt ut labore dolore.adipiscing elit, sed do eiusmod tempor  consectetur.
                </p>
                <div className="footerIcons">
                    <RiWhatsappFill />
                    <FaFacebook />
                    <RiInstagramFill />
                    <FaSquareXTwitter />
                    <FaYoutube />
                </div>
            </div>

            <div className="explore-detail">
                <h3>Explore</h3>
                    <p>Lorem ipsum dolor sit amet dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet dolor sit amet</p>
            </div>

            <div className="recent-detail">
                <h3>Recent</h3>
                    <p>Lorem ipsum dolor sit amet dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet dolor sit amet</p>
            </div>

            <div className="contacts">
              <div className="address">
           
                <div className="address-icon">
                <FaLocationDot />
                </div>
                <div className="address-details">
                    <div className="address-info">
                      <p className="address-head">Our Location</p>
                       <p className="address-head">Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
              </div>

              <div className="address">
                <div className="address-icon">
                <FaPhoneAlt />
                </div>
                <div className="address-details">
                    <div className="address-info">
                    <p className="address-head">Our Phone</p>
                    <p className="address-head">+91 12345 67890</p>
                    </div>
                </div>
              </div>

              <div className="address">
                <div className="address-icon">
                <MdOutlineMailOutline />
                </div>
                <div className="address-details">
                    <div className="address-info">
                    <p className="address-head">Our Email</p>
                    <p className="address-head">garden@gmail.com</p>
                    </div>
                </div>
              </div>
            </div>

        </div>        
      

        </>
    )
}

export default Footer;