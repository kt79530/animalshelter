import React, {useRef} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
//swiper 관련
import { Swiper, SwiperSlide } from 'swiper/react';
import type {Swiper as SwiperClass } from 'swiper';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
//stats comp
import Stats from './mainstats/Stats';
//slide comp
import SearchSlide from '../main/mainslide/SearchSlide';
import ReHomeSlide from '../main/mainslide/ReHomeSlide';
//하단 게시판 관련
import Search from '../../components/search/Search';
import VolunteerPost from './mainpost/VolunteerPost';
import DonationPost from './mainpost/DonationPost';
//main css
import '../../styles/_main.scss';



const MainPage = () => {

  const swiperRef = useRef<SwiperCore | null>(null);

  const goToPrevSlide = () => {
    swiperRef.current?.slidePrev();
  };

  const goToNextSlide = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <>
    <Container fluid className="main-page">
      <Row>
        <Col lg={12} md={12} sm={12}>
  {/* Hero Section */}
        <section className="hero">
          <div className="hero-left ">
            <img 
              src='/img/main/icon.png' 
              alt='mainIcon'
              className='hero-left-img' />
            <h1>실종과 보호 정보를<br />간편하게 확인하세요.</h1>
            <p className='mt-3 md:mt-5'>빠르게 찾고싶은 정보를 실시간으로 확인할 수 있습니다.<br />필요한 정보를 빠르게 찾아보세요.</p>
            <div className="search-box mt-5">
              <Search/>
            </div>
          </div>
          <div className="hero-right">
            <img 
              src="/img/main/maintopbg.png" 
              alt="Dog"
              className='hero-right-img' />
          </div>
        </section>
        </Col>
      </Row>
    </Container>

{/* Stats Section */}
      <section className='stats-section'>
        <Stats />
      </section>    
        
{/* slide section */}
      <Container className='slide-section-wrapper'>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className="slide-nav-btn nav-small">
              <button 
                onClick={goToPrevSlide}
                className='prev-align'>&lt; 주인을 찾습니다</button>
              <button 
                onClick={goToNextSlide}
                className='next-align'>유기동물 분양해요 &gt;</button>
            </div>
            <Swiper
              modules={[Navigation]}
              navigation={false}
              spaceBetween={20}
              slidesPerView={1}
              style={{ paddingTop: '20px' }}
              onSwiper={(swiper : SwiperClass) => {
                swiperRef.current = swiper;
              }}
            >
              <SwiperSlide>
                <div><SearchSlide /></div>
              </SwiperSlide>
              <SwiperSlide>
                <div><ReHomeSlide /></div>
              </SwiperSlide>

              {/* <SwiperSlide>다른 갤러리 or 내용</SwiperSlide> */}
            </Swiper>
          </Col>
        </Row>
      </Container>

{/* Volunteer & Donation */}
      <Container className='post-section-wrapper'>
        <Row >
          <Col lg={6} sm={12} className='volunteer-align' >
            <VolunteerPost/>
          </Col>
          <Col lg={6} sm={12} className='donation-align'>
            <DonationPost/>
          </Col>
        </Row>
      </Container>
  </>
  );
};

export default MainPage;