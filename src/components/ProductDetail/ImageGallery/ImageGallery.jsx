/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// TODO: implement the above accessibility features

import React, { useState } from 'react';
import {
  AiFillDownCircle,
  AiFillUpCircle,
  AiFillLeftCircle,
  AiFillRightCircle,
} from 'react-icons/ai';
import './ImageGallery.scss';
import { detailStore } from '../../../stores.js';

function ImageGallery() {
  const imgIdx = detailStore((state) => state.selectedImageIndex);
  const setImgIdx = detailStore((state) => state.setSelectedImageIndex);
  const selectedStyle = detailStore((state) => state.selectedStyle);
  const [startingThumbnailIndex, setStartingThumbnailIndex] = useState(0);
  const [imageZoom, setImageZoom] = useState(false);

  if (selectedStyle.photos === undefined) {
    return <h1>Loading images...</h1>;
  }

  const TEST_PHOTOS = selectedStyle.photos;
  // const TEST_PHOTOS = selectedStyle.photos.concat(selectedStyle.photos);
  // after testing, replace TEST_PHOTOS with selectedStyle.photos

  const shownThumbnails = [];
  for (let i = startingThumbnailIndex; i < 7 + startingThumbnailIndex; i += 1) {
    if (TEST_PHOTOS[i] === undefined) {
      break;
    }
    shownThumbnails.push(
      <img
        className={`image-thumbnail${imgIdx === i ? ' selected' : ''}`}
        src={TEST_PHOTOS[i].thumbnail_url}
        alt="selectedStyle.name"
        onClick={() => { setImgIdx(i); }}
      />,
    );
  }

  return (
    <div className={`image-gallery${imageZoom ? ' zoomed' : ''}`}>
      <img
        className={`image-main${imageZoom ? ' zoomed' : ''}`}
        src={TEST_PHOTOS[imgIdx].url}
        alt={selectedStyle.name}
        onClick={() => { setImageZoom(!imageZoom); }}
      />
      <div className="image-overlay-container">
        <div className="image-thumbnail-gallery-container">
          {startingThumbnailIndex > 0 ? (
            <AiFillUpCircle
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
          {startingThumbnailIndex < TEST_PHOTOS.length - 7 ? (
            <AiFillDownCircle
              className="image-tg-arrow"
              onClick={() => {
                setStartingThumbnailIndex(startingThumbnailIndex + 1);
              }}
            />
          )
            : <div className="ig-spacer" />}
        </div>
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
          {imgIdx < TEST_PHOTOS.length - 1
            ? (
              <AiFillRightCircle
                className="image-main-arrow-right"
                onClick={() => {
                  if (imgIdx < TEST_PHOTOS.length - 1) {
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
