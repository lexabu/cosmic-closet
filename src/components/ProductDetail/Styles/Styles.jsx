import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { detailStore } from '../../../stores.js';
import './Styles.scss';

function Styles() {
  const styles = detailStore((state) => state.styles);
  const selectedStyle = detailStore((state) => state.selectedStyle);

  return (
    <>
      <div className="pd-selected-style">
        <span>Selected Style</span>
        <AiOutlineRight />
        <span>{selectedStyle}</span>
      </div>
      <div className="pd-styles-container">
        {styles.map((style) => (
          <div key={style.style_id}>
            {style.photos[0].thumbnail_url == null
              ? <div className="pd-style-icon-empty" src={style.photos[0].thumbnail_url} alt={`Style icon for ${style.name}`}>{style.name}</div>
              : <img className="pd-style-icon" src={style.photos[0].thumbnail_url} alt={`Style icon for ${style.name}`} />}
          </div>
        ))}
      </div>
    </>
  );
}

export default Styles;
