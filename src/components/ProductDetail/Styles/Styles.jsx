import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { detailStore } from '../../../stores.js';
import './Styles.scss';

function Styles() {
  const styles = detailStore((state) => state.styles);
  console.log(styles);

  return (
    <>
      <div className="pd-selected-style">
        <span>Selected Style</span>
        <AiOutlineRight />
        <span>asdf</span>
      </div>
      <div className="pd-styles-container">
        {styles.map((style) => (
          <div key={style.style_id}>
            {/* {style.name} */}
            <img className="pd-style-icon" src={style.photos[0].thumbnail_url} alt={`Style icon for ${style.name}`} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Styles;
