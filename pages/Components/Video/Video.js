import React from 'react';
import dynamic from 'next/dynamic'
import { Col, Container, Row } from 'react-bootstrap';
// Youtube Player
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
// Css
import style from './video.module.css';

const Video = () => {

    

    return (
        <>

            <Container>

                <Row>

                    <Col>

                    <div className='VideoPlay'>

                        <div className={style.VideoPlayers}>

                            <ReactPlayer url='https://www.youtube.com/watch?v=T8ChkXGSQrk&ab_channel=DrTrust%28Nureca%29' />

                        </div>
                    
                    </div>

                    </Col>

                </Row>

            </Container>

        </>


        
    )

}

export default Video
