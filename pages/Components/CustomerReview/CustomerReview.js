import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// Css
import style from './customer-review.module.css';

const CustomerReview = () => {

    return (

        <div  id="CustomerReview" className="CustomerReview">

            <section id="CustomerReviewContent"  className={style.CustomerReviewContent}>

                <Container>

                    <Row>

                        <Col lg={12}>
                            
                            <h2>Our Customer Reviews</h2>

                        </Col>

                        <Col lg={6}>

                            <div id="CustomerReviewImg"  className={style.CustomerReviewImg}>
                                <img src="/images/customer-review1.png" alt="" />
                            </div>

                        </Col>

                        <Col lg={6}>

                            <div id="CustomerReviewImg"  className={style.CustomerReviewImg}>
                                <img src="/images/customer-review2.png" alt="" />
                            </div>

                        </Col>

                        <Col lg={6}>

                            <div id="CustomerReviewImg"  className={style.CustomerReviewImg}>
                                <img src="/images/customer-review3.png" alt="" />
                            </div>

                        </Col>

                        <Col lg={6}>

                            <div id="CustomerReviewImg"  className={style.CustomerReviewImg}>
                                <img src="/images/customer-review4.png" alt="" />
                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>
        
        </div>
        
    )

}

export default CustomerReview
