import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { GiDeliveryDrone,GiCutDiamond,GiReturnArrow,GiLifeSupport } from "react-icons/gi";
// Css
import style from './shipping-address.module.css';

const ShippingAddress = () => {

  return (

    <>

        <div id="ShippingAddress" className={style.ShippingAddress}>

            <Container>

                <Row id=""  className='d_flex'>

                    {/* item */}
                    <Col lg={3} sm={6}>

                        <div id="ShippingAddressItem"  className={style.ShippingAddressItem}>

                            <div  id="img" className={style.img}>
                                <GiDeliveryDrone/>
                            </div>

                            <div id="text"  className={style.text}>
                                <p>Free Delivery</p>
                            </div>

                        </div>

                    </Col>

                    {/* item */}
                    <Col lg={3} sm={6}>

                        <div id="ShippingAddressItem"  className={style.ShippingAddressItem}>

                            <div  id="img" className={style.img}>
                                <GiCutDiamond/> 
                            </div>

                            <div id="text"  className={style.text}>
                                <p>Money Back Gurantee</p>
                            </div>

                        </div>

                    </Col>

                    {/* item */}
                    <Col lg={3} sm={6}>

                        <div id="ShippingAddressItem"  className={style.ShippingAddressItem}>

                            <div id="img"  className={style.img}>

                               <GiReturnArrow/>

                            </div>

                            <div id="text"  className={style.text}>
                                <p>Return Upto 30 Days</p>
                            </div>

                        </div>

                    </Col>

                    {/* item */}
                    <Col lg={3} sm={6}>

                        <div id="ShippingAddressItem"  className={style.ShippingAddressItem}>

                            <div id="img"  className={style.img}>
                                <GiLifeSupport/>
                            </div>

                            <div id="text"  className={style.text}>
                                <p> 24/7 Customer Support </p>
                            </div>

                        </div>

                    </Col>

                </Row>

            </Container>

        </div>
      
    </>

  )

}

export default ShippingAddress
