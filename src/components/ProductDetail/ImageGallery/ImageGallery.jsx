/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// TODO: implement the above accessibility features

import React, { useState } from 'react';
import uuid from 'react-uuid';
import { LoadingOverlay, Notification, Transition } from '@mantine/core';
import { ArrowLeftCircleFill, ArrowRightCircleFill } from 'react-bootstrap-icons';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import './ImageGallery.scss';
import { detailStore } from '../../../stores.js';
import ImageThumbnailGallery from '../ImageThumbnailGallery/ImageThumbnailGallery.jsx';
import ImageIconDots from '../ImageIconDots/ImageIconDots.jsx';

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
      setShowNotification(false);
      toggleImageZoomed(false);
    }
  });

  const shownThumbnails = [];
  for (let i = startingThumbnailIndex; i < 7 + startingThumbnailIndex; i += 1) {
    if (selectedStyle.photos?.[i] === undefined) {
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
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 7000);
  };

  const [showNotification, setShowNotification] = useState(false);

  // Optional chaining here is the simplest way
  if (selectedStyle?.photos?.[imgIdx] === undefined) {
    return <LoadingOverlay visible />;
  }

  return (
    <>
      <div className={`image-gallery${imageZoomed ? ' zoomed' : ''}`}>
        <Transition
          mounted={showNotification}
          transition="slide-down"
          duration={500}
        >
          {(styles) => (
            <Notification
              id='fullscreen-notification'
              title="Press Escape to exit zoomed view"
              style={styles}
              onClose={() => { setShowNotification(false) }}
            />
          )}

        </Transition>
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
                <ArrowLeftCircleFill
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
                <ArrowRightCircleFill
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
    </>
  );
}

export default ImageGallery;
