/* eslint-disable no-unused-expressions */
import React from 'react';
import { AiOutlineRight, AiFillCheckCircle } from 'react-icons/ai';
import { detailStore } from '../../../stores.js';
import './Styles.scss';

function Styles() {
  const styles = detailStore((state) => state.styles);
  const selectedStyle = detailStore((state) => state.selectedStyle);
  const setSelectedStyle = detailStore((state) => state.setSelectedStyle);
  const setSelectedSize = detailStore((state) => state.setSelectedSize);
  const setSelectedQuantity = detailStore((state) => state.setSelectedQuantity);

  const handleStyleChange = (style) => {
    setSelectedSize('');
    setSelectedQuantity('');
    setSelectedStyle(style);
  };

  const handleKeyPress = (e, style) => {
    // TODO: Allow this in eslint
    e.code === 'Enter' && handleStyleChange(style);
  };

  return (
    <>
      <div className="pd-selected-style">
        <span className="pd-selected-title">Selected Style</span>
        <AiOutlineRight />
        <span>{selectedStyle.name}</span>
      </div>
      <div className="pd-styles-container">
        {styles.map((style) => (
          <div
            key={style.style_id}
            role="button"
            tabIndex={0}
            style={{
              backgroundImage: `url(${style.photos[0].thumbnail_url})`,
              backgoundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              width: '80px',
              height: '80px',
            }}
            className={`pd-style-icon ${style.name === selectedStyle.name ? 'selected' : ''} ${style.photos[0].thumbnail_url == null ? 'empty' : ''}`}
            onKeyDown={(e) => { handleKeyPress(e, style); }}
            onClick={
              () => { handleStyleChange(style); }
            }
            aria-label={`Select style${style.style_id}`}
          >
            {style.photos[0].thumbnail_url == null && style.name}
            {style.name === selectedStyle.name && <AiFillCheckCircle className="pd-style-check" />}
          </div>
        ))}
      </div>
    </>
  );
}

export default Styles;
