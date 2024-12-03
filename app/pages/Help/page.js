import React from "react";

// import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/component/Navbar/page";
import Footer from "@/app/component/Footer/page";

const Help = () => {
  return (
    <>
      <div className="helpBannerSection">
      <div className="helpBgContainer">
        <Navbar />
        <div className="helpBannerContainer">
       
          <div className="helpBannerImg">
            <img
              src="/image/helpMain.png"
              alt="help main image"
              width={650}
              height={300}
            />
          </div>

          <div className="helpBannerContent">
            <h3>Group orders made easy</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              eiusmod tempor incididunt ut labore dolore.
              adipiscing elit, sed do eiusmod tempor consectetur.
            </p>

            <div className="contentBtns">
              <div className="btns">
                <Link href="/pages/Categories">
                  <button className="btn">Use an existing design</button>
                </Link>

                <Link href="/pages/ColorAndSize">
                  <button className="btn">Start a new design</button>
                </Link>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div className="groupDesignContainer">
          <div className="groupDesignImg">
            <img
              src="/image/designedImg.png"
              alt="help main image"
              width={500}
              height={200}
            />
          </div>

          <div className="groupDesignContent">
            <h3>Designed with groups in mind</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              eiusmod tempor incididunt ut labore dolore.adipiscing elit, sed do
              eiusmod tempor consectetur.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed eiusmod tempor incididunt ut labore
              dolore.adipiscing elit, sed do eiusmod tempor consectetur.
            </p>
          </div>
        </div>

        <div className="cardContainer">
          <div className="cards">
            <div className="cardImg">
              <img
                src="/image/grpImg1.png"
                alt="help main image"
                width={120}
                height={120}
              />
            </div>
            <div className="cardHead">
              <h4>Money Managed</h4>
            </div>
            <div className="cardContent">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod tempor incididunt ut labore dolore.
                {/* adipiscing elit, sed do eiusmod tempor consectetur. */}
              </p>
            </div>
          </div>

          <div className="cards">
            <div className="cardImg">
              <img
                src="/image/grpImg2.png"
                alt="help main image"
                width={120}
                height={120}
              />
            </div>
            <div className="cardHead">
              <h4>Sizes Simplified</h4>
            </div>
            <div className="cardContent">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod tempor incididunt ut labore dolore.
                {/* adipiscing elit, sed do eiusmod tempor consectetur. */}
              </p>
            </div>
          </div>

          <div className="cards">
            <div className="cardImg">
              <img
                src="/image/grpImg3.png"
                alt="help main image"
                width={120}
                height={120}
              />
            </div>
            <div className="cardHead">
              <h4>Shipping Streamlined</h4>
            </div>
            <div className="cardContent">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod tempor incididunt ut labore dolore.
                {/* adipiscing elit, sed do eiusmod tempor consectetur. */}

              </p>
            </div>
          </div>
        </div>

        <div className="worksContainer">
          <div className="works">
            <div className="worksImg">
              <img
                src="/image/vacation.png"
                alt="vacation image"
                width={350}
                height={420}
              />
            </div>

            <div className="worksDetails">
              <h1>How it Works</h1>
              <div className="cardsCollection">
                <div className="worksCard">
                  <h4>
                    <span>1</span>Create a Design
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    eiusmod tempor incididunt ut labore dolore.adipiscing elit,
                    sed do eiusmod tempor consectetur.
                  </p>
                </div>

                <div className="worksCard">
                  <h4>
                    <span>2</span>Create a Design
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    eiusmod tempor incididunt ut labore dolore. adipiscing elit,
                    sed do eiusmod tempor consectetur.
                  </p>
                </div>

                <div className="worksCard">
                  <h4>
                    <span>3</span>Create a Design
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    eiusmod tempor incididunt ut labore dolore. adipiscing elit,
                    sed do eiusmod tempor consectetur.
                  </p>
                </div>
              </div>

              <div className="btns">
                <div className="btnHead">
                  <h4>Ready to get started?</h4>
                </div>

                <div className="btns">
                  <button className="btn">Use an existing design</button>
                </div>

                <div className="btns">
                  <button className="btn">Start a new design</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};
export default Help;
