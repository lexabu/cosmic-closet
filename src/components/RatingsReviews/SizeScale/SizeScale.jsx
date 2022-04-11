import React from 'react';
import { reviewStore } from '../../../stores.js';
import './SizeScale.scss';

function SizeScale() {
  const metaRatings = reviewStore((state) => state.ratings);
  const { characteristics } = metaRatings;
  if (characteristics) {
    if (characteristics.Size) {
      const { Size } = characteristics;
      if (Size.value) {
        return (
          <div className="rr-size-scale">
            <div className="rr-ss-title">
              Size
            </div>
            <progress className="rr-ss-progress" max={5} value={Size.value} />
            <div className="rr-ss-labels">
              <span> Too small </span>
              <span> Perfect </span>
              <span> Too Large </span>
            </div>
          </div>
        );
      }
    }
  }
}

export default SizeScale;
