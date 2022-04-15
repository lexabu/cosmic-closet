import React from 'react';
import { ArrowUpCircleFill, ArrowDownCircleFill } from 'react-bootstrap-icons';
import { detailStore } from '../../../stores.js';
import './ImageThumbnailGallery.scss';

function ImageThumbnailGallery({ shownThumbnails }) {
  const selectedStyle = detailStore((state) => state.selectedStyle);
  const startingThumbnailIndex = detailStore((state) => state.startingThumbnailIndex);
  const setStartingThumbnailIndex = detailStore((state) => state.setStartingThumbnailIndex);
  // const TEST_PHOTOS = selectedStyle.photos.concat(selectedStyle.photos);

  // console.log('startingThumbnailIndex', startingThumbnailIndex);

  return (
    <div className="image-thumbnail-gallery-container">
      {startingThumbnailIndex > 0 ? (
        <ArrowUpCircleFill
          className="image-tg-arrow"
          onClick={() => {
            setStartingThumbnailIndex(startingThumbnailIndex - 1);
          }}
        />
      )
        : <div className="ig-spacer" />}
      <div className="image-thumbnail-gallery">
        {shownThumbnails}
      </div>
      {startingThumbnailIndex < selectedStyle.photos.length - 7 ? (
        <ArrowDownCircleFill
          className="image-tg-arrow"
          onClick={() => {
            setStartingThumbnailIndex(startingThumbnailIndex + 1);
          }}
        />
      )
        : <div className="ig-spacer" />}
    </div>
  );
}

export default ImageThumbnailGallery;
