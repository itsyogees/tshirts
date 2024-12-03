
"use client";

import Footer from '@/app/component/Footer/page';
import Navbar from '@/app/component/Navbar/page';
import React from 'react'
import { AiFillStar } from "react-icons/ai";

const Cardpage = () => {
    const courses = [
        {
          title: "Short Sleeve T-shirts",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore.",
          image: "/image/cards-1.jpeg", 
          price: 5000,
          discount: 50, 
          rating: "4.5",
          ratingInfo: "(4213)",
        },
        {
          title: "Short Sleeve T-shirts",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore.",
          image: "/image/cards-1.jpeg", 
          price: 6000,
          discount: 60, 
          rating: "4.5",
          ratingInfo: "(4213)",
        },
      ];

  return (
    <div className="card">
      <Navbar/>

        <div className='cardContainer'>
          <div className='cardHeader'>
            <h2>Your Cart</h2>
          </div>

          <div className='cardContent'>
            <div className='cardRowHeader'>
              <h5 className='courseImage'>Tshirt</h5>
              <h5 className='courseDetails'>Details</h5>
              <h5 className='coursePrice'>Price</h5>
              <h5 className='courseDiscount'>Discount</h5>
              <h5 className='courseTotal'>Total</h5>
            </div>

            {/* Mapping over the courses array */}
            {courses.map((course, index) => {
              const totalPrice = course.price - course.discount;
              return (
                <div className='cardRow' key={index}>
                  <div className='courseImage'>
                    <img
                      src={course.image}
                      width={200}
                      height={200}
                      alt={`Course Image for ${course.title}`}
                    />
                  </div>
                  <div className="courseDetails">
                    <span>{course.title}</span>
                    <div className="rating">
                     <span className="rating-size">5 XL</span>  
                      {/* Display "5 XL" */}
                      <span className="ratingNumber">{course.rating}</span>
                      {[...Array(5)].map((_, index) => (
                        <AiFillStar
                          key={index}
                          color={
                            index < Math.round(parseFloat(course.rating)) ? "#FFD700" : "#e4e5e9"
                          }
                        />
                      ))}
                      <span className="categoriesRatingInfo">{course.ratingInfo}</span>
                    </div>
                    {course.details}
                  </div>

                  <p className='coursePrice'>₹{course.price}</p>
                  <p className='courseDiscount'>₹{course.discount}</p>
                  <p className='courseTotal'>₹{totalPrice}</p>
                </div>
               );
              })}
          </div>
        </div>

      <Footer/>
    </div>
  )
}

export default Cardpage;