import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../mainstats/_Stats.scss';

const Stats = () => {
    return(
        <>
        <Container className="stats-wrapper">
            <Row>
                <Col lg={4} md={4} sm={4}>
                    <div className="stat-box">
                        <div className='icon '>
                            <img src={`${process.env.PUBLIC_URL}/img/main/icon_paw.png`} />
                        </div>
                        <p className='display-1 primary'>20,659</p>
                        <h4 className='mt-3'>실종동물 찾았습니다!</h4>
                    </div>
                </Col>
                <Col lg={4} md={4} sm={4}>        
                        <div className="stat-box-mid">
                            <div className='icon'>
                                <img src={`${process.env.PUBLIC_URL}/img/main/icon_compass.png`} />
                            </div>
                            <p className='display-1 primary'>18,730</p>
                            <h4 className="mt-3">주인을 찾습니다!</h4>
                        </div>
                </Col>
                <Col lg={4} md={4} sm={4}>
                        <div className="stat-box">
                            <div className='icon'>
                                <img src={`${process.env.PUBLIC_URL}/img/main/icon_seedling.png`} />
                            </div>
                        <p className='display-1 primary'>22,405</p>
                        <h4 className='mt-3'>유기동물 분양했어요!</h4>
                        </div>
                       
                </Col>
            </Row>
        </Container>
        </>
    )
}


export default Stats;