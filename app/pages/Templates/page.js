"use client";

import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
// import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/component/Navbar/page";
import Footer from "@/app/component/Footer/page";

const FilterImages = () => {
  // const [openFilter, setOpenFilter] = useState("trending");
  // const [selectedFilters, setSelectedFilters] = useState({}); 
  

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
      title: "Edit This Design",
    },
    {
      id: 2,
      image: "/image/templogo2.png",
      image2: "/image/tempimg2.png",
      title: "Edit This Design",
    },
    {
      id: 3,
      image: "/image/templogo3.png",
      image2: "/image/tempimg3.png",
      title: "Edit This Design",
    },
    {
      id: 4,
      image: "/image/templogo4.png",
      image2: "/image/tempimg4.png",
      title: "Edit This Design",
    },
    {
      id: 5,
      image: "/image/templogo5.png",
      image2: "/image/tempimg5.png",
      title: "Edit This Design",
    },
    {
      id: 6,
      image: "/image/templogo6.png",
      image2: "/image/tempimg6.png",
      title: "Edit This Design",
    },
    {
      id: 7,
      image: "/image/templogo7.png",
      image2: "/image/tempimg7.png",
      title: "Edit This Design",
    },
    {
      id: 8,
      image: "/image/templogo8.png",
      image2: "/image/tempimg8.png",
      title: "Edit This Design",
    },
    {
      id: 9,
      image: "/image/templogo9.png",
      image2: "/image/tempimg9.png",
      title: "Edit This Design",
    },
    {
      id: 10,
      image: "/image/templogo10.png",
      image2: "/image/tempimg10.png",
      title: "Edit This Design",
    },
    {
      id: 11,
      image: "/image/templogo11.png",
      image2: "/image/tempimg11.png",
      title: "Edit This Design",
    },
    {
      id: 12,
      image: "/image/templogo12.png",
      image2: "/image/tempimg12.png",
      title: "Edit This Design",
    },
  ];


  return (
    <div className="template-section">
       <Navbar />
      <div className="templates">
          
            <div className="templateCards">
              <div className="templateCardsContent">
                {collections.map((item) => (
                  <div
                    key={item.id}
                    className="templatecardItemWrapper"
                  >
                    <div
                      className="templatecardItem"
                      onMouseEnter={() => handleMouseEnter(item.id)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <img
                        src={hoveredCard === item.id ? item.image2 : item.image}
                        alt={item.title}
                        className="templatecardImage"
                      />
                    </div>
                    <Link href="/pages/Design">
                      <div className="templateCardInfo">
                        <p>{item.title}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

            </div>
          
        </div>
      
    
    <Footer />
    </div>
  );
};

export default FilterImages;
