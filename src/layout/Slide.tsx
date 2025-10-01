/*===== main page slide layout ====*/

import React from 'react';
import '../styles/_slide.scss';


interface SlideProps {
  title: string;
  animalImages: string[];
  onRegisterClick?: () => void;
  onMoreClick?: () => void;
  onImageClick?: (index: number) => void;
}

const Slide: React.FC<SlideProps> = ({
  title,
  animalImages,
  onRegisterClick,
  onMoreClick,
  onImageClick,
}) => {
  
  return (
    <section className="animal-gallery">
      <div className="search-text-box mb-5">
        <h1>
          {title} <img src={` ${process.env.PUBLIC_URL}/img/main/paw.png`} className="ps-3 paw-img" alt="paw" />
        </h1>
        <div>
          <button className="btn-custom primary btn-size" onClick={onRegisterClick}>
            공고 등록하기 
          </button>
          <button className="btn-custom primary ms-3 btn-size" onClick={onMoreClick}>
            더보기 &gt;
          </button>
        </div>
      </div>

      <div className="gallery-row gallery-row--1">
          {animalImages.slice(2, 6).map((img, index) => (
              <img
                key={index +2}
                src={img}
                alt={`animal-${index +2}`}
                className="img-style"
                onClick={() => onImageClick?.(index +2)}
                style={{ cursor: 'pointer' }}
              />
            ))}
      </div>

      <div className="gallery-row gallery-row--2">
        {animalImages.slice(2, 6).map((img, index) => (
          <img
            key={index + 2}
            src={img}
            alt={`animal-${index + 2}`}
            className="img-style"
            onClick={() => onImageClick?.(index + 2)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
    </section>
  );
};

export default Slide;