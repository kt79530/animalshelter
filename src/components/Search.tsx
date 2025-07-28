import React, { useState }from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import AlertModal from '../utils/AlertModal';
import '../styles/_search.scss';
import CommentSection from '../utils/CommentSection';

// 좋아요, 댓글, 공유 아이콘 (Material Design)
import { MdStarOutline, MdChatBubbleOutline, MdOutlineShare } from 'react-icons/md'; 
// 페이지네이션 아이콘 (Ionicons v5)
 
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

//이미지 렌더링
import volunteer from '../assets/img/community/dog1.jpg';
import sns from '../assets/img/community/sns-profile.png';
import sns2 from '../assets/img/commentsection/snsface.png';



interface SearchProps {
  show: boolean;
  onClose: () => void;
}

const Search: React.FC<SearchProps> = ({ show, onClose }) => {

    const [showAlert, setShowAlert] = useState(false);
    
    const SearchData = {
    title: '실종동물 찾습니다!',
    date: '2025-07-19',
    organizationName : '초코',
    organizationInfo:'3세 수컷 10kg',
    contactPerson:'강아지 (푸들)',
    lostLocation:'강원도 가평군',
    lostPeriod:'2025-07-19',
    facilityContact:'010-1234-2918',
    content: `특이사항 및 기타 숙지 사항을 작성하면 됩니다.`,
    finderFee: '100만원',
    authorName:'Wade Warren',
    likes: 12,
    comments: 3,
    shares:2,
    warnings:[``]

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
          <Modal.Title ><h2>{SearchData.title}</h2></Modal.Title>
          <p className='tab mt-2'>{SearchData.date}</p>
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
              <h4>초코</h4>
              <span className="recruit secondary-bg tab ms-2">발견</span>
            </div>
            <div className="info-item-url">
              <a href={SearchData.organizationInfo} target="_blank" rel="noopener noreferrer">
                {SearchData.organizationInfo}
              </a>
            </div>
            <div className="info-item mt-3 mb-2">품종<span className='info-item-color'> {SearchData.contactPerson}</span></div>
            <div className="info-item mb-2">분실 장소<span className='info-item-color'> {SearchData.lostLocation}</span></div>
            <div className="info-item mb-2">분실 날짜<span className='info-item-color'> {SearchData.lostPeriod}</span> </div>
            <div className="info-item mb-2">긴급 연락처<span className='info-item-color'> {SearchData.facilityContact}</span> </div>
          </div>
        </div>

        {/* 봉사 내용 상세 설명 */}
        <div className='detail-wrap'>
          <div className='detail-btn'>특이사항</div>
            <div className="detail-content ">
              <p className="content-title ms-1">해당 동물에 대한 설명을 간략하게 작성합니다.</p>
              <p className="content-text ms-1" style={{ whiteSpace: 'pre-line' }}>{SearchData.content}</p>
            </div>
        </div>
        <div className='finderFee-wrap mb-5'>
          <div className='finderFee '>사례금</div>
          <span className='ms-4 mt-1'>{SearchData.finderFee}</span>
        </div>
        {/* 작성자 및 좋아요/댓글/공유 섹션 */}
        <div className="author-interaction-section d-flex justify-content-between align-items-center py-3">
          <div className="author-info d-flex align-items-center">
            <img src={sns} alt="프로필" className="profile-img rounded-circle me-2" />
            <span>{SearchData.authorName}</span>
          </div>
          <div className="interaction-icons d-flex align-items-center">
            <div className="icon-group me-4">
              {/*<MdStarOutline size="20" className="me-1" />*/}
              <span>{SearchData.likes}</span>
            </div>
            <div className="icon-group me-4">
              {/*<MdChatBubbleOutline size="20" className="me-1" />*/}
              <span>{SearchData.comments}</span>
            </div>
            <div className="icon-group me-4">
              {/*<MdOutlineShare size="20" className="me-1" />*/}
              <span>{SearchData.shares}</span>
            </div>
          </div>
        </div>
        
        {/* 댓글달기 */}
        <div className="commentsection-wrapper text-center mb-4">
          <CommentSection/>
        </div>

        {/*리뷰*/}
        <div className='review'>
          <img src={sns2} /> Julia
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, qui nisi sequi enim provident quis est ex cum obcaecati? Esse!</p>
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

export default Search;
