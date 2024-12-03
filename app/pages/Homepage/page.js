
import Footer from "@/app/component/Footer/page";
import Navbar from "@/app/component/Navbar/page";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
// import Image from "next/image";

import Chatbox from "../Chatbox/page";

const homepage = () => {

  const items = [
    { imgSrc: "/image/tshirt1.jpg",head:"Short Sleeve T-shirts" ,text: "Comfortable and stylish short sleeve t-shirts" },
    { imgSrc: "/image/tshirt2.jpg",head:"Long Sleeve T-shirts", text: "Versatile long sleeve t-shirts for cooler weather " },
    { imgSrc: "/image/tshirt3.jpg", head:"Soft Tri-Blend T-shirts",text: "Ultra-soft tri-blend t-shirts for all-day comfort" },
    { imgSrc: "/image/tshirt4.jpg", head:"Performance T-shirts",text: "Breathable performance t-shirts to keep you cool " },
    { imgSrc: "/image/tshirt5.jpg", head:"Women's T-shirts:",text: "Flattering and comfortable t-shirts for womens" },
    { imgSrc: "/image/tshirt6.jpg", head:"Kids' T-shirts",text: "Soft and durable t-shirts for kids, perfect for play" },
    { imgSrc: "/image/tshirt8.jpg", head:"Tie Dye T-shirts",text: "Unique and vibrant tie dye t-shirts for a colorful look " },
    { imgSrc: "/image/tshirt7.jpg", head:"Soft Tri-Blend T-shirts",text: "Breathable performance t-shirts to keep you cool" },
    { imgSrc: "/image/tshirt2.jpg",head:"Long Sleeve T-shirts", text: "Versatile long sleeve t-shirts for cooler weather " },
  ];


  return (
    <>
      <div className="homepage">
        <div className="homepageContainer">

          <div className="homepageHero">
            <Navbar />
            <div className="homepageHeroContentMain">
            <div className="homepageHeroContent">
              <h2>Make and Buy Your Own Customized T-Shirt Online</h2>
              <p>
                Don’t you just love those t-shirts customized and designed
                especially for you? Click here to get your own now!.  
              </p>

              <Link href="/pages/ColorAndSize">
              <button>Shop now</button>
              </Link>
            </div>
            </div>
           
          </div>

          <div className="homepageContent">
            <div className="homepageContentHead">
              <h2>Features</h2>
            </div>
            <div className="homepageContentCards">
              <div className="homepageCard">
                <div className="cardImage">
                  <img src="/image/card-1.png" alt="" />
                </div>
                <div className="cardContent">
                  <h2>Create Designs</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    eiusmod tempor incididunt ut labore dolore.adipiscing elit,
                    sed do eiusmod tempor consectetur.
                  </p>
                </div>
              </div>
              <div className="homepageCard">
                <div className="cardImage">
                  <img src="/image/card-2.png" alt="" />
                </div>
                <div className="cardContent">
                  <h2>Create Designs</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    eiusmod tempor incididunt ut labore dolore.adipiscing elit,
                    sed do eiusmod tempor consectetur.
                  </p>
                </div>
              </div>
              <div className="homepageCard">
                <div className="cardImage">
                  <img src="/image/card-3.png" alt="" />
                </div>
                <div className="cardContent">
                  <h2>Create Designs</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    eiusmod tempor incididunt ut labore dolore.adipiscing elit,
                    sed do eiusmod tempor consectetur.
                  </p>
                </div>
              </div>
              <div className="homepageCard">
                <div className="cardImage">
                  <img src="/image/card-4.png" alt="" />
                </div>
                <div className="cardContent">
                  <h2>Create Designs</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    eiusmod tempor incididunt ut labore dolore.adipiscing elit,
                    sed do eiusmod tempor consectetur.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="homepageWork">
            <div className="homepageWorkHead">
              <h2>How It Works</h2>
            </div>
            <div className="homepageWorkCards">
              <Link href="/pages/Aboutpage" className="hompageWordCard">
                <div>
                  <img src="/image/producthome-1.png" alt="Select Product" />
                  <h2>Select Product</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor
                    incididunt ut labore dolore.
                  </p>
                </div>
              </Link>
              <Link href="/pages/Aboutpage" className="hompageWordCard">
                <div>
                  <img src="/image/producthome-2.png" alt="Personalize Design" />
                  <h2>Personalize Design</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor
                    incididunt ut labore dolore. 
                  </p>
                </div>
              </Link>
              <Link href="/pages/Aboutpage" className="hompageWordCard">
                <div>
                  <img src="/image/producthome-3.png" alt="Checkout and Pay" />
                  <h2>Checkout and Pay</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor
                    incididunt ut labore dolore. 
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div className="home-types-container">
            <h2>Make your own custom t-shirts!</h2>
            <div className="home-types-grid">
              {items.map((item, index) => (
                <div className="home-types-col" key={index}>
                  <div className="types-card">
                    <img
                      src={item.imgSrc}
                      alt={item.head}
                      width={200}
                      height={200}
                      className="types-image"
                    />
                    <div className="types-details">
                      <h3>{item.head}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className="homepageChoice">
            <img src="/image/choice.png" alt="" />
            <div className="homepageChoiceText">
              <h2>Quick Personalized of Products of Your Choice</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod tempor incididunt ut labore dolore.adipiscing elit, sed
                do eiusmod tempor consectetur.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed eiusmod tempor incididunt ut
                labore dolore.adipiscing elit. 
                {/* sed do eiusmod tempor consectetur */}
              </p>
              
              <Link href="/pages/Help">
              <button>Browse Shop</button>
              </Link>

            </div>
          </div>

          <div className="homepageDesigns">
            <img src="/image/design-1.jpeg" alt="" />
            <img src="/image/design-2.jpeg" alt="" />
            <img src="/image/design-3.jpeg" alt="" />
            <img src="/image/design-4.jpeg" alt="" />
          </div>

          <div className="homepageChoice">
            <div className="homepageChoiceText">
              <h2>Enjoy the Perfect Combination of Style and Quality</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod tempor incididunt ut labore dolore.adipiscing elit, sed
                do eiusmod tempor consectetur.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed eiusmod tempor incididunt ut
                labore dolore.adipiscing elit, sed do eiusmod tempor consectetur
              </p>
            </div>
            <img src="/image/homepageChoice.jpeg" className="w-50" alt="home choice" />
          </div>

          <div className="homepageCustomer">
            <div className="hompageCustomerHead">
              <h2> What Customers Are Saying</h2>
            </div>
            <div className="homepageCustomerCards">
              <div className="customerCard">
                <div className="customerDetails">
                  <img src="/image/customer-1.png" alt="Customer" />
                  <div className="customerDetail">
                    <h2>Simson</h2>
                    <p>Manager</p>
                    <div className="rating">
                    <span className="ratingText">4.1</span>
                      {[...Array(4)].map((_, i) => (
                        <AiFillStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="customerReview">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi odit natus eos molestias accusantium, eius expedita
                    consequuntur ratione fugit modi deserunt aut earum aliquam
                    incidunt vitae tenetur sequi consectetur dolores?
                  </p>
                </div>
              </div>
              <div className="customerCard">
                <div className="customerDetails">
                  <img src="/image/customer-1.png" alt="Customer" />
                  <div className="customerDetail">
                    <h2>Simson</h2>
                    <p>Manager</p>
                    <div className="rating">
                    <span className="ratingText">4.1</span>
                      {[...Array(4)].map((_, i) => (
                        <AiFillStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="customerReview">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi odit natus eos molestias accusantium, eius expedita
                    consequuntur ratione fugit modi deserunt aut earum aliquam
                    incidunt vitae tenetur sequi consectetur dolores?
                  </p>
                </div>
              </div>
              <div className="customerCard">
                <div className="customerDetails">
                  <img src="/image/customer-1.png" alt="Customer" />
                  <div className="customerDetail">
                    <h2>Simson</h2>
                    <p>Manager</p>
                    <div className="rating">
                    <span className="ratingText">4.1</span>
                      {[...Array(4)].map((_, i) => (
                        <AiFillStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="customerReview">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi odit natus eos molestias accusantium, eius expedita
                    consequuntur ratione fugit modi deserunt aut earum aliquam
                    incidunt vitae tenetur sequi consectetur dolores?
                  </p>
                </div>
              </div>
            </div>
        

            <div className="chatbox-section">
            <Chatbox />
          </div>
            


        </div>

        </div>
        <Footer/>
      </div>
    </>
  );
};

export default homepage;
