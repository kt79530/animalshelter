//동물을 찾습니다 > 실종 동물을 찾습니다page comp

import React, {useState,useMemo} from "react";
import { Col } from "react-bootstrap";

//공용 디자인 레이아웃
import GalleryLayout from "./GalleryLayout";
//공용 카드 레이아웃
import GalleryDetail from "../components/gallery/GalleryDetail";
//모달창 
import SearchModal from "../components/modal/SearchModal";
//페이지 상단 title 배경 이미지
import bgImg from '../assets/img/search/searchheadbg.png';
//데이터 로딩
import { searchList, SearchDataType } from '../data/searchData'; 
//페이지네이션 관련
import styles from '../components/postpetstory/PostPetStory.module.scss';
import {IoPawOutline} from 'react-icons/io5';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardDoubleArrowRight
} from 'react-icons/md';

const SearchPost: React.FC = () => {

//모달창 실행
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<SearchDataType | null>(null);

    const handleCardClick = (item: SearchDataType) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  //페이지네이션

    //한 페이지에 표시할 아이템 수
    const itemsPerPage = 8;
    //페이지네이션 상태
    const [currentPage, setCurrentPage] = useState(1);
    //현재 페이지에 따라 보여줄 데이터 계산
    const paginatedItems = useMemo(() => {
         const start = (currentPage - 1) * itemsPerPage;
            return searchList.slice(start, start + itemsPerPage);
            }, [currentPage]);

    // 전체 페이지 수
    const totalPages = Math.ceil(searchList.length / itemsPerPage);
    //타입 명시
    const ArrowLeft = MdOutlineKeyboardArrowLeft as React.FC<React.SVGProps<SVGSVGElement>>;
    const DoubleArrowLeft = MdOutlineKeyboardDoubleArrowLeft as React.FC<React.SVGProps<SVGSVGElement>>;
    const ArrowRight = MdOutlineKeyboardArrowRight as React.FC<React.SVGProps<SVGSVGElement>>;
    const DoubleArrowRight = MdOutlineKeyboardDoubleArrowRight as React.FC<React.SVGProps<SVGSVGElement>>;
    const PawIcon = IoPawOutline as React.FC<React.SVGProps<SVGSVGElement>>;
  

    return(
    <>
        <GalleryLayout
        pageTitle="실종동물을 찾습니다"
        pageSubText={`공고 등록 후 자동으로 반려동물 찾기 전단지가 생성되며,\n인쇄하여 사용하실 수 있습니다.`}
        pageBgImg={bgImg}
        >
            {paginatedItems.map(item => (
                <Col key={item.name} lg={3} md={4} sm={6} className="mb-4">
                    <div onClick={() => handleCardClick(item)} style={{ cursor: 'pointer' }}>
                        <GalleryDetail
                            image={item.image}
                            title={item.title}
                            location={item.location}
                            gender={item.gender}
                            age={item.age}
                            breed={item.breed}
                        />
                    </div>
                </Col>
            ))}
            {/* 모달 컴포넌트 렌더링 */}
                {isModalOpen && selectedItem && (
                    <SearchModal
                    show={isModalOpen}
                    onClose={handleCloseModal}
                    data={selectedItem}
                    />
                )}    
        </GalleryLayout>
    
      {/* 📌 페이지네이션 영역 */}
        <div className={styles.pagination}>
          {/* ⏮ 첫 페이지로 이동 */}
          <button
            className={styles.pageButton}
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
          >
            <DoubleArrowLeft className={styles.arrowIcon} />
          </button>

          {/* ◀ 이전 페이지 */}
          <button
            className={styles.pageButton}
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ArrowLeft className={styles.arrowIcon} />
          </button>

          {/* 🔢 페이지 번호 */}
          {Array.from({ length: totalPages }, (_, i) => {
            const page = i + 1;
            const isActive = page === currentPage;

            return (
              <button
                key={page}
                className={`${styles.pageButton} ${isActive ? styles.active : ''}`}
                onClick={() => setCurrentPage(page)}
              >
                <span className={styles.pageNumber}>{page}</span>
                {isActive && <PawIcon className={styles.pawIcon} />}
              </button>
            );
          })}

          {/* ▶ 다음 페이지 */}
          <button
            className={styles.pageButton}
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <ArrowRight className={styles.arrowIcon} />
          </button>

          {/* ⏭ 마지막 페이지로 이동 */}
          <button
            className={styles.pageButton}
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
          >
            <DoubleArrowRight className={styles.arrowIcon} />
          </button>
        </div>
</>
    );
};

export default SearchPost;