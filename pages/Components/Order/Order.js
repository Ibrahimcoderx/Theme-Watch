import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { RiShoppingCart2Line } from "react-icons/ri";
import Form from 'react-bootstrap/Form';


// Css
import style from './order.module.css';



const Order = () => {


  return ( 

    <>

      <section  className={style.OrderConfirmFrom}>

        <Container>

          <Row>

            <h2>Product Order Form</h2>

       
            <Col lg={7}>

                      <Form noValidate >

                        <Row className="mb-3">
                          <Form.Group as={Col} md="12" >
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                              type="text"
                              name="firstName"
                        
                            />
                          </Form.Group>

                          <Form.Group as={Col} md="12" >
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                              type="text"
                              name="lastName"
                            />
                          </Form.Group>
                       
                        </Row>

                        <Row className="mb-3">
                          <Form.Group as={Col} md="6" >
                            <Form.Label>City</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="City"
                              name="city"

                            />

                            <Form.Control.Feedback type="invalid">
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group as={Col} md="3" >
                            <Form.Label>State</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="State"
                              name="state"
                            />

                            <Form.Control.Feedback type="invalid">
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group as={Col} md="3" >
                            <Form.Label>Zip</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Zip"
                              name="zip"
                            />

                          </Form.Group>

                          </Row>
                 
                          <Row>

                          <Form.Group as={Col} md="12" className="mb-3" >
                            <Form.Label>Mobile number</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Number"
                              name="mobile"
                              
                            />

                            <Form.Control.Feedback type="invalid">
                            </Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                          </Form.Group>

                          <Form.Group as={Col} md="12" className="mb-3" >
                            <Form.Label> Full address</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Address"
                              name="address"

                            />

                          </Form.Group>

                       
                          </Row>

                          <Row>


                        </Row>

                      </Form>
        
        
            </Col>

            
            <Col lg={5}>

              <div id="OrderConfirmRight" className={style.OrderConfirmRight}>

                <ul>

                  <li>

                    <h4 style={{textAlign:"center" , width:"100%"}}> Your Order</h4>

                    
                  </li>

                  <li>

                    <div id="left" className={`${style.left} ${style.d_flex}`}>
                      

                      <h5>Product Name</h5>

                    </div>

                    <div id="right" className={`${style.right} ${style.d_flex}`}>

                      <input type="number" />

                      <h5> ৳  1,690</h5>

                    </div>

                  </li>

                  <li>
                    <h5>Subtotal</h5>
                    <h5>1,690.00</h5>
                  </li>

                  <li>

                    <h5>Shipping</h5>

                    <h5> Free shipping </h5>

                  </li>

                  
                


                <div className={style.CheckBoxPad}>

                  <br/>

                  <Form>

                    <Form.Check 
                      type="switch"
                      id="custom-switch"
                      label="Direct Bank Transfer"
                    />

                      <p style={{color:"#FFFfff", lineHeight:"20px", fontSize:"16px", marginLeft:"8%" }}> Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>

                    <br/>

                    <Form.Check 
                      type="switch"
                      id="custom-switch"
                      label="Cash on Delivery"
                    />

                    <br/>

                    <Form.Check 
                      type="switch"
                      id="custom-switch"
                      label=" Paypal , Visa, Master Card "
                    />

                  </Form>
       
                  <button> <RiShoppingCart2Line/> Place Order </button>
           
                  </div>

                  </ul>

              </div>


            </Col>

          </Row>

        </Container>

      </section>


      
    </>
  )

}

export default Order

