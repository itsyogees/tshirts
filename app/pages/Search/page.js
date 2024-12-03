import Navbar from '@/app/component/Navbar/page'
import React from 'react'
import { FaSearch } from "react-icons/fa";

const Searchpage = () => {
  return (
    <div className='searchPage'>
        <Navbar />
        <div className="searchPageContainer">

            <div className="searchPageContent">
              <div className="searchPageInput">
                <input type="text" placeholder="Search..." />
                <span className="searchIcon">
                  <FaSearch />
                </span>
              </div>
            </div>

            <div className="searchImage">
                <div className="searchImageCards">
                    <div className="searchImageCard">
                        <img src="/image/tshirt-1.jpg" alt="" />
                        <h2>Crew neck T-shirt</h2>
                    </div>
                    <div className="searchImageCard">
                        <img src="/image/tshirt-2.jpg" alt="" />
                        <h2>Long sleeve T-shirt</h2>
                    </div>
                    <div className="searchImageCard">
                        <img src="/image/tshirt-3.jpg" alt="" />
                        <h2>Polo T-shirt</h2>
                    </div>
                    <div className="searchImageCard">
                        <img src="/image/tshirt-4.jpg" alt="" />
                        <h2>V neck T-shirt</h2>
                    </div>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Searchpage;