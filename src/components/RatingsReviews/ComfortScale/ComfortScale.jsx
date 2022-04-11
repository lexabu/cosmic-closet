import React from 'react';
import { reviewStore } from '../../../stores.js';
import './ComfortScale.scss';

function ComfortScale() {
  const metaRatings = reviewStore((state) => state.ratings);
  const { characteristics } = metaRatings;
  if (characteristics) {
    if (characteristics.Comfort) {
      const { Comfort } = characteristics;
      if (Comfort.value) {
        return (
          <div className="rr-comfort-scale">
            <div className="rr-cs-title">
              Comfort
            </div>
            <progress className="rr-cs-progress" max={5} value={Comfort.value} />
            <div className="rr-cs-labels">
              <span> Poor </span>
              <span> Ok </span>
              <span> Perfect </span>
            </div>
          </div>
        );
      }
    }
  }
}

export default ComfortScale;
