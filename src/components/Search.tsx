import React, { useState }from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import ModalLayout from './ModalLayout';

import '../styles/_search.scss';
import Comment from './Comment';
import { SearchDataType } from '../data/searchData';

//알림 모달창
//import AlertModal from '../utils/AlertModal';
// 좋아요, 댓글, 공유 아이콘 (Material Design)
//import { MdStarOutline, MdChatBubbleOutline, MdOutlineShare } from 'react-icons/md'; 
// 페이지네이션 아이콘 (Ionicons v5)
//import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';


//댓글 이미지 렌더링
import sns from '../assets/img/community/sns-profile.png';
import sns2 from '../assets/img/commentsection/snsface.png';



interface SearchProps {
  show: boolean;
  onClose: () => void;
  data: SearchDataType;
}

const Search: React.FC<SearchProps> = ({ show, onClose, data }) => {

  return (
   
    <ModalLayout 
      show={show} 
      onClose={onClose} 
      /*footer={ //react-icons import 문제로 보류
          <>
            <Button variant="link" className="pagination-arrow-btn me-2">
              <IoChevronBackOutline size={24} />
            </Button>
            <Button variant="link" className="pagination-arrow-btn ms-2">
              <IoChevronForwardOutline size={24} />
            </Button>
          </>
    }//footer*/ 

    /*수정 전 코딩
    centered 
    scrollable
    dialogClassName="modal-style"*/
    >{/*ModalLayout*/}
      {/*<Modal.Header >*/}

      <div className='search-header'>
        <div className='ms-4 mt-3'>
          <Modal.Title ><h2>{data.title}</h2></Modal.Title>
          <p className='tab mt-2'>{data.date}</p>
        </div>
      </div>
      {/*</Modal.Header>*/}
   
      <div className='line'></div>

      <div className="post-modal-body px-4 pt-4 pb-0">
        {/* 기관 정보 섹션 */}
        <div className="info-wrap mb-4">
          <div className="main-image-wrapper mb-3">
            <img src={data.image} alt="실종동물 이미지" className="img-fluid rounded" />
          </div>
          
          <div className="info-box">
            <div className="info-title">
              <h4>{data.name}</h4>
              <span className="recruit secondary-bg tab ms-2">발견</span>
            </div>
            <div className="info-item ">
              <h6>{data.info}</h6>
            </div>
            <div className="info-item mt-3 mb-2">품종<span className='info-item-color'> {data.breed}</span></div>
            <div className="info-item mb-2">분실 장소<span className='info-item-color'> {data.lostLocation}</span></div>
            <div className="info-item mb-2">분실 날짜<span className='info-item-color'> {data.lostPeriod}</span> </div>
            <div className="info-item mb-2">긴급 연락처<span className='info-item-color'> {data.facilityContact}</span> </div>
          </div>
        </div>

        {/* 봉사 내용 상세 설명 */}
        <div className='detail-wrap'>
          <div className='detail-btn'>특이사항</div>
            <div className="detail-content ">
              <p className="content-title ms-1">해당 동물에 대한 설명을 간략하게 작성합니다.</p>
              <p className="content-text ms-1" style={{ whiteSpace: 'pre-line' }}>{data.content}</p>
            </div>
        </div>
        <div className='finderFee-wrap mb-5'>
          <div className='finderFee '>사례금</div>
          <span className='ms-4 mt-1'>{data.finderFee}</span>
        </div>
        {/* 작성자 및 좋아요/댓글/공유 섹션 */}
        <div className="author-interaction-section d-flex justify-content-between align-items-center py-3">
          <div className="author-info d-flex align-items-center">
            <img src={sns} alt="프로필" className="profile-img rounded-circle me-2" />
            <span>{data.authorName}</span>
          </div>
          <div className="interaction-icons d-flex align-items-center">
            <div className="icon-group me-4">
              {/*<MdStarOutline size="20" className="me-1" />*/}
              <span>{data.likes}</span>
            </div>
            <div className="icon-group me-4">
              {/*<MdChatBubbleOutline size="20" className="me-1" />*/}
              <span>{data.comments}</span>
            </div>
            <div className="icon-group me-4">
              {/*<MdOutlineShare size="20" className="me-1" />*/}
              <span>{data.shares}</span>
            </div>
          </div>
        </div>
        
        {/* 댓글달기 */}
        <div className="commentsection-wrapper text-center mb-4">
          <Comment/>
        </div>

        {/*리뷰*/}
        <div className='review'>
          <img src={sns2} /> Julia
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, qui nisi sequi enim provident quis est ex cum obcaecati? Esse!</p>
        </div>
      </div>{/*search-body*/}

      <div className='line mt-4'></div>


      {/* 페이지네이션 푸터 */}
      {/*<Modal.Footer className="post-modal-footer d-flex justify-content-center align-items-center">
        <Button variant="link" className="pagination-arrow-btn me-2">
          <IoChevronBackOutline size="24" />
        </Button>
        <Button variant="link" className="pagination-arrow-btn ms-2">
          <IoChevronForwardOutline size="24" />
        </Button>
      </Modal.Footer>*/}
    
    </ModalLayout>
  );
};

export default Search;
