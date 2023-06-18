import React from 'react'
import Menubar from './Components/Menubar/MenubarLeft'
import landingImageUrl from "../public/images/logo.png";
import { Container,Row,Col } from 'react-bootstrap';
import Link from 'next/link';
import Order from './Components/Order/Order';
import CustomerReview from './Components/CustomerReview/CustomerReview';
import ShippingAddress from './Components/ShippingAddress/ShippingAddress';
import Footer from './Components/Footer/Footer';
import Video from './Components/Video/Video';

// icon

import { AiOutlineShoppingCart } from "react-icons/ai";

// Swiper js
import { EffectCube, Pagination,Autoplay } from "swiper";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";



const index = () => {

  return (

      <div className='LandingPage'>
       
          {/* ==============================================================================================
                Menubar 
          ==================================================================================================*/}
      
          <Menubar logoImageLeft={landingImageUrl}></Menubar>

        {/* ==============================================================================================
                Banner
          ==================================================================================================*/}

          <section className='Bannerbg'>

            <Container >

                <Row  className='BannerRow'>

                    <Col lg={7}>


                    <div className='BannerContantBox'>

                      <p>Ultimate Fusion of Fashion and Technology </p>

                      <h1>Revolutionize Your Lifestyle with Our Cutting Edge Smart Watches </h1>

                      <h3>Present Price :  <span> $199 </span>  </h3>

                      <h4>Past Price :  $270  </h4> 

                      <div className='ContactBox'>

                        <Link href="#PlaceAnOrder" className='bg'> <AiOutlineShoppingCart/> Order Now </Link>

                        <div >
                            <h5>+1023586849</h5>
                            <h6> Want to order call now</h6>
                        </div>

                      </div>


                    </div>

                    </Col>

                    <Col lg={5}>

                        <div className='BannerImgBox'>

                           <img src="/images/banner.png" alt="" />

                        </div>

                    </Col>

                </Row>

            </Container>


          </section>


           {/* ================================================================================
                  <ShippingAddress />
           =================================================================================== */}

              <ShippingAddress />




          <div className='section_gaps'></div>

        {/* ==============================================================================================
                Product description
          ==================================================================================================*/}

          <section>

            <Container>

                <Row>
                    <Col>

                        <div className='DescriptionBox'>

                          <h2>Galaxy Watch 4 40mm Smartwatch with ECG Monitor Tracker</h2>
                          <br/>
                          <p>Galaxy Watch4 is the first smartwatch to off body composition data right on your wrist, On your own schedule, now you can get readings on body fat, skeletal muscle, body water, basal metabolic rate, and Body Mass Index.Supported Application:Fitness Tracker,GPS,Sleep Monitor. Connectivity technology:Bluetooth. Wireless comm standard:Bluetooth</p>

                        </div>


                    
                    </Col>

                </Row>

            </Container>

          </section>

          <div className='section_gaps'></div>
          {/* ==============================================================================================
                        Slider 
          =================================================================================================== */}

          <section>
              <Container>
                <Row>
                  <Col>

                      <Swiper
                          effect={"cube"}
                          grabCursor={true}
                          cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                          }}
                          autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                          }}
                          pagination={true}
                          modules={[EffectCube, Pagination,Autoplay]}
                          className="mySwiper"
                        >
                          <SwiperSlide>
                            <img src="/images/img1.jpg" />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src="/images/img2.jpg"  />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src="/images/img3.jpg"  />
                          </SwiperSlide>
                          <SwiperSlide>
                            <img src="/images/img4.jpg"  />
                          </SwiperSlide>

                      </Swiper>

                  </Col>
                </Row>
              </Container>
          </section>


          <div className='section_gaps'></div>
          {/* ==============================================================================================
                        Video
          =================================================================================================== */}

              <Video/>

          <div className='section_gaps'></div>

          {/* ==============================================================================================
                        Order 2
          =================================================================================================== */}

          <section>
            <Container>
              <Row>
                <Col>

                  
                    <div className='Order2'>

                        <div className='Order2Abs'> 

                          <h4>Now Price $199</h4>

                          <h5>All Country Free Delivery</h5>

                          <Link href='#PlaceAnOrder' className="bg"> <AiOutlineShoppingCart/>Order Now</Link>
                          
                        </div>

                    </div>


                </Col>
              </Row>
            </Container>
          </section>


          <div className='section_gaps'></div>

          {/* ==============================================================================================
                      Product  List 
          =================================================================================================== */}

          <section>

            <Container>
                
                <Row className='ListBoxRow'>

                  <Col lg={6}>

                        <div className='ListBox'>
                          
                          <ul>
                            <li> The Evolution of Smart Watches A Brief History</li>
                            <li> Key Features and Functions of Smart Watches</li>
                            <li> Enhancing Health and Fitness with Smart Watches</li>
                            <li> Smart Watches and Productivity: The Perfect Companion</li>
                            <li> Personalization and Style Fashionable Smart Watches</li>
                            <li> Future Trends in Smart Watches: What to Expect</li>
                          </ul>


                        </div>

                  </Col>

                  <Col lg={6}>

                        <div className='ListBox'>

                            <img src="/images/img11.jpg" alt="" />

                        </div>

                  </Col>

                </Row>

            </Container>

          </section>





          <div className='section_gaps'></div>

          {/* ==============================================================================================
                      Product  List 
          =================================================================================================== */}
          

          <CustomerReview />

          <section id="PlaceAnOrder">
              <Order ></Order>
          </section>

          <Footer/>

        {/* ==============================================================================================
                Menubar 
          ==================================================================================================*/}

      


        {/* ==============================================================================================
                Menubar 
          ==================================================================================================*/}




        {/* ==============================================================================================
                Menubar 
          ==================================================================================================*/}




        {/* ==============================================================================================
                Menubar 
          ==================================================================================================*/}




        {/* ==============================================================================================
                Menubar 
          ==================================================================================================*/}




        {/* ==============================================================================================
                Menubar 
          ==================================================================================================*/}




        {/* ==============================================================================================
                Menubar 
          ==================================================================================================*/}




        {/* ==============================================================================================
                Menubar 
          ==================================================================================================*/}


















      </div>

  )
}

export default index
