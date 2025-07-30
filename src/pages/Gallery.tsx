import React from "react";
import GalleryLayout from "./GalleryLayout";
import { Card, CardBody, CardHeader, Col, Container } from "react-bootstrap";

import styles from "../components/gallery/GalleryDetail.module.scss";

//import searchImg from '../assets/img/community/dog1.jpg';

import bgImg from '../assets/img/search/searchheadbg.png';

const Gallery: React.FC = () => {
    return(
        <>
            <div className="wrapper">
            <Col lg={3}>
                <Card className={`col-sm-3 col-6 ${styles.warp}`}>
                    <div className={`${styles.cardImg}`}><Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1666777247416-ee7a95235559?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/></div>
                    <Card.Body className="d-flex flex-column align-items-start justify-content-between">
                        <Card.Subtitle className={`tab primary ${styles.hashtag}`}>서울 광진구</Card.Subtitle>
                        
                        <Card.Title className={`body-large mt-2 mb-0 w-100 ${styles.title}`}>강아지를 찾습니다</Card.Title>
                        <Card.Text className={`d-flex tab text-dark ${styles.side}`}>
                            <span className="text-dark">성별</span>
                            <span className="text-dark border-start border-end">나이</span>
                            <span className="text-dark">종(품종)</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={3}>
                <Card>
                    <CardHeader>
                        <img src={''} />
                    </CardHeader>
                    <CardBody>
                        <button>서울 광진구</button>
                        <h4>강아지를 찾습니다</h4>
                        <h6>수컷 3세</h6>
                    </CardBody>
                </Card>
            </Col>
            </div>
        </>
    );
};

export default () => (
    <GalleryLayout 
        pageTitle="실종 신고" 
        pageSubText="공고 등록 후 자동으로 반려동물 찾기 전단지가 생성되며"
        wrapperClassName="gallery-page"
        pageBgImg={bgImg}
    >
        <Gallery />
    </GalleryLayout>
);