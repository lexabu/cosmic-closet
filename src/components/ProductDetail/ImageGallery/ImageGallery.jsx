/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// TODO: implement the above accessibility features

import React from 'react';
// uuid lets us use very unique IDs for our React keys, without having to
// worry about their value
import uuid from 'react-uuid';
import { LoadingOverlay } from '@mantine/core';
import { showNotification, cleanNotifications } from '@mantine/notifications';
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

// const noImageUrl = 'https://warrensburg4rent.com/wp-content/themes/realestate-7/images/no-image.png';
const noImageUrl = '/assets/no-image.png';

function ImageGallery() {
  const imgIdx = detailStore((state) => state.selectedImageIndex);
  const setImgIdx = detailStore((state) => state.setSelectedImageIndex);
  const selectedStyle = detailStore((state) => state.selectedStyle);
  const imageZoomed = detailStore((state) => state.imageZoomed);
  const toggleImageZoomed = detailStore((state) => state.toggleImageZoomed);
  const startingThumbnailIndex = detailStore((state) => state.startingThumbnailIndex);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggleImageZoomed(false);
      cleanNotifications();
    }
  });

  if (selectedStyle.photos === undefined) {
    return <LoadingOverlay visible />;
  }

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
    showNotification({
      title: 'Press "Escape" to exit zoomed view',
      color: 'cyan',
      autoClose: false,
    });
  };

  return (
    <div className={`image-gallery${imageZoomed ? ' zoomed' : ''}`}>
      {imageZoomed
        ? (
          <InnerImageZoom
            className="image-main-zoomed"
            src={selectedStyle.photos[imgIdx].url || noImageUrl}
            zoomScale={2.5}
            hideHint
          />
        )
        : (
          <img
            className="image-main"
            src={selectedStyle.photos[imgIdx].url || noImageUrl}
            alt={selectedStyle.name}
            onClick={() => {
              toggleImageZoomed();
              afterZoomIn();
            }}
          />
        )}
      {imageZoomed && <ImageIconDots photos={selectedStyle.photos} />}
      <div className="image-overlay-container">
        {!imageZoomed
          && selectedStyle.photos[imgIdx].url !== null
          && <ImageThumbnailGallery shownThumbnails={shownThumbnails} />}
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
