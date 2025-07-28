import React, { useState }from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import AlertModal from '../utils/AlertModal';

import '../styles/_post.scss';

// 좋아요, 댓글, 공유 아이콘 (Material Design)
import { MdStarOutline, MdChatBubbleOutline, MdOutlineShare } from 'react-icons/md'; 
// 페이지네이션 아이콘 (Ionicons v5)
 
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

//이미지 렌더링
import volunteer from '../assets/img/post/volunteer.jpg';
import sns from '../assets/img/community/sns-profile.png';



interface PostProps {
  show: boolean;
  onClose: () => void;
}

const Post: React.FC<PostProps> = ({ show, onClose }) => {

    const [showAlert, setShowAlert] = useState(false);
    
    const postData = {
    title: '봉사자분들 모십니다.',
    date: '2025-07-19',
    organizationName : '코코브라더스',
    organizationUrl:'https://naver.com',
    contactPerson:'홍길동',
    activityLocation:'강원도 가평군',
    recruitmentPeriod:'2025-07-19 ~ 07-19',
    volunteerPeriod:'2025-07-19 ~ 07-19',
    facilityContact:'905-837-2918',
    content: `봉사 내용입니다`,
    authorName:'Wade Warren',
    likes: 12,
    comments: 3,
    shares:2,
    warnings:[`
      '자원봉사를 신청하기 전, 반드시 기관 및 단체에 대해 자세히 알아보세요.',
      '중앙 유기견 보호센터에 기입된 정보와 실제 정보가 다를 경우, 혹은 사기로 의심될 경우에는 게시글을 신고해 주세요.',
      '자원봉사모집 글은 기관이 자발적으로 올린 글이며, 중앙 유기견 보호센터는 해당 글에 대한 책임이 없음을 미리 알립니다.'
    `]
  };

  return (
    <>
    <Container>
      <Row>
        <Col lg={12} md={12} sm={12}>
    <Modal 
    show={show} 
    onHide={onClose} 
    centered 
    scrollable
    dialogClassName="modal-style"
    >
      <Modal.Header >
        <div className='ms-4 mt-3'>
          <Modal.Title ><h2>{postData.title}</h2></Modal.Title>
          <p className='tab mt-2'>{postData.date}</p>
        </div>
      </Modal.Header>
   
      <div className='line'></div>

      <Modal.Body className="post-modal-body px-4 pt-4 pb-0">
        {/* 기관 정보 섹션 */}
        <div className="organization-info mb-4">
          <div className="main-image-wrapper mb-3">
            <img src={volunteer} alt="봉사 활동 이미지" className="img-fluid rounded" />
          </div>
          
          <div className="info-box">
            <div className="info-title">
              <h4>코코브라더스</h4>
              <span className="recruit secondary-bg tab ms-2">모집중</span>
            </div>
            <div className="info-item-url">
              <a href={postData.organizationUrl} target="_blank" rel="noopener noreferrer">
                {postData.organizationUrl}
              </a>
            </div>
            <div className="info-item mt-3 mb-2">담당자<span className='info-item-color'> {postData.contactPerson}</span></div>
            <div className="info-item mb-2">활동 장소<span className='info-item-color'> {postData.activityLocation}</span></div>
            <div className="info-item mb-2">모집 기간<span className='info-item-color'> {postData.recruitmentPeriod}</span> </div>
            <div className="info-item mb-2">봉사 기간<span className='info-item-color'> {postData.volunteerPeriod}</span> </div>
            <div className="info-item mb-2">시설 연락처<span className='info-item-color'> {postData.facilityContact}</span> </div>
          </div>
        </div>

        {/* 봉사 내용 상세 설명 */}
        <div className='detail-wrap'>
        <div className='detail-btn'>상세</div>
        <div className="detail-content mb-4">
          <h5 className="content-title">봉사 내용과 관련된 상세 설명이 추가됩니다.</h5>
          <p className="content-text" style={{ whiteSpace: 'pre-line' }}>{postData.content}</p>
        </div>
        </div>
        {/* 작성자 및 좋아요/댓글/공유 섹션 */}
        <div className="author-interaction-section d-flex justify-content-between align-items-center py-3">
          <div className="author-info d-flex align-items-center">
            <img src={sns} alt="프로필" className="profile-img rounded-circle me-2" />
            <h6>{postData.authorName}</h6>
          </div>
          <div className="interaction-icons d-flex align-items-center">
            <div className="icon-group me-4">
              {/*<MdStarOutline size="20" className="me-1" />*/}
              <span>{postData.likes}</span>
            </div>
            <div className="icon-group me-4">
              {/*<MdChatBubbleOutline size="20" className="me-1" />*/}
              <span>{postData.comments}</span>
            </div>
            <div className="icon-group me-4">
              {/*<MdOutlineShare size="20" className="me-1" />*/}
              <span>{postData.shares}</span>
            </div>
          </div>
        </div>

        <div className='line mb-5'></div>

        {/* 안내 텍스트 */}
        <div className="warning-notes mb-4 ms-4 me-3">
          {postData.warnings.map((warning:string, index:number) => (
            <p key={index} className="warning-text mb-1">※ {warning}</p>
          ))}
        </div>

        {/* 신고하기 버튼 */}
        <div className="report-button-wrapper text-center mb-4">
          <Button variant="outline-danger" className="report-btn">
            신고하기 <span className="ms-1">&rsaquo;</span>
          </Button>
        </div>
      </Modal.Body>

      <div className='line mt-4'></div>


      {/* 페이지네이션 푸터 */}
      <Modal.Footer className="post-modal-footer d-flex justify-content-center align-items-center">
        <Button variant="link" className="pagination-arrow-btn me-2">
          {/*<IoChevronBackOutline size="24" />*/}
        </Button>
        <Button variant="link" className="pagination-arrow-btn ms-2">
          {/*<IoChevronForwardOutline size="24" />*/}
        </Button>
      </Modal.Footer>
    </Modal>
      
      
          </Col>
        </Row>
    </Container>
    </>
  );
};

export default Post;
