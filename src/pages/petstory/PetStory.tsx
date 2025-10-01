// 커뮤니티 > 반려동물 이야기  layout comp //
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PostPetStory from '../../components/postpetstory/PostPetStory';
import noticeBg from '../../assets/img/notice/noticebg.png';
import '../petstory/PetStory.scss';

const PetStory: React.FC = () => (
  <div className="petstory-page">
    {/* 배너 영역 */}
    <section
      className="banner"
      style={{ backgroundImage: `url(${noticeBg})` }}
    > <Container>
        <Col lg={12} >
          <h1 className="petstory-page__title">반려동물 이야기</h1>
          <h4 className="petstory-page__subtitle">
              함께라서 행복한, 일상 속 소중한 순간들
          </h4>
        </Col>
      </Container>
    </section>

    {/* 게시물 리스트 + 페이지네이션 */}
    <Container className='mt-5'>
      <Col>
        <PostPetStory />
      </Col>
    </Container>
</div>
);

export default PetStory;