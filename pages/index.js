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

                        <Link href="#PlaceInOrder" className='bg'> Order Now </Link>

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


          <Video/>

          <CustomerReview />

        <section id="PlaceInOrder">
            <Order ></Order>
        </section>

          <ShippingAddress />

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
