import React, { useState } from 'react';
import Community from './Community';
import Post from './Post';
import Search from './Search';

const ModalTestWrapper = () => {
  const [showCommunityModal, setShowCommunityModal] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowCommunityModal(true)}>모달 community 열기</button>
      <Community show={showCommunityModal} onClose={() => setShowCommunityModal(false)} />
      <button onClick={() => setShowPostModal(true)}>모달 Post 열기</button>
      <Post show={showPostModal} onClose={() => setShowPostModal(false)} />
      <button onClick={() => setShowSearchModal(true)}>모달 search 열기</button>
      <Search show={showSearchModal} onClose={() => setShowSearchModal(false)} />
    </>
  );
};

export default ModalTestWrapper;
