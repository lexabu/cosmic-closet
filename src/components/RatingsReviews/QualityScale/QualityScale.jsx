import React from 'react';
import { reviewStore } from '../../../stores.js';
import './QualityScale.scss';

function QualityScale() {
  const metaRatings = reviewStore((state) => state.ratings);
  const { characteristics } = metaRatings;
  if (characteristics) {
    if (characteristics.Quality) {
      const { Quality } = characteristics;
      if (Quality.value) {
        return (
          <div className="rr-quality-scale">
            <div className="rr-qs-title">
              Quality
            </div>
            <progress className="rr-qs-progress" max={5} value={Quality.value} />
            <div className="rr-qs-labels">
              <span> Poor </span>
              <span> Perfect </span>
            </div>
          </div>
        );
      }
    }
  }
}

export default QualityScale;
