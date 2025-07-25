import React, { useState }from 'react';
import { Modal, Button } from 'react-bootstrap';
import AlertModal from './AlertModal';
import '../styles/_CommunityModal.scss';

interface CommunityModalProps {
  show: boolean;
  onClose: () => void;
}

const CommunityModal: React.FC<CommunityModalProps> = ({ show, onClose }) => {

    const [showAlert, setShowAlert] = useState(false);
    const detail = {
    title: '초코는 귀엽다',
    date: '2025-07-19',
    image: [
      '/img/dog1.jpg', 
      '/img/dog2.jpeg',
      '/img/dog3.jpg',
      '/img/dog4.jpg'
    ],
    content: `여기에 상세 내용이 들어갑니다.  
              여러 줄 텍스트도 이렇게 표시할 수 있습니다.`,
  };

  return (
    <>
    <Modal 
    show={show} 
    onHide={onClose} 
    centered 
    scrollable
    dialogClassName="modal-style"
    >
      <Modal.Header  >
        <div className='ms-4'>
          <Modal.Title >{detail.title}</Modal.Title>
          <p className='date'>{detail.date}</p>
        </div>
          <Button  
            variant='none'
            className='primary-btn btn-radius'
            onClick={()=> setShowAlert(true)}>
            <h6>수정</h6>
          </Button>
      </Modal.Header>
      <Modal.Body>
        <div className='tag ms-4'>
          <span className='secondary-btn tag-style tab'>#강아지</span>
          <span className='secondary-btn tag-style tab'>#자랑</span>
          <span className='secondary-btn tag-style tab'>#초코</span>
        </div>
        
        <div className='ms-4'>
          <span  style={{ whiteSpace: 'pre-line' }}>{detail.content}</span><br/>
        </div>
        
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
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          닫기
        </Button>
      </Modal.Footer>
    </Modal>

    <AlertModal show={showAlert} onClose={() => setShowAlert(false)}/>
    </>
  );
};

export default CommunityModal;
