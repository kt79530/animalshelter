import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import '../styles/_galleryLayout.scss';

interface GalleryLayoutProps{
    children: React.ReactNode; //렌더링 될 실제 페이지 콘텐츠
    pageTitle? : string; //페이지별 제목등의 props
    pageBgImg? : string; //페이지별 헤드 이미지
    pageSubText?: string;
    wrapperClassName? : string; //추가적으로 필요한 공통 속성들
}

const GalleryLayout: React.FC <GalleryLayoutProps> = ({children, pageTitle, wrapperClassName,pageBgImg, pageSubText}) =>{
    
        const bgImg = pageBgImg 
    return (
        <div className={`page-wrapper ${wrapperClassName || ''}`}>
                   <Container>
                    <Row>
                        <Col lg={12}>
                        <div className="page-header-bg" 
                            style={{ backgroundImage: `url(${bgImg})`}} >
                            <div className="textbox">
                                <h1>{pageTitle}</h1>
                                <h3>{pageSubText}</h3>
                            </div>
                        </div>    
                        </Col>
                    
                        <Col lg={12} className="body">
                            {/* 검색창 자리 */}
                            {children} {/* 여기가 각 컴포넌트 A와 B의 고유한 콘텐츠가 렌더링될 공간입니다 */}
                    
                        </Col>
                    </Row>
                    
                </Container>
   
        </div>
    );
};
export default GalleryLayout;