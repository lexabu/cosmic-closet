import React from 'react';
import { reviewStore } from '../../../stores.js';
import './LengthScale.scss';

function LengthScale() {
  const metaRatings = reviewStore((state) => state.ratings);
  const { characteristics } = metaRatings;
  if (characteristics) {
    if (characteristics.Length) {
      const { Length } = characteristics;
      if (Length.value) {
        return (
          <div className="rr-length-scale">
            <div className="rr-ls-title">
              Length
            </div>
            <progress className="rr-ls-progress progress" max={5} value={Length.value} />
            <div className="rr-ls-labels">
              <span> Short </span>
              <span> Perfect </span>
              <span> Long </span>
            </div>
          </div>
        );
      }
    }
  }
}

export default LengthScale;
