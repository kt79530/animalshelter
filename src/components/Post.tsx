import React, { useState }from 'react';

import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import AlertModal from '../utils/AlertModal';
<<<<<<< HEAD
import '../styles/_Community.scss';
//import {MdStarOutline} from 'react-icons/md';

=======
import '../styles/_post.scss';
//import {MdStarOutline} from 'react-icons/md';

// 좋아요, 댓글, 공유 아이콘 (Material Design)
import { MdStarOutline, MdChatBubbleOutline, MdOutlineShare } from 'react-icons/md'; 
// 페이지네이션 아이콘 (Ionicons v5)
 
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

>>>>>>> 8286bbe (initial commit)
//이미지 렌더링
import volunteer from '../assets/img/post/volunteer.jpg';
import sns from '../assets/img/community/sns-profile.png';



interface PostProps {
  show: boolean;
  onClose: () => void;
}

const Post: React.FC<PostProps> = ({ show, onClose }) => {

    const [showAlert, setShowAlert] = useState(false);
<<<<<<< HEAD
    const detail = {
    title: '봉사자분들 모십니다.',
    date: '2025-07-19',
    image: [volunteer],
    content: `안녕하세요! 저의 가장 소중한 가족이자, 매일매일 저에게 웃음을 선물해주는 사랑스러운 반려견 초코를 자랑하려고 해요. 
    이름처럼 달콤하고 사랑스러운 초코는 저희 집의 비타민 같은 존재랍니다.초코는 아주 활발하고 호기심이 넘쳐요. 
    아침에 눈을 뜨면 가장 먼저 제 침대로 달려와 꼬리를 흔들며 애교를 부려요. 그 모습만 봐도 하루의 피로가 싹 가시는 
    기분이죠. 산책을 나갈 때면 세상의 모든 냄새를 맡고 싶어 하고, 새로운 친구들을 만나면 누구보다 반갑게 킁킁거리며
    인사하는 사교성 만점이랍니다. 가끔은 너무 신나서 길가의 돌멩이와도 대화하는 것 같을 때가 있어요.`,
=======
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
    
>>>>>>> 8286bbe (initial commit)
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
<<<<<<< HEAD
    dialogClassName="modal-style"
    >
      <Modal.Header  >
        <div className='ms-4 mt-3'>
          <Modal.Title >{detail.title}</Modal.Title>
          <p className='date'>{detail.date}</p>
=======
    dialogClassName="postmodal-style"
    >
      <Modal.Header  >
        <div className='ms-4 mt-3'>
          <Modal.Title >{postData.title}</Modal.Title>
          <p className='date'>{postData.date}</p>
>>>>>>> 8286bbe (initial commit)
        </div>
      </Modal.Header>
      
      <div className='line'></div>
      
<<<<<<< HEAD
      <Modal.Body>
        <div className='img-wrap'>
        {detail.image.map((imgSrc, idx) => (
        <img
          key={idx}
          src={imgSrc}
          alt={`image-${idx}`}
          className="img rounded mb-3"
          
        />
        ))}
        </div>
        <div className='ms-4'>
           <span  style={{ whiteSpace: 'pre-line' }}>{detail.content}</span><br/>
        </div>       
      </Modal.Body>
      <Modal.Footer>
        
        <img src={sns} className='sns-img' />
        <h6 className='sns-name'>Wade Warren</h6>
        <div className='icons-box'>
        <div className='star-img'>16</div>
        <div className='heart-img'>16</div>
        <div className='share-img'>16</div>
        </div>
      
        {/*<Button variant="secondary" onClick={onClose}>
          닫기
        </Button>*/}
      </Modal.Footer>
    </Modal>

    <AlertModal show={showAlert} onClose={() => setShowAlert(false)}/>
=======
      <Modal.Body className="post-modal-body px-4 pt-4 pb-0">
        {/* 기관 정보 섹션 */}
        <div className="organization-info mb-4">
          <div className="main-image-wrapper mb-3">
            <img src={volunteer} alt="봉사 활동 이미지" className="img-fluid rounded" />
          </div>
          <div className="info-grid">
            <div className="info-item">
              <strong>코코브라더스</strong>
              <span className="badge-status ms-2">모집중</span>
            </div>
            <div className="info-item-url">
              <a href={postData.organizationUrl} target="_blank" rel="noopener noreferrer">
                {postData.organizationUrl}
              </a>
            </div>
            <div className="info-item">담당자</div>
            <div className="info-item">{postData.contactPerson}</div>
            <div className="info-item">활동 장소</div>
            <div className="info-item">{postData.activityLocation}</div>
            <div className="info-item">모집 기간</div>
            <div className="info-item">{postData.recruitmentPeriod}</div>
            <div className="info-item">봉사 기간</div>
            <div className="info-item">{postData.volunteerPeriod}</div>
            <div className="info-item">시설 연락처</div>
            <div className="info-item">{postData.facilityContact}</div>
          </div>
        </div>

        {/* 봉사 내용 상세 설명 */}
        <div className="detail-content mb-4">
          <h5 className="content-title">봉사 내용과 관련된 상세 설명이 추가됩니다.</h5>
          <p className="content-text" style={{ whiteSpace: 'pre-line' }}>{postData.content}</p>
        </div>

        {/* 작성자 및 좋아요/댓글/공유 섹션 */}
        <div className="author-interaction-section d-flex justify-content-between align-items-center py-3">
          <div className="author-info d-flex align-items-center">
            <img src={sns} alt="프로필" className="profile-img rounded-circle me-2" />
            <h6>{postData.authorName}</h6>
          </div>
          <div className="interaction-icons d-flex align-items-center">
            <div className="icon-group me-3">
              {/*<MdStarOutline size="20" className="me-1" />*/}
              <span>{postData.likes}</span>
            </div>
            <div className="icon-group me-3">
              {/*<MdChatBubbleOutline size="20" className="me-1" />*/}
              <span>{postData.comments}</span>
            </div>
            <div className="icon-group">
              {/*<MdOutlineShare size="20" className="me-1" />*/}
              <span>{postData.shares}</span>
            </div>
          </div>
        </div>

        {/* 안내 텍스트 */}
        <div className="warning-notes mb-4">
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
        
      <AlertModal show={showAlert} onClose={() => setShowAlert(false)}/>
>>>>>>> 8286bbe (initial commit)
          </Col>
        </Row>
    </Container>
    </>
  );
};

export default Post;
