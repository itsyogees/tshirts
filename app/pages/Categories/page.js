"use client";

import React, { useState } from "react";

import Footer from '@/app/component/Footer/page';
import Navbar from '@/app/component/Navbar/page';

// import Image from "next/image";
import Link from "next/link";

const Categories = () => {

    const [hoveredCard, setHoveredCard] = useState(null);
    
    const handleMouseEnter = (id) => {
      setHoveredCard(id);
    };
  
    const handleMouseLeave = () => {
      setHoveredCard(null);
    };


    const collections = [
        {
          id: 1,
          image: "/image/templogo1.png",
          image2: "/image/tempimg1.png",
          num:"62315"
        },
        {
          id: 2,
          image: "/image/templogo2.png",
          image2: "/image/tempimg2.png",
          num:"63278"
        },
        {
          id: 3,
          image: "/image/templogo3.png",
          image2: "/image/tempimg3.png",
          num:"61454"
        },
        {
          id: 4,
          image: "/image/templogo4.png",
          image2: "/image/tempimg4.png",
          num:"62894"
        },
        {
          id: 5,
          image: "/image/templogo5.png",
          image2: "/image/tempimg5.png",
          num:"62261"
        },
        {
          id: 6,
          image: "/image/templogo6.png",
          image2: "/image/tempimg6.png",
          num:"64347"
        }
    ]


    const typeData = [
        {
            id: 1,
            image: "/image/temp1.jpg",
            alt: "template",
            head: "Trending",
            details: ["Most Popular", "Mascots", "Nature & Outdoors", "Pop Culture", "Quotes & Phrases", "Seniors"]
        },
        {
            id: 2,
            image: "/image/temp2.jpg",
            alt: "template",
            head: "K-12 School",
            details: ["Athletic Department", "Band / Music", "Choir", "Class Shirts", "Clubs/Activities", "Drama","Find Your Mascot","Student Council"]
        },
        {
            id: 3,
            image: "/image/temp3.jpg",
            alt: "template",
            head: "Sports",
            details: ["Baseball", "Basketball", "Cheerleading", "Dance", "Football", "Track & Field", "Volleyball"]
        },
        {
            id: 4,
            image: "/image/temp4.jpg",
            alt: "template",
            head: "Parties & Events ",
            details: ["Anniversary", "Bachelorette Party", "Beach", "Birthday", "Camp", "Family Reunion" ,"Vacation"]
        },
        {
            id: 5,
            image: "/image/temp5.jpg",
            alt: "template",
            head: "Business",
            details: ["Automotive", "Bar / Restaurant", "Construction", "Dance Studios", "Employee Appreciation", "Farm" ,"Medical / Healthcare" , "Professional"]
        },
        {
            id: 6,
            image: "/image/temp6.jpg",
            alt: "template",
            head: "Holidays & Seasons",
            details: ["Christmas", "Father's Day", "Fourth of July", "Halloween", "Mother's Day", "Thanksgiving" ,"Valentine's Day"]
        },
        {
            id: 7,
            image: "/image/temp7.jpg",
            alt: "template",
            head: "College",
            details: ["Clubs", "Department / School", "Find Your Greek Letters", "Find Your School", "Fraternity", "Sorority"]
        },
        {
            id: 8,
            image: "/image/temp8.jpg",
            alt: "template",
            head: "First Responders",
            details: ["Air Force", "Army","Support / Family" ,"Coast Guard", "EMS", "Fire Department", "Police"]
        },

    ];
    
    return(
        <>
        
        <div className="categories-container">
             <Navbar/>
            <div className="categories">

            <div className="categoryCards">
                <div className="category-show">
                    <h3>See our favorite design templates</h3>
                    <Link href="/pages/Templates">
                     <h4>View More</h4>
                     </Link>
                </div>
                <div className="categoryCardsContent">
                    {collections.map((item) => (
                    <div
                        key={item.id}
                        className="categorycardItem"
                        onMouseEnter={() => handleMouseEnter(item.id)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="categoryImageContainer">
                        <img
                            src={hoveredCard === item.id ? item.image2 : item.image}
                            alt={item.title}
                            className="categoryImage"
                        />
                        </div>
                        <div className="categoryNumber">
                        <p>{item.num}</p>
                        </div>
                    </div>
                    ))}
                </div>
                </div>


               <div className="type-section">
                <div className="types-container">
                {typeData.map((type, index) => (
                    <div className="type-row" key={index}>
                        <div className="type-col">
                            <div className="type-head">
                                <h3>{type.head}</h3>
                            </div>
                            <div className="type-img">
                                <img src={type.image} alt={type.alt} width={200} height={100} />
                            </div>
                            <div className="type-details">
                                {type.details.map((detail, idx) => (
                                    <p key={idx}>{detail}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>

            </div>
            <Footer/>
        </div>


        </>
    )
}

export default Categories;