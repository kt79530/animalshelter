import React, { useState }from 'react';

import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import AlertModal from '../utils/AlertModal';
import '../styles/_Community.scss';
//import {MdStarOutline} from 'react-icons/md';

//이미지 렌더링
import volunteer from '../assets/img/post/volunteer.jpg';
import sns from '../assets/img/community/sns-profile.png';



interface PostProps {
  show: boolean;
  onClose: () => void;
}

const Post: React.FC<PostProps> = ({ show, onClose }) => {

    const [showAlert, setShowAlert] = useState(false);
    const detail = {
    title: '봉사자분들 모십니다.',
    date: '2025-07-19',
    image: [volunteer],
    content: `안녕하세요! 저의 가장 소중한 가족이자, 매일매일 저에게 웃음을 선물해주는 사랑스러운 반려견 초코를 자랑하려고 해요. 
    이름처럼 달콤하고 사랑스러운 초코는 저희 집의 비타민 같은 존재랍니다.초코는 아주 활발하고 호기심이 넘쳐요. 
    아침에 눈을 뜨면 가장 먼저 제 침대로 달려와 꼬리를 흔들며 애교를 부려요. 그 모습만 봐도 하루의 피로가 싹 가시는 
    기분이죠. 산책을 나갈 때면 세상의 모든 냄새를 맡고 싶어 하고, 새로운 친구들을 만나면 누구보다 반갑게 킁킁거리며
    인사하는 사교성 만점이랍니다. 가끔은 너무 신나서 길가의 돌멩이와도 대화하는 것 같을 때가 있어요.`,
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
      <Modal.Header  >
        <div className='ms-4 mt-3'>
          <Modal.Title >{detail.title}</Modal.Title>
          <p className='date'>{detail.date}</p>
        </div>
      </Modal.Header>
      
      <div className='line'></div>
      
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
          </Col>
        </Row>
    </Container>
    </>
  );
};

export default Post;
