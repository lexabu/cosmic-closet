import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { detailStore } from '../../../stores.js';
import './ImageIconDots.scss';

function ImageIconDots({ photos }) {
  // const selectedStyle = detailStore((state) => state.selectedStyle);
  // const startingThumbnailIndex = detailStore((state) => state.startingThumbnailIndex);
  // const setStartingThumbnailIndex = detailStore((state) => state.setStartingThumbnailIndex);
  const imgIdx = detailStore((state) => state.selectedImageIndex);
  const setImgIdx = detailStore((state) => state.setSelectedImageIndex);

  return (
    <div className="image-icon-dots">
      {photos.map((pic, i) => (
        <GoPrimitiveDot
          className={`image-icon-dot${i === imgIdx ? ' selected' : ''}`}
          onClick={() => {
            setImgIdx(i);
          }}
        />
      ))}
    </div>
  );
}

export default ImageIconDots;
