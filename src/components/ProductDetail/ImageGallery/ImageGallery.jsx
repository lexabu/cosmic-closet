/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// TODO: implement the above accessibility features

import React from 'react';
// uuid lets us use very unique IDs for our React keys, without having to
// worry about their value
import uuid from 'react-uuid';
import { toast } from 'react-toastify';
import InnerImageZoom from 'react-inner-image-zoom';
import {
  AiFillLeftCircle,
  AiFillRightCircle,
} from 'react-icons/ai';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import './ImageGallery.scss';
import { detailStore } from '../../../stores.js';
import ImageThumbnailGallery from '../ImageThumbnailGallery/ImageThumbnailGallery.jsx';
import ImageIconDots from '../ImageIconDots/ImageIconDots.jsx';

function ImageGallery() {
  const imgIdx = detailStore((state) => state.selectedImageIndex);
  const setImgIdx = detailStore((state) => state.setSelectedImageIndex);
  const selectedStyle = detailStore((state) => state.selectedStyle);
  const imageZoomed = detailStore((state) => state.imageZoomed);
  const toggleImageZoomed = detailStore((state) => state.toggleImageZoomed);
  const startingThumbnailIndex = detailStore((state) => state.startingThumbnailIndex);
  // const setStartingThumbnailIndex = detailStore((state) => state.setStartingThumbnailIndex);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggleImageZoomed(false);
    }
  });

  if (selectedStyle.photos === undefined) {
    return <h1>Loading images...</h1>;
  }

  // console.log('selectedStyle', selectedStyle);
  // console.log('imgIdx', imgIdx);

  // NOTE: After testing, replace TEST_PHOTOS with selectedStyle.photos
  // *** MAKE SURE TO CHANGE IN ImageThumbnailGallery ***
  // const TEST_PHOTOS = selectedStyle.photos;
  // const TEST_PHOTOS = selectedStyle.photos.concat(selectedStyle.photos);

  const shownThumbnails = [];
  for (let i = startingThumbnailIndex; i < 7 + startingThumbnailIndex; i += 1) {
    if (selectedStyle.photos[i] === undefined) {
      break;
    }
    shownThumbnails.push(
      <img
        className={`image-thumbnail${imgIdx === i ? ' selected' : ''}`}
        src={selectedStyle.photos[i].thumbnail_url}
        alt="selectedStyle.name"
        onClick={() => { setImgIdx(i); }}
        key={uuid()}
      />,
    );
  }

  const afterZoomIn = () => {
    toast.info('Press "Escape" to exit zoomed view!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className={`image-gallery${imageZoomed ? ' zoomed' : ''}`}>
      {imageZoomed
        ? (
          <InnerImageZoom
            className="image-main-zoomed"
            src={selectedStyle.photos[imgIdx].url}
            zoomScale="2.5"
            hideHint="true"
          />
        )
        : (
          <img
            className="image-main"
            src={selectedStyle.photos[imgIdx].url}
            alt={selectedStyle.name}
            onClick={() => { toggleImageZoomed(); afterZoomIn(); }}
          />
        )}
      {imageZoomed && <ImageIconDots photos={selectedStyle.photos} />}
      <div className="image-overlay-container">
        {!imageZoomed && <ImageThumbnailGallery shownThumbnails={shownThumbnails} />}
        <div className="image-arrow-container">
          {imgIdx > 0
            ? (
              <AiFillLeftCircle
                className="image-main-arrow-left"
                onClick={() => {
                  if (imgIdx > 0) {
                    setImgIdx(imgIdx - 1);
                  }
                }}
              />
            )
            : <div className="img-arrow-divider" />}
          {imgIdx < selectedStyle.photos.length - 1
            ? (
              <AiFillRightCircle
                className="image-main-arrow-right"
                onClick={() => {
                  if (imgIdx < selectedStyle.photos.length - 1) {
                    setImgIdx(imgIdx + 1);
                  }
                }}
              />
            )
            : <div className="img-arrow-divider" />}
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
