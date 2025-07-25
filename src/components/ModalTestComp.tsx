import React, { useState } from 'react';
import Community from './Community';
import Post from './Post';

const ModalTestWrapper = () => {
  const [showCommunityModal, setShowCommunityModal] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowCommunityModal(true)}>모달 community 열기</button>
      <Community show={showCommunityModal} onClose={() => setShowCommunityModal(false)} />
      <button onClick={() => setShowPostModal(true)}>모달 Post 열기</button>
      <Post show={showPostModal} onClose={() => setShowPostModal(false)} />
    </>
  );
};

export default ModalTestWrapper;
