import Link from 'next/link'
import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

// css
import style from '../Footer/Footer.module.css';

// icon
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';



const Footer = () => {

  return (
      
          <div>
      
                   {/* -------------------------------------------------------------------------------------------------------------------------------------------------
                          Delivary
                    -----------------------------------------------------------------------------------------------------------------------------------------------------*/}
                   
                   <section className={style.FooterSec}>
      
                      <Container>
      
            
                        {/* Address */}
      
                        <div className={style.FooterDiv} >
      
                          <div className={style.FooterDivItem}>
      
                                <div className={style.Footertext}>
                                    <img src="/images/logo.png" alt="" />
                                </div>
      
                                <div className={style.Footertext2}>
                                    <h3>Store Address</h3>
                                    <p>916 Water St, Ketchikan, Alaska 99901, USA</p>
                                </div>
      
                                <div className={style.Footertext2}>
                                    <h3>Contact No.</h3>
                                    <p>+1023586849</p>
                                </div>
      
                          </div>
      
                        </div>
      
          
      
                        {/* Social Media */}
      
                          <div className={style.FooterSocialMedia} >
      
                              <h5>Join Us On Social Media</h5>
      
                              <div className={style.FooterSocialMediaLinkDiv} >
      
                                <Link href=''> <FaFacebookF/> </Link>
                                <Link href='' > <FaInstagram/> </Link>
                                <Link href=''> <FaYoutube/> </Link>
                                <Link href=''> <FaTwitter/> </Link>
      
                              </div>
      
                          </div>
    
      
                      </Container>
      
                      </section>
      
          </div>
      
  )
}

export default Footer