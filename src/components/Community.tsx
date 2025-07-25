import React, { useState } from 'react';
import CommunityModal from './CommunityModal';

const CommunityWrapper = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>모달 열기</button>
      <CommunityModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default CommunityWrapper;
